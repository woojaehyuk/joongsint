<!-- LoginComponent.vue -->
<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex>
        <v-row>
          <v-col>
            <v-card flat>
              <h2>로그인 페이지</h2>
            </v-card>
          </v-col>
        </v-row>

        <v-form ref="form" @submit.prevent="login">
          <v-text-field
            v-model="userid"
            label="아이디"
            required
            :rules="useridRule"
            value=""
          />
          <v-text-field
            v-model="password"
            :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
            :type="passwordShow ? 'text' : 'password'"
            label="비밀번호"
            :rules="passwordRule"
            counter
            @click:append="passwordShow = !passwordShow"
          />
          <v-btn id="login_btn" @click="login" @keyup.enter="login">
            로그인
          </v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios';
export default {
  name: 'LoginComponent',
  data() {
    return {
      loginData: {
        userid: null,
        password: null,
      },
    };
  },
  methods: {
    submitForm: function () {
      console.log(this.username, this.age, this.phone);
      var url = 'https://jsonplaceholder.typicode.com/users';
      var data = {
        username: this.username,
        age: this.age,
        phone: this.phone,
      };
      axios
        .post(url, data)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>
