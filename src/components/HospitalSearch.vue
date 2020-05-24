<template>
  <div :class="$style.hospitalSearch">
    <q-input
      :v-model="search"
      clearable
      @input="filterFn"
      rounded
      type="search"
      label="Krankenhäuser in meiner Nähe"
    >
      <template v-slot:append>
        <q-icon name="fas fa-map-marker-alt" />
      </template>
    </q-input>
    <q-list separator>
      <q-item
        v-for="item in options"
        :key="item"
        clickable
        v-ripple
        @click="() => handleHospitalSelect(item)"
      >
        {{ item }}
      </q-item>
    </q-list>
  </div>
</template>

<script lang="ts">
  import { defineComponent, Ref, ref, SetupContext } from '@vue/composition-api'

function useAutocomplete(context: SetupContext) {
  const stringOptions = [
    'Krankenhaus Freiburg (74 ppl) (5 km)',
    'Ev. Diakoniekrankenhaus Freiburg (40 ppl) (10 km)',
    'St. Josefskrankenhaus Freiburg (42 ppl) (15 km)',
    'Loretto-Krankenhaus (30 ppl) (15 km)',
  ]
  const options: Ref<string[]> = ref([])
  const selectedHospital = ref('')
  const search = ref('')
  function filterFn(val: string) {
    if (val) {
      const needle = val.toLowerCase()
      options.value = stringOptions.filter(
        (v: string) => v.toLowerCase().indexOf(needle) > -1,
      )
    } else {
      options.value = []
    }
  }

  function handleHospitalSelect(val: string) {
    selectedHospital.value = val
    context.emit('hospitalSelected', selectedHospital)
    options.value = []
  }

  return {
    search,
    selectedHospital,
    options,
    filterFn,
    handleHospitalSelect,
  }
}

export default defineComponent({
  name: 'HospitalSearch',
  setup(props, context) {
    return { ...useAutocomplete(context) }
  },
})
</script>

<style module lang="scss">
.hospitalSearch {
  width: 80%;
  max-width: 60rem;
  height: 30%;
}
</style>
