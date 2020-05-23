<template>
  <q-dialog full-width v-model="active" position="top">
    <q-card>
      <q-card-section>
        <PersonalData />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import PersonalData from 'components/PersonalData'

export default defineComponent({
  name: 'SignUpModal',
  components: { PersonalData },
  props: {
    active: {
      type: Boolean,
      required: true,
    },
  },
})
</script>

<style scoped></style>
