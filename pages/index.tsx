import type { NextPage } from "next";

const IndexPage: NextPage = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col gap-4 p-4 text-center break-all items-center justify-center">
      <h1 className="inline-block text-transparent bg-gradient-to-r from-yellow-600 to-pink-600 bg-clip-text text-5xl md:text-6xl font-bold tracking-wid e">
        Orichalcum.
      </h1>
      <h2 className="text-gray-600 text-lg">This is only the beginning.</h2>
    </div>
  );
};

export default IndexPage;
