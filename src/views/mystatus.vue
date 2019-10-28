<template>
  <div class="mystatus">
    <create-tweet></create-tweet>
    <tweet-container v-for="tweet in tweets" :key="tweet.id" :tweet="tweet"></tweet-container>
  </div>
</template>

<script>
import tweetContainer from '../components/tweet-container'
import createTweet from '../components/create-tweet'
import { mapState } from 'vuex'

export default {
  name: 'mystatus',
  components: {
    tweetContainer,
    createTweet
  },
  mounted() {
    this.$store.dispatch('retrievetimeline');
  },
  computed: {
    ...mapState({
      tweets: state => state.tweets
    })
  }
}
</script>
