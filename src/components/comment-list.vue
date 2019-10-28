<template>
    <div class="comment-list">
        <a class="-close" @click="$emit('closeComments')">X</a>
        <div class="-comments">
            <comment-container v-for="comment in comments" :key="comment.id" :tweet="comment"></comment-container>
        </div>
    </div>
</template>

<script>

import commentContainer from './comment-container'
import { mapState } from 'vuex'

export default {
    name: "comment-list",

    components: {
        commentContainer
    },
    computed: {
        ...mapState({
            comments: state => state.comments
        })
    }
}
</script>

<style lang="sass" scoped>
    .comment-list
        width: 100vw
        height: 100vh
        background: transparentize(blue, 0.5)
        display: block
        position: fixed
        top: 0
        left: 0

        >.-close
            color: white
            font-weight: bold
            cursor: pointer
        
        >.-comments
            display: block
            width: 65%
            border-radius: 20px
            background: #fff
            height: 80%
            margin: 90px auto
</style>