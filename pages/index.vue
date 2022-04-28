<template>
  <div>
    <div class="text-h3">All Utilities</div>

    <div class="list">
      <v-row justify="start" align="center">
        <v-col
          v-for="(
            { title, description, icon, to, disabled }, index
          ) in utilConfigList"
          :key="index"
          cols="3"
        >
          <v-hover v-slot="{ hover }">
            <v-card
              :hover="hover"
              :to="to"
              :disabled="disabled"
              :color="hover ? '#2e2e2e' : '#1e1e1e'"
              height="300px"
              class="card"
            >
              <v-card-title>{{ title }}</v-card-title>
              <v-card-text>{{ description }}</v-card-text>
              <v-icon x-large class="icon">{{ icon }}</v-icon>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  data() {
    return {
      utilConfigList: this.$utilConfigList,
    }
  },
})
</script>

<style lang="scss" scoped>
.list {
  margin-top: 30px;

  .card {
    .icon {
      position: absolute;
      left: 0;
      right: 0;
    }
  }
}
</style>
