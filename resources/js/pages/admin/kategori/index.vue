<template>
  <div class="row">
    <div class="col-lg-10 m-auto">
      <card :title="$t('Kategori')">


            <table id="myTable" class="table table-hover table-striped py-2 px-2" style="width:100%">
        <thead class="table-dark">
            <tr >
                <th>No</th>
                <th>Aksi</th>
                <th>Nama</th>
                <th>Prefix</th>
                <th>Kode</th>
            </tr>
        </thead>
        <tbody>
           <template v-for="(data,index) in datas">
              <tr >
                <td class="babeng-min-row text-center">{{index+1}}</td>
                <td class="babeng-min-row">
                  <button class="btn btn-sm btn-info">
                    <i class="fas fa-angle-double-right"></i>
                    </button>
                </td>
                <td>{{data.nama}}</td>
                <td>{{data.prefix}}</td>
                <td>{{data.kode}}</td>
            </tr>
        </template>
        </tbody>
    </table>

      </card>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  middleware: 'auth',

  async asyncData () {
    const { data: getdatas } = await axios.get('/api/kategori')
    // console.log(getdatas);
    let datas = getdatas.data;
        console.log(datas)
    return {
      datas
    }
  },

  metaInfo () {
    return { title: this.$t('home') }
  }
}
</script>
