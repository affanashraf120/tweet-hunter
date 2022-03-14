import { Badge, Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const UserCard = (props: Twitter.User) => {
  const {
    name,
    username,
    description,
    profile_image_url,
    location,
    created_at,
    public_metrics,
  } = props;
  return (
    <Box maxW="lg" borderWidth="1px" margin="3.5" borderRadius="lg">
      <Box p="6">
        <Flex alignSelf="center" align="center" margin="1.5" >
          <Image src={profile_image_url || ''} alt="twit-image" />
          <Text marginLeft="1.5" fontSize="large" >{name || ''}</Text>
        </Flex>
        <Box display="flex" flexDirection="column" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            @{username || ''}
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            ml="2"
          >
            Followers {public_metrics && public_metrics.followers_count || 0} Tweets{" "}
            {public_metrics && public_metrics.tweet_count || 0}
          </Box>
        </Box>

        <Box as="span" ml="2" color="gray.600" fontSize="sm">
          {location || ''}
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {description || ''}
        </Box>

        <Box fontSize="xs" >{new Date(created_at || '').toDateString()}</Box>
      </Box>
    </Box>
  );
};

export default UserCard;
