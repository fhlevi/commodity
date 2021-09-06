<template>
    <v-app-bar
      app
      color="white"
      dark
      class="efishery-header px-7"
    >
        <div class="d-flex align-center">
            <v-img
            alt="Vuetify Name"
            class="shrink mt-1"
            contain
            min-width="100"
            src="https://s3.amazonaws.com/i3.cleantech/uploads/company/company_logo/22/412222/efishery.png"
            width="100"
            />
        </div>
    </v-app-bar>
</template>

<script>
export default {
    name: 'HeaderNavigation',
}
</script>