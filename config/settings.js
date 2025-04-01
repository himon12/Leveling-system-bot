export default {
  // Set these via environment variables
  TOKEN: process.env.DISCORD_TOKEN,
  MONGO_URI: process.env.MONGODB_URI,
  OWNER_ID: process.env.OWNER_ID,
  
  // Default settings (change via commands)
  DEFAULT_XP_RATE: 15,
  MAX_BOOST: 10,
  ANNOUNCE_CHANNEL_ID: null // Set via /setchannel
};