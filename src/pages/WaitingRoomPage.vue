<template>
  <div id="q-app">
    <div class="q-pa-md">
      <q-stepper
        v-model="step"
        vertical
        color="primary"
        animated
      >
        <q-step
          :name="1"
          title="Check-In"
          icon="fas fa-ticket-alt"
          :done="step > 1"
        >
          Max wurde angemeldet und ist in der Warteschlangenposition Nummer 10.
          Voraussichliche Wartezeit 3 Stunden.

          <q-stepper-navigation>
            <q-btn @click="()=> handleClick(2)" color="primary" label="Continue"></q-btn>
          </q-stepper-navigation>
        </q-step>

        <q-step
          :name="2"
          title="Zeit zum Aufbrechen"
          caption="(Empfehlung)"
          icon="fas fa-car-side"
          :done="step.value > 2"
        >
          Du solltest dich auf den Weg ins Krankenhaus machen.

          <q-stepper-navigation>
            <q-btn @click="step = 3" color="primary" label="Continue"></q-btn>
            <q-btn flat @click="step = 1" color="primary" label="Back" class="q-ml-sm"></q-btn>
          </q-stepper-navigation>
        </q-step>

        <q-step
          :name="3"
          title="Ankunft"
          icon="fas fa-hospital-user"
        >
          Max hat das Krankenhaus um 19:00 Uhr erreicht.

          <q-stepper-navigation>
            <q-btn @click="step = 4" color="primary" label="Continue"></q-btn>
            <q-btn flat @click="step = 1" color="primary" label="Back" class="q-ml-sm"></q-btn>
          </q-stepper-navigation>
        </q-step>

        <q-step
          :name="4"
          title="Im Behandlung"
          icon="fas fa-user-md"
        >
          Max befindet sich seit 20:01 Uhr in Behandluch.

          <q-stepper-navigation>
            <q-btn color="primary" label="Finish"></q-btn>
            <q-btn flat @click="()=> handleClick(2)" color="primary" label="Back" class="q-ml-sm"></q-btn>
          </q-stepper-navigation>
        </q-step>
      </q-stepper>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  name: 'WaitingRoomPage',
  setup(){
    const step = ref(1)
    function handleClick(selectedStep: number){
      step.value = selectedStep
    }
    return {step, handleClick}
  }
})
</script>
