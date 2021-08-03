import { v4 as uuidv4 } from "uuid";
import { TWEETS } from "../utils/constants.js";
import { size, remove } from "lodash";

export function saveTweetApi(username, tweet) {
  const tweets = getTweetsApi()
  // console.log(tweets);

  if(size(tweets) === 0) {
    const tweetTemp = [
      {
        id: uuidv4(),
        username,
        tweet,
        createdAt: new Date() 
      }
    ]
    localStorage.setItem(TWEETS, JSON.stringify(tweetTemp))
  } else {
    tweets.push(
      {
        id: uuidv4(),
        username,
        tweet,
        createdAt: new Date()
      }
    )
    // console.log(tweets);
    localStorage.setItem(TWEETS, JSON.stringify(tweets))

  }
}

export function getTweetsApi() {
  const tweets = localStorage.getItem(TWEETS)

  if(tweets) {
    return JSON.parse(tweets)
  } 
  return []
}

export function deleteTweetApi(idTweet) {
  const tweets = getTweetsApi()
  remove(tweets, function(tweet) {
    return tweet.id === idTweet
  })
  localStorage.setItem(TWEETS, JSON.stringify(tweets))
}