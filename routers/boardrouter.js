const { groupCollapsed } = require('console');
const e = require('express');
const express = require('express');
const Posts = require('../schemas/posts');
const boardRouter = express.Router();

boardRouter.get('/posts', async (req, res) => {
  const posts = await Posts.find();
  res.json({
    posts
  });
});

boardRouter.get('/posts/:postId', async (req, res) => {
  const postId = req.params.postId;
  const posts = await Posts.find({ postId: Number(postId)});
  const filteredposts = posts.filter((inpost) => inpost.postId === Number(postId))
  res.json({
    detail: filteredposts,
  });
});

boardRouter.post('/posts', async function (req, res) {
  const { postbody, posttitle, postpassword, postwriter, postId } = req.body;

  await Posts.create({ postbody, posttitle, postpassword, postwriter, postId })

  res.json({'msg': '등록 완료'})
})

boardRouter.delete('/posts/:postId', async function (req, res) {

  const { postId } = req.params;
  const { pw } = req.body;
  const existPosts = await Posts.find({ postId: Number(postId)});;
 
  if (existPosts.length && (String(existPosts[0].postpassword) === String(pw))) {
     await Posts.deleteOne({ postId: Number(postId)});
     res.json({'msg': '삭제 완료'})
  } else {
  res.json({'msg': '비밀번호가 틀렸습니다'})}
})

boardRouter.put('/posts/:postId', async function (req, res) {

  const { postId } = req.params;
  const { pw, changeval } = req.body;
  
  const existPosts = await Posts.find({ postId: Number(postId)});
 
  if (existPosts.length && (String(existPosts[0].postpassword) === String(pw))) {
     await Posts.updateOne({ postId: Number(postId) }, { $set: { postbody : changeval } });
     res.json({'msg': '수정 완료'})
  } else {
  res.json({'msg': '비밀번호가 틀렸습니다'})}
})

module.exports = boardRouter;