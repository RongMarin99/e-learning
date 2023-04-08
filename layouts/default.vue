<template>
    <div>
      <!-- Start Header -->
        <header id="navigation-bar" class="p-1">
          <b-container>
            <header>
              <b-navbar toggleable="lg">
                <b-navbar-brand href="#">
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
                      <b-button pill variant="light" class="mr-2 login">Login</b-button>
                      <b-button pill class="register">Register</b-button>
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