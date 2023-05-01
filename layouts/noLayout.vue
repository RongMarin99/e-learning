<template>
        <div>
            <nuxt/>   
              <!-- Start Loading -->
                <b-overlay :show="inProgress" rounded="xl" variant="dark" z-index="100000" opacity="0.5" no-wrap>
                        <template #overlay>
                        <div class="text-center text-primary px-5"  v-show="overlay">
                        <!-- <b-spinner variant="primary" style="width:60px; height:60px"></b-spinner> -->
                        <div class="loader"></div>
                        </div>
                        </template>
                </b-overlay>
               <!-- End Loading --> 
        </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
     computed: {
        ...mapGetters({
                inProgress: 'loading/getInProgress',
                overlay: 'loading/getOverlay'
        }),
     },
}
</script>
<style>
@font-face {
  font-family: Hanuman;
  src: url('../assets/fonts/KantumruyPro-VariableFont_wght.ttf');
}
body {
  background-color: #fff;
  color: rgba(0, 0, 0, 0.8);
  font-family: Hanuman !important;
}
.dark-mode body {
  background-color: #091a28 ;
  color: #ebf4f1;
}
.footer-dark{
  background-color: #1a2130;
}
.sepia-mode body {
  background-color: #f1e7d0;
  color: #433422;
}
.dropdown .nav-link{
  padding: 0px !important;
  margin-top: 10px;
  margin-left:5px;
}
li a.nuxt-link-exact-active {
    color: #FD7237 !important;
}
.loader {
		--clr: rgb(25, 118, 210);
		/* color of spining  */
		width: 65px;
		height: 65px;
		position: relative;
	}

	.loader:before, .loader:after {
		content: "";
		position: absolute;
		top: -10px;
		left: -10px;
		width: 100%;
		height: 100%;
		border-radius: 100%;
		border: 5px solid transparent;
		border-top-color: var(--clr);
	}

	.loader:before {
		z-index: 100;
		animation: spin 1s infinite;
	}

	.loader:after {
		border: 5px solid rgb(75, 160, 244);
	}

	@keyframes spin {
	0% {
		-webkit-transform: rotate(0deg);
		-ms-transform: rotate(0deg);
		-o-transform: rotate(0deg);
		transform: rotate(0deg);
	}

	100% {
		-webkit-transform: rotate(360deg);
		-ms-transform: rotate(360deg);
		-o-transform: rotate(360deg);
		transform: rotate(360deg);
		}
	}
</style>