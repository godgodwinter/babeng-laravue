<template>
  <div>
    <h5>Testing Goodtable</h5>

         <v-btn
  elevation="2"
>Click em</v-btn>
    <!-- <vue-good-table
      :columns="columns"
      :rows="rows"/> -->

    <!-- <vue-good-table
  :columns="columns"
  :rows="rows"
  :search-options="{
    enabled: true
  }"
  >
</vue-good-table> -->
  <vue-good-table :columns="columns" :rows="rows" :pagination-options="pagination" :search-options="{ enabled: true}"
         >
          <template slot="table-row" slot-scope="props">
        <span v-if="props.column.field == 'age'">
<a class="btn btn-danger btn-sm" href="#" >{{props.formattedRow[props.column.field]}}</a>
        </span>
        <span v-else>
          {{props.formattedRow[props.column.field]}}
        </span>
      </template>
</vue-good-table>
  </div>
</template>

<script>
import { VueGoodTable } from 'vue-good-table';
import vuetify from 'vuetify'

export default {
  name: 'my-component',
components: {
  VueGoodTable,
},
  data(){
    return {
      //setting vueGoodTable
      pagination: {
        enabled: true,
        perPage: 5,
        setCurrentPage: 1,
         mode: 'pages',
        //  mode: 'records',
    // position: 'top',
        //LABEL SETTINGS
    firstLabel : 'First Page',
    lastLabel : 'Last Page',
    nextLabel: 'Next',
    prevLabel: 'Prev',
      },
      //data Example
      columns: [
        {
          label: 'Name',
          field: 'name',
        },
        {
          label: 'Age',
          field: 'age',
          type: 'number',
        },
        {
          label: 'Created On',
          field: 'createdAt',
          type: 'date',
          dateInputFormat: 'yyyy-MM-dd',
          dateOutputFormat: 'MMM do yy',
        },
        {
          label: 'Percent',
          field: 'score',
          type: 'percentage',
        },
      ],
      rows: [
        { id:1, name:"John", age: 20, createdAt: '',score: 0.03343 },
        { id:2, name:"Jane", age: 24, createdAt: '2011-10-31', score: 0.03343 },
        { id:3, name:"Susan", age: 16, createdAt: '2011-10-30', score: 0.03343 },
        { id:4, name:"Chris", age: 55, createdAt: '2011-10-11', score: 0.03343 },
        { id:5, name:"Dan", age: 40, createdAt: '2011-10-21', score: 0.03343 },
        { id:6, name:"John", age: 20, createdAt: '2011-10-31', score: 0.03343 },
        { id:6, name:"John", age: 20, createdAt: '2011-10-31', score: 0.03343 },
        { id:6, name:"John", age: 20, createdAt: '2011-10-31', score: 0.03343 },
        { id:6, name:"John", age: 20, createdAt: '2011-10-31', score: 0.03343 },
        { id:6, name:"John", age: 20, createdAt: '2011-10-31', score: 0.03343 },
        { id:6, name:"John", age: 20, createdAt: '2011-10-31', score: 0.03343 },
        { id:6, name:"John", age: 20, createdAt: '2011-10-31', score: 0.03343 },
        { id:6, name:"John", age: 20, createdAt: '2011-10-31', score: 0.03343 },
        { id:6, name:"John", age: 20, createdAt: '2011-10-31', score: 0.03343 },
        { id:6, name:"John", age: 20, createdAt: '2011-10-31', score: 0.03343 },
        { id:6, name:"John", age: 20, createdAt: '2011-10-31', score: 0.03343 },
        { id:6, name:"John", age: 20, createdAt: '2011-10-31', score: 0.03343 },
        { id:6, name:"John", age: 20, createdAt: '2011-10-31', score: 0.03343 },
        { id:6, name:"John", age: 20, createdAt: '2011-10-31', score: 0.03343 },
        { id:6, name:"John", age: 20, createdAt: '2011-10-31', score: 0.03343 },
      ],
    };
  },
};
</script>

<style scoped>
@import '~vue-good-table/dist/vue-good-table.css';
</style>
