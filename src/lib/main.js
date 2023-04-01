import EventEmitter from 'eventemitter3'
import '../components/app'
import '../components/counter/counter.js'


class App extends EventEmitter {

    constructor() {
        super()
    }

    async init(router) {     


    }

    async setI18n() {
        // Language preference is not set yet; use the browser default if
        // supported; english as final fallback otherwise.
        let currentLanguage = 'en'
        if (this.$s.language.id) {
            currentLanguage = this.$s.language.id
        } else {
            const supportedLanguages = ['de', 'en', 'nl', 'fr']
            const browserLanguage = navigator.language.split('-')[0]
            if (supportedLanguages.includes(browserLanguage)) {
                currentLanguage = browserLanguage
            } else {
                currentLanguage = 'en'
            }
        }

        this.i18n = createI18n({
            formatFallbackMessages: true,
            locale: this.$s.language.id,
            messages: {},
            silentFallbackWarn: true,
            silentTranslationWarn: true,
        })

        this.$t = this.i18n.global.t
        this.$tc = this.i18n.global.tc
        this.setLanguage(currentLanguage)
    }

    async setLanguage(language) {
        const i18nTags = await this.api.get(`/api/i18n/${language}`)
        this.i18n.global.setLocaleMessage(language, i18nTags)
        app.i18n.global.locale = language
    }
}

export const app = new App()