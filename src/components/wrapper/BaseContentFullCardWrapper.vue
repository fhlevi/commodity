<template>
    <v-layout wrap class="card-full-layout">
        <slot v-if="hasDialogSlot" name="dialog"></slot>
        <v-flex class="wrapper-view" v-if="hasContentSlot || hasHeaderSlot">
            <template>
                <slot name="header"></slot>
            </template>
            <template>
                <slot name="content"></slot>
            </template>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
    name: 'BaseContentFullCardWrapper',
    computed: {
        hasDialogSlot() {
            return this.$slots.hasOwnProperty('dialog')
        },
        hasHeaderSlot(){
            return this.$slots.hasOwnProperty('header')
        },
        hasContentSlot(){
            return this.$slots.hasOwnProperty('content')
        }
    }
}
</script>

<style lang="scss" scoped>
    .wrapper-view {
        min-height: 100%;
        background-color: white;
        border: 1px solid #ececec;
        border-radius: 0.4em;
    }
    .card-full-layout{
        padding: 0px 15px 25px 15px;
    }
</style>