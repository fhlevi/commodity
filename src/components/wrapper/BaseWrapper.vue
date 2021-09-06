<template>
    <div class="base-wrapper-content">
        <v-container grid-list-lg fluid class="container-inner">
            <slot name="content"></slot>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'BaseWrapper',
}
</script>