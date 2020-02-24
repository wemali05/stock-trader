<template>
    <div>
         <app-stock v-for="stock in stocks"></app-stock>
    </div>
</template>

<script>
import Stock from './Stock.vue';

export default {
    data(){
      return {
            stocks: [
            {id: 1, name: 'BMW', price: '110'},
            {id: 2, name: 'Google', price: '200'},
            {id: 3, name: 'Apple', price: '2500'},
            {id: 4, name: 'twitter', price: '8'},
        ]
      }
    },
    components: {
        appStock: Stock
    }
}
</script>