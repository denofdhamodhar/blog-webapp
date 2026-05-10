import { useEffect, useState } from "react";
import Container from "../Layout/Container";
import Services from "../appwrite/config";
import PostCard from "../components/PostCard";

function Home() {
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
          <h1 className="p-8 font-paragraph  bg-slate-900 text-white mx-8 mt-8 rounded-md font-medium">No Posts</h1>
        </div>
      </Container>
    );
  }

  return (
    <Container >
      <div className="px-4 sm:my-20 my-10 max-w-lg lg:max-w-full mx-auto lg:px-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-y-10">
        {posts.map((post) => (
          <PostCard key={post.$id} {...post} />
        ))}
      </div>
    </Container>
  );
}

export default Home;
