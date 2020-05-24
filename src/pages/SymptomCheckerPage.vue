<template>
  <q-form :class="$style.form">
    <q-select
      v-model="selectedSituation"
      label="Situation"
      :options="[
        'Kind krank',
        'Fieber',
        'Kopfstoß',
        'starke Blutung',
        'Sonstiges',
      ]"
      :class="$style.select"
    ></q-select>
    <q-chat-message
      v-if="['Kopfstoß', 'starke Blutung'].includes(selectedSituation)"
      :text="['Hey, wie wär\'s wenn Du einfach \'nen Krankenwagen rufst?']"
    ></q-chat-message>
    <q-input
      label="Details"
      v-model="details"
      type="textarea"
      filled
      :class="$style.input"
    ></q-input>
    <q-list :class="$style.radio">
      <q-item>
        <q-radio v-model="anamnesis" val="video"></q-radio>
        <q-item-section>
          <q-item-label>Anamnese per Video</q-item-label>
        </q-item-section>
      </q-item>
      <q-item>
        <q-radio v-model="anamnesis" val="phone"></q-radio>
        <q-item-section>
          <q-item-label>Anamnese per Telefon</q-item-label>
        </q-item-section>
      </q-item>
      <q-item>
        <q-radio v-model="anamnesis" val="no-pre"></q-radio>
        <q-item-section>
          <q-item-label>Keine Vorab-Anamnese</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
    <div :class="$style.actionButtons">
      <q-btn type="cancel">Abbrechen</q-btn>
      <RouterLink to="/waitingroom">
        <q-btn color="primary">Weiter</q-btn>
      </RouterLink>
    </div>
  </q-form>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  name: 'SymptomCheckerPage',
  setup() {
    const selectedSituation = ref(null)
    const details = ref('')
    const anamnesis = ref('video')
    return { selectedSituation, details, anamnesis }
  },
})
</script>
<style lang="scss" module>
.select {
  width: 100%;
  max-width: 60vw;
}
.input {
  width: 100%;
  max-width: 60vw;
}

.radio {
  text-align: left;
}
.form {
  display: grid;
  grid-gap: 2rem;
  padding: 3rem;
  justify-items: center;
}
.actionButtons {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-items: space-between;
  align-items: center;
}
</style>
