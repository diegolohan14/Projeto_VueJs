<!-- AssociateProducts.vue -->
<template>
    <div class="Box">
       <h1>Associação de Produtos</h1>
       <form @submit.prevent="associateProducts" class="formulario">
         <div class="form-group">
           <label for="customer-name">Cliente</label>
           <select id="customer-name" v-model="customerId">
             <option class="option1" v-for="customer in customers" :key="customer.id" :value="customer.id" >
               {{ customer.name }}
             </option>
           </select>
         </div>
         <div class="form-group">
           <label for="product-name">Produto</label>
           <select id="product-name" v-model="productId">
             <option class="option1" v-for="product in products" :key="product.id" :value="product.id" >
               {{ product.name }}
             </option>
           </select>
         </div>
         <button type="submit" class="btn btn-primary">Associar Produto</button>
       </form>
    </div>
   </template>
   
   <script>
   import axios from 'axios';
   
   export default {
    data() {
      return {
        customers: [],
        products: [],
        customerId: '',
        productId: '',
      };
    },
    async created() {
      this.customers = await axios.get('/api/customers');
      this.products = await axios.get('/api/products');
    },
    methods: {
      async associateProducts() {
        await axios.post('/api/associate-products', { customerId: this.customerId, productId: this.productId });
      },
    },
   };
   </script>