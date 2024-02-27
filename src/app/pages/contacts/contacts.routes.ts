import { Routes } from "@angular/router";

export const contactsRoutes: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("./contacts-page/contacts-page.component").then(
        (m) => m.ContactsPageComponent
      ),
  },
  {
    path: "our-addresses",
    loadComponent: () =>
      import("./our-addresses-page/our-addresses-page.component").then(
        (m) => m.OurAddressesPageComponent
      ),
  },
];
