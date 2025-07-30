import mongoose, { Schema } from "mongoose";

const topicSchema = new Schema(
  {
    title: String,
    completed: Boolean,
  },
  {
    timestamps: true,
  }
);

const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema);

export default Topic;