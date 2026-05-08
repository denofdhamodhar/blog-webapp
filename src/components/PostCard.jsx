import Services from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  /* Note: $id: when user clicked goto post through id
  featuredImage : to display cover image
  title : display below image */
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full max-w-75 shadow-lg backdrop-blur-2xl shadow-slate-400/20 h-68 overflow-hidden">
        <img src={Services.getFile(featuredImage)} alt={title} />
        {/* Note: useful tip if title present do otherwise keep this */}
        <h1
          className="font-semibold px-2 h-14 flex justify-center items-center leading-5 text-center text-wrap font-subheadings"
        >
          {title ? title.slice(0, 40) + "..." : "Untitled Post"}
        </h1>
      </div>
    </Link>
  );
}

export default PostCard;
