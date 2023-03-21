<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex>
        <br /><br /><br /><br />
        <v-caruosel cycle>
          <v-card flat>
            <v-row>
              <v-col> <v-avatar color="grey" size="400" tile></v-avatar></v-col>
              <v-col>
                <h1>내 정보</h1>
                <br />
                <div>ID :</div>
                <div>이름 :</div>
                <div>나이 :</div>
                <div>부서 :</div>
                <div>직급 :</div>
                <div>이메일 :</div>
                <div>전화번호 :</div>
                <div>집 주소 :</div>
                <br /><br /><br />
              </v-col>
            </v-row>
          </v-card>
        </v-caruosel>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: 'ProfileComponent',
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="" scoped></style>
