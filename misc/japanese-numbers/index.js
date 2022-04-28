const HOUR = [
  'れいじ',
  'いちじ',
  'にじ',
  'さんじ',
  'よじ',
  'ごじ',
  'ろくじ',
  'しちじ',
  'はちじ',
  'くじ',
  'じゅうじ',
  'じゅういちじ',
  'じゅうにじ',
  'じゅうさんじ',
  'じゅうよじ',
  'じゅうごじ',
  'じゅうろくじ',
  'じゅうしちじ',
  'じゅうはちじ',
  'じゅうくじ',
  'にじゅうじ',
  'にじゅういちじ',
  'にじゅうにじ',
  'にじゅうさんじ',
  'にじゅうよじ',
]

const MINUTE_1_9 = [
  'いっぷん',
  'にふん',
  'さんぷん',
  'よんぷん',
  'ごふん',
  'ろっぷん',
  'しちふん',
  'はっぷん',
  'きゅうふん',
]

const MINUTE_10_50 = ['じゅ', 'にじゅ', 'さんじゅ', 'よんじゅ', 'ごじゅ']

const HALF_HOUR = 'はん'

const app = Vue.createApp({
  data() {
    return {
      phoneNumberList: [],
      timeList: [],
      showTime: true,
      showTranslate: false,
    }
  },
  mounted() {
    this.refresh()
  },
  methods: {
    generateRandomNumber(length) {
      return Math.floor(Math.random() * Math.pow(10, length))
    },
    formatPhoneNumber(n) {
      return n < 10 ? `00${n}` : n < 100 ? `0${n}` : n
    },
    generatePhoneNumbers() {
      this.phoneNumberList = Array.from({ length: 10 }).map(
        (_) =>
          `${this.formatPhoneNumber(
            this.generateRandomNumber(3)
          )}-${this.formatPhoneNumber(
            this.generateRandomNumber(3)
          )}-${this.formatPhoneNumber(this.generateRandomNumber(4))}`
      )
    },
    formatTime(n) {
      return n < 10 ? `0${n}` : n
    },
    generateTimeList() {
      this.timeList = Array.from({ length: 18 }).map(
        (_) =>
          `${this.formatTime(Math.floor(Math.random() * 24))}:${this.formatTime(
            Math.floor(Math.random() * 60)
          )}`
      )
    },
    translateHour(h) {
      return HOUR[h]
    },
    translateMinute(m) {
      if (m === 0) {
        return ''
      }

      const units = m % 10
      const tens = Math.floor(m / 10)

      if (units === 0) {
        if (m === 30) {
          return HALF_HOUR
        } else {
          return `${MINUTE_10_50[tens - 1]}っぷん`
        }
      } else if (m < 10) {
        return MINUTE_1_9[units - 1]
      } else {
        return `${MINUTE_10_50[tens - 1]}う${MINUTE_1_9[units - 1]}`
      }
    },
    translateTime(time) {
      const [h, m] = time.split(':').map(Number)
      return `${this.translateHour(h)}${this.translateMinute(m)}`
    },
    refresh() {
      this.generatePhoneNumbers()
      this.generateTimeList()
      this.showTranslate = false
    },
    toggle() {
      this.showTime = !this.showTime
    },
    clickShowTranslate() {
      this.showTranslate = !this.showTranslate
    },
  },
})

app.mount('#app')
