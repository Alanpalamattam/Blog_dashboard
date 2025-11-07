import Blogbody from "@/components/Blogbody";
 
export default function Home() {
  return (
    <>
    <div className="flex flex-col sticky top-0 p-10 items-center bg-black border-b-2 border-dashed z-50 border-b-gray-600">
      <h1 className="text-6xl font-bold text-white">Blog Dashboard</h1>
       <p className="text-xl text-gray-400 mt-1">
            Manage, explore, and create your blogs all in one place.
        </p>
    </div>
     
    <Blogbody/>
    </>
  );
}
 