import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Services from "../appwrite/config";
import Container from "../Layout/Container";
import Button from "../components/Button";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

function Post() {
  const [post, SetPost] = useState(null);
  const slug = useParams();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);
  const isAuthour = post && userData ? post.$id === userData.$id : false;

  useEffect(() => {
    async function fetchPost() {
      await Services.getPost(slug).then((result) => {
        if (result) {
          SetPost(result);
        } else {
          navigate("/");
        }
      });
    }
    fetchPost();
  }, [slug, navigate]);

  async function deletePost() {
    await Services.deleteFile(post.featuredImage).then(async (status) => {
      if (status) {
        await Services.deletePost(post.$id);
        navigate("/");
      }
    });
  }

  return (
    <Container>
      <div className="w-full h-auto px-4 my-4 sm:my-8 max-w-lg lg:max-w-full mx-auto lg:px-6">
        <div className="mx-auto w-full">
          <img
            className="h-96 lg:h-125 object-center object-cover w-full"
            src={Services.getFile(post.featuredImage)}
            alt={post.title}
          />
        </div>
        <div className="my-6">
          <h1 className="font-headings font-bold leading-relaxed text-pretty md:text-balance pb-4 text-xl lg:text-2xl xl:text-3xl uppercase px-2.5">
            {post.title}
          </h1>
          <p className="font-subparagraph leading-1 text-left px-2.5 font-medium text-sm text-slate-500">
            Written by<span className="lowercase "> {post.author}</span>
          </p>
          <div className="px-2.5 mt-8 text-justify font-paragraph leading-relaxed lg:text-base">
            <p>{post.content ? parse(post.content) : ""}</p>
          </div>
          {isAuthour && (
            <div className="flex items-center my-6 gap-x-2.5">
              <Button
                onClick={() => navigate(`/edit-post/${post.$id}`)}
                label={"Edit Post"}
                bgColor="bg-amber-400"
                className={"font-semibold"}
              />
              <Button
                onClick={deletePost}
                label={"Delete Post"}
                bgColor="bg-red-600"
                className={"font-semibold"}
              />
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}

export default Post;
