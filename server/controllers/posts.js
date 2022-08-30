import PostMessage from "../models/postMessage.js";
import { mongoose } from 'mongoose';

export const getPosts = async (req, res) => {
  try {

    const postMessages = await PostMessage.find();
    return res.status(200).json(postMessages);
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
  res.send('this working');
};

export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = PostMessage(post);

  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No Post with that ID');

  const updatedPost = await PostMessage.findByIdAndUpdate(_id, { ...post, _id }, { new: true });
  res.json(updatedPost);
};