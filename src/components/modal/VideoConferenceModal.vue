<template>

</template>

<script lang="ts">
  import { defineComponent } from '@vue/composition-api'

  export default defineComponent({
    name: 'VideoConferenceModal',
    props: {
      active: {
        default: false,
        type: Boolean,
        required: true
      }
    },
    setup() {

    }
  })
</script>

<style scoped>

</style>
