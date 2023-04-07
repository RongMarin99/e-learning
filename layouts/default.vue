<template>
    <div>
      <!-- Start Header -->
      
        <b-container fluid 
          :class="$colorMode.value=='dark'?'bg-dark' : 'bg-white' " 
          class="position-fixed header"
          style="border-bottom:0.1px solid #ededed">
            <b-navbar toggleable="lg">
              <b-container class="p-2">
                <b-navbar-brand to="/">
                  <img height="50" :src="`${api_key}/image_etec/${header.image}`" alt="">
                </b-navbar-brand>
    
                <b-navbar-toggle 
                  target="nav-collapse" 
                  class="ml-auto"
                >
                <span class="material-icons" :class="$colorMode.value=='dark'?'text-dark-mode' : 'text-light-mode'">menu</span>
              </b-navbar-toggle>
    
                <b-collapse id="nav-collapse" is-nav>
                  <b-navbar-nav class="m-auto" :class="$colorMode.value=='dark'?'text-dark-mode' : 'text-light-mode'">
                    <b-nav-item class="pl-4" to="/" >
                      {{ $t('home') }}
                    </b-nav-item>
                    <b-nav-item class="pl-4" to="/Article">
                      {{ $t('article') }}
                    </b-nav-item>
                    <b-nav-item class="pl-4" to="/Course">
                      {{ $t('course') }}
                    </b-nav-item>
                    <b-nav-item class="pl-4" to="/Video">
                      {{ $t('video') }}
                    </b-nav-item>
                    <b-nav-item class="pl-4" to="/Job">
                      {{ $t('job') }}
                    </b-nav-item>
                  </b-navbar-nav>
                  <!-- Right aligned nav items -->
                  <b-navbar-nav class="m-right">
                    <b-nav-form>
                      <b-form-input v-model="search" size="sm" class="mr-sm-2" :placeholder="$t('search')+'...'"></b-form-input>
                      <b-button size="sm" 
                                class="my-2 my-sm-0 orange-bg" 
                                type="button"
                                @click.prevent.stop="onSearch"
                      >{{ $t('search') }}</b-button>
                    </b-nav-form>

                    <client-only>
                      <b-nav-item-dropdown class="ml-2 mr-1" right>
                        <template #text>
                          <span v-if="$i18n.locale == 'en'" style="padding:0px">
                            <img style="padding:0px" height="18" width="20" src="@/assets/image/en.png" alt="">
                          </span>
                          <span v-else>
                            <img style="padding:0px" height="18" width="20" src="@/assets/image/kh.png" alt="">
                          </span>
                        </template>
                        <b-dropdown-item @click.prevent.stop="$i18n.setLocale('en')" >
                          <img style="padding:0px" height="18" width="20" src="@/assets/image/en.png" alt=""> {{ $t('english') }}
                        </b-dropdown-item>
                        <b-dropdown-item @click.prevent.stop="$i18n.setLocale('kh')">
                          <img style="padding:0px" height="18" width="20" src="@/assets/image/kh.png" alt=""> {{ $t('khmer') }}
                        </b-dropdown-item>
                      </b-nav-item-dropdown>
                    </client-only>

                    <b-nav-item>
                      <span v-if="$colorMode.value=='dark'"
                        @click="$colorMode.value='light'"
                        class="material-icons"
                        :class="$colorMode.value=='dark'?'text-dark-mode' : 'text-light-mode'"
                      >brightness_4</span>
                      <span v-if="$colorMode.value!='dark'"
                        @click="$colorMode.value='dark'"
                        class="material-icons"
                        :class="$colorMode.value=='dark'?'text-dark-mode' : 'text-light-mode'"
                      >nights_stay</span>
                    </b-nav-item>
                  </b-navbar-nav>
    
                </b-collapse> 
            </b-container>
            </b-navbar>
        </b-container>
      
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
          address: '',
          about: '',
          footer: '',
          header: '',
          social: '',
          search: ''
        }
    },
    mounted(){
      this.getHeader()
    },
    methods: {
       category(type){
          this.$router.push('Category?type='+type+'')
        },
        getAddress(){
          this.$axios.$get('getAddress').then(response => {
            this.address = response
          })
        },
        getAbout(){
          this.$axios.$get('getAbout').then(response => {
            this.about = response
          })
        },
        getFooter(){
          this.$axios.$get('getAllLogoFooter').then(response => {
            this.footer = response
          })
        },
        getHeader(){
          this.$axios.$get('getAllLogoHeader').then(response => {
            this.header = response
          })
        },
        getSocial(){
          this.$axios.$get('getAllSocialMedia').then(response => {
            this.social = response.data
          })
        },
        getImage(image) {
          return 'https://etec-api.loveounnas.xyz/image_etec/' + image
        },
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