<template>
  <div>
    <div class="text-h3">All utilities</div>

    <div class="list">
      <v-row justify="left" align="center">
        <v-col v-for="(utility, index) in utilities" :key="index" cols="3">
          <v-hover v-slot="{ hover }">
            <v-card
              :class="`elevation-${hover ? 24 : 6}`"
              class="transition-swing"
            >
              <v-card-title>{{ utility.name }}</v-card-title>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
const utilities = [
  {
    name: 'timestamp',
  },
  {
    name: 'timestamp',
  },
  {
    name: 'timestamp',
  },
  {
    name: 'timestamp',
  },
  {
    name: 'timestamp',
  },
  {
    name: 'timestamp',
  },
]

export default {
  name: 'IndexPage',
  data() {
    return {
      utilities,
    }
  },
}
</script>

<style scoped>
.list {
  margin-top: 30px;
}
</style>
