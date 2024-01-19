<template>
  <div class="Box">
     <h1>Registro de Produtos</h1>
     <form @submit.prevent="addProduct" class="formulario">
       <div class="form-group">
         <label for="product-name">Nome</label>
         <input type="text" id="product-name" v-model="product.name" required>
       </div>
       <div class="form-group">
         <label for="product-active">Ativo</label>
         <select id="product-active" v-model="product.active">
           <option value="true">Sim</option>
           <option value="false">Não</option>
         </select>
       </div>
       <button type="submit" class="btn btn-primary">Adicionar Produto</button>
     </form>
     <!-- Implemente uma lista para exibir todos os produtos e suas opções de edição, desativação/ativação e associação de produtos. -->
  </div>
 </template>
 
 <script>
 import axios from 'axios';
 
 export default {
  data() {
    return {
      product: {
        name: '',
        active: true,
      },
    };
  },
  methods: {
    async addProduct() {
      await axios.post('/api/products', this.product);
      this.product.name = '';
      this.product.active = true;
    },
  },
 };
 </script>

<style>
  body{
    padding: 10px;
  }
</style>