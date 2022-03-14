declare namespace Twitter {
  interface Tweet {
    id: string;
    text: string;
    public_metrics: {
      retweet_count: number;
      reply_count: number;
      like_count: number;
      quote_count: number;
    };
    created_at: string;
  }

  interface User {
    id: string;
    name: string;
    username: string;
    description: string;
    profile_image_url: string;
    location: string;
    created_at: string;
    public_metrics: {
      followers_count: number;
      following_count: number;
      tweet_count: number;
      listed_count: number;
    };
  }

  interface ApiResponse {
    user: User | null | UserV2Result;
    tweets: Tweet[] | TweetV2[];
  }
}
