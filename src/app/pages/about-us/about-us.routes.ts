import { Routes } from "@angular/router";

export const aboutUsRoutes: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("./about-us-page/about-us-page.component").then(
        (m) => m.AboutUsPageComponent
      ),
  },
  {
    path: "financial-report",
    loadComponent: () =>
      import("./financial-reports-page/financial-reports-page.component").then(
        (m) => m.FinancialReportsPageComponent
      ),
  },
  {
    path: "management",
    loadComponent: () =>
      import("./management-page/management-page.component").then(
        (m) => m.ManagementPageComponent
      ),
  },
  {
    path: "organisational-structure",
    loadComponent: () =>
      import(
        "./organisational-structure-page/organisational-structure-page.component"
      ).then((m) => m.OrganisationalStructurePageComponent),
  },
  {
    path: "shareholders",
    loadComponent: () =>
      import(
        "./shareholders-investors-page/shareholders-investors-page.component"
      ).then((m) => m.ShareholdersInvestorsPageComponent),
  },
  {
    path: "social-survey",
    loadComponent: () =>
      import("./social-survey-page/social-survey-page.component").then(
        (m) => m.SocialSurveyPageComponent
      ),
  },
  {
    path: "sponsorship-projects",
    loadComponent: () =>
      import(
        "./sponsorship-projects-page/sponsorship-projects-page.component"
      ).then((m) => m.SponsorshipProjectsPageComponent),
  },
  {
    path: "supervisory-board",
    loadComponent: () =>
      import("./supervisory-board-page/supervisory-board-page.component").then(
        (m) => m.SupervisoryBoardPageComponent
      ),
  },
  {
    path: "tasks-mission",
    loadComponent: () =>
      import(
        "./tasks-mission-values-page/tasks-mission-values-page.component"
      ).then((m) => m.TasksMissionValuesPageComponent),
  },
  {
    path: "tenders",
    loadComponent: () =>
      import("./tenders-page/tenders-page.component").then(
        (m) => m.TendersPageComponent
      ),
  },
  {
    path: "vacancies",
    loadComponent: () =>
      import("./vacancies-page/vacancies-page.component").then(
        (m) => m.VacanciesPageComponent
      ),
  },
];
