import { Box, Circle, Divider, Flex, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Icon } from '@chakra-ui/react'
import { AiOutlineRetweet, AiOutlineHeart } from 'react-icons/ai'

const TwitterCard = (props: Twitter.Tweet) => {
  const { created_at, text, public_metrics } = props;

  const getValidCount = (count: number | undefined): string => {
    if (count) {
      if (count > 1000) {
        let c = count / 1000
        return `${c.toFixed(0)}k`
      } else {
        return count.toString()
      }
    }

    return '0'
  }

  return (
    <Box
      p="1.5"
      px="2.5"
      display="flex"
      flexDirection="column"
      maxWidth="32rem"
      borderRadius="lg"
      boxShadow="base"
      borderWidth={1}
      margin={2}
    >
      <Flex marginBottom="1.5" alignItems="center" justifyContent="space-between" >
        <Image borderRadius="full" src={`https://via.placeholder.com/30x30.png?text=${text.charAt(0) || ''}`} alt="twit-image" />
        <Text fontSize="sm" color="gray.500" >
          {new Date(created_at).toDateString()}
        </Text>
      </Flex>
      <Divider />
      <Text
        fontSize="medium"
        letterSpacing="wide"
        textAlign="left"
        margin="1.5"
      >
        {text}
      </Text>
      <Divider />
      <Flex>
        <Flex align="center" marginRight="1.5" >
          <Icon as={AiOutlineHeart} color="red.500" marginRight="1.5" />
          {public_metrics && getValidCount(public_metrics.like_count)}
        </Flex>
        <Flex align="center" >
          <Icon as={AiOutlineRetweet} color="green.500" marginRight="1.5" />
          {public_metrics && getValidCount(public_metrics.retweet_count)}
        </Flex>
      </Flex>
    </Box>
  );
};

export default TwitterCard;
