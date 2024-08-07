interface Author {
  name: string;
  avatar: string;
}

const authorOne: Author = { name: "Maria", avatar: "/img/mario.png" };

interface Post {
  title: string;
  body: string;
  tags: string[];
  created_at: Date;
  author: Author;
}

const newPost: Post = {
  title: "Hello World",
  body: "Body Bag",
  tags: ["Tag1", "Tag2"],
  created_at: new Date(),
  author: authorOne,
};

function createPost(post: Post): void {
  console.log(`Created post ${post.title} by ${post.author.name}`);
}
createPost(newPost);

let posts: Post[] = [];

posts.push(newPost);
