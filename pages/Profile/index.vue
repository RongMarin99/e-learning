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
            <b-col cols="8">
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
                        <hr>
                    </b-row>
                </div>
            </b-col>
        </b-row>
    </div>
</template>

<script>
export default{
    data(){
        return {

        }
    }
}
</script>