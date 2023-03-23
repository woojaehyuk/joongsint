<template>
  <div>
    <div id="map"></div>
    <br /><br />
    <h2>창의캠퍼스(고양)</h2>

    ADDRESS : (10279) 경기도 고양시 덕양구 동헌로 305 <br />
    TEL : 010-1234-9999<br /><br />
    <h2>찾아오시는 길</h2>
    오시는 방법 - 고속도로 이용시 <br />
    통일로IC(문산,관산동방향) → 대자삼거리에서 우회전(의정부,고양동방향) →
    고양2교 삼거리에서 좌회전 → 고양동 사거리에서 좌측 11시방향 → 하늘소리너싱홈
    지나서 우회전 → 중부대학교 고양캠퍼스 <br />
    <br />
    <h2>담당부서</h2>
    정보보호학과 (SCP)<br />
    <br />
    <h2>연락처</h2>
    010-1234-9998 <br />
    <br />
    <h2>문의 이메일</h2>
    qwer1234@jungsint.com <br />
  </div>
</template>

<script>
export default {
  name: 'KakaoMap',
  data() {
    return {};
  },
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      const script = document.createElement('script');
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      script.src = 'http://dapi.kakao.com/v2/maps/sdk.js?autoload=[api key]';
      document.head.appendChild(script);
    }
  },
  methods: {
    initMap() {
      const container = document.getElementById('map');
      const options = {
        center: new kakao.maps.LatLng(37.713398, 126.890054),
        level: 5,
      };

      //지도 객체를 등록합니다.
      //지도 객체는 반응형 관리 대상이 아니므로 initMap에서 선언합니다.
      this.map = new kakao.maps.Map(container, options);
    },
    changeSize(size) {
      const container = document.getElementById('map');
      container.style.width = `${size}px`;
      container.style.height = `${size}px`;
      this.map.relayout();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#map {
  width: 100%;
  height: 400px;
}
</style>
