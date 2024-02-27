import { SubHeaderEnum } from "@shared/components/header/components/tab/enums/subHeaderTypes.enum";

export interface IMenuTab {
  params?: SubHeaderEnum;
  tabId?: string;
  title: string;
  isActive: boolean;
}
