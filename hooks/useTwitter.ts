import { useEffect, useState } from "react";

const useTwitter = () => {
  const [tweets, setTweets] = useState<any[]>([]);
  const [text, setText] = useState<string>("");
  const [user, setUser] = useState<any>()
  const [loading, setLoading]=useState<boolean>(false)

  const handleChange = (e: any) => {
    setText(e.target.value);
  };

  const handleSubmit = () => {
    if (text.length && text.includes("@")) {
      getTweets(text.replace("@", ""));
    }
  };

  const getTweets = async (name: string) => {
    setLoading(true)
    try {
      const data = (await fetch(`api/tweets?name=${name}`).then((res) =>
        res.json()
      )) as Twitter.ApiResponse;
      setLoading(false)
      if (data.tweets) setTweets(data.tweets);
      if(data.user) setUser(data.user)
    } catch (error) {
      setLoading(false)
      console.log("error", error);
    }
  };

  return { tweets,user, handleSubmit, handleChange, loading };
};

export default useTwitter;
