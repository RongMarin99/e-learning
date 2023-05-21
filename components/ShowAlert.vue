<template>
    <div class="show_alert">
        <b-alert
            :show="dismissCountDown"
            dismissible
            :class="bg_color"
            @dismissed="dismissCountDown=0"
            @dismiss-count-down="countDownChanged"
        >
            <div class="d-flex align-items-center mb-2">
                <i class="material-icons text-white"> {{ icon }} </i>
                <p class="mb-0 text-white pl-2">{{ message }}</p>
            </div>
            <b-progress
                :variant="progress_color"
                :max="dismissSecs"
                :value="dismissCountDown"
                height="4px"
            ></b-progress>
        </b-alert>
    </div>
</template>
<script>
export default{
    props: {
        bg_color: {
            type: String,
            default: 'error'
        },
        progress_color: {
            type: String,
            default: 'danger'
        },
        message: {
            type: String,
            default: 'You nees to login first!'
        },
        icon: {
            type: String,
            default: 'warning'
        }
    },
    data(){
        return{
            dismissCountDown: 0,
            dismissSecs: 7,
        }
    },
    methods: {
        countDownChanged(dismissCountDown) {
            this.dismissCountDown = dismissCountDown
        },
        showAlert() {
            this.dismissCountDown = this.dismissSecs
        }
    }
}
</script>
<style lang="scss">
    .show_alert{
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 999999;
        color: white !important;
        button{
            color: white !important;
        }
    }
    .progress_green {
        background-color: rgb(0, 132, 0) !important;
    }
    .error{
        background-color: var(--color-red) !important;
    }
    .success{
        background-color: rgba(0, 132, 0, 0.793) !important;
    }
</style>