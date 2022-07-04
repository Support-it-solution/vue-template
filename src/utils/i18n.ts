import { createI18n } from 'vue-i18n'
// import { createI18n } from 'vue-i18n'

const messages: any = {
  en: {
    hello: 'Hello'
  },
  uz: {
    hello: 'Salom'
  }
}
type MessageSchema = typeof messages
export const i18n = createI18n<[MessageSchema], 'en-US' | 'uz-UZ'>({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages
})
