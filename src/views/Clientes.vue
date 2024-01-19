<template>
    <div class="Box">
       <h1>Cadastro de Cliente</h1>
       <form @submit.prevent="handleSubmit" class="formulario">
         <div>
           <label for="name">Nome</label>
           <input type="text" id="name" v-model="customer.name" required>
         </div>
         <div>
           <label for="document">Documento</label>
           <input type="text" id="document" v-model="customer.document" required>
         </div>
         <div>
           <label for="phone">Telefone</label>
           <input type="text" id="phone" v-model="customer.phone" required>
         </div>
         <div>
           <label for="email">Email</label>
           <input type="email" id="email" v-model="customer.email" required>
         </div>
         <div>
           <label for="active">Ativo</label>
           <select id="active" v-model="customer.active">
             <option value="true">Sim</option>
             <option value="false">Não</option>
           </select>
         </div>
         <button type="submit">Enviar</button>
       </form>
    </div>
   </template>
   
   <script>
   export default {
    data() {
       return {
         customer: {
           name: '',
           document: '',
           phone: '',
           email: '',
           active: true
         }
       }
    },
    methods: {
       handleSubmit() {
       }
    }
   };
   </script>