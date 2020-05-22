<template>
  <div>
    <h1 :class="$style.headline">{{ title }}</h1>
    <div>
      {{ character }}
    </div>
    <q-form :class="$style.form">
      <q-input hint="Vorname" type="text" v-model="firstNameInput"></q-input>
      <q-input hint="Nachname" type="text" v-model="lastNameInput"></q-input>
      <q-input hint="Geburtsdatum" type="date" v-model="birthday"></q-input>
      <q-btn type="submit">Abschicken</q-btn>
    </q-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
import { useQuery, useResult, UseResultReturn } from '@vue/apollo-composable'
import mortyGQL from '../graphql/morty.graphql'

function useNameInput() {
  const { result } = useQuery(mortyGQL)
  const firstNameInput = ref('')
  const lastNameInput = ref('')
  const character: UseResultReturn<null | any> = useResult(result, null, data => data.results)
  return { firstNameInput, lastNameInput, character }
}

function useBirthDateInput() {
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
.headline {
  font-size: 10vw;
  padding: 2rem;
}
.form {
  display: grid;
  max-width: 80vw;
  grid-gap: 3rem;
  align-content: center;
  justify-content: center;
}
</style>
