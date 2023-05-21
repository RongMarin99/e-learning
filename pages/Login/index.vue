<template>
    <b-container>
        <b-row>
          <b-col cols="6" class="form-login">
            <div class="form">
              <b-form class="w-100">
                <h2 class="mt-4"><b class="color-red">Sign in to Account</b></h2>
                <div class="line bg-red"></div>
                <div class="d-flex pt-4 pb-3 icon-avatar">
                  <img @click="facebookLogin" height="40" src="@/assets/image/fb.png" alt="">
                  <img @click="signInPopup" height="40" class="ml-3 mr-3" src="@/assets/image/google.png" alt="">
                  <img @click="GitHubLogin" height="40" src="@/assets/image/github.png" alt="">
                </div>
                <div>
                  <p>or use your email account</p>
                </div>
                <div class="email-input">
                  <i class="material-icons">mail</i>
                  <b-input
                    placeholder="Email"
                    type="email"
                    v-model="form.email"
                  >
                  </b-input>
                </div>
                <div class="email-input">
                  <i class="material-icons">lock</i>
                  <b-input
                    placeholder="Password"
                    type="password"
                    v-model="form.password"
                  ></b-input>
                </div>
                <div class="w-100 d-flex align-items-center justify-content-between">
                  <div class="h-100 d-flex align-items-center ">
                    <input type="checkbox">
                    <p class="mb-0 pl-1">Remember me</p>
                  </div>
                  <div>
                      <nuxt-link to="Forgot-Password">Forget Password?</nuxt-link>
                  </div>
                </div>
                <b-button @click="login()" variant="none" class="bg-red text-white px-5 py-3 mt-4" pill >Sign In</b-button>
              </b-form>
            </div>
          </b-col>
          <b-col cols="6" class="form-login-right d-flex align-items-center justify-content-center flex-column">
            <h2><b class="text-secondary">Hello, Friend!</b></h2>
            <div class="line bg-secondary"></div>
            <p align="center" class="mt-3 text-secondary">
              Fill up personal information and <br> start journey with us.
            </p>
            <b-button to="register" pill class="register mt-4">Sign Up</b-button>
          </b-col>
        </b-row>
    </b-container>
</template>
<script>
import firebase from 'firebase'
import swal from 'sweetalert2'
export default{
    layout: 'noLayout',
    data(){
        return {
          form: {
            uid: '',
            email: '',
            password: '',
            social: false,
            token: ''
          },
        }
    },
    methods: {
      login(){
        var vm = this
        this.form.social = false
        this.$axios.$post('login',this.form).then(res => {
        })
      },
      signInPopup() {
        var vm = this
        this.provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithPopup(this.provider).then(result => {
          this.form.social = true
          this.form.uid = result.user.uid
          this.form.token = result.user.refreshToken
          this.form.email = result.user.email
          this.$axios.$post('login',this.form).then(response => {
            console.log(response);
            vm.$store.dispatch('auth/login', {
              token: response.access_token,
              expired_date: response.expired_date,
              user: response.user,
            })

            this.$router.push({ path: '/' })
          })
          // this.$router.push('/')
        }).catch(function(error) {
					vm.inProgress = false
					swal.fire({
						type: 'warning',
						title: vm.$t('login'),
						text: 'Invalid credentials'
					})
				})
      },
      facebookLogin(){
        this.provider = new firebase.auth.FacebookAuthProvider()
        firebase.auth().signInWithPopup(this.provider).then(result => {
          // store the user ore wathever
          this.$router.push('/')
        }).catch(e => {
          this.$snotify.error(e.message)
          console.log(e)
        })
      },
      GitHubLogin(){
        this.provider = new firebase.auth.GithubAuthProvider()
        firebase.auth().signInWithPopup(this.provider).then(result => {
          // store the user ore wathever
          console.log(result);
          //this.$router.push('/')
        }).catch(e => {
          this.$snotify.error(e.message)
          console.log(e)
        })
      }
    }
}
</script>
