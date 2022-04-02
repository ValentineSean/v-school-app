<template>
  <div id="app">
    <component :is="this.$route.meta.layout || 'div'">
      <router-view />
    </component>

    <!-- <SystemLayout /> -->
  </div>
</template>

<script>
  // import { mapActions } from "vuex"

  export default {
    
    name: 'App',
    
    components: {
      // SystemLayout
    },

    methods: {
      // ...mapActions(["refreshStation"])
    },

    created(){
      // let channel = this.$pusher.subscribe("passengers-prediction-channel")

      // channel.bind("refresh-station", refreshed_station => {
      //   this.refreshStation(refreshed_station["refreshed_station"])
      // })
    }
  }
</script>

<style>
  .loading-spinner{
    text-align: center;
    background: rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    margin-bottom: 20px;
    padding: 30px 50px;
    margin: 20px 0;
  }
</style>
