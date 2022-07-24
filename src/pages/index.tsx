import type { NextPage } from "next";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  // prisma studio cmd (visualize db)
  // pnpx prisma studio 

  // const technologies = trpc.useQuery(["example.getAll"]);
  // console.log(technologies.data);

  return (
    <>
      <main className="container mx-auto flex flex-col items-center justify-center h-screen p-4">
        
        <div className="pt-6 text-2xl text-blue-500 flex justify-center items-center w-full">
          {hello.data ? <p>{hello.data.greeting}</p> : <p>Loading..</p>}
        </div>
      </main>
    </>
  );
};

export default Home;
