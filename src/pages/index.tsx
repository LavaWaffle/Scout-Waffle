import type { NextPage } from "next";
import { useEffect } from "react";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);
  const {data, error, isLoading} = trpc.useQuery(["scout.scout"]);
  // run this function every time the isLoading (boolean) changes
  useEffect(() => {
    // when is loading is false, log the data
    if (isLoading == false) {
      console.log(data);
    }
  }, [isLoading])

  // const technologies = trpc.useQuery(["example.getAll"]);
  // console.log(technologies.data);

  return (
    <>
      <main className="container mx-auto flex flex-col items-center justify-center h-screen p-4">
        
        
      </main>
    </>
  );
};

export default Home;
