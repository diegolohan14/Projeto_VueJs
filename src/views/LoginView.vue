<script setup>

    import {ref, reactive, onMounted} from 'vue';

    const email = ref ('');
    const senha = ref ('');

    const user = reactive({
        email:'',
        senha:''
    });

    const names = reactive([]);

    onMounted(() => {
        names.push(
            {
                firtName: 'Diêgo',
                age: 20
            },
            {
                firtName: 'Joao',
                age: 24
            },
            {
                firtName: 'Carol',
                age: 19
            },
            {
                firtName: 'Rebecão',
                age: 15
            }
        )
    });

    function login(){
        console.log(user.email, user.senha);
    }

    function remove(user){
        const index = names.findIndex (name => name.firtName == user.firtName);        
        names.splice(index, 1);
    }
</script>

<template>

    <h1 class="text-blue-900 font-bold text-3xl">Login</h1>

    <template v-if="names.length > 0">
        <ul>
            <li v-for="name in names">{{ name.firtName }} - <button v-on:click="remove(name)">remover</button></li>
        </ul>
    </template>
    <template v-else>Nenhum user encontrado.</template>
    
    <template v-if="user.email.length <= 0">Email vazio</template>
    <template v-else>Email {{ user.email }}</template>

    <form action="" @submit.prevent="login">
        <input type="text" placeholder="Email" v-model="user.email">
        <input type="text" placeholder="Senha" v-model="user.senha">
        <button type="submit">Login</button>
    </form>

</template>

<style>

</style>