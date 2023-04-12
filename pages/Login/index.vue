<template>
    <div>
        <b-button @click="googleSignIn">
             signin
        </b-button>
    </div>
</template>
<script>
import firebase from 'firebase' 
export default{
    data(){
        return {

        }
    },
    methods: {
        googleSignIn () {
        this.provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithPopup(this.provider).then(result => {
          // store the user ore wathever
          this.$router.push('/home')
        }).catch(e => {
          this.$snotify.error(e.message)
          console.log(e)
        })
      }
    }
}
</script>