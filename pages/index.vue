<template>
  <div>
    <main>
      <b-container class="h-100">
        <b-row class="h-100">
          <b-col cols="6" class="main-left">
            <h4>The Leader in Online Learning</h4>
            <h1>
              <b class="color-dark-blue">Engaging & <br> Accessible Online <br> Courses For All</b>
            </h1>
            <div class="search mt-4">
              <span class="icon">
                <i class="material-icons">search</i>
              </span>
              <input type="text" placeholder="Search School, Online education center, etc">
              <span class="arrow">
                <i class="material-icons">arrow_forward</i>
              </span>
            </div>
            <h4 class="mt-4">Trusted by over 15K Users <br>
              worldwide since 2022</h4>
            <div class="d-flex align-items-center" style="margin-top:-1.5rem">
               <h1><b class="color-dark-blue">290+</b></h1>
               <h4 class="color-dark-blue ml-2">Courses</h4>
            </div>
           

          </b-col>
          <b-col cols="6" class="main-right">
            <img height="500" src="https://dreamslms-wp.dreamguystech.com/wp-content/uploads/2023/01/object.png" alt="">
          </b-col>
        </b-row>
      </b-container>
    </main>

    <!-- start course category -->
    <section class="top-category">
      <b-container class="position-relative">
        <div class="category">
          <div class="box-category"></div>
          <div class="box-category"></div>
          <div class="box-category"></div>
          <div class="box-category"></div>
        </div>

        <b-row class="category-title">
          <b-col cols="6">
            <h5><b class="color-red">Favourite Course</b></h5>
            <h2><b class="color-dark-blue">Top Category</b></h2>
          </b-col>
          <b-col cols="6"></b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
import moment from 'moment';
export default {
  colorMode: 'light',
  head () {
    return {
      title: "គ្រូអាយធីចិត្តល្អ | Etec Center | KroIT",
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
        // { 
        //   hid: 'og-url', property: 'og:url', 
        //   content: this.web_url
        // },
      ]
    }
  },
  name: 'IndexPage',
  components: {
  },
  data() {
    return {
      web_url: process.env.WEB_URL,
      api_key: process.env.BASE_URL,
    }
  },
  mounted() {
  },
  watch: {
  },
  methods: {
    dateFormat(date){
      return moment(date).format('llll')
    },
    getNameByLocalByLang(name, local = 'latin_name') {
				if (name != '') {
					try {
						name = JSON.parse(name)
						if (this.$i18n.locale == 'en') {
							return name.latin_name
						} else {
							return name.local_name
						}
					} catch (e) {
						return name
					}
				} else {
					return null
				}
		},
  }
}
</script>
<style>

</style>