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
                this.res =(JSON.parse(localStorage.getItem("store")));
                console.log(this.res.users);
            }
        },
        created() {
            this.get_users();
        },
    }
    </script>