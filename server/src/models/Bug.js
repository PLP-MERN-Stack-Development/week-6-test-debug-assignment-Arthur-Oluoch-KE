import mongoose from 'mongoose';

const bugSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: { type: String, default: 'open' }
});

export default mongoose.model('Bug', bugSchema);
