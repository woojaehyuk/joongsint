<!-- HomeComponent.vue -->
<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex>
        <v-caruosel cycle>
          <v-card flat>
            <v-row>
              <v-col>
                <h1>Contact us</h1>
                <KakaoMap />
                <br />
              </v-col>
            </v-row>
          </v-card>
        </v-caruosel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import KakaoMap from '@/components/Board/KakaoMap.vue';
export default {
  name: 'ContactComponent',
  data: () => ({}),
  components: {
    KakaoMap,
  },

  methods: {},
};
</script>
