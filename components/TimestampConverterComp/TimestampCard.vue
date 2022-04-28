<template>
  <v-card :color="$colorScheme.Light_Red" height="290">
    <v-card-title>{{ title }}</v-card-title>

    <v-container class="content">
      <v-row class="row-1">
        <v-col cols="4">
          <v-datetime-picker
            v-model="time"
            label="Select Datetime"
            time-format="HH:mm:ss"
            :time-picker-props="{
              useSeconds: true,
              ampmInTitle: true,
            }"
            :text-field-props="{
              hideDetails: true,
            }"
          >
            <template slot="dateIcon">
              <v-icon>mdi-calendar-range</v-icon>
            </template>
            <template slot="timeIcon">
              <v-icon>mdi-timer-outline</v-icon>
            </template>
            <template slot="actions" slot-scope="{ parent }">
              <v-btn :color="$colorScheme.Light_Red" @click="parent.okHandler"
                >OK</v-btn
              >
            </template>
          </v-datetime-picker>
        </v-col>
        <v-col cols="8">
          <v-row>
            <v-col cols="6" class="timestamp-container">
              <v-text-field
                hide-details
                :value="timestamp"
                label="Unix Timestamp"
                type="number"
                @change="handleInputChange"
              />
            </v-col>
            <v-col cols="1" class="button-container">
              <v-btn icon small class="button" @click="copyTimestamp">
                <v-icon small>mdi-content-copy</v-icon>
              </v-btn>
            </v-col>
            <v-col cols="1" class="button-container">
              <v-btn icon small class="button" @click="time = new Date()">
                <v-icon small>mdi-refresh</v-icon>
              </v-btn>
            </v-col>
            <v-col cols="4" class="switch-container">
              <v-switch
                :value="isMilliseconds"
                :label="isMilliseconds ? 'ms' : 's'"
                dense
                hide-details
                flat
                :ripple="false"
                class="switch"
                @change="handleToggleMilliseconds"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-row class="row-2">
        <v-col v-for="(timeComponent, index) of timeComponents" :key="index">
          <v-text-field
            :label="timeComponent.label"
            :value="timeComponent.getValue(time)"
            type="number"
            hide-details
            @input="timeComponent.setValue"
          />
        </v-col>
      </v-row>

      <v-row class="row-3">
        <v-col cols="6" class="text-container text-body2">
          UTC(ISO 8601)
        </v-col>
        <v-col cols="5" class="text-container text-caption formatted">
          {{ utcTime }}
        </v-col>
        <v-col cols="1" class="button-container">
          <v-btn icon @click="copyUtcTime">
            <v-icon small>mdi-content-copy</v-icon>
          </v-btn>
        </v-col>
      </v-row>

      <v-divider />

      <v-row class="row-4">
        <v-col cols="3">
          <v-select
            :value="formatType"
            :items="formatTypeList"
            item-text="text"
            item-value="type"
            dense
            hide-details
            class="text-body2 select"
            @change="handleChangeFormatType"
          />
        </v-col>
        <v-col cols="3">
          <v-switch
            v-show="
              [FormatType.DATE_TIME, FormatType.TIME].includes(formatType)
            "
            :value="hour12"
            :label="hour12 ? '12' : '24'"
            dense
            :ripple="false"
            hide-details
            flat
            class="switch"
            @change="handleToggleIsHour12"
          />
        </v-col>
        <v-col cols="5" class="text-container text-caption formatted">
          {{ formattedTimeString }}
        </v-col>
        <v-col cols="1" class="button-container">
          <v-btn icon @click="copyFormattedTimeString">
            <v-icon small>mdi-content-copy</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>

    <v-snackbar
      v-model="snackbar"
      :timeout="1000"
      top
      elevation="6"
      class="snackbar"
    >
      Copied!
    </v-snackbar>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import dayjs from 'dayjs'

const KEY_PREFIX = '__TIMESTAMP_CONVERTER__'

enum FormatType {
  DATE_TIME,
  TIME,
  DATE,
}

