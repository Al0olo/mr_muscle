<template>
    <h1>Hello from create user</h1>
    </template>
    
    <style scoped>
    
    </style>
    
    <script lang="ts">
    import  Store from '@/store';
    export default {
        name: "users dashboard",
        data() {
            return{
                users: [],
            }
        },
        methods:{
            get_users() {
                this.users =(Store.getters.users);
                // console.log(this.users[0].name);
            }
        },
        created() {
            this.get_users();
        },
    }
    </script>