<template>
  <div id="q-app">
    <div>
      <q-circular-progress
      v-show="false"
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
          @click="()=> handleClick(2)"
        >
          Max wurde angemeldet und ist in der Warteschlangen für das Universitätsklinikum Freiburg.
          Voraussichliche Wartezeit {{ Math.floor((timerCaption % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))  + 'h'}}
          {{ Math.floor((timerCaption % (1000 * 60 * 60)) / (1000 * 60))  + 'm'}}
          {{ Math.floor((timerCaption % (1000 * 60)) / 1000) + 's'}}.
        </q-step>

        <q-step
          :name="2"
          title="Zeit zum Aufbrechen"
          caption="(Empfehlung)"
          icon="fas fa-car-side"
          :done="step.value > 2"
          @click="step = 3"
        >
          Du solltest dich auf den Weg ins Krankenhaus machen.
        </q-step>

        <q-step
          :name="3"
          title="Ankunft"
          icon="fas fa-hospital-user"
          @click="step = 4"
        >
          Max hat das Krankenhaus um 19:00 Uhr erreicht.
        </q-step>

        <q-step
          :name="4"
          title="Im Behandlung"
          icon="fas fa-user-md"
        >
          Max befindet sich seit 20:01 Uhr in Behandlung.
        </q-step>
      </q-stepper>
    </div>
    <div class="q-pa-md">
      <q-card>
        <q-card-section class="bg-blue text-white">
          <q-icon
        v-for="size in ['md']"
        :key="size"
        :size="size"
        name="fas fa-info-circle"
      ></q-icon>
          Bitte halten Sie ihr Telefon bereit, um den baldigen Anruf entgegen zu nehmen.
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, Ref, ref } from '@vue/composition-api'

export default defineComponent({
  name: 'WaitingRoomPage',
  setup(){
    const step = ref(1)
    function handleClick(selectedStep: number){
      step.value = selectedStep
    }

    // timer
    const timer: Ref<number> = ref(1)
    const timerCaption: Ref<number> = ref(2)
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
