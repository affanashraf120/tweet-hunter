import type { NextApiRequest, NextApiResponse } from "next";
import { TwitterApi } from "twitter-api-v2";
import { configTwitter } from "../../config";

const twitterClient = new TwitterApi(configTwitter.bearer);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const user = await twitterClient.v2.userByUsername(
      req.query.name as string,
      {
        "user.fields":
          "profile_image_url,location,name,username,description,created_at,public_metrics",
      }
    );
    if (user && user.data && user.data.id) {
      const { data } = await twitterClient.v2.userTimeline(user.data.id, {
        "tweet.fields": "text,public_metrics,attachments,created_at",
      });
      return res.status(200).json({
        user: user.data,
        tweets: data.data || [],
      });
    }
    return res.status(200).json({ user: user, tweets: [] });
  } catch (error) {
    return res.status(500).json({ user: null, tweets: [] });
  }
}
