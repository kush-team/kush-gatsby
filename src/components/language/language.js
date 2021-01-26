import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"
import styled from "@emotion/styled"
import tw from "twin.macro"

const languageName = {
  es: { name: "ar" },
  pt: { name: "br" },
  en: { name: "en" },
}

const Language = () => (
  <LanguageSwitcher className="">
    <IntlContextConsumer>
      {({ languages, language: currentLocale }) =>
        languages.map(language => (
          <button
            key={language}
            onClick={() => changeLocale(language)}
            style={{
              opacity: currentLocale === language ? `1` : `.5`,
            }}
            aria-label="Modificar Lenguage"
            className="px-2 transition-all duration-300 transform outline-none cursor-pointer h-11 focus:outline-none languageSwitcher"
          >
            <span className="text-xs font-semibold text-white uppercase">
              {languageName[language].name}
            </span>
          </button>
        ))
      }
    </IntlContextConsumer>
  </LanguageSwitcher>
)

export default Language

const LanguageSwitcher = styled.div`
  ${tw`flex justify-end font-mono`}

  .languageSwitcher {
    button {
      outline: 0 none !important;
    }

    &:hover {
      opacity: 1 !important;
    }
  }
`
