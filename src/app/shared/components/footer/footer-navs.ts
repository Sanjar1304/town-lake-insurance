import { NavMenuInterface } from "@shared/components/header/interfaces/navMenu.interface";

export const footerNavMenus: {
  title: string;
  content: NavMenuInterface[];
}[] = [
  {
    title: "Частным клиентам",
    content: [
      {
        title: "Страхование туристов",
        path: "/physical-entity/traveller-insurance",
      },
      {
        title: "Страхование на случай инфекционных заболеваний",
        path: "/physical-entity/infectious-disease-insurance",
      },
      {
        title: "Страхование имущества физических лиц",
        path: "/physical-entity/property-insurance-for-individuals",
      },
      {
        title: "Страхование от несчастных случаев",
        path: "/physical-entity/accident-insurance",
      },
      {
        title: "Страхование спортсменов",
        path: "/physical-entity/athletes-insurance",
      },
      {
        title: "ОСГОВТС",
        path: "/physical-entity/civil-liability-insurance",
      },
      {
        title: "Страхование автомобиля КАСКО",
        path: "/physical-entity/car-insurance",
      },
      {
        title: "Страхование газобаллонного оборудования КАСКО-газ",
        path: "/physical-entity/gas-equipment-insurance",
      },
      {
        title: "Страхование гаджетов",
        path: "/physical-entity/gadget-insurance",
      },
      {
        title: "Ипотечное страхование",
        path: "/physical-entity/mortgage-insurance",
      },
      {
        title: "Страхование имущества от ущерба",
        path: "/physical-entity/property-damage-insurance",
      },
    ],
  },
  {
    title: "Бизнесу",
    content: [
      {
        title: "Страхование туристов",
        path: "/corporate-clients/traveller-insurance",
      },
      {
        title: "ОСГОВТС",
        path: "/corporate-clients/vehicle-owners-civil-liability",
      },
      {
        title: "ОСГОП",
        path: "/corporate-clients/carrier-civil-liability",
      },

      {
        title: "Страхование имущества от всех рисков",
        path: "/corporate-clients/property-insurance-against-all-risks",
      },
      {
        title: "Страхование имущества, переданного в лизинг",
        path: "/corporate-clients/property-leased-insurance",
      },
      {
        title: "Страхование грузов",
        path: "/corporate-clients/cargo-insurance",
      },
      {
        title: "Ипотечное страхование",
        path: "/corporate-clients/mortgage-insurance",
      },
      {
        title: "Страхование автомобиля КАСКО",
        path: "/corporate-clients/car-insurance",
      },
      {
        title: "Страхование газобаллонного оборудования КАСКО-газ",
        path: "/corporate-clients/gas-equipment",
      },
      {
        title: "Страхование от несчастных случаев",
        path: "/corporate-clients/accident-insurance",
      },
      {
        title: "Страхование спортсменов",
        path: "/corporate-clients/athletes-insurance",
      },
      {
        title: "Страхование на случай инфекционных заболеваний",
        path: "/corporate-clients/infectious-disease-insurance",
      },
      {
        title: "ОСГОР",
        path: "/corporate-clients/employers-civil-liability",
      },
      {
        title: "Добровольное медицинское страхование",
        path: "/corporate-clients/voluntary-health-insurance",
      },
      {
        title: "Страхование строительно-монтажных рисков",
        path: "/corporate-clients/construction-installation-risks",
      },
      {
        title: "Страхование имущества, передаваемого в залог",
        path: "/corporate-clients/pledged-property-insurance",
      },
      {
        title:
          "Коллективное страхование работников от несчастных случаев на производстве",
        path: "/corporate-clients/workers-collective-insurance-against-accident",
      },
    ],
  },
];
