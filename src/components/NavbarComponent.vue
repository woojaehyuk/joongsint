<template>
  <div style="background-color: #f8f9fa">
    <b-navbar toggleable="lg" type="light" id="header_inner">
      <b-navbar-brand href="/" class="header_font"
        ><b>JoongSint</b></b-navbar-brand
      >

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/intro">기업 소개</b-nav-item>
          <b-nav-item href="/board">커뮤니티</b-nav-item>
          <b-nav-item href="/contact">Contact Us</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown
            right-align
            menu-class="dropdown-menu-right-align"
          >
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="/profile">Profile</b-dropdown-item>
            <b-dropdown-item v-if="isLogin" href="/profile" @click="userLogout"
              >Log out</b-dropdown-item
            >
            <b-dropdown-item v-if="!isLogin" href="/login"
              >Log in</b-dropdown-item
            >
            <b-dropdown-item v-if="!isLogin" href="/join"
              >Sign in</b-dropdown-item
            >
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'NavbarComponent',
  components: {},
  data() {
    return {
      isLogin: false,
    };
  },
  methods: {
    userLogout() {
      alert('로그아웃할래잉');
    },
  },
};
</script>

<style>
#header_inner {
  padding-left: 16px;
  padding-right: 16px;
}
.dropdown-menu-right-align {
  right: 0;
  left: auto;
}
.header_font {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>
