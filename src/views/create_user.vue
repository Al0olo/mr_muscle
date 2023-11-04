<template>

    <div class="card bg-light">
    <article class="card-body mx-auto" style="max-width: 400px;">
        <h4 class="card-title mt-3 text-center">Create Membership</h4>
        <form @submit.prevent="">
        <div class="form-group input-group">
            <div class="input-group-prepend">
                <span class="input-group-text"> <i class="fa fa-user"></i> </span>
            </div>
            <input name="" class="form-control" placeholder="Full name" type="text">
        </div> <!-- form-group// -->
        <div class="form-group input-group">
            <div class="input-group-prepend">
                <span class="input-group-text"> <i class="fa fa-phone"></i> </span>
            </div>
            <input name="" class="form-control" placeholder="Phone number" type="text">
        </div> <!-- form-group// -->      
        <div class="form-group input-group">
            <div class="input-group-prepend">
                <span class="input-group-text"> <i class="fa fa-user"></i> </span>
            </div>
            <input name="" class="form-control" placeholder="Paid Amount" type="text">
        </div> <!-- form-group// -->
        <div class="form-group input-group">
            <div class="input-group-prepend">
                <span class="input-group-text"> <i class="fa fa-phone"></i> </span>
            </div>
            <input name="" class="form-control" placeholder="Un-Paid Amount" type="text">
        </div> <!-- form-group// -->
        <div class="form-group input-group">
    	<div class="input-group-prepend">
		    <span class="input-group-text"> <i class="fa fa-building"></i> </span>
		</div>
		<select class="form-control">
			<option disabled selected> Select Subscription type</option>
			<option>GYM Only</option>
            <option>GYM & Cardio</option>
		</select>
	    </div> <!-- form-group end.// -->
        <div class="form-group input-group">
            <div class="input-group-prepend">
                <span class="input-group-text"> <i class="fa fa-user"></i> </span>
            </div>

            <input id="from" name="" class="form-control" placeholder="Subscription From" type="date">
        </div> <!-- form-group// -->
        <div class="form-group input-group">
            <div class="input-group-prepend">
                <span class="input-group-text"> <i class="fa fa-user"></i> </span>
            </div>
            <input name="" class="form-control" placeholder="Subscription To" type="date">
        </div> <!-- form-group// -->
        <div class="form-group input-group">
            <div class="input-group-prepend">
                <span class="input-group-text"> <i class="fa fa-user"></i> </span>
            </div>
            <input name="" class="form-control" placeholder="Count Of sessions" type="text">
        </div> <!-- form-group// -->                              
        <div class="form-group">
            <button type="submit" class="btn btn-primary btn-block"> Create QR  </button>
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
    export default {
        name: "create_user",
        methods: {
            newUser: function() {
            // We use "commit" to call mutations in Vuex
            this.$store.commit('addUser', {
                id: uuidv4(),
                name: "ali",
                email: "alaa@gmail.com",
            })
        }
    }
    }
    </script>