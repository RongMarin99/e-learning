<template>
    <div>
      <!-- Start Header -->
        <header id="navigation-bar" class="p-1 header">
          <b-container>
            <header>
              <b-navbar toggleable="lg">
                <b-navbar-brand to="/">
                  <img height="35" src="https://dreamslms-wp.dreamguystech.com/wp-content/themes/dreamslms/assets/images/logo.svg" alt="">
                </b-navbar-brand>
            
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            
                <b-collapse id="nav-collapse" is-nav>
           
                    <b-navbar-nav class="m-auto">
                      <b-nav-item active class="pl-4" to="/">Home</b-nav-item>
                      <b-nav-item class="pl-4" href="#">About Us</b-nav-item>
                      <b-nav-item class="pl-4" href="#">Instructors</b-nav-item>
                      <b-nav-item class="pl-4" href="#">Students</b-nav-item>
                      <b-nav-item class="pl-4" href="#">Contact Us</b-nav-item>
                    </b-navbar-nav>
                 
                  
            
                  <!-- Right aligned nav items -->
                  <b-navbar-nav class="ml-auto">
                    <b-nav-form>
                      <b-button to="/login" pill variant="light" class="mr-2 login">Login</b-button>
                      <b-button to="/register" pill class="register">Register</b-button>
                    </b-nav-form>
                  </b-navbar-nav>
                </b-collapse>
              </b-navbar>
            </header>
          </b-container>
        </header>
      <!-- End Header -->

        <Nuxt />

      <!-- Start Footer -->
        <footer class="container-fluid float-left footer">
          <section class="container">
            <b-row class="pt-5">
              <b-col xl="4" lg="4" md="4" sm="12" xs="12" cols="12">
                <img height="50" src="https://dreamslms-wp.dreamguystech.com/wp-content/uploads/2023/01/logo.svg" alt="">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat mauris Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat mauris

                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat mauris Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat mauris
                </p>
              </b-col>
              <b-col xl="4" lg="4" md="4" sm="12" xs="12" cols="12">
                <h4 class="color-dark-blue">For Student</h4>
                <ul class="pl-0">
                  <li>
                    <nuxt-link to="/profile">Profile</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="">Login</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="">Register</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="">Student</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="">Dashboard</nuxt-link>
                  </li>
                </ul>
              </b-col>
              <b-col xl="4" lg="4" md="4" sm="12" xs="12" cols="12">
                <h4 class="color-dark-blue">Address</h4>
                <div class="d-flex p-2">
                  <b-form-input placeholder="Enter your email address" class="mr-2"></b-form-input>
                  <b-button class="bg-red">Submit</b-button>
                </div>
                <div class="d-flex align-items-center mb-1">
                  <i class="material-icons">location_on</i>
                  <p class="mb-0 pl-2">3556 Beech Street, San Francisco, California, CA 94108</p>
                </div>
                <div class="d-flex align-items-center mb-2">
                  <i class="material-icons">mail</i>
                  <p class="mb-0 pl-2">rongmarin98@gmail.com</p>
                </div>
                <div class="d-flex align-items-center">
                  <i class="material-icons">phone_in_talk</i>
                  <p class="mb-0 pl-2">rongmarin98@gmail.com</p>
                </div>
              </b-col>
            </b-row>
            <hr>
            <b-row>
              <b-col xl="6" lg="6" md="6" sm="12" xs="12" cols="12">
                <p>Category | Policy</p>
              </b-col>
              <b-col xl="6" lg="6" md="6" sm="12" xs="12" cols="12" class="copy">
                <p align="right"> &copy; 2023 Dreams LMS. All right reverved.</p>
              </b-col>
            </b-row>
          </section>
        </footer>
      <!-- End Footer -->
  
    </div>
</template>
<script>
import cookie from 'js-cookie'
export default{
    colorMode: 'light',
  //   head () {
  //   return {
  //     meta: [
  //       { hid: 'og:image', property: 'og:image', content: require('../assets/image/logo.jpg') }
  //     ]
  //   }
  // },
    head () {
      return {
        title: "KroIT | Etec Center | គ្រូអាយធីចិត្តល្អ | Etec | គ្រូអាយធី | IT | Code",
        htmlAttrs: {
          lang: this.$i18n.locale
        },
        meta: [
          {
            hid: "og:title",
            property: "og:title",
            content: "KroIT | ETEC I.T Training Center",
          },
          { 
            hid: 'og:image', property: 'og:image', content: require('../assets/image/logo.jpg')
          },
          {
            hid: "description",
            name: 'description',
            property: "description",
            content: "គ្រូអាយធីចិត្តល្អ |Etec Center | Kroit | korit.net | ETEC I.T Training Center is a School located in Phnom Penh, KH. The business is listed under school category.",
          },
          { 
            hid: 'og-url', property: 'og:url', 
            content: this.web_url
          },
        ]
      }
    },
    data(){
        return {
          api_key: process.env.BASE_URL,
        }
    },
    mounted(){
        let nav = document.getElementById("navigation-bar");
        let login_button = document.querySelector('.login')
        let sticky = nav.offsetTop;
        window.onscroll = function() {sticker()};
        function sticker() {
          if (window.pageYOffset >= sticky) {
              nav.style.top="0px"
              login_button.classList.add("login-custome")
              nav.classList.add("sticky")
          } else {
              nav.style.top="10px"
              login_button.classList.remove("login-custome");
              nav.classList.remove("sticky");
          }
      }
    },
    methods: {
        switchLang(locale){
          if (this.$i18n.locale !== locale) {
              this.$i18n.locale = locale;
              //cookie.set('lang',locale)
          }
        },
        onSearch(){
          this.$router.push({path: `/Search/${this.search}`});
        }
    }
}
</script>
<style>
@font-face {
  font-family: Hanuman;
  src: url('../assets/fonts/KantumruyPro-VariableFont_wght.ttf');
}
body {
  background-color: #fff;
  color: rgba(0, 0, 0, 0.8);
  font-family: Hanuman !important;
}
.dark-mode body {
  background-color: #091a28 ;
  color: #ebf4f1;
}
.footer-dark{
  background-color: #1a2130;
}
.sepia-mode body {
  background-color: #f1e7d0;
  color: #433422;
}
.dropdown .nav-link{
  padding: 0px !important;
  margin-top: 10px;
  margin-left:5px;
}
li a.nuxt-link-exact-active {
    color: #FD7237 !important;
}
  
</style>