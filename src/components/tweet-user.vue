<template>
  <div class="tweet-user">

    <img @click="visitUser(user.screen_name)" class="-img" :src="user.picture" :alt="user.name" />
    <span @click="visitUser(user.screen_name)" class="-name">{{user.name}}</span>
  </div>
</template>

<script>
export default {
  name: "tweet-user",

  props: {
    user: {
      type: Object,
      required: true
    }
  },

  methods : {
      visitUser: name => {
          window.open('https://twitter.com/' + name, '_blank')
      }
  }
};
</script>

<style lang="sass" scoped>
    .tweet-user
        text-align: left
        padding: 5px
        padding-left: 20px
        display: flex
        align-items: center
        height: 30px
        width: auto

        >.-img
            width: auto
            cursor: pointer
            height: 30px
            border-radius: 50%
            box-shadow: 0px 0px 15px -4px black
        >.-name
            margin-left: 10px
            font-weight: bold
            cursor: pointer
</style>