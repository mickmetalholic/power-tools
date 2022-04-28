<template>
  <div>
    <v-row>
      <v-col>
        <timestamp-card title="Time Converter" />
      </v-col>
      <!-- <v-col>
        <timestamp-card title="Time #2" />
      </v-col> -->
    </v-row>

    <!-- <v-row>
      <timestamp-code />
    </v-row> -->
  </div>
</template>

<script>
import TimestampCard from './TimestampCard.vue'

export default {
  name: 'TimestampConverter',
  components: { TimestampCard },
}
</script>
