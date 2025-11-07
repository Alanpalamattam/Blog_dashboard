import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react";
import { Badge } from "@/components/ui/badge";
import axios from "axios";
import {
  Card,
  CardFooter,
  CardAction,
  CardContent,
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
      body: description,
    };

    try {
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        newPost
      );
      setBlog((prev) => [res.data, ...prev]);
      setTitle("");
      setDescription("");
      setPopup(false);

      console.log("Post added successfully:", res.data);
    } catch (error) {
      console.error("Error adding post:", error);
    }
  };

  return (
    <div className="px-7 relative bg-black text-white">
      {popup && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-white/10 p-4">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-lg rounded-lg z-42 bg-white text-black p-6 shadow-lg"
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
              <Button className="bg-blue-600 text-white">Add Post</Button>
            </div>
          </form>
        </div>
      )}

      <Button className="bg-white  text-black mt-2 right-10" onClick={toggle}>
        Add Blog +
      </Button>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] mt-3 gap-6">
        {blog.slice(0, 10).map((x, index) => (
          <div key={index} className="bg-neutral-900 h-[350px]">
            <Card className="@container/card justify-between gap-2 h-full border-neutral-700">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                  {x.title}
                </CardTitle>
                <CardAction>
                  <Badge variant="outline">
                    <IconTrendingUp />
                    Trending
                  </Badge>
                </CardAction>
              </CardHeader>
              <CardContent>
                08-11-2025
                <br />
                Author{x.id}
                <br />
                <br />
                <div className="line-clamp-1 flex gap-2 font-medium">
                  {x.body}
                </div>
              </CardContent>
              <CardFooter className="flex-col items-start gap-1.5 text-sm"></CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogbody;
