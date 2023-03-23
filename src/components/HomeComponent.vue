<!-- HomeComponent.vue -->
<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex>
        <br /><br />
        <v-caruosel cycle>
          <v-card flat>
            <v-row>
              <v-col xs="12" sm="12" md="12" lg="6" xl="6">
                <img
                  src="@/assets/junsint_team.jpg"
                  style="
                    width: 400px;
                    height: 300px;
                    margin: auto;
                    display: block;
                  "
                />
              </v-col>
              <v-col xs="12" sm="12" md="12" lg="6" xl="6">
                <h1>JungSint</h1>
                <br />
                <h2>OSINT 솔루션으로 세상을 선도합니다.</h2>
                <br /><br />
                <h4>OSINT 개발자</h4>
                송태현, 신재형, 우제혁, 이예준, 이정호
                <br /><br />
                <h4>도움을 주신 분들</h4>
                임정묵 교수님, 여러 오픈 소스 도구를 만들어 주신 능력 좋은
                개발자
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
  name: 'HomeComponent',
  data: () => ({}),

  methods: {},
};
</script>
