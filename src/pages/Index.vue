<template>
  <q-page :class="$style.page">
    <PersonalData title="Personendaten" active></PersonalData>
  </q-page>
</template>

<script lang="ts">
import Vue from 'vue'

import PersonalData from 'components/PersonalData.vue'

export default Vue.extend({
  name: 'PageIndex',
  components: { PersonalData },
  data() {
    return {}
  },
})
</script>

<style lang="scss" module>
.page {
  max-width: 60vw;
  max-height: 90vh;
  justify-content: center;
  align-content: start;
}
</style>
