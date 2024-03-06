import { LanguagesIso6391FormatEnum } from "@core/enums/languages-iso639$1-format.enum";
import { LanguagesEnum } from "@core/enums/languages.enum";

export const TranslocoConfig = {
  availableLangs: [
    {
      id: LanguagesIso6391FormatEnum.ENG,
      label: LanguagesEnum.ENG,
    },
    {
      id: LanguagesIso6391FormatEnum.RUS,
      label: LanguagesEnum.RUS,
    },
    {
      id: LanguagesIso6391FormatEnum.UZB,
      label: LanguagesEnum.UZB,
    },
  ],
  defaultLang: LanguagesIso6391FormatEnum.ENG,
  fallbackLang: LanguagesIso6391FormatEnum.ENG,
  reRenderOnLangChange: true,
  prodMode: true,
};
