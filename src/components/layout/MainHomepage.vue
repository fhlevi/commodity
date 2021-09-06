<template>
    <div>
        <toolbar-header></toolbar-header>
        <base-wrapper>
            <template slot="content">
                <router-view :key="$route.fullPath"></router-view>
            </template>
        </base-wrapper>
    </div>
</template>

<script>
export default {
    name: 'MainHomePage',
    components:{
        'toolbar-header': () => import('Components/navigation/HeaderNavigation.vue')
    },
}
</script>

<style>

</style>