import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";

const TwitterCard = (props: Twitter.Tweet) => {
  const { created_at, text, public_metrics } = props;
  return (
    <Box
      p={4}
      display={{ md: "flex" }}
      maxWidth="32rem"
      borderWidth={1}
      margin={2}
    >
      <Stack
        align={{ base: "center", md: "stretch" }}
        textAlign={{ base: "center", md: "left" }}
        mt={{ base: 4, md: 0 }}
        ml={{ md: 6 }}
      >
        <Text
          fontWeight="bold"
          fontSize="medium"
          letterSpacing="wide"
          color="teal.600"
        >
          {text}
        </Text>
        <Flex direction="column">
          {public_metrics && Object.entries(public_metrics).map(([key, value]) => {
            let name = key.replaceAll("_", "").concat("s").replace("count", "");
            let capitalName =
              name.charAt(0).toLocaleUpperCase() + name.slice(1);
            return (
              <Text my="0.5" color="gray.600" key={key}>
                {capitalName} : {value}
              </Text>
            );
          })}
        </Flex>
        <Text my="2" fontSize="sm" color="orange.400">
          {new Date(created_at).toDateString()}
        </Text>
      </Stack>
    </Box>
  );
};

export default TwitterCard;
