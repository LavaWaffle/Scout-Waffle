import type { NextPage } from "next";
import { useEffect } from "react";
import { trpc } from "../utils/trpc";
import { Container, Text } from "@mantine/core";

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
      <Container
        fluid
        style={{
          display: "grid",
          placeItems: "center",
          height: "70vh"
        }} 
      >
        <Text
          style={{
            fontSize: "2rem",
          }}
          weight={500}
          color="primary"
          align="center"
        >
          Add Map Here
        </Text>
      </Container>
    </>
  );
};

export default Home;
