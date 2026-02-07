# Chat Feature Documentation

## Overview
The PeeRly marketplace now includes a fully functional real-time chat system that enables buyers and sellers to communicate directly about listings.

## Features Implemented

### 1. Real-Time Messaging
- Instant message delivery using Supabase Realtime subscriptions
- Messages appear immediately for both parties
- Auto-scrolling to latest message
- Message timestamps

### 2. Unread Message Indicators
- **Header Badge**: Shows total unread message count (capped at 9+)
- **Conversation Badges**: Shows unread count per conversation in sidebar
- **Visual Highlights**: Conversations with unread messages have subtle background highlight
- **Auto Mark as Read**: Messages automatically marked as read when conversation is opened

### 3. Safety Features
- Safety tips displayed in chat window
- Warning about not sharing OTPs or financial details
- Reminder to meet in public campus areas

### 4. Mobile Responsive
- Full mobile support with responsive layout
- Back button to return to conversation list
- Touch-friendly interface

## User Flow

### Starting a Chat (Buyer)
1. Browse listings at `/browse`
2. Click on a listing to view details at `/listing/[id]`
3. Click **"Chat with Seller"** button
4. Automatically creates or finds existing conversation
5. Redirected to `/messages?conv=[conversation_id]`

### Receiving Messages (Seller)
1. Pink badge appears on Messages icon in header when new message arrives
2. Badge shows unread count (e.g., "3" or "9+")
3. Click Messages icon to view all conversations
4. Conversations with unread messages show badge
5. Click conversation to view and reply

### Sending Messages
1. Type message in input field at bottom of chat
2. Press Enter or click Send button
3. Message appears immediately in chat
4. Conversation timestamp updates
5. Other party receives message in real-time

## Technical Implementation

### Database Tables
```sql
-- Conversations table
conversations (
  id: UUID,
  listing_id: UUID (FK to listings),
  buyer_id: UUID (FK to profiles),
  seller_id: UUID (FK to profiles),
  created_at: TIMESTAMPTZ,
  updated_at: TIMESTAMPTZ
)

-- Messages table
messages (
  id: UUID,
  conversation_id: UUID (FK to conversations),
  sender_id: UUID (FK to profiles),
  content: TEXT,
  is_read: BOOLEAN,
  created_at: TIMESTAMPTZ
)
```

### Row Level Security (RLS)
- Users can only view conversations they're part of
- Users can only view messages in their conversations
- Messages can only be sent by authenticated users
- Automatic ownership validation

### Real-time Subscriptions
- Header subscribes to all messages for unread count
- Messages page subscribes to specific conversation
- Auto-cleanup on component unmount
- Error handling for AbortError during HMR

## Files Modified

### 1. `src/components/layout/Header.tsx`
**Changes:**
- Added `unreadCount` state
- Added `useEffect` to fetch and subscribe to unread messages
- Added pink animated badge to Messages icon
- Added Messages button to mobile menu
- Implemented proper cleanup to prevent memory leaks

**Key Functions:**
```typescript
fetchUnreadCount() // Counts unread messages across all conversations
```

### 2. `src/app/messages/page.tsx`
**Changes:**
- Added `unread_count` to Conversation interface
- Enhanced `fetchConversations()` to include unread counts
- Enhanced `fetchMessages()` to mark messages as read
- Added visual indicators for unread conversations
- Improved error handling and cleanup

**Key Functions:**
```typescript
fetchConversations() // Gets all user's conversations with unread counts
fetchMessages(convId) // Gets messages and marks them as read
handleSendMessage() // Sends new message and updates conversation timestamp
```

### 3. `src/app/listing/[id]/page.tsx` (Already Existed)
**Existing Function:**
```typescript
handleChat() // Creates/finds conversation and redirects to messages
```

## Error Handling

### AbortError Fix
The implementation includes comprehensive handling for the Supabase `AbortError` that occurs during Hot Module Reloading:

1. **isMounted Flag**: Prevents state updates on unmounted components
2. **Delayed Initialization**: 500ms delay prevents race conditions
3. **Error Filtering**: Ignores AbortError in catch blocks
4. **Proper Cleanup**: Unsubscribes from channels on unmount

### Example:
```typescript
useEffect(() => {
  let isMounted = true
  
  const fetchData = async () => {
    try {
      const { data, error } = await supabase.from('table').select()
      if (error || !isMounted) return
      // Update state only if still mounted
    } catch (err: any) {
      if (err?.name === 'AbortError') return // Ignore
      console.error(err)
    }
  }
  
  return () => { isMounted = false } // Cleanup
}, [dependency])
```

