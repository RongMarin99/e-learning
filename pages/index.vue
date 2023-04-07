<template>
  <div>

      
    
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