<template>
  <v-app id="app">
    <div>
      <Navbar />
    </div>
    <v-main>
      <div id="contents">
        <router-view />
      </div>
    </v-main>
    <v-footer app dark padless>
      <v-card
        tile
        color="#f8f9fa"
        dark
        center
        class="white--text text-center"
        width="100%"
      >
        <v-card-text> </v-card-text>
        <v-card-text class="black--text pt-0">
          <p class="sns">
            SNS 바로가기 :
            <a
              href="https://www.facebook.com/jungsint"
              target="_blank"
              class="facebook black--text pt-0"
              >페이스북</a
            >
            <a
              href="https://twitter.com/Joongsint"
              target="_blank"
              class="twitter black--text pt-0"
              >트위터</a
            >
            <a
              href="https://instagram.com/jungsint"
              target="_blank"
              class="instagram black--text pt-0"
              >인스타그램</a
            >
          </p>
        </v-card-text>
      </v-card>
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
