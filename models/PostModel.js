import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  title: String,
  body: String,
  author: String,
  image: String,
  tags: [String],
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

export default mongoose.model('Posts', postSchema);
