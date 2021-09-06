<template>
    <v-dialog max-width="550" :value="value" @input="emitToParent">
        <v-card>
            <v-card-title class="pa-4 el-center-between">
                <div class="text-18 font-600">Tambah Komoditas</div>
                <v-btn icon @click="emitToParent"><v-icon>fal fa-times</v-icon></v-btn>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text class="pa-4">
                <v-layout wrap>
                    <v-flex xs12 sm4 class="el-center-on-start font-600">
                        <span>Komoditas</span>
                    </v-flex>
                    <v-flex xs12 sm8>
                        <v-text-field
                            solo
                            v-model="commodity.komoditas"
                            class="efishery-form form-style-default"
                            label="Komoditas"
                        ></v-text-field>
                    </v-flex>
                </v-layout>
                <v-layout wrap class="mt-3">
                    <v-flex xs12 sm4 class="el-center-on-start font-600">
                        <span>Harga</span>
                    </v-flex>
                    <v-flex xs12 sm8>
                        <v-text-field
                            solo
                            v-model="commodity.price"
                            class="efishery-form form-style-default"
                            label="Harga"
                        ></v-text-field>
                    </v-flex>
                </v-layout>
                <v-layout wrap class="mt-3">
                    <v-flex xs12 sm4 class="el-center-on-start font-600">
                        <span>Size</span>
                    </v-flex>
                    <v-flex xs12 sm8>
                        <v-select
                        :items="listSize"
                        class="efishery-form form-style-default"
                        label="Pilih Size"
                        item-text="size"
                        item-value="size"
                        @change="handleSelectSize"
                        solo
                        ></v-select>
                    </v-flex>
                </v-layout>
                <v-layout wrap class="mt-3">
                    <v-flex xs12 sm4 class="el-center-on-start font-600">
                        <span>Kota</span>
                    </v-flex>
                    <v-flex xs12 sm8>
                        <v-select
                        :items="listCity"
                        class="efishery-form form-style-default"
                        label="Pilih Kota"
                        item-text="city"
                        return-object
                        @change="handleSelectCity"
                        solo
                        ></v-select>
                    </v-flex>
                </v-layout>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions class="pa-4">
                <v-spacer></v-spacer>
                <v-btn class="efishery-button medium-button btn-white" text @click="emitToParent">Batal</v-btn>
                <v-btn class="efishery-button medium-button" @click="handleSaveData" :loading="isLoading">Simpan</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import { v4 as uuid } from 'uuid'

export default {
    name: 'AddCommodity',
    props: {
        value: {}
    },
    data() {
        return {
            listSize: [],
            listCity: [],
            isLoading: false,
            commodity: {
                komoditas: null,
                area_kota: null,
                area_provinsi: null,
                price: 0,
                size: 0,
                uuid: null
            }
        }
    },
    watch: {
        value: {
            immediate: true,
            handler(val) {
                if(val) {
                    this.getListSize()
                    this.getListCity()
                }
            }
        }
    },
    methods: {
        emitToParent() {
            this.$emit('input', false)
        },
        async getListSize() {
            try {
                const res = await this.$stein.komoditas.getDataSize()
                this.listSize = res
            } catch(e) {
                console.error(e)
            }
        },
        async getListCity() {
            try {
                const res = await this.$stein.komoditas.getDataCity()
                this.listCity = res
            } catch (e) {
                console.error(e)
            }
        },
        handleSelectSize(val) {
            this.commodity.size = val
        },
        handleSelectCity(val) {
            this.commodity.area_kota = val.city 
            this.commodity.area_provinsi = val.province
        },
        async handleSaveData() {
            try {
                this.isLoading = true

                this.commodity.uuid = uuid()
                const res = await this.$stein.komoditas.saveDataKomoditas(this.commodity)
                
                if(Object.keys(res).length) {
                    this.resetData()
                    this.$emit('get', true)
                    this.emitToParent()
                }
            } catch (e) {
                console.error(e)
            } finally {
                this.isLoading = false
            }
        },
        resetData() {
            this.commodity = {
                komoditas: null,
                area_kota: null,
                area_provinsi: null,
                price: 0,
                size: 0,
                uuid: null
            }
        }
    }
}
</script>