-- Add indexes to improve query performance for listings and messages

-- Listings table indexes for faster filtering and sorting
CREATE INDEX IF NOT EXISTS idx_listings_active_sold ON listings(is_active, is_sold);
CREATE INDEX IF NOT EXISTS idx_listings_category ON listings(category_id) WHERE is_active = true AND is_sold = false;
CREATE INDEX IF NOT EXISTS idx_listings_college ON listings(college_id) WHERE is_active = true AND is_sold = false;
CREATE INDEX IF NOT EXISTS idx_listings_price ON listings(price) WHERE is_active = true AND is_sold = false;
CREATE INDEX IF NOT EXISTS idx_listings_created_at ON listings(created_at DESC) WHERE is_active = true AND is_sold = false;
CREATE INDEX IF NOT EXISTS idx_listings_views ON listings(views_count DESC) WHERE is_active = true AND is_sold = false;
CREATE INDEX IF NOT EXISTS idx_listings_seller ON listings(seller_id);

-- Messages table indexes for faster unread count queries
CREATE INDEX IF NOT EXISTS idx_messages_conversation_sender ON messages(conversation_id, sender_id);
CREATE INDEX IF NOT EXISTS idx_messages_conversation_read ON messages(conversation_id, is_read, sender_id);
CREATE INDEX IF NOT EXISTS idx_messages_created_at ON messages(conversation_id, created_at);

-- Conversations table indexes
CREATE INDEX IF NOT EXISTS idx_conversations_buyer ON conversations(buyer_id, updated_at DESC);
CREATE INDEX IF NOT EXISTS idx_conversations_seller ON conversations(seller_id, updated_at DESC);
CREATE INDEX IF NOT EXISTS idx_conversations_updated ON conversations(updated_at DESC);

-- Add text search index for listings title (for faster search)
CREATE INDEX IF NOT EXISTS idx_listings_title_search ON listings USING gin(to_tsvector('english', title));

-- Comments about the indexes:
-- 1. Composite indexes are ordered to match the most common query patterns
-- 2. Partial indexes (with WHERE clauses) are smaller and faster for filtered queries
-- 3. DESC indexes help when ordering by those columns descending
-- 4. GIN index on title enables fast full-text search
