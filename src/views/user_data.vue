<template >


<div class="card bg-light">
    <article class="card-body mx-auto" style="max-width: 400px;">
        <h4 class="card-title mt-3 text-center">Update Membership</h4>
        <form @submit.prevent="">
        <div class="form-group input-group">
            <div class="input-group-prepend">
                <span class="input-group-text"> <i class="fa fa-user"></i> </span>
            </div>
            <input :value="user.name" class="form-control" placeholder="Full name" type="text">
        </div> <!-- form-group// -->
        <div class="form-group input-group">
            <div class="input-group-prepend">
                <span class="input-group-text"> <i class="fa fa-phone"></i> </span>
            </div>
            <input :value="user.mobile_no" class="form-control" placeholder="Phone number" type="text">
        </div> <!-- form-group// -->      
        <div class="form-group input-group">
            <div class="input-group-prepend">
                <span class="input-group-text"> <i class="fa fa-user"></i> </span>
            </div>
            <input :value="user.paid_amount" class="form-control" placeholder="Paid Amount" type="text">
        </div> <!-- form-group// -->
        <div class="form-group input-group">
            <div class="input-group-prepend">
                <span class="input-group-text"> <i class="fa fa-phone"></i> </span>
            </div>
            <input :value="user.un_paid_amount" class="form-control" placeholder="Un-Paid Amount" type="text">
        </div> <!-- form-group// -->
        <div class="form-group input-group">
    	<div class="input-group-prepend">
		    <span class="input-group-text"> <i class="fa fa-building"></i> </span>
		</div>
		<select :value="user.sub_type" class="form-control">
			<option  disabled selected> Select Subscription type</option>
			<option value="GYM">GYM Only</option>
            <option value="GYM & Cardio">GYM & Cardio</option>
		</select>
	    </div> <!-- form-group end.// -->
        <div class="form-group input-group">
            <div class="input-group-prepend">
                <span class="input-group-text"> <i class="fa fa-user"></i> </span>
            </div>

            <input id="from" :value="user.sub_from" class="form-control" placeholder="Subscription From" type="date">
        </div> <!-- form-group// -->
        <div class="form-group input-group">
            <div class="input-group-prepend">
                <span class="input-group-text"> <i class="fa fa-user"></i> </span>
            </div>
            <input :value="user.sub_to" class="form-control" placeholder="Subscription To" type="date">
        </div> <!-- form-group// -->
        <div class="form-group input-group">
            <div class="input-group-prepend">
                <span class="input-group-text"> <i class="fa fa-user"></i> </span>
            </div>
            <input :value="user.sessions_count" class="form-control" placeholder="Count Of sessions" type="text">
        </div> <!-- form-group// -->                              
        <div class="form-group">
            <button @click="this.get_users" type="submit" class="btn btn-primary btn-block"> Get data  </button>
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
import  Store from '@/store';
    export default {
        name: "users dashboard",
        components: {
        },
        data() {
            return{
              users: [],
              onDetect:null,
              user: [],
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
            }
        },
        methods:{
          get_users() {
                this.res =(JSON.parse(localStorage.getItem("store")));
                console.log(this.res.users);
                this.users = this.res.users;
                for (let index = 0; index < this.users.length; index++) {
                  if(this.users[index].id == this.$route.query.id){
                    this.user = this.users[index];
                  }
                }
                console.log(this.user);
                return this.res;
            }
        },
        beforeCreate() {
          // this.get_users();
        },
    }
</script>