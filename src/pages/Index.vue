<template>
  <q-page>
    <q-tab-panels v-model="tab">
      <q-tab-panel name="personalData">
        <PersonalData active title="Personendaten"></PersonalData>
      </q-tab-panel>
      <q-tab-panel name="login">
        <LoginForm title="Login"></LoginForm>
      </q-tab-panel>
      <q-tab-panel name="hospitalSearch">
        <HospitalSearch title="Krankenhaussuche"></HospitalSearch>
      </q-tab-panel>
    </q-tab-panels>
    <q-tabs v-model="tab" :class="$style.nav">
      <q-tab name="personalData" label="Personendaten" :ripple="true" />
      <q-tab name="login" label="Login" :ripple="true" />
      <q-tab name="hospitalSearch" label="Krankenhaussuche" :ripple="true" />
    </q-tabs>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
import PersonalData from 'components/PersonalData.vue'
import LoginForm from 'components/LoginForm.vue'
import HospitalSearch from 'components/HospitalSearch.vue'

export default defineComponent({
  name: 'PageIndex',
  components: { PersonalData, LoginForm, HospitalSearch },
  setup() {
    const tab = ref('personalData')
    return { tab }
  },
})
</script>

<style lang="scss" module>
.nav {
  display: flex;
  width: 100vw;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
}
</style>
