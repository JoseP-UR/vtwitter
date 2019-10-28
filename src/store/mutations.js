const newTweet = tweet => {
  return {
    id: tweet.id,
    id_str: tweet.id_str,
    content: tweet.text,
    user: {
      id: tweet.user.id,
      name: tweet.user.name,
      screen_name: tweet.user.screen_name,
      picture: tweet.user.profile_image_url,
      background_image: tweet.user.profile_background_image_url
    }
  }
}

export default {
  SET_USER_TWEETS (state, payload) {
    console.log(state, payload)
    let tweets = []
    payload.forEach(tweet => {
      let data = newTweet(tweet)

      tweets.push(data)
    })

    state.tweets = tweets
  },
  REMOVE_TWEET (state, tweet) {
    let index = state.tweets.indexOf(state.tweets.find(el => {
      return el.id === tweet.id
    }))

    state.tweets.splice(index, 1)
  },
  ADD_TWEET (state, tweet) {
    let data = newTweet(tweet)

    state.tweets.splice(0, 0, data)
  },
  SET_TWEET_COMMENTS (state, payload) {
    console.log(state, payload)
    let comments = []
    payload.forEach(tweet => {
      let data = newTweet(tweet)

      comments.push(data)
    })

    state.comments = comments
  }
}
