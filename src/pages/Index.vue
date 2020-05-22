<template>
  <q-page :class="$style.page">
    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="personalData">
        <PersonalData active title="Personendaten"></PersonalData>
      </q-tab-panel>
      <q-tab-panel name="login">
        <LoginForm title="Login"></LoginForm>
      </q-tab-panel>
    </q-tab-panels>
    <q-tabs v-model="tab" :class="$style.nav">
      <q-tab name="personalData" label="Personendaten" ripple="true" />
      <q-tab name="login" label="Login" ripple="true" />
    </q-tabs>
  </q-page>
</template>

<script lang="ts">
import Vue from 'vue'

import PersonalData from 'components/PersonalData.vue'
import LoginForm from 'components/LoginForm.vue'

export default Vue.extend({
  name: 'PageIndex',
  components: { PersonalData, LoginForm },
  data() {
    return { tab: 'personalData' }
  },
})
</script>

<style lang="scss" module>
.page {
  justify-content: center;
  align-content: start;
}

.nav {
  display: flex;
  width: 100%;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
}
</style>
