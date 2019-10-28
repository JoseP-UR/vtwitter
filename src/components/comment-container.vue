<template>
    <div class="comment-container">
        <span class="-content">{{tweet.content}}</span>
        <tweet-user :user="tweet.user"></tweet-user>
    </div>
</template>

<script>
import commentList from './comment-list'
import tweetUser from './tweet-user'

export default {
    name: 'comment-container',
    data() {
        return {
            commentsOpen: false
        }
    },
    components: {
        tweetUser,
        commentList
    },
    props: {
        tweet: {
            type: Object,
            required: true,
        },
    },
    methods: {
        removeTweet(id) {
            if(this.$store.dispatch('remove', id)) {
                this.$store.commit('REMOVE_TWEET',this.tweet);
            }
        },
        showComments(id) {
            if(this.$store.dispatch('getstatus', id)) {
                this.commentsOpen = true;
            }
        }
    }
}
</script>

<style lang="sass" scoped>
    .comment-container
        margin: 20px auto
        border: 2px ridge #ffffff
        background: #f2f2f3
        width: 80%
        border-radius: 20px
        padding: 10px
        display: flex
        flex-direction: column

        >.-content
            flex-basis: 80%
            border-radius: 20px
            padding: 10px
            border: 1px solid #d0d0d0
            box-shadow: 0px 0px 10px -5px black
</style>