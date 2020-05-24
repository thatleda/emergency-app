<template>
  <q-page :class="$style.page">
    <h3 v-if="selectedHospital.value">{{ selectedHospital.value.name }}</h3>
    <HospitalSearch @hospitalSelected="signUp" />
    <SignUpModal :active="signUpActive"></SignUpModal>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
import HospitalSearch from 'components/HospitalSearch.vue'
import SignUpModal from 'components/modal/SignUpModal.vue'

export default defineComponent({
  name: 'PageIndex',
  components: { HospitalSearch, SignUpModal },
  setup() {
    const signUpActive = ref(false)
    const selectedHospital = ref('')
    function signUp(hospital: string) {
      selectedHospital.value = hospital
      signUpActive.value = true
    }
    return { selectedHospital, signUpActive, signUp }
  },
})
</script>
<style module lang="scss">
.page {
  padding: 2rem;
  display: grid;
  justify-items: center;
}
</style>
