import Post from "../Post";
import {useEffect, useState} from "react";

export default function IndexPage() {
  const [posts,setPosts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:4000/post').then(response => {
      response.json().then(posts => {
        setPosts(posts);
      });
    });
  }, []);
  return (
    <>
      {posts.length > 0 && posts.map((post,i) => {
        let authorname=""
        if(post.author!==undefined){
           authorname= post.author.username
        }else {
           authorname = "Anonymous"
        }
        return <Post key={i} id={post._id} title = {post.title} summary={post.summary} createdAt={post.createdAt} cover={post.cover} authorname = {authorname}  />
      })}
    </>
  );
}