<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import metaInfo from 'Helper/mixins/metaInfo.js';

export default {
  name: 'App',
  mixins: [metaInfo],
  data: () => ({
    //
  }),
  created() {
    this.initSetFavicon(require('Assets/images/icon/favicon.png'))
  },
};
</script>
