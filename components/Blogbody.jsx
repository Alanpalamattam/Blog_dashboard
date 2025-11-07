import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Blogbody = () => {
  const [blog, setBlog] = useState([]);
  const [popup, setPopup] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setBlog(res.data);
    };
    fetchData();
  }, []);

  const toggle = () => setPopup((prev) => !prev);

  const handleSubmit = async (e) => {
  e.preventDefault();

  const newPost = {
    title,
    body:description,
   };

  try {
     const res = await axios.post('https://jsonplaceholder.typicode.com/posts',newPost);
     setBlog((prev) => [res.data, ...prev]);
    setTitle('');
    setDescription('');
    setPopup(false);

    console.log("Post added successfully:", res.data);
  } catch (error) {
    console.error("Error adding post:", error);
  }
};
  
  return (
    <div className="px-7 relative">
      {popup && (
         <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/50 p-4">
           <form
            onSubmit={handleSubmit}
            className="w-full max-w-lg rounded-lg z-42 bg-white p-6 shadow-lg"
          > 
            <div className="flex items-start justify-between mb-4">
              <h2 className="text-lg font-semibold">Create New Post</h2>
              <Button
                  onClick={() => setPopup(false)}
                className="text-gray-600 "
              >
                X
              </Button>
            </div>
             <div className="flex flex-col gap-2 mb-3">
              <Label>Title</Label>
              <Input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Post title"
                className="w-full"
              />
            </div>
             <div className="flex flex-col gap-2 mb-3">
              <Label>Description</Label>
               <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Write your post here"
                className="min-h-24 max-h-[60vh] w-full resize-none rounded-md border px-3 py-2 text-sm leading-6 outline-none  "
                style={{ overflow: "hidden" }} 
              />
              
            </div>
            <div className="flex items-center gap-3 justify-end">
              <Button
                 onClick={() => {
                  setTitle("");
                  setDescription("");
                }}
              >
                Reset
              </Button>
              <Button  className="bg-blue-600 text-white">
                Add Post
              </Button>
            </div>
          </form>
        </div>
      )}

      <Button
        className="bg-green-400 fixed mt-2 right-10"
        onClick={toggle}
      >
        Add Blog
      </Button>

      {blog.slice(0,10).map((x, index) => (
        <Card
          className="w-full max-w-[90%] mt-4 border-blue-500 border-4 text-gray-600 hover:bg-green-400 hover:text-white"
          key={index}
        >
          <CardHeader>
            <CardTitle>{x.title}</CardTitle>
            <CardDescription>{x.body}</CardDescription>
          </CardHeader>
          <CardContent />
        </Card>
      ))}
    </div>
  );
};

export default Blogbody;
