<template>
    <div class="layout-container">
        <div class="box-container">
            <h3>{{ $t('reset_your_password') }}</h3>

            <b-alert show variant="light">
                {{ $t("please_create_your_password") }}
            </b-alert>

            <div class="form">
                <div class="password-input d-flex align-items-center form-border my-4">
                    <i class="material-icons pl-2" >lock</i>
                    <b-input 
                      placeholder="New Password"
                      type="password"
                      v-model="form.new_password"
                      required
                    ></b-input>
                    <i class="material-icons pl-2 mr-2" >visibility</i>
                </div>

                <div class="password-input d-flex align-items-center form-border my-4">
                    <i class="material-icons pl-2" >check</i>
                      <b-input 
                        placeholder="Confirm Password"
                        type="password"
                        v-model="form.confirm_password"
                        required
                      ></b-input>
                      <i class="material-icons pl-2 mr-2" >visibility</i>
                </div>

                <b-button class="w-100" variant="primary">
                    {{ $t("reset_password") }}
                </b-button>

                <div class="text-center mt-3">
                    <nuxt-link to="forgot-password">
                        <span>{{ $t("back") }}</span>
                    </nuxt-link>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    layout: "noLayout",
    data() {
        return {
            form: {
                new_password: null,
                confirm_password: null,
            },
            default_form: {
                new_password: null,
                confirm_password: null,
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .layout-container {
        width: 100%;
        height: 13.5rem;
        background-color: var(--color-red);

        .box-container {
            width: 32rem;
            position: fixed;
            top: 25%;
            left: 50%;
            background-color: white;
            transform: translate(-50%,-15%);
            border-radius: 0.2rem;
            padding: 2rem;

            h3 {
                text-align: center;
                margin: 1.5rem 0;
            }
        }
    }

    .password-input{
        display: flex;
        align-items: center;
        color: gray;
        width: 100%;
        height: 60px;
        padding: 10px;
        margin-bottom: 10px;
        background-color: rgba(214, 214, 214, 0.226);
        input{
          border: none !important;
          outline: none !important;
          background-color: transparent;
          &:focus{
            outline: none;
            box-shadow: none;
          }
        }
      }
      
      a {
        text-decoration: none;
        color: black;
        font-size: 1.2rem;

        &:hover {
            color: white;
            background-color: rgba(0,0,0,0.3);
            padding: 0.4rem;
            border-radius: 0.3rem;
        }
      }
</style>