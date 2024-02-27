import { LanguagesEnum } from "@core/enums/languages.enum";
import { LanguagesISO639$1FormatEnum } from "@core/enums/languages-iso639$1-format.enum";

export const TranslocoConfig = {
  availableLangs: [
    {
      id: LanguagesISO639$1FormatEnum.ENG,
      label: LanguagesEnum.ENG,
    },
    {
      id: LanguagesISO639$1FormatEnum.RUS,
      label: LanguagesEnum.RUS,
    },
    {
      id: LanguagesISO639$1FormatEnum.UZB,
      label: LanguagesEnum.UZB,
    },
  ],
  defaultLang: LanguagesISO639$1FormatEnum.RUS,
  fallbackLang: LanguagesISO639$1FormatEnum.RUS,
  reRenderOnLangChange: true,
  prodMode: true,
};
