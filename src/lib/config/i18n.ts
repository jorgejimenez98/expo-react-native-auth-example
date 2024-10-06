/* eslint-disable import/no-named-as-default-member */
import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import en from "../../assets/locales/en/common.json"

const resources = {
  "en": { translation: en }
}

const initI18n = async () => {

  i18n.use(initReactI18next).init({
    compatibilityJSON: "v3",
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  })
}

initI18n()

export default i18n
