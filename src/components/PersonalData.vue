<template>
  <q-form :class="$style.form">
    <q-select
      label="Profil auswählen"
      :options="[]"
      value=""
      :disabled="true"
      display-value="Neues erstellen"
      :class="$style.input"
    ></q-select>
    <q-input
      hint="Vorname"
      type="text"
      v-model="firstNameInput"
      :class="$style.input"
    ></q-input>
    <q-input
      hint="Nachname"
      type="text"
      v-model="lastNameInput"
      :class="$style.input"
    ></q-input>
    <q-input
      hint="Geburtsdatum"
      type="date"
      v-model="birthday"
      :class="$style.input"
    ></q-input>
    <div :class="$style.actionButtons">
      <q-btn type="cancel">Abbrechen</q-btn>
      <RouterLink to="/symptomchecker">
        <q-btn color="primary">Weiter</q-btn>
      </RouterLink>
    </div>
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
  setup() {
    return { ...useNameInput(), ...useBirthDateInput() }
  },
})
</script>
<style lang="scss" module>
.form {
  display: grid;
  grid-gap: 2rem;
  padding: 3rem;
  justify-items: center;
}

.input {
  width: 100%;
  max-width: 60vw;
}

.actionButtons {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-items: space-between;
  align-items: center;
}
</style>
