<template>
    <div>
        <b-modal 
            v-model="Modal" 
            hide-footer
            @hide="closeModal"
            :lazy='true'
            size="xl"
        >
            <template #modal-title>
                <p class="mb-0">Complete HTML, CSS and Javascript Course</p>
            </template>
            <vue-plyr>
                <div class="plyr__video-embed">
                  <iframe
                    src="https://www.youtube.com/embed/bTqVqk7FSmY?amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1"
                    allowfullscreen
                    allowtransparency
                    allow="autoplay"
                  ></iframe>
                </div>
            </vue-plyr>
        </b-modal>
    </div>
</template>

<script>
export default {
    props: {
        PlayVideo: {
            type: Number,
            default: 0
        }
    },
    data(){
        return {
            Modal: false
        }
    },
    watch: {
        PlayVideo: {
            handler(val){
                if(val == 1){
                    this.Modal = true
                }
            },
            immediate: true
        }
    },
    methods: {
        closeModal(){
           this.$emit('closeModal')
        }
    }
}
</script>