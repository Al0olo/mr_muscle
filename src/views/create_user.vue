<template>

    <div class="card bg-light">
        <div v-if="is_registered" class="qr-code-generated">
            <p class="lead">Generated QR Code For Scan</p>
            <vue-qrcode :value="qr_link"></vue-qrcode>
        </div>
    <article v-if="!is_registered" class="card-body mx-auto" style="max-width: 400px;">
        <h4 class="card-title mt-3 text-center">Create Membership</h4>
        <form @submit.prevent="">
        <div class="form-group input-group">
            <div class="input-group-prepend">
                <span class="input-group-text"> <i class="fa fa-user"></i> </span>
            </div>
            <input v-model="form.name" class="form-control" placeholder="Full name" type="text">
        </div> <!-- form-group// -->
        <div class="form-group input-group">
            <div class="input-group-prepend">
                <span class="input-group-text"> <i class="fa fa-phone"></i> </span>
            </div>
            <input v-model="form.mobile_no" class="form-control" placeholder="Phone number" type="text">
        </div> <!-- form-group// -->      
        <div class="form-group input-group">
            <div class="input-group-prepend">
                <span class="input-group-text"> <i class="fa fa-user"></i> </span>
            </div>
            <input v-model="form.paid_amount" class="form-control" placeholder="Paid Amount" type="text">
        </div> <!-- form-group// -->
        <div class="form-group input-group">
            <div class="input-group-prepend">
                <span class="input-group-text"> <i class="fa fa-phone"></i> </span>
            </div>
            <input v-model="form.un_paid_amount" class="form-control" placeholder="Un-Paid Amount" type="text">
        </div> <!-- form-group// -->
        <div class="form-group input-group">
    	<div class="input-group-prepend">
		    <span class="input-group-text"> <i class="fa fa-building"></i> </span>
		</div>
		<select v-model="form.sub_type" class="form-control">
			<option  disabled selected> Select Subscription type</option>
			<option value="GYM">GYM Only</option>
            <option value="GYM & Cardio">GYM & Cardio</option>
		</select>
	    </div> <!-- form-group end.// -->
        <div class="form-group input-group">
            <div class="input-group-prepend">
                <span class="input-group-text"> <i class="fa fa-user"></i> </span>
            </div>

            <input id="from" v-model="form.sub_from" class="form-control" placeholder="Subscription From" type="date">
        </div> <!-- form-group// -->
        <div class="form-group input-group">
            <div class="input-group-prepend">
                <span class="input-group-text"> <i class="fa fa-user"></i> </span>
            </div>
            <input v-model="form.sub_to" class="form-control" placeholder="Subscription To" type="date">
        </div> <!-- form-group// -->
        <div class="form-group input-group">
            <div class="input-group-prepend">
                <span class="input-group-text"> <i class="fa fa-user"></i> </span>
            </div>
            <input v-model="form.sessions_count" class="form-control" placeholder="Count Of sessions" type="text">
        </div> <!-- form-group// -->                              
        <div class="form-group">
            <button @click="newUser" type="submit" class="btn btn-primary btn-block"> Create QR  </button>
        </div> <!-- form-group// -->                                                                
    </form>
    </article>
    </div> <!-- card.// -->
    <!--container end.//-->
    
    
    </template>
    
    <style scoped>
    .divider-text {
        position: relative;
        text-align: center;
        margin-top: 15px;
        margin-bottom: 15px;
    }
    .divider-text span {
        padding: 7px;
        font-size: 12px;
        position: relative;   
        z-index: 2;
    }
    .divider-text:after {
        content: "";
        position: absolute;
        width: 100%;
        border-bottom: 1px solid #ddd;
        top: 55%;
        left: 0;
        z-index: 1;
    }
    
    .btn-facebook {
        background-color: #405D9D;
        color: #fff;
    }
    .btn-twitter {
        background-color: #42AEEC;
        color: #fff;
    }
    </style>
    
<script lang="ts">
import { v4 as uuidv4 } from 'uuid';
import  Store from '@/store';
// import {$store} from "vuex";
export default {
    name: "create_user",
    data() {
        return {
            form: {
                name: "ali",
                mobile_no: "01284177867",
                paid_amount: "100",
                un_paid_amount: "200",
                sub_type: "GYM", // or "GYM & Cardio",
                sub_from: "3/11/2023",
                sub_to: "3/2/2024",
                sessions_count: "20", 
            },
            is_registered: false,
            qr_link: "https://www.fb.com/al0olo",
        }
    },
    methods: {
        newUser() {
            let id = uuidv4();
            let name = this.form.name;
            let mobile_no= this.form.mobile_no;
            let paid_amount= this.form.paid_amount;
            let un_paid_amount= this.form.un_paid_amount;
            let sub_type= this.form.sub_type;
            let sub_from= this.form.sub_from;
            let sub_to= this.form.sub_to;
            let sessions_count= this.form.sessions_count;
        // We use "commit" to call mutations in Vuex
            let user = Store.commit ('addUser', {
                id: id,
                name: name,
                mobile_no: mobile_no,
                paid_amount: paid_amount,
                un_paid_amount: un_paid_amount,
                sub_type: sub_type,
                sub_from: sub_from,
                sub_to: sub_to,
                sessions_count: sessions_count,
            })
            this.is_registered = true;
            this.qr_link = "https://mr-muscle.vercel.app/profile?id=" + id;
            console.log(Store.getters.users);
        }
    },
}
</script>