<template>
  <q-form :class="$style.form">
    <h1 :class="$style.headline">{{ title }}</h1>
    <q-input hint="Vorname" type="text" v-model="firstNameInput"></q-input>
    <q-input hint="Nachname" type="text" v-model="lastNameInput"></q-input>
    <q-input hint="Geburtsdatum" type="date" v-model="birthday"></q-input>
    <q-btn type="submit" :class="$style.submitButton">Abschicken</q-btn>
  </q-form>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

const useNameInput = () => {
  const firstNameInput = ref('')
  const lastNameInput = ref('')
  return { firstNameInput, lastNameInput }
}

const useBirthDateInput = () => {
  const birthday = ref()
  return { birthday }
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
    return { ...useNameInput(), ...useBirthDateInput() }
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
.submitButton {
  width: 20rem;
  max-width: 50vw;
}
</style>
