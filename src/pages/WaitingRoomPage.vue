<template>
  <div id="q-app">
    <div>
      <q-circular-progress
      show-value
      class="text-red q-ma-md"
      :value="queueSize"
      size="150px"
      color="red"
      font-size="20px"
    >
      {{ queueSize - 1}}<br />ppl.
    </q-circular-progress>

    <q-circular-progress
      show-value
      class="text-red q-ma-md"
      :value="timer"
      size="150px"
      color="red"
      font-size="20px"
    >
      {{ Math.floor((timerCaption % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))  + 'h'}}
      {{ Math.floor((timerCaption % (1000 * 60 * 60)) / (1000 * 60))  + 'm'}}
      {{ Math.floor((timerCaption % (1000 * 60)) / 1000) + 's'}}
    </q-circular-progress>
    </div>
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
          Max wurde angemeldet und ist in der Warteschlangenposition Nummer {{ queueSize }}.
          Voraussichliche Wartezeit {{ Math.floor((timerCaption % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))  + 'h'}}
          {{ Math.floor((timerCaption % (1000 * 60 * 60)) / (1000 * 60))  + 'm'}}
          {{ Math.floor((timerCaption % (1000 * 60)) / 1000) + 's'}}.

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
            <q-btn flat @click="step = 2" color="primary" label="Back" class="q-ml-sm"></q-btn>
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
            <q-btn flat @click="()=> handleClick(3)" color="primary" label="Back" class="q-ml-sm"></q-btn>
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

    // timer
    const timer = ref(1)
    const timerCaption = ref(2)
    const countDownDate = new Date('May 24, 2020 17:45:00').getTime();
    const interval = setInterval(function(){
      const now = new Date().getTime()
      const distance = countDownDate - now
      if (distance < 0) {
        clearInterval(interval)
        timer.value = 0
        timerCaption.value = 0
      } else {
        // timer.value = hours + 'h ' + minutes + 'm ' + seconds + 's'
        timer.value = 100
        timerCaption.value = distance
      }
    }, 100)

    // queue
    const queueSize = ref(1)
    queueSize.value = 75

    return {step, handleClick, timer, queueSize, timerCaption}
  }
})
</script>
