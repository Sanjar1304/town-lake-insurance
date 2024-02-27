import { Routes } from "@angular/router";
import { aboutUsRoutes } from "./pages/about-us/about-us.routes";
import { contactsRoutes } from "./pages/contacts/contacts.routes";
import { corporateClientsRoutes } from "./pages/corporate-clients/corporate-clients.routes";
import { physicalEntityRoutes } from "./pages/physical-entity/physical-entity.routes";

export const routes: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("./pages/dashboard-page/dashboard-page.component").then(
        (m) => m.DashboardPageComponent
      ),
  },
  {
    path: "about-us",
    children: aboutUsRoutes,
  },
  {
    path: "contacts",
    children: contactsRoutes,
  },
  {
    path: "corporate-clients",
    children: corporateClientsRoutes,
  },
  {
    path: "physical-entity",
    children: physicalEntityRoutes,
  },
  {
    path: "error",
    children: [
      {
        path: "404",
        pathMatch: "full",
        loadComponent: () =>
          import("@shared/pages/error-page/error-page.component").then(
            (m) => m.ErrorPageComponent
          ),
      },
      {
        path: "500",
        pathMatch: "full",
        loadComponent: () =>
          import("@shared/pages/error-page/error-page.component").then(
            (m) => m.ErrorPageComponent
          ),
      },
    ],
  },
  {
    path: "**",
    redirectTo: "error/404",
  },
];
