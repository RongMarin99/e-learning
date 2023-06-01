<template>
    <div  style="height: fit-content;">
        <b-container fluid>
            <div
                class="bg-image-contact" 
                style="background-image: url('https://dreamslms-wp.dreamguystech.com/wp-content/themes/dreamslms/assets/images/b.png');"
            >
        
                <h1 class="color-dark-blue">
                   Contact Us
                </h1>
           
            </div>
        </b-container>

        <b-container fluid class="bg-white p-5">
            <b-container class="p-4">
                <b-row>
                    <b-col cols="4" class="contact-card">
                        <b-card 
                        no-body 
                        class="p-4 d-flex justify-content-center align-items-center"
                        style="border-radius: 30px;"
                        >
                                <div class="bg-red-circle">
                                    <i class="material-icons">phone</i>
                                </div>
                                <h4 class="color-dark-blue mt-2">
                                    Phone
                                </h4>
                                <p class="mb-0">
                                    0184210490
                                </p>
                                <p>
                                    0973266351
                                </p>
                        </b-card>
                    </b-col>
                    <b-col cols="4" class="contact-card">
                        <b-card 
                        no-body 
                        class="p-4 d-flex justify-content-center align-items-center"
                        style="border-radius: 30px;"
                        >
                                <div class="bg-red-circle">
                                    <i class="material-icons">mail</i>
                                </div>
                                <h4 class="color-dark-blue mt-2">
                                    Email Address
                                </h4>
                                <p class="mb-0">
                                    rongmarin98@gmail.com
                                </p>
                                <p>
                                    rindeveloper99@gmail.com
                                </p>
                        </b-card>
                    </b-col>
                    <b-col cols="4" class="contact-card">
                        <b-card 
                        no-body 
                        class="p-4 d-flex justify-content-center align-items-center"
                        style="border-radius: 30px;"
                        >
                                <div class="bg-red-circle">
                                    <i class="material-icons">location_on</i>
                                </div>
                                <h4 class="color-dark-blue mt-2">
                                    Address
                                </h4>
                                <p>
                                   Prey Sla, Prey Pnov, <br> Pea Reang, Prey Veng
                                </p>
                        </b-card>
                    </b-col>
                </b-row>     
                
                <b-row class="mt-5">
                    <b-col cols="6">
                        <figure>
                            <img 
                             style="border-radius: 20px;"
                             src="https://dreamslms-wp.dreamguystech.com/wp-content/uploads/2023/02/contactleftimg.jpg" alt="">
                        </figure>
                    </b-col>
                    <b-col cols="6">
                        <h2 class="color-dark-blue">
                            Get it Touch
                        </h2>
                        <p>
                            Aliquam lorem ante, dapibus in, viverra quis
                        </p>
                        <b-row>
                            <b-col cols="6" class="mt-2">
                                <b-form-group
                                    label="Name"
                                >
                                    <b-input placeholder="Name">

                                    </b-input>
                                </b-form-group>
                            </b-col>
                            <b-col cols="6" class="mt-2">
                                <b-form-group
                                    label="Phone Number"
                                >
                                    <b-input placeholder="Phone Number">

                                    </b-input>
                                </b-form-group>
                            </b-col>
                            <b-col cols="12" class="mt-2">
                                <b-form-group
                                    label="Email"
                                >
                                    <b-input placeholder="Email">

                                    </b-input>
                                </b-form-group>
                            </b-col>
                            <b-col cols="12" class="mt-2">
                                <b-form-group
                                    label="Message"
                                >
                                    <b-textarea
                                        placeholder="Message"
                                        rows="6"
                                    >

                                    </b-textarea>
                                </b-form-group>    
                            </b-col>
                            <b-col cols="12">
                                <b-button class="bg-red">
                                    Send Message
                                </b-button>
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
            </b-container>
        </b-container>
    </div>
</template>
<script>
export default{
    
}
</script>