## Testing the Chat Feature

### Prerequisites
1. Supabase project configured
2. Database schema created (run `supabase/schema.sql`)
3. At least two user accounts (buyer and seller)
4. At least one listing created

### Test Steps

#### Test 1: Create Conversation
1. Login as User A (buyer)
2. Navigate to a listing created by User B (seller)
3. Click "Chat with Seller"
4. ✅ Should redirect to `/messages` with conversation open
5. ✅ Should show seller's name in chat header

#### Test 2: Send Message
1. As User A, type a message
2. Click Send or press Enter
3. ✅ Message should appear immediately
4. ✅ Message should show on right side (sender)
5. ✅ Timestamp should display

#### Test 3: Receive Message
1. Open browser in incognito/private mode
2. Login as User B (seller)
3. ✅ Should see pink badge on Messages icon
4. ✅ Badge should show "1"
5. Click Messages icon
6. ✅ Conversation should show unread badge
7. Click conversation
8. ✅ Message from User A should appear on left side
9. ✅ Badge should disappear after opening

#### Test 4: Real-time Updates
1. Keep both browsers open (User A and User B)
2. As User A, send a message
3. ✅ User B should see message appear immediately (no refresh needed)
4. ✅ User B's unread badge should update in real-time

#### Test 5: Mobile Responsiveness
1. Resize browser to mobile width (< 768px)
2. ✅ Should show conversation list
3. ✅ Click conversation to view chat
4. ✅ Back arrow should return to list
5. ✅ Messages link should appear in mobile menu

## Troubleshooting

### Messages Not Appearing
- Check browser console for errors
- Verify Supabase Realtime is enabled in project settings
- Check RLS policies allow reading messages
- Verify `conversation_id` is correct

### Unread Badge Not Updating
- Check Supabase Realtime subscription status
- Verify `is_read` column updates correctly
- Check browser console for subscription errors
- Refresh page to reset subscriptions

### AbortError Still Appearing
- This is normal during development (HMR)
- Does not affect functionality
- Will not appear in production build
- Clear browser cache if persistent

### Conversation Not Created
- Verify both buyer and seller profiles exist
- Check listing_id is valid
- Review conversations table RLS policies
- Check browser console for error details

## Performance Considerations

### Optimizations Implemented
1. **Selective Queries**: Only fetch necessary data
2. **Count Queries**: Use `count: 'exact', head: true` for counts
3. **Indexed Queries**: Database indexes on conversation_id, sender_id
4. **Debounced Updates**: Small delays prevent race conditions
5. **Cleanup**: Proper unsubscribe prevents memory leaks

### Scalability
- Handles multiple concurrent conversations
- Efficient unread count calculation
- Real-time updates scale with Supabase infrastructure
- RLS policies ensure data isolation

## Future Enhancements (Optional)

### Potential Features
- [ ] Typing indicators ("User is typing...")
- [ ] Online/offline status
- [ ] Image sharing in messages
- [ ] Message reactions/emojis
- [ ] Block/report user functionality
- [ ] Delete message functionality
- [ ] Search conversations
- [ ] Push notifications
- [ ] Message read receipts (double check marks)
- [ ] Group chats for multiple buyers

### Implementation Guide for Typing Indicators
```typescript
// In messages page
const [isTyping, setIsTyping] = useState(false)

// On input change
const handleTypingStatus = () => {
  // Broadcast typing status via Supabase channel
  channel.send({
    type: 'broadcast',
    event: 'typing',
    payload: { userId: user.id, isTyping: true }
  })
}

// Listen for typing events
channel.on('broadcast', { event: 'typing' }, (payload) => {
  if (payload.userId !== user.id) {
    setIsTyping(payload.isTyping)
  }
})
```

## Support

### Common Questions

**Q: Can I customize the chat UI colors?**
A: Yes, modify the Tailwind classes in `messages/page.tsx`

**Q: How do I add emoji support?**
A: Install an emoji picker library like `emoji-picker-react`

**Q: Can I export message history?**
A: Yes, query the messages table and format as needed

**Q: Is the chat encrypted?**
A: Messages are encrypted in transit (HTTPS), at-rest encryption depends on Supabase configuration

## Conclusion

The chat feature is now fully functional and ready for production use. Users can communicate seamlessly, receive real-time notifications, and track unread messages across the platform.

For issues or questions, refer to the troubleshooting section or check the Supabase documentation at: https://supabase.com/docs
