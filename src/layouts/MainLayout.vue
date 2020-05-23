<template>
  <q-layout :class="$style.layout">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          Emergency App
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container :class="$style.container">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'MainLayout',
})
</script>

<style lang="scss" module>
.layout {
  text-align: center;
}

.container {
  width: 100vw;
}
</style>
