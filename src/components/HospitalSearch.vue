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
        :key="item.name"
        clickable
        v-ripple
        @click="() => handleHospitalSelect(item)"
      >
        <div>
          {{ item.name }}
          <q-chip color="primary" text-color="white">
            ({{ item.queue }} Personen)
          </q-chip>
          <q-chip color="secondary">({{ item.distance }} km)</q-chip>
        </div>
      </q-item>
    </q-list>
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref, SetupContext } from '@vue/composition-api'

type HospitalInformation = {
  name: string
  queue: number
  distance: number
}

function useAutocomplete(context: SetupContext) {
  const stringOptions: HospitalInformation[] = [
    { name: 'Krankenhaus Freiburg', queue: 74, distance: 5 },
    { name: 'Ev. Diakoniekrankenhaus Freiburg', queue: 40, distance: 10 },
    { name: 'St. Josefskrankenhaus Freiburg', queue: 42, distance: 15 },
    { name: 'Loretto-Krankenhaus', queue: 30, distance: 15 },
  ]
  const options: Ref<HospitalInformation[]> = ref([])
  const selectedHospital = ref('')
  const search = ref('')
  function filterFn(val: string) {
    if (val) {
      const needle = val.toLowerCase()
      options.value = stringOptions
        .filter((v: HospitalInformation) =>
          v.name.toLowerCase().includes(needle),
        )
        .sort((v1: HospitalInformation, v2: HospitalInformation) =>
          v1.queue <= v2.queue ? -1 : 1,
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
