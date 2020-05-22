<template>
  <q-form :class="$style.form">
    <h1 :class="$style.headline">{{ title }}</h1>
    <q-input hint="Email" type="text" v-model="email"></q-input>
    <q-input hint="Passwort" type="password" v-model="password"></q-input>
    <q-btn type="submit">Login</q-btn>
  </q-form>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

const useEmail = () => {
  const email = ref('')
  return { email }
}

const usePassword = () => {
  const password = ref('')
  return { password }
}

export default defineComponent({
  name: 'PersonalData',
  props: {
    title: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
    },
  },
  setup() {
    return { ...useEmail(), ...usePassword() }
  },
})
</script>
<style lang="scss" module>
@media (max-width: 500px) {
  .headline {
    font-size: 10vw;
  }
}
.headline {
  text-align: center;
  font-size: 3rem;
}
.form {
  display: grid;
  width: 95vw;
  grid-gap: 2rem;
  align-content: center;
  justify-content: center;
}
</style>
