<template>
  <v-list-tile @click.stop="left = !left" :to="drawerLink.link" :href="drawerLink.href" ripple v-tooltip:top="{ html: drawerLink.label }">
    <v-list-tile-action>
      <v-icon>{{ drawerLink.icon }}</v-icon>
    </v-list-tile-action>
    <v-list-tile-content>
      <v-list-tile-title>{{ drawerLink.label }}</v-list-tile-title>
    </v-list-tile-content>
  </v-list-tile>
</template>

<script>
  export default {
    props: {
      drawerLink: {
        type: Object,
        required: true
      }
    }
  }
</script>
