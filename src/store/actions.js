import axios from 'axios'

export default {
  retrievetimeline: (store) => {
    axios.get('http://localhost/php/retrievestatuses.php').then(response => {
      store.commit('SET_USER_TWEETS', response.data)
    }).catch(error => {
      console.log(error)
    })
  },
  remove: (store, id) => {
    axios.get('http://localhost/php/removestatus.php?id=' + id).then(response => {
      if (response.errors) {
        console.log(response.errors)
        return false
      }
      return true
    }).catch(error => {
      console.log(error)
      return false
    })
  },
  create: (store, text) => {
    axios.post('http://localhost/php/createstatus.php', 'content=' + text).then(response => {
      store.commit('ADD_TWEET', response.data)
      return true
    }).catch(error => {
      console.log(error)
      return false
    })
  },
  getstatus: (store, id) => {
    axios.get('http://localhost/php/getcomments.php?id=' + id).then(response => {
      console.log(response)
      if (response.errors) {
        console.log(response.errors)
        return false
      }
      store.commit('SET_TWEET_COMMENTS', response.data)
      return true
    }).catch(error => {
      console.log(error)
      return false
    })
  }
}
