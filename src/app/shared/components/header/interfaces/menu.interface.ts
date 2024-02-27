import { NavMenuInterface } from "@shared/components/header/interfaces/navMenu.interface";
import { SubHeaderEnum } from "@shared/components/header/components/tab/enums/subHeaderTypes.enum";

export interface ContentCategory {
  category: string;
  subContent?: NavMenuInterface[];
}

export interface NavMenuItem {
  title: string;
  params: SubHeaderEnum;
  content: NavMenuInterface[] | ContentCategory[];
}
