<template>
    <base-fullcard-wrapper class="mt-6">
        <template slot="dialog">
            <add-commodity v-model="isAddCommodity" @get="getListDataKomoditas"></add-commodity>
            <v-snackbar color="success" v-model="isAlertInfo" :timeout="2500">
                Data Berhasil Disimpan
            </v-snackbar>
        </template>
        <template slot="header">
            <div>
                <v-layout wrap class="pa-3">
                    <v-flex xs12 sm8>
                        <h1 class="font-600 text-24">Pengaturan Komoditas</h1>
                        <p class="text-13 text-muted">Membantu kamu untuk mengatur informasi komoditas</p>
                    </v-flex>
                    <v-flex xs12 sm4 class="el-center-on-end">
                        <v-btn class="efishery-button medium-button" @click="isAddCommodity = !isAddCommodity">
                            <v-icon>far fa-plus</v-icon> &nbsp; Tambah Komoditas
                        </v-btn>
                    </v-flex>
                    <v-flex xs12 sm3>
                        <v-text-field
                            solo
                            class="efishery-search"
                            append-icon="fal fa-search"
                            label="Cari komoditas. . ."
                            @keyup.enter="enterTrigger"
                            @keyup.delete="deleteTrigger"
                        ></v-text-field>
                    </v-flex>
                </v-layout>
            </div>
        </template>
        <template slot="content">
            <div>
                <v-layout wrap>
                    <v-flex xs12 pa-3>
                        <v-data-table
                            class="efishery-datatable efishery-table-hover"
                            :headers="header"
                            :items="dataItems"
                        >
                            <template slot="item" slot-scope="props">
                                <tr>
                                    <td>{{ haveDataAvailability(props.item.komoditas) }}</td>
                                    <td>{{ haveDataAvailability(props.item.size) }}</td>
                                    <td>{{ haveDataAvailability(props.item.price, 'price') }}</td>
                                    <td>{{ haveDataAvailability(props.item.area_kota) }}</td>
                                    <td>{{ haveDataAvailability(props.item.area_provinsi) }}</td>
                                </tr>
                            </template>
                        </v-data-table>
                    </v-flex>
                </v-layout>
            </div>
        </template>
    </base-fullcard-wrapper>
</template>

<script>
import stringToCurrency from 'Helper/mixins/stringToCurrency';
import AddCommodity from './AddCommodity.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  components: { AddCommodity },
    name: 'ViewHome',
    mixins: [stringToCurrency],
    data() {
        return {
            header: [
                { text: 'Komoditas',align: 'left',value: 'nama_profil',sortable : false, width: '160px'},
                { text: 'Size', value: 'keterangan_profil', sortable : false },
                { text: 'Harga', value: 'action',  sortable : false, align: 'left'},
                { text: 'Kota', value: 'action', sortable : false },
                { text: 'Provinsi', value: 'action',  sortable : false, align: 'left', width: '160px'},
            ],
            dataItems: [],
            dataItemsSearch: [],
            isAddCommodity: false,
            isAlertInfo: false
        }
    },
    computed: {
        ...mapGetters({
            gx_dataCommodity: 'storeKomoditas/dataCommodity'
        })
    },
    created() {
        this.getListDataKomoditas()
    },
    methods: {
        ...mapActions({
            ax_setDataCommodity: 'storeKomoditas/setDataCommodity'
        }),
        async getListDataKomoditas(alert=false) {
            try {
                if(alert) {
                    this.isAlertInfo = alert 
                }
                const res = await this.$stein.komoditas.getDataKomoditas()
                this.ax_setDataCommodity(res)
                this.generateDataToList()
            } catch (e) {
                console.error(e)
            }
        },
        generateDataToList() {
            const dataCommodity = this.gx_dataCommodity

            this.dataItems = dataCommodity
            this.dataItemsSearch = dataCommodity
        },
        haveDataAvailability(data, type=null) {
            const allowed_to_currency = ['price']

            if(!!data) {
                if(allowed_to_currency.indexOf(type) != -1) {
                    return this.toRupiah(data)
                }

                return data
            }

            return '-'
        },
        enterTrigger(e) {
            const value = e.target.value

            if(value.length) {
                this.dataItems = this.dataItemsSearch.filter(_filter => {
                    if(
                        !!_filter.komoditas && _filter.komoditas.toLowerCase().includes(value.toLowerCase()) ||
                        !!_filter.size && _filter.size.toLowerCase().includes(value.toLowerCase()) || 
                        !!_filter.price && _filter.price.toLowerCase().includes(value.toLowerCase()) ||
                        !!_filter.area_kota && _filter.area_kota.toLowerCase().includes(value.toLowerCase()) ||
                        !!_filter.area_provinsi && _filter.area_provinsi.toLowerCase().includes(value.toLowerCase())
                    ) {
                        return _filter
                    } 
                })
            } else {
                this.dataItems = this.dataItemsSearch
            }
        },
        deleteTrigger(e) {
            const value = e.target.value
            
            if(!value.length) {
                this.dataItems = this.dataItemsSearch
            }
        }
    }
}
</script>