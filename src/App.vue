<template>
  <v-app id="app">
    <div>
      <Navbar />
    </div>
    <v-main>
      <!--<v-toolbar height="10px" color="indigo"> </v-toolbar>-->
      <div id="contents">
        <router-view />
      </div>
    </v-main>
    <v-footer height="250px" color="white" justify="center">
      <p class="sns">
        <a
          href="https://www.facebook.com/jungsint"
          target="_blank"
          class="facebook"
          >페이스북</a
        >
        <a href="https://twitter.com/Joongsint" target="_blank" class="twitter"
          >트위터</a
        >
        <a
          href="https://instagram.com/jungsint"
          target="_blank"
          class="instagram"
          >인스타그램</a
        >
      </p>
    </v-footer>
  </v-app>
</template>

<script>
import Navbar from '@/components/NavbarComponent.vue';

export default {
  name: 'App',
  components: {
    Navbar,
  },
  data: () => ({
    //
  }),
};
</script>

<style>
#contents {
  padding: 16px 32px 0px 32px;
}
.p {
  margin: auto;
}
.facebook {
  padding: 0px 32px 0px 32px;
}
.twitter {
  padding: 0px 32px 0px 32px;
}
.instagram {
  padding: 0px 32px 0px 32px;
}
</style>
