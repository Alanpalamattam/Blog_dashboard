import Blogbody from "@/components/Blogbody";

export default function Home() {
  return (
    <>
    <div className="flex flex-col p-10 items-center bg-amber-200">
      <h1 className="text-3xl font-bold text-orange-400">Blog Dashboard</h1>
    </div>
    <Blogbody/>
    </>
  );
}
 