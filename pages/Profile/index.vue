<template>
    <div class="container profile-page">
        <b-row class="mt-5">
            <b-col cols="4">
                <div class="bg-white">
                    <div class="avatar-profile d-flex justify-content-center align-items-center flex-column p-3">
                        <b-avatar src="https://placekitten.com/300/300" size="6rem"></b-avatar>
                        <h4 class="mb-0 mt-2 text-uppercase">
                            Rong Marin
                        </h4>
                        <p class="text-uppercase">
                            Student
                        </p>
                    </div>
                    <b-row class="pl-4">
                        <table class="table table-borderless">
                            <tr>
                                <td width="150">
                                    <div class="d-flex align-items-center">
                                        <i class="material-icons" style="font-size: 18px;">mail</i>
                                        <p class="mb-0 pl-1">Email</p>
                                    </div>
                                </td>
                                <td width="10">:</td>
                                <td>rongmarin98@gmail.com</td>
                            </tr>
                            <tr>
                                <td width="150">
                                    <div class="d-flex align-items-center">
                                        <i class="material-icons" style="font-size: 18px;">calendar_today</i>
                                        <p class="mb-0 pl-1">Date of birth</p>
                                    </div>
                                </td>
                                <td width="10">:</td>
                                <td>02 January 1988</td>
                            </tr>
                            <tr>
                                <td width="150">
                                    <div class="d-flex align-items-center">
                                        <i class="material-icons" style="font-size: 18px;">phone</i>
                                        <p class="mb-0 pl-1">Contact Us</p>
                                    </div>
                                </td>
                                <td width="10">:</td>
                                <td>094375635</td>
                            </tr>
                            <tr>
                                <td width="150">
                                    <div class="d-flex align-items-center">
                                        <i class="material-icons" style="font-size: 18px;">location_on</i>
                                        <p class="mb-0 pl-1">Address</p>
                                    </div>
                                </td>
                                <td width="10">:</td>
                                <td>Prey Sla, Prey Pnov, Pea Reang, Prey Veng</td>
                            </tr>
                        </table>
                    </b-row>
                </div>
            </b-col>
            <b-col cols="8" class="mb-4">
                <div class="bg-white">
                    <b-row class="p-3">
                        <b-col cols="8">
                            <h4 class="mb-0">Account Setting</h4>
                        </b-col>
                        <b-col cols="4">
                            <b-button pill class="bg-red float-right pl-4 pr-4">
                                Save
                            </b-button>
                        </b-col>
                        
                    </b-row>
                    <hr class="mt-0">

                    <b-row>
                        <b-col cols="12" class="pl-4">
                            <h6 class="pl-3">Avatar</h6>
                            <div>
                                <b-avatar src="https://placekitten.com/300/300" size="6rem"></b-avatar>
                            </div>
                        </b-col>
                    </b-row>
                    <hr >

                    <b-row class="p-4">
                        <b-col cols="6">
                            <b-form-group
                                    label="First Name"
                                >
                                <b-input-group>
                                        <template #prepend>
                                            <div class="rounded-left bg-form d-flex align-items-center justify-content-center px-2">
                                                <i class="material-icons">person</i>
                                            </div>
                                        </template>

                                        <b-input pill placeholder="First Name">

                                        </b-input>
                                
                                </b-input-group>
                            </b-form-group>
                        </b-col>
                        <b-col cols="6">
                            <b-form-group
                                    label="Last Name"
                                >
                                <b-input-group>
                                        <template #prepend>
                                            <div class="rounded-left bg-form d-flex align-items-center justify-content-center px-2">
                                                <i class="material-icons">person</i>
                                            </div>
                                        </template>

                                        <b-input pill placeholder="Last Name">

                                        </b-input>
                                
                                </b-input-group>
                            </b-form-group>
                        </b-col>                        
                        <b-col cols="6">
                            <b-form-group
                                    label="Phone"
                                >
                                <b-input-group>
                                        <template #prepend>
                                            <div class="rounded-left bg-form d-flex align-items-center justify-content-center px-2">
                                                <i class="material-icons">phone</i>
                                            </div>
                                        </template>

                                        <b-input pill placeholder="Phone">

                                        </b-input>
                                
                                </b-input-group>
                            </b-form-group>
                        </b-col>
                        <b-col cols="6">
                            <b-form-group
                                    label="Date of Birth"
                                >
                                <b-input-group>
                                        <template #prepend>
                                            <div class="rounded-left bg-form d-flex align-items-center justify-content-center px-2">
                                                <i class="material-icons">calendar_today</i>
                                            </div>
                                        </template>

                                        <b-input pill placeholder="Date of Birth">

                                        </b-input>
                                
                                </b-input-group>
                            </b-form-group>
                        </b-col>

                        <b-col cols="6">
                            <b-form-group
                                    label="Email"
                                >
                                <b-input-group>
                                        <template #prepend>
                                            <div class="rounded-left bg-form d-flex align-items-center justify-content-center px-2">
                                                <i class="material-icons">mail</i>
                                            </div>
                                        </template>

                                        <b-input pill placeholder="Email">

                                        </b-input>
                                
                                </b-input-group>
                            </b-form-group>
                        </b-col>
                        <b-col cols="6">
                            <b-form-group
                                    label="Password"
                                >
                                <b-input-group>
                                        <template #prepend>
                                            <div class="rounded-left bg-form d-flex align-items-center justify-content-center px-2">
                                                <i class="material-icons">lock</i>
                                            </div>
                                        </template>

                                        <b-input pill placeholder="Password">

                                        </b-input>
                                
                                </b-input-group>
                            </b-form-group>
                        </b-col>
                        <b-col cols="12">
                            <b-form-group
                             label="Address"
                            >
                                <b-form-textarea
                                    placeholder="Enter something..."
                                    rows="3"
                                    max-rows="6"
                                ></b-form-textarea>
                            </b-form-group>
                        </b-col>
                    </b-row>
                </div>
            </b-col>
        </b-row>
    </div>
</template>

<script>
export default{
    // middleware: 'acl',
    // moduleKey: 'profile',
    data(){
        return {

        }
    }
}
</script>