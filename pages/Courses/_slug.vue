<template>
    <div style="height: fit-content;">
       <!-- <h1> {{ $route.params.slug }} </h1> -->
       <b-container fluid class="pl-0 pr-0">
            <div class="bg-image-course" 
                style="background-image: url('https://dreamslms-wp.dreamguystech.com/wp-content/themes/dreamslms/assets/images/inner-banner.jpg')">
                <b-container class="position-relative">
                    <b-row>
                        <b-col cols="8">
                            <div class="d-flex">
                                <img 
                                    width="75" 
                                    src="https://dreamslms-wp.dreamguystech.com/wp-content/uploads/2023/02/profile-1.jpg" 
                                    alt=""
                                    class="rounded-circle"
                                >
                                <div class="pl-2 pt-2">
                                    <h6 class="text-white mb-0">David Powell</h6>
                                    <p class="text-white pt-1">Instructor</p>
                                </div>
                            </div>
                            <div>
                                <h1 class="text-white pt-1">
                                    Complete HTML, CSS and Javascript Course
                                </h1>
                            </div>
                            <div class="d-flex mt-2">
                                <div class="d-flex">
                                    <i class="material-icons color-red">menu_book</i>
                                    <p class="pl-1 text-white mb-0">0 Lessons</p>
                                </div>
                                <div class="d-flex ml-4">
                                    <i class="material-icons color-red">timer</i>
                                    <p class="pl-1 text-white mb-0">30 mins</p>
                                </div>
                                <div class="d-flex ml-4">
                                    <i class="material-icons color-red">group</i>
                                    <p class="pl-1 text-white mb-0">0 Enrolled</p>
                                </div>
                            </div>

                            <!-- @tab -->
                            <div class="bg-white mt-5 px-3">
                                <b-tabs
                                    active-nav-item-class="line-bottom-blue"
                                    content-class="mt-3"
                                >
                                    <b-tab title="Overview" active>
                                        <div class="mt-5">
                                            <h3 class="color-dark-blue mb-4">What you will learn</h3>
                                            <b-row class="mb-4">
                                                <b-col cols="6" class="d-flex align-items-center mb-3">
                                                    <i class="material-icons color-green">check_circle</i>
                                                    <p class="mb-0 pl-2">
                                                        Download & Install Xampp
                                                    </p>
                                                </b-col>
                                                <b-col cols="6" class="d-flex align-items-center mb-3">
                                                    <i class="material-icons color-green">check_circle</i>
                                                    <p class="mb-0 pl-2">
                                                        Fix Error Apache and Config PHP Environment
                                                    </p>
                                                </b-col>
                                                <b-col cols="6" class="d-flex align-items-center mb-3">
                                                    <i class="material-icons color-green">check_circle</i>
                                                    <p class="mb-0 pl-2">
                                                        Basic Usage git, GitHub with TortoiseGit
                                                    </p>
                                                </b-col>
                                                <b-col cols="6" class="d-flex align-items-center mb-3">
                                                    <i class="material-icons color-green">check_circle</i>
                                                    <p class="mb-0 pl-2">
                                                        Install Laravel with Specific Laravel
                                                    </p>
                                                </b-col>
                                                <b-col cols="6" class="d-flex align-items-center mb-3">
                                                    <i class="material-icons color-green">check_circle</i>
                                                    <p class="mb-0 pl-2">
                                                        How to use workspace and extension in VSCode IDE
                                                    </p>
                                                </b-col>
                                                <b-col cols="6" class="d-flex align-items-center mb-3">
                                                    <i class="material-icons color-green">check_circle</i>
                                                    <p class="mb-0 pl-2">
                                                        Laravel MVC, Helpers, Middleware
                                                    </p>
                                                </b-col>
                                                <b-col cols="6" class="d-flex align-items-center mb-3">
                                                    <i class="material-icons color-green">check_circle</i>
                                                    <p class="mb-0 pl-2">
                                                        How to read Laravel Document
                                                    </p>
                                                </b-col>
                                                <b-col cols="6" class="d-flex align-items-center mb-3">
                                                    <i class="material-icons color-green">check_circle</i>
                                                    <p class="mb-0 pl-2">
                                                        Eloquent ORM and CRUD
                                                    </p>
                                                </b-col>
                                            </b-row>

                                            <b-row>
                                                <b-col col="12">
                                                    <p>In this course, you will learn Laravel 8 from basic to Advanced. And more you will learn you can check above with What will i learn?</p>
                                                </b-col>
                                            </b-row>
                                        </div>
                                    </b-tab>
                                    <b-tab title="Curriculum">
                                        <div class="p-3">
                                            <b-row>
                                                <b-col cols="12" v-b-toggle.accordion-1 class="d-flex align-items-center justify-content-between">
                                                    <h6 class="mb-0 color-dark-blue text-bold">Part 1 - Setup Environment and Install Laravel</h6>
                                                    <i class="material-icons color-dark-blue">expand_more</i>
                                                </b-col>
                                                <b-col cols="12" class="mt-2">
                                                    <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
                                                   
                                                        <table class="table table-borderless">
                                                            <tr>
                                                                <td class="d-flex align-items-center">
                                                                    <i class="material-icons">play_arrow</i>
                                                                    <p class="mb-0 pl-2">play Download & Install Xampp, Fix Error Apache, Config PHP, Other</p> 
                                                                </td>
                                                                <td>
                                                                    Preview
                                                                </td>
                                                                <td>
                                                                    11:38
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="d-flex align-items-center">
                                                                    <i class="material-icons">play_arrow</i>
                                                                    <p class="mb-0 pl-2">play Download & Install Xampp, Fix Error Apache, Config PHP, Other</p> 
                                                                </td>
                                                                <td>
                                                                    Preview
                                                                </td>
                                                                <td>
                                                                    11:38
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="d-flex align-items-center">
                                                                    <i class="material-icons">play_arrow</i>
                                                                    <p class="mb-0 pl-2">play Download & Install Xampp, Fix Error Apache, Config PHP, Other</p> 
                                                                </td>
                                                                <td>
                                                                    Preview
                                                                </td>
                                                                <td>
                                                                    11:38
                                                                </td>
                                                            </tr>
                                                        </table>
                                                   
                                                    </b-collapse>
                                                </b-col>
                                            </b-row>
                                            
                                        </div>
                                    </b-tab>
                                    <b-tab title="Discussion">
                                        <div class="p-5 d-flex align-items-center flex-column justify-content-center flex-dera">
                                            <i class="material-icons color-dark-blue" style="font-size: 10rem;">speaker_notes_off</i>
                                            <h3 class="color-dark-blue">No Discussion Found</h3>   
                                        </div>
                                    </b-tab>
                                    <b-tab title="Instructor">
                                        <div class="pt-2 pb-5">
                                            <h4 class="color-dark-blue pb-2">Meet Your Instructor</h4>
                                            <b-card >
                                                <template #header>
                                                    <h5 class="mb-0 color-dark-blue">Rong Marin</h5>
                                                </template>
                                                <b-card-text>
                                                    <b-row>
                                                        <b-col cols="7">
                                                            <b-avatar size="3.5rem" variant="info" src="https://placekitten.com/400/400"></b-avatar>
                                                            <b-badge class="custome-badge">
                                                               <p class="mb-0">Instructor</p> 
                                                            </b-badge>
                                                        </b-col>
                                                        <b-col cols="5">
                                                           <b-card>
                                                             <b-row>
                                                                <b-col cols="6" class="d-flex align-items-center">
                                                                    <i class="material-icons color-dark-blue">school</i>
                                                                    <p class="mb-0 pl-2 color-dark-blue">0 Students</p>
                                                                </b-col>
                                                                <b-col cols="6" class="d-flex align-items-center">
                                                                  <i class="material-icons color-dark-blue">computer</i> 
                                                                  <p class="mb-0 pl-2 color-dark-blue">1 Courses</p>
                                                                </b-col>
                                                                <b-col cols="12" class="d-flex align-items-center mt-4">
                                                                  <i class="material-icons color-dark-blue">card_membership</i> 
                                                                  <p class="mb-0 pl-2 color-dark-blue"> Author Level 1</p>
                                                                </b-col>
                                                             </b-row>

                                                           </b-card>
                                                        </b-col>
                                                    </b-row>
                                                    <b-row>
                                                        <b-col cols="12">
                                                            <p class="color-dark-blue mb-0">
                                                                About Instructor
                                                            </p>
                                                        </b-col>
                                                        <b-col cols="12" class="mt-2">
                                                            <p>
                                                                I'm a Rong Marin. I'm here to share my IT knowledge experience via recorded videos. More: t.me/HKimhab
                                                            </p>
                                                        </b-col>
                                                    </b-row>
                                                </b-card-text>
                                            </b-card>
                                        </div>
                                    </b-tab>
                                </b-tabs>
                            </div>
                        </b-col>
                        <b-col cols="4">
                            <div class="bg-white mt-5 p-3">
                                <div class="thumbnail">
                                    <figure>
                                        <img src="https://via.placeholder.com/200x150" alt="">
                                    </figure>
                                </div>
                                <h2 class="color-dark-blue pt-2">
                                    $ 41.00
                                </h2>
                                <b-row class="mt-2">
                                    <b-col cols="8" class="d-flex align-items-center"> 
                                        <i class="material-icons" style="font-size:20px">schedule</i>
                                        <p class="mb-0 pl-2">Course Duration</p>
                                    </b-col>
                                    <b-col cols="4">
                                        <p align="right" class="mb-0">21 h 15 m 9 s</p>
                                    </b-col>
                                </b-row>
                                <b-row class="mt-2">
                                    <b-col cols="8" class="d-flex align-items-center"> 
                                        <i class="material-icons" style="font-size:20px">signal_cellular_alt</i>
                                        <p class="mb-0 pl-2">Course Level</p>
                                    </b-col>
                                    <b-col cols="4">
                                        <p align="right" class="mb-0">Medium</p>
                                    </b-col>
                                </b-row>
                                <b-row class="mt-2">
                                    <b-col cols="8" class="d-flex align-items-center"> 
                                        <i class="material-icons" style="font-size:20px">group</i>
                                        <p class="mb-0 pl-2">Student Enrolled</p>
                                    </b-col>
                                    <b-col cols="4">
                                        <p align="right" class="mb-0">0</p>
                                    </b-col>
                                </b-row>
                                <b-row class="mt-2">
                                    <b-col cols="8" class="d-flex align-items-center"> 
                                        <i class="material-icons" style="font-size:20px">g_translate</i>
                                        <p class="mb-0 pl-2">Language</p>
                                    </b-col>
                                    <b-col cols="4">
                                        <p align="right" class="mb-0">Khmer</p>
                                    </b-col>
                                </b-row>
                                <b-row class="mt-4">
                                    <b-col cols="12">
                                        <b-button 
                                          block 
                                          class="py-3 bg-red d-flex align-items-center justify-content-center"
                                          @click="Enroll()"
                                        >
                                            Enroll the course
                                            <i class="pl-2 material-icons">arrow_forward</i>
                                        </b-button>
                                    </b-col>
                                </b-row>
                                <b-row class="mt-4">
                                    <b-col cols="6">
                                        <b-button block class="py-3 border-light">
                                            Add to Wishlist
                                        </b-button>
                                    </b-col>
                                    <b-col cols="6">
                                        <b-button block class="py-3 border-light">
                                            Share Course
                                        </b-button>
                                    </b-col>
                                </b-row>
                                <b-row class="mt-4">
                                    <b-col cols="12">
                                        <h4 class="color-dark-blue">
                                            This Course Includes 
                                        </h4>
                                    </b-col>
                                </b-row>
                                <b-row class="mt-2">
                                    <b-col cols="12" class="d-flex align-items-center">
                                        <i class="material-icons">videocam</i>
                                        <p class="mb-0 pl-2">21 h 15 m 9 s Video Lectures</p>
                                    </b-col>
                                </b-row>
                                <b-row class="mt-2">
                                    <b-col cols="12" class="d-flex align-items-center">
                                        <i class="material-icons">assignment</i>
                                        <p class="mb-0 pl-2">0 Quizzes</p>
                                    </b-col>
                                </b-row>
                                <b-row class="mt-2">
                                    <b-col cols="12" class="d-flex align-items-center">
                                        <i class="material-icons">import_contacts</i>
                                        <p class="mb-0 pl-2">0 Assignments</p>
                                    </b-col>
                                </b-row>
                                <b-row class="mt-2">
                                    <b-col cols="12" class="d-flex align-items-center">
                                        <i class="material-icons">cloud_download</i>
                                        <p class="mb-0 pl-2">0 Downloadable Resources</p>
                                    </b-col>
                                </b-row>
                                <b-row class="mt-2">
                                    <b-col cols="12" class="d-flex align-items-center">
                                        <i class="material-icons">schedule</i>
                                        <p class="mb-0 pl-2">Full Lifetime Access</p>
                                    </b-col>
                                </b-row>
                                <b-row class="mt-2 mb-5">
                                    <b-col cols="12" class="d-flex align-items-center">
                                        <i class="material-icons">verified_user</i>
                                        <p class="mb-0 pl-2">Certificate of Completion</p>
                                    </b-col>
                                </b-row>
                            </div>
                        </b-col>
                    </b-row>
                    
                </b-container>
            </div>
       </b-container>

       <show-alert
         ref="show_alert_error"
       />
       
    </div>
</template>

<script>
export default{
   data(){
    return {
        
    }
   },
   components: {
        ShowAlert: () => import('~/components/ShowAlert.vue')
   },
   methods: {
    Enroll(){
        if(this.isLogin()){
            
        }else{
            this.$refs.show_alert_error.showAlert()

        }
       
    },
    
   }
}
</script>