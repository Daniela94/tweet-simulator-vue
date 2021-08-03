<template>
  <div>
    <Menu 
      :openCloseForm="openCloseForm"
      :showForm="showForm" 
    />
    <TweetForm 
      :showForm="showForm" 
      :openCloseForm="openCloseForm" :reloadTweets="reloadTweets" 
    />
    <TweetList :tweets="tweets" :reloadTweets="reloadTweets" />
  </div>
</template>

<script>
import List from '../../e-commerce-vue3/src/components/List.vue';
import Menu from "./components/Menu.vue"
import TweetForm from "./components/TweetForm.vue";
import TweetList from "./components/TweetList.vue";
import useFormTweet from './hooks/useFormTweet.js';
import { getTweetsApi } from "./api/tweet";
import { ref } from "vue";

export default {
  name: 'App',
  components: {
    Menu,
    TweetForm,
    TweetList,
    List,
  },
  setup() {
    let tweets = ref(getTweetsApi().reverse())
    const reloadTweets = () => {
      tweets.value = getTweetsApi().reverse()
    }

    return {
      // con el spread operator aquí, obtengo el contenido de ese objeto
      // es lo mismo que hacer esto:
      /*useFormTweet() {
        showForm,
        openCloseForm
      }*/
      ...useFormTweet(),
      tweets,
      reloadTweets,
    }
  }
}
</script>

<style lang="scss">
</style>
