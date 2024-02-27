import { IMenuTab } from "../interfaces/tab.interface";
import { SubHeaderEnum } from "@shared/components/header/components/tab/enums/subHeaderTypes.enum";

export const tabs: IMenuTab[] = [
  {
    tabId: "1",
    title: "Клиентам",
    isActive: true,
    params: SubHeaderEnum.Physicals,
  },
  {
    tabId: "2",
    title: "Бизнесу",
    isActive: false,
    params: SubHeaderEnum.Business,
  },
  {
    tabId: "3",
    title: "О компании",
    isActive: false,
    params: SubHeaderEnum.AboutUs,
  },
  {
    tabId: "4",
    title: "Контакты",
    isActive: false,
    params: SubHeaderEnum.Contacts,
  },
];
