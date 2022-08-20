import PostMessage from "../models/postMessage.js";

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