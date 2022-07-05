import { createI18n, I18nOptions } from 'vue-i18n'
// import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    hello: 'Hello'
  },
  uz: {
    hello: 'Salom'
  }
}
type MessageSchema = typeof messages

export const i18n = createI18n<I18nOptions, [MessageSchema], 'en-US' | 'uz-UZ'>({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages
})
