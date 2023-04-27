<template>
    <b-container>
      <div class="already_register">
        <b-alert
          :show="count"
          dismissible
          variant="warning"
          @dismissed="count=0"
        >
          This User Already Registered
        </b-alert>
      </div>

        <b-row>
          <b-col cols="6" class="form-login">
            <div class="form form-register">
              <b-form class="w-100">
                <h2 class="mt-4"><b class="color-red">Sign up Account</b></h2>
                <div class="line bg-red"></div>
                <div class="d-flex pt-4 pb-3 icon-avatar">
                  <img @click="facebookLogin" height="40" src="@/assets/image/fb.png" alt="">
                  <img @click="signInPopup" height="40" class="ml-3 mr-3" src="@/assets/image/google.png" alt="">
                  <img @click="GitHubLogin" height="40" src="@/assets/image/github.png" alt="">
                </div>
                <div>
                  <p>or use your email account</p> 
                </div>
                <div class="d-flex">
                  <div class="email-input">
                    <i class="material-icons">person</i>
                    <b-input v-model="form.fname" placeholder="First Name"></b-input>
                  </div>
                  &nbsp; &nbsp;
                  <div class="email-input">
                    <i class="material-icons">person</i>
                    <b-input v-model="form.lname" placeholder="Last Name"></b-input>
                  </div>
                </div>
                <div class="email-input">
                  <i class="material-icons">mail</i>
                  <b-input v-model="form.email" placeholder="Email"></b-input>
                </div>
                <div class="email-input">
                  <i class="material-icons">lock</i>
                  <b-input 
                      v-model="form.password" 
                      placeholder="Password"
                      type="password"
                  ></b-input>
                </div>
                <div class="w-100 d-flex align-items-center justify-content-between">
                  <div class="h-100 d-flex align-items-center ">
                    <input type="checkbox">
                    <p class="mb-0 pl-1">Remember me</p>
                  </div>
                </div>
                <b-button @click="register" variant="none" class="bg-red text-white px-5 py-3 mt-4" pill >Sign Up</b-button>
              </b-form>
            </div>
          </b-col>
          <b-col cols="6" class="form-login-right d-flex align-items-center justify-content-center flex-column">
            <h2><b class="text-secondary">Hello, Friend!</b></h2>
            <div class="line bg-secondary"></div>
            <p align="center" class="mt-3 text-secondary">
              Fill up personal information and <br> start journey with us.
            </p>
            <b-button to="/login" pill class="register mt-4">Sign In</b-button>
          </b-col>
        </b-row>
    </b-container>
</template>
<script>
import firebase from 'firebase'
export default{
    middleware: 'auth',
    layout: 'noLayout',
    data(){
        return {
          form: {
            uid: '',
            fname: '',
            lname: '',
            username: '',
            email: '',
            password: '',
            social: false
          },
          count: 0,
        }
    },
    methods: {
      register(){
        this.form.social = false
        this.form.username = this.form.fname+" "+this.form.lname
        this.$axios.$post('register',this.form).then(res => {
          if(res.error!=undefined){
            this.count = 5
          }else{
            this.$router.push('/')
          }
        })
      },
      signInPopup() { 
        this.provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithPopup(this.provider).then(result => {
          // store the user ore wathever
          this.form.username = result.user.displayName
          this.form.social = true
          this.form.uid = result.user.uid
          this.form.photo = result.user.photoURL
          this.form.email = result.user.email
          var name = result.user.displayName.split('')
          this.form.fname = name[0]
          this.form.lname = name[1]
        
          this.$axios.$post('register',this.form).then(res => {
            if(res.message == false){
              this.count = 5
            }else{
              this.$router.push('/')
            }
          })
        }).catch(e => {
          this.$snotify.error(e.message)
        })
      },
      facebookLogin(){
        this.provider = new firebase.auth.FacebookAuthProvider()
        firebase.auth().signInWithPopup(this.provider).then(result => {
          // store the user ore wathever
          this.form.username = result.additionalUserInfo.profile.name
          this.form.social = true
          this.form.uid = result.user.uid
          this.form.photo = result.additionalUserInfo.profile.picture.data.url
          this.form.email = result.user.email
          this.form.fname = result.additionalUserInfo.profile.first_name
          this.form.lname = result.additionalUserInfo.profile.last_name

          this.$axios.$post('register',this.form).then(res => {
            if(res.message == false){
              this.count = 5
            }else{
              this.$router.push('/')
            }
          })
        }).catch(e => {
          this.$snotify.error(e.message)
        })
      },
      GitHubLogin(){
        this.provider = new firebase.auth.GithubAuthProvider()
        firebase.auth().signInWithPopup(this.provider).then(result => {
          // store the user ore wathever
          this.form.username = result.additionalUserInfo.username
          this.form.social = true
          this.form.uid = result.user.uid
          this.form.photo = result.additionalUserInfo.profile.avatar_url
          this.form.email = result.additionalUserInfo.profile.email
          this.form.fname = ''
          this.form.lname = ''
          console.log(result);
          this.$axios.$post('register',this.form).then(res => {
            if(res.message == false){
              this.count = 5
            }else{
              this.$router.push('/')
            }
          })
        }).catch(e => {
          this.$snotify.error(e.message)
        })
      }
    }
}
</script>