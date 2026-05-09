import { useEffect, useState } from "react";
import Container from "../Layout/Container";
import Services from "../appwrite/config";
import PostCard from "../components/PostCard";

function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getAllPosts() {
      await Services.getAllPosts([]).then((posts) => {
        if (posts) {
          setPosts(posts.documents);
        }
      });
    }
    getAllPosts();
  }, []);

  if (posts.length === 0) {
    return (
      <Container>
        <div className="w-full min-h-screen">
          <h1 className="p-8 font-paragraph bg-slate-900 text-white mx-8 mt-8 rounded-md">Login to read posts</h1>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div className="px-4 my-20 sm:my-8 max-w-lg lg:max-w-full mx-auto lg:px-6">
        {posts.map((post) => (
          <PostCard {...post} />
        ))}
      </div>
    </Container>
  );
}

export default AllPosts;
