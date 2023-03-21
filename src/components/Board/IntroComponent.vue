<!-- HomeComponent.vue -->
<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex>
        <v-caruosel cycle>
          <v-card flat>
            <v-row>
              <v-col>
                <h1>기업 소개</h1>
                <br />
                <div>
                  JungSint는 2023년, OSINT(공개 출처 정보) 솔루션을 제공하기
                  위해 중부대학교 SCP팀이 만든 가상 모의 기업이다. 이러한 공개된
                  정보를 바탕으로 이를 수집, 가공, 응용하여 웹 상에 돌아다니는
                  기업 또는 사람에 대한 위험한 정보들을 조회하고 이를 예방할 수
                  있도록 해준다. Jungsint는 이러한 기능들을 사용자에게 제공하기
                  위해 웹 개발과 다양한 툴을 자동화해주는 모듈을 제작하여
                  배포한다.
                </div>

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
  name: 'IntroComponent',
  data: () => ({}),

  methods: {},
};
</script>
