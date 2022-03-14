import {
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import TwitterCard from "../components/TwitterCard";
import UserCard from "../components/UserCard";
import useTwitter from "../hooks/useTwitter";

const Home: NextPage = () => {
  const { tweets, user, handleSubmit, handleChange, loading } = useTwitter();

  return (
    <Container alignItems="center">
      <Head>
        <title>Tweet hunter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Center marginTop="16" width="100%">
        <Flex align="center" direction="column">
          <Heading>Tweet hunter</Heading>
          <Text>Find the tweets based on username.</Text>
          <Flex align="stretch" marginTop="2.5">
            <Input
              type="text"
              name="name"
              onKeyDown={(e) => {
                e.key === "Enter" && handleSubmit();
              }}
              onChange={handleChange}
              placeholder="@username.."
            />
            <Button isLoading={loading} onClick={handleSubmit} marginLeft="2">
              Search
            </Button>
          </Flex>
        </Flex>
      </Center>

      {
        user && <UserCard {...user} />
      }

      {tweets.map((tweet) => (
        <TwitterCard key={tweet.id} {...tweet} />
      ))}

    </Container>
  );
};

export default Home;
