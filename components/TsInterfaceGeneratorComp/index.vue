<template>
  <div class="ts-interface-generator" :style="{ height: '100%' }">
    <v-container :style="{ height: '100%' }">
      <v-row :style="{ height: '100%' }">
        <v-col :style="{ height: '100%' }">
          <client-only>
            <CodeMirror v-model="origin" />
          </client-only>
        </v-col>
        <v-col> </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TsInterfaceGeneratorComp',
  data() {
    return {
      originOptions: {
        mode: 'text/typescript',
      },
      resultOptions: {},
      origin: '{ "x": 1 }',
      result: '',
    }
  },
  watch: {
    origin(x: string) {
      console.log(x)
    },
  },
})
</script>
