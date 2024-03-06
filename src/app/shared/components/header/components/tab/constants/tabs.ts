import { IMenuTab } from "../interfaces/tab.interface";
import { SubHeaderEnum } from "@shared/components/header/components/tab/enums/subHeaderTypes.enum";

export const tabs: IMenuTab[] = [
  {
    tabId: "1",
    title: "MenuTab.Clients",
    isActive: true,
    params: SubHeaderEnum.Physicals,
  },
  {
    tabId: "2",
    title: "MenuTab.Business",
    isActive: false,
    params: SubHeaderEnum.Business,
  },
  {
    tabId: "3",
    title: "MenuTab.AboutUs",
    isActive: false,
    params: SubHeaderEnum.AboutUs,
  },
  {
    tabId: "4",
    title: "MenuTab.Contact",
    isActive: false,
    params: SubHeaderEnum.Contacts,
  },
];
