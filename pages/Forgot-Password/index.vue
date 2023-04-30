<template>
  <div class="forgot-password-box">
    <b-card class="text-center">
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
        <div class="email-input d-flex align-items-center">
          <i class="material-icons" style="font-size: 48px">mail</i>
          <b-input placeholder="Email" type="email"> </b-input>
        </div>
      </div>

      <b-alert show variant="danger" class="text-left mt-2">
        email not found
      </b-alert>
      <b-button variant="primary" size="lg" class="mt-1 w-100">{{
        $t("submit")
      }}</b-button>
      <nuxt-link to="Login" class="d-block m-3">
        {{ $t("back_to_login") }}
      </nuxt-link>
    </b-card>
  </div>
</template>

<script>
export default {
  layout: "noLayout",
};
</script>

