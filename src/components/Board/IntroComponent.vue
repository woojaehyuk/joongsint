<!-- HomeComponent.vue -->
<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex>
        <v-caruosel cycle>
          <v-card flat>
            <h1>기업 소개</h1>
            <br />
            <div>
              JungSint는 2023년, OSINT(공개 출처 정보) 솔루션을 제공하기 위해
              중부대학교 SCP팀이 만든 가상 모의 기업이다. 이러한 공개된 정보를
              바탕으로 이를 수집, 가공, 응용하여 웹 상에 돌아다니는 기업 또는
              사람에 대한 위험한 정보들을 조회하고 이를 예방할 수 있도록 해준다.
              Jungsint는 이러한 기능들을 사용자에게 제공하기 위해 웹 개발과
              다양한 툴을 자동화해주는 모듈을 제작하여 배포한다.
            </div>
            <br /><br />
            <v-row>
              <v-col xs="12" sm="12" md="4" lg="4" xl="4">
                <b-card
                  id="card-body"
                  title="열정"
                  img-src="https://picsum.photos/600/300/?image=25"
                  img-alt="Image"
                  img-top
                  tag="article"
                  class="mb-2"
                >
                  <b-card-text>
                    우리 모두는 자신의 발전을 위하여 적극적으로 그리고
                    지속적으로 노력한다.
                  </b-card-text>
                </b-card>
              </v-col>
              <v-col xs="12" sm="12" md="4" lg="4" xl="4">
                <b-card
                  id="card-body"
                  title="존중/신뢰"
                  img-src="https://picsum.photos/600/300/?image=25"
                  img-alt="Image"
                  img-top
                  tag="article"
                  class="mb-2"
                >
                  <b-card-text>
                    우리는 서로를 존중한다. 상사는 부하를 존중하고 부하는 상사를
                    존중하며 동료 간에 서로 존중한다.
                  </b-card-text>
                </b-card>
              </v-col>
              <v-col xs="12" sm="12" md="4" lg="4" xl="4">
                <b-card
                  id="card-body"
                  title="약속"
                  img-src="https://picsum.photos/600/300/?image=25"
                  img-alt="Image"
                  img-top
                  tag="article"
                  class="mb-2"
                >
                  <b-card-text>
                    우리는 고객의 요구로 탄생되었다. 우리는 고객의 관심과 격려를
                    기반으로 설립되었고, 현재와 미래 성장의 가장 큰 힘이
                    고객임을 잊지 않는다.
                  </b-card-text>
                </b-card>
              </v-col>
            </v-row>
            <br /><br /><br />
            <h1>사원</h1>
            <br />
            <v-row>
              <v-col xs="12" sm="6" md="4" lg="4" xl="4" align="center">
                <b-card
                  id="card-body2"
                  img-alt="Image"
                  img-top
                  tag="article"
                  class="mb-2"
                >
                  <b-card-img
                    id="picture"
                    :src="require('@/assets/member3.png')"
                  ></b-card-img>
                  <b-card-text><b>우제혁</b> (총괄 및 운영)</b-card-text>
                  <b-card-text> wpgur@gmail.com </b-card-text>
                </b-card>
              </v-col>

              <v-col xs="12" sm="6" md="4" lg="4" xl="4" align="center">
                <b-card
                  id="card-body2"
                  img-alt="Image"
                  img-top
                  tag="article"
                  class="mb-2"
                >
                  <b-card-img
                    id="picture"
                    :src="require('@/assets/member1.jpg')"
                  ></b-card-img
                  ><br />
                  <b-card-text><b>송태현</b> (서비스 개발) </b-card-text>
                  <b-card-text> 정보1 </b-card-text>
                </b-card>
              </v-col>

              <v-col xs="12" sm="6" md="4" lg="4" xl="4" align="center">
                <b-card
                  id="card-body2"
                  img-alt="Image"
                  img-top
                  tag="article"
                  class="mb-2"
                >
                  <b-card-img
                    id="picture"
                    :src="require('@/assets/member2.png')"
                  ></b-card-img>
                  <b-card-text><b>신재형</b> (서비스 개발)</b-card-text>
                  <b-card-text> 이메일 : shinwogud12@naver.com </b-card-text>
                </b-card>
              </v-col>

              <v-col xs="12" sm="6" md="4" lg="4" xl="4" align="center">
                <b-card
                  id="card-body2"
                  img-alt="Image"
                  img-top
                  tag="article"
                  class="mb-2"
                >
                  <b-card-img
                    id="picture"
                    :src="require('@/assets/member4.jpg')"
                  ></b-card-img>
                  <b-card-text><b>이예준</b> (서비스 개발)</b-card-text>
                  <b-card-text> 이메일 : exit3015@gmail.com </b-card-text>
                </b-card>
              </v-col>

              <v-col xs="12" sm="6" md="4" lg="4" xl="4" align="center">
                <b-card
                  id="card-body2"
                  img-alt="Image"
                  img-top
                  tag="article"
                  class="mb-2"
                >
                  <b-card-img
                    id="picture"
                    :src="require('@/assets/member5.png')"
                  ></b-card-img>
                  <b-card-text><b>이정호</b> (서비스 개발)</b-card-text>
                  <b-card-text> wjdgh7575@naver.com </b-card-text>
                </b-card>
              </v-col>
            </v-row>

            <br /><br /><br />
          </v-card>
        </v-caruosel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'IntroComponent',
  data: () => ({}),

  methods: {},
};
</script>

<style>
#card-body {
  margin: auto;
  padding: auto;
  max-width: 20rem;
  height: 350px;
  min-width: 200px;
}
#card-body2 {
  margin: auto;
  padding: auto;
  max-width: 20rem;
  min-width: 240px;
}
#picture {
  width: 200px;
  height: 250px;
}
</style>
