import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  userId: String,
  guildId: String,
  xp: { type: Number, default: 0 },
  level: { type: Number, default: 1 },
  boosters: [{
    name: String,
    multiplier: Number,
    expiresAt: Date,
    stackId: String
  }],
  lastBoost: Date
});

// Optimized queries
UserSchema.index({ userId: 1, guildId: 1 }, { unique: true });

export default mongoose.model('User', UserSchema);
