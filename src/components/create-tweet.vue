<template>
    <div class="create-tweet">
        <form v-on:submit.prevent>
            <input class="-text" type="text" v-model='content' name="content">
            <button class="-button" @click="submit()">Send new tweet</button>
        </form>
        <div class="-error" v-if="error">{{error}}</div>
    </div>
</template>

<script>
export default {
    name: 'create-tweet',

    data() {
        return {
            content: '',
            error: ''
        }
    },

    methods: {
        submit() {
            if(!this.content) {
                this.error = 'Please type in something to post'
                return
            }
            if(this.$store.dispatch('create', this.content)) {
                this.error = ''
                this.content = ''
                return
            }
            this.error = 'there was an error'
            return
        }
    }

}
</script>

<style lang="sass" scoped>
    .create-tweet
        margin: 30px auto
        border: 1px solid #eeeeee
        background: whitesmoke
        box-shadow: 0px 0px 10px -5px black
        padding: 15px
        border-radius: 40px
        width: 80%

        >form
            width: 100%
            border-radius: 40px
            text-align: center
            display: flex
            justify-content: center

            >.-text
                border-radius: 10px
                height: 30px
                border-style: solid
                border-color: whitesmoke
                box-shadow: 0px 0px 10px -3px black
                padding-left: 10px
                flex-basis: 70%

            >.-button
                flex-basis: 25%
                margin-left: 5px    
                background: #4f4fff
                border: 1px solid white
                color: #fff
                font-weight: 600
                border-radius: 10px
                &:hover
                    transform: scale(1.06)

</style>