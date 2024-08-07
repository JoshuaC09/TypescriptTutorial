"use strict";
const authorOne = { name: "Maria", avatar: "/img/mario.png" };
const newPost = {
    title: "Hello World",
    body: "Body Bag",
    tags: ["Tag1", "Tag2"],
    created_at: new Date(),
    author: authorOne,
};
function createPost(post) {
    console.log(`Created post ${post.title} by ${post.author.name}`);
}
createPost(newPost);
let posts = [];
posts.push(newPost);