export default Vue.extend({
  name: 'TimestampCard',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      time: new Date(),
      isMilliseconds: false,
      formatType: FormatType.DATE_TIME,
      hour12: false,
      snackbar: false,
    }
  },
  computed: {
    FormatType(): typeof FormatType {
      return FormatType
    },
    formatTypeList(): { type: FormatType; text: string }[] {
      return [
        { type: FormatType.DATE_TIME, text: 'Datetime' },
        { type: FormatType.TIME, text: 'Time' },
        { type: FormatType.DATE, text: 'Date' },
      ]
    },
    timeComponents(): {
      label: string
      getValue: (v: Date) => void
      setValue: (v: string) => void
    }[] {
      return [
        {
          label: 'Year',
          getValue: (v: Date) => v.getFullYear(),
          setValue: (v: string) => {
            this.time = new Date(
              dayjs(this.time).set('year', Number(v)).valueOf()
            )
          },
        },
        {
          label: 'Month',
          getValue: (v: Date) => v.getMonth() + 1,
          setValue: (v: string) => {
            this.time = new Date(
              dayjs(this.time)
                .set('month', Number(v) - 1)
                .valueOf()
            )
          },
        },
        {
          label: 'Day',
          getValue: (v: Date) => v.getDate(),
          setValue: (v: string) => {
            this.time = new Date(
              dayjs(this.time).set('date', Number(v)).valueOf()
            )
          },
        },
        {
          label: 'Hour',
          getValue: (v: Date) => v.getHours(),
          setValue: (v: string) => {
            this.time = new Date(
              dayjs(this.time).set('hour', Number(v)).valueOf()
            )
          },
        },
        {
          label: 'Minute',
          getValue: (v: Date) => v.getMinutes(),
          setValue: (v: string) => {
            this.time = new Date(
              dayjs(this.time).set('minute', Number(v)).valueOf()
            )
          },
        },
        {
          label: 'Second',
          getValue: (v: Date) => v.getSeconds(),
          setValue: (v: string) => {
            this.time = new Date(
              dayjs(this.time).set('second', Number(v)).valueOf()
            )
          },
        },
      ]
    },
    timestamp(): number {
      return Math.floor(this.time.valueOf() / (this.isMilliseconds ? 1 : 1000))
    },
    utcTime(): string {
      return this.time.toISOString()
    },
    formattedTimeString(): string {
      const { time, hour12, formatType } = this
      if (formatType === FormatType.DATE_TIME) {
        return time.toLocaleString('en', { hour12 })
      } else if (formatType === FormatType.TIME) {
        return time.toLocaleTimeString('en', { hour12 })
      } else {
        return time.toLocaleDateString('en')
      }
    },
  },
  mounted() {
    this.isMilliseconds =
      (this.$utils.getLocalStorage(
        `${KEY_PREFIX}--isMilliseconds`
      ) as boolean) || this.isMilliseconds
    this.formatType =
      (this.$utils.getLocalStorage(
        `${KEY_PREFIX}--formatType`
      ) as FormatType) || this.formatType
    this.hour12 =
      (this.$utils.getLocalStorage(`${KEY_PREFIX}--hour12`) as boolean) ||
      this.hour12
  },
  methods: {
    handleInputChange(v: string): void {
      if (!v) {
        return
      }

      if (v.length <= 10) {
        this.isMilliseconds = false
        this.time = new Date(Number(v) * 1000)
      } else {
        this.isMilliseconds = true
        this.time = new Date(Number(v))
      }
    },
    handleToggleMilliseconds(v: boolean): void {
      this.isMilliseconds = v
      this.$utils.setLocalStorage(`${KEY_PREFIX}--isMilliseconds`, v)
    },
    handleChangeFormatType(v: FormatType): void {
      this.formatType = v
      this.$utils.setLocalStorage(`${KEY_PREFIX}--formatType`, v)
    },
    handleToggleIsHour12(v: boolean): void {
      this.hour12 = v
      this.$utils.setLocalStorage(`${KEY_PREFIX}--hour12`, v)
    },
    async copyTimestamp(): Promise<void> {
      await this.$utils.copyTextToClipboard(`${this.timestamp}`)
      this.snackbar = true
    },
    async copyUtcTime(): Promise<void> {
      await this.$utils.copyTextToClipboard(this.utcTime)
      this.snackbar = true
    },
    async copyFormattedTimeString(): Promise<void> {
      await this.$utils.copyTextToClipboard(this.formattedTimeString)
      this.snackbar = true
    },
  },
})
</script>

<style lang="scss" scoped>
.content {
  padding-top: 0;

  .row {
    margin: 0;
  }

  .v-divider + .row,
  .row + .row {
    margin-top: 12px;
  }

  .row-1 {
    > .col {
      padding-top: 0;
      padding-bottom: 0;
    }

    .timestamp-container {
      padding-top: 0;
      padding-bottom: 0;
    }

    .button-container {
      padding-left: 0;
      padding-right: 0;
      position: relative;

      .button {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
      }
    }

    .switch-container {
      position: relative;

      .switch {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 0;
        margin: auto;
        align-items: center;
      }
    }
  }

  .row-2 {
    .col {
      padding-top: 0;
      padding-bottom: 0;
    }
  }

  .row-3 {
    .col {
      height: 36px;
      padding-top: 0;
      padding-bottom: 0;

      &.text-container {
        line-height: 36px;
      }

      &.button-container {
        position: relative;
        padding: 0;

        .button {
          position: absolute;
          margin: auto;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
        }
      }
    }
  }

  .row-4 {
    .col {
      height: 36px;
      padding-top: 0;
      padding-bottom: 0;

      .select {
        margin-top: 0;
      }

      .switch {
        margin-top: 0;
        padding-top: 2px;
      }

      &.text-container {
        line-height: 36px;
      }

      &.button-container {
        padding: 0;
        position: relative;
      }
    }
  }

  .formatted {
    font-weight: 600;
  }
}
.snackbar::v-deep .v-snack__content {
  text-align: center;
}
</style>
