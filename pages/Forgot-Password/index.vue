<template>
  <div class="forgot-password-box">
    <b-card class="text-center">
      <form action="">
      <i
        class="material-icons"
        style="font-size: 75px; color: var(--color-red)"
      >
        error
      </i>
      <h3>{{ $t("forgot_password") }}</h3>
      <p>
        {{
          $t("enter_your_email_and_we_ll_send_a_link_to_reset_your_password")
        }}
      </p>

      <div class="form">
        <div class="email-input d-flex align-items-center form-border">
          <i class="material-icons pl-2" >mail</i>
          
            <b-input 
              placeholder="Email" 
              type="email"
              v-model="form.email"
              required
            > </b-input>
          
        </div>
      </div>

      <p v-if="response && status" class="text-success text-left mt-3 mb-0">
        {{ message }}
      </p>
      <p v-else-if="response && status==false" class="text-danger text-left mt-3 mb-0">
        {{ message }}
      </p>

      <b-button @click="requestResetPassword()" variant="success" size="lg" class="mt-3 w-100">{{
        $t("submit")
      }}</b-button>
      <nuxt-link to="Login" class="d-block m-3">
        {{ $t("back_to_login") }}
      </nuxt-link>
     </form>
    </b-card>
  </div>
</template>

<script>
export default {
  layout: "noLayout",
  data(){
    return {
      form: {
        email: ''
      },
      response: false,
      message: '',
      status: false
    }
  },
  methods: {
    requestResetPassword(){
      this.$axios.$post('requestResetPassword',this.form).then(res => {
        this.status = res.status
        this.response = true
        this.message = res.message
      })
    }
  }
};
</script>

