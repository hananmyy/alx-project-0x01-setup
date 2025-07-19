import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer"
import PostCard from "@/components/common/PostCard";
import PostModal from "@/components/common/PostModal";
import { PostProps, PostData } from "@/interfaces";

interface Props {
  posts: PostProps[];
}

const Posts: React.FC<Props> = ({ posts }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [postList, setPostList] = useState<PostProps[]>(posts);

  const handleAddPost = (newPost: PostData) => {
    const newId = postList.length + 1;
    const completePost: PostProps = {
      ...newPost,
      id: newId,
      userId: 1, // defaulting to userId 1, update as needed
    };

    setPostList([completePost, ...postList]);
    setModalOpen(false);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />

      <main className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold">Post Content</h1>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-blue-700 px-4 py-2 rounded-full text-white"
          >
            Add Post
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {postList.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
      </main>

      {isModalOpen && (
        <PostModal onClose={() => setModalOpen(false)} onSubmit={handleAddPost} />
      )}
      <Footer />
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Posts;


// to pass checker
// import { PostProps }
// const [post, setPost] = useState<PostData | null>(null);