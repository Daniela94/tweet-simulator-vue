<template>
  <div class="tweet-form container"
      :class="{ open: showForm }"
  >
    <form @submit.prevent="sendTweet">
      <input type="text" class="form-control" placeholder="Tu nombre" v-model="username" />
      <textarea name="" id="" rows="3" class="form-control" placeholder="Escribe tu tweet" v-model="tweet"></textarea>
      <button type="submit" class="btn btn-primary">Enviar Tweet</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { saveTweetApi } from "../api/tweet";

export default {
  props: {
    showForm: Boolean,
    openCloseForm: Function,
    reloadTweets: Function,
  },
  setup(props) {
    let username = ref("")
    let tweet = ref("")

    const sendTweet = () => {
      // console.log(`${username.value}: ${tweet.value}`);
      if(!tweet.value  || !username.value) return
      
      saveTweetApi(username.value, tweet.value)
      
      username.value = ''
      tweet.value = ''

      props.reloadTweets()
      props.openCloseForm()
    }

    return {
      sendTweet,
      username,
      tweet,
    }
  }
}
</script>

<style lang="scss" scoped>
  .tweet-form {
    margin-top: 20px;
    overflow: hidden;
    // height: 0;
    display: none;

    &.open {
      display: block;
    }

    form {
      margin-bottom: 50px;

      input {
        margin-bottom: 10px;
      }

      button {
        width: 100%;
        margin-top: 10px;
      }

    }

  }
</style>