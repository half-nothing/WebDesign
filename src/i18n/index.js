import {createI18n} from "vue-i18n";
import en_us from "@/i18n/lang/en_us.json"
import zh_cn from "@/i18n/lang/zh_cn.json"

const messages = {
    zh_CN: {...zh_cn},
    en_US: {...en_us}
}

const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: localStorage.getItem("lang") || navigator.language.replace("-", "_"),
    fallbackLocale: 'zh_CN',
    messages
})

export default i18n;