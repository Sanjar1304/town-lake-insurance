import { SubHeaderEnum } from "@shared/components/header/components/tab/enums/subHeaderTypes.enum";
import { NavMenuItem } from "@shared/components/header/interfaces/menu.interface";

export const navMenus: NavMenuItem[] = [
  {
    title: "Клиентам",
    params: SubHeaderEnum.Physicals,
    content: [
      {
        category: "Cтрахование имущества",
        subContent: [
          {
            title: "Ипотечное страхование",
            path: "/physical-entity/mortgage-insurance",
          },
          {
            title: "Страхование имущества физических лиц",
            path: "/physical-entity/property-insurance-for-individuals",
          },
          {
            title: "Страхование имущества от ущерба",
            path: "/physical-entity/property-damage-insurance",
          },
          {
            title: "Страхование гаджетов",
            path: "/physical-entity/gadget-insurance",
          },
        ],
      },
      {
        category: "Автострахование",
        subContent: [
          {
            title: "Страхование автомобиля КАСКО",
            path: "/physical-entity/car-insurance",
          },
          {
            title: "Страхование газобаллонного оборудования КАСКО-газ",
            path: "/physical-entity/gas-equipment-insurance",
          },
        ],
      },
      {
        category: "Личное страхование",
        subContent: [
          {
            title: "Страхование туристов",
            path: "/physical-entity/traveller-insurance",
          },
          {
            title: "Страхование на случай инфекционных заболеваний",
            path: "/physical-entity/infectious-disease-insurance",
          },
          {
            title: "Страхование от несчастных случаев",
            path: "/physical-entity/accident-insurance",
          },
          {
            title: "Страхование спортсменов",
            path: "/physical-entity/athletes-insurance",
          },
        ],
      },
      {
        category: "Страхование ответственности",
        subContent: [
          {
            title: "ОСГОВТС",
            path: "/physical-entity/civil-liability-insurance",
          },
        ],
      },
    ],
  },
  {
    title: "Бизнесу",
    params: SubHeaderEnum.Business,
    content: [
      {
        category: "Cтрахование имущество",
        subContent: [
          {
            title: "Страхование имущества, переданного в лизинг",
            path: "/corporate-clients/property-leased-insurance",
          },
          {
            title: "Страхование имущества от всех рисков",
            path: "/corporate-clients/property-insurance-against-all-risks",
          },
          {
            title: "Страхование имущества, передаваемого в залог",
            path: "/corporate-clients/pledged-property-insurance",
          },
          {
            title: "Страхование грузов",
            path: "/corporate-clients/cargo-insurance",
          },
          {
            title: "Ипотечное страхование",
            path: "/corporate-clients/mortgage-insurance",
          },
        ],
      },
      {
        category: "Автострахование",
        subContent: [
          {
            title: "Страхование автомобиля КАСКО",
            path: "/corporate-clients/car-insurance",
          },
          {
            title: "Страхование газобаллонного оборудования КАСКО-газ",
            path: "/corporate-clients/gas-equipment",
          },
        ],
      },
      {
        category: "Личное страхование",
        subContent: [
          {
            title: "Страхование от несчастных случаев",
            path: "/corporate-clients/accident-insurance",
          },
          {
            title: "Страхование спортсменов",
            path: "/corporate-clients/athletes-insurance",
          },
          {
            title: "Страхование туристов",
            path: "/corporate-clients/traveller-insurance",
          },
          {
            title: "Страхование на случай инфекционных заболеваний",
            path: "/corporate-clients/infectious-disease-insurance",
          },
          {
            title: "Добровольное медицинское страхование",
            path: "/corporate-clients/voluntary-health-insurance",
          },
          {
            title:
              "Коллективное страхование работников от несчастных случаев на производстве",
            path: "/corporate-clients/workers-collective-insurance-against-accident",
          },
        ],
      },
      {
        category: "Страхование ответственности",
        subContent: [
          {
            title: "ОСГОВТС",
            path: "/corporate-clients/vehicle-owners-civil-liability",
          },
          {
            title: "ОСГОП",
            path: "/corporate-clients/carrier-civil-liability",
          },
          {
            title: "ОСГОР",
            path: "/corporate-clients/employers-civil-liability",
          },
          {
            title: "Страхование строительно-монтажных рисков",
            path: "/corporate-clients/construction-installation-risks",
          },
        ],
      },
    ],
  },
  {
    title: "О компании",
    params: SubHeaderEnum.AboutUs,
    content: [
      {
        title: "О нас",
        path: "/about-us/",
      },
      {
        title: "Финансовая отчетность",
        path: "/about-us/financial-report",
      },
      {
        title: "Руководство",
        path: "/about-us/management",
      },
      {
        title: "Организационная структура",
        path: "/about-us/organisational-structure",
      },
      {
        title: "Акционерам и инвесторам",
        path: "/about-us/shareholders",
      },
      {
        title: "Опрос",
        path: "/about-us/social-survey",
      },
      {
        title: "Спонсорские проекты",
        path: "/about-us/sponsorship-projects",
      },
      {
        title: "Наблюдательный совет",
        path: "/about-us/supervisory-board",
      },
      {
        title: "Задачи, миссия и ценности",
        path: "/about-us/tasks-mission",
      },
      {
        title: "Тендеры",
        path: "/about-us/tenders",
      },
      {
        title: "Вакансии",
        path: "/about-us/vacancies",
      },
    ],
  },
  {
    title: "Контакты",
    params: SubHeaderEnum.Contacts,
    content: [
      {
        title: "Контакты",
        path: "/contacts/",
      },
      {
        title: "Наши адреса",
        path: "/contacts/our-addresses",
      },
    ],
  },
];
