<template>
    <div class="tweet-container">
        <span class="-content">{{tweet.content}}</span>
        <tweet-user :user="tweet.user"></tweet-user>

        <div class="-control">
        <a class="-remove" @click="removeTweet(tweet.id_str)">X</a>
        <a class="-comments" @click="showComments(tweet.id_str)">Check comments</a>
        </div>

        <comment-list v-if="commentsOpen" @closeComments="commentsOpen = false"></comment-list>
    </div>
</template>

<script>
import commentList from './comment-list'
import tweetUser from './tweet-user'

export default {
    name: 'tweet-container',
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
    .tweet-container
        margin: 10px auto
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
        
        >.-control
            display: flex
            margin-left: 10px
            margin-top: 20px
            font-size: 12px

            >*
                cursor: pointer

                &:hover
                    transform: scale(1.05)


            >.-remove
                color: red
                font-weight: bold
            
            >.-comments
                margin-left: 10px

</style>