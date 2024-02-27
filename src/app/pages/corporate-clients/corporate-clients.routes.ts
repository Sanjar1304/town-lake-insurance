import { Routes } from "@angular/router";

export const corporateClientsRoutes: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("./corporate-clients-page/corporate-clients-page.component").then(
        (m) => m.CorporateClientsPageComponent
      ),
  },
  {
    path: "car-insurance",
    loadComponent: () =>
      import(
        "./car-insurance-corporate/car-insurance-corporate-page/car-insurance-corporate-page.component"
      ).then((m) => m.CarInsuranceCorporatePageComponent),
  },
  {
    path: "gas-equipment",
    loadComponent: () =>
      import(
        "./car-insurance-corporate/gas-equipment-insurance-corporate-page/gas-equipment-insurance-corporate-page.component"
      ).then((m) => m.GasEquipmentInsuranceCorporatePageComponent),
  },
  {
    path: "carrier-civil-liability",
    loadComponent: () =>
      import(
        "./liability-insurance-corporate/carrier-civil-liability-corporate-page/carrier-civil-liability-corporate-page.component"
      ).then((m) => m.CarrierCivilLiabilityCorporatePageComponent),
  },
  {
    path: "construction-installation-risks",
    loadComponent: () =>
      import(
        "./liability-insurance-corporate/construction-installation-risks-insurance-corporate-page/construction-installation-risks-insurance-corporate-page.component"
      ).then(
        (m) => m.ConstructionInstallationRisksInsuranceCorporatePageComponent
      ),
  },
  {
    path: "employers-civil-liability",
    loadComponent: () =>
      import(
        "./liability-insurance-corporate/employers-civil-liability-insurance-corporate-page/employers-civil-liability-insurance-corporate-page.component"
      ).then((m) => m.EmployersCivilLiabilityInsuranceCorporatePageComponent),
  },
  {
    path: "vehicle-owners-civil-liability",
    loadComponent: () =>
      import(
        "./liability-insurance-corporate/vehicle-owners-civil-liability-insurance-corporate-page/vehicle-owners-civil-liability-insurance-corporate-page.component"
      ).then(
        (m) => m.VehicleOwnersCivilLiabilityInsuranceCorporatePageComponent
      ),
  },
  {
    path: "accident-insurance",
    loadComponent: () =>
      import(
        "./physical-insurance-corporate/accident-insurance-corporate-page/accident-insurance-corporate-page.component"
      ).then((m) => m.AccidentInsuranceCorporatePageComponent),
  },
  {
    path: "athletes-insurance",
    loadComponent: () =>
      import(
        "./physical-insurance-corporate/athletes-insurance-corporate-page/athletes-insurance-corporate-page.component"
      ).then((m) => m.AthletesInsuranceCorporatePageComponent),
  },
  {
    path: "infectious-disease-insurance",
    loadComponent: () =>
      import(
        "./physical-insurance-corporate/infectious-disease-insurance-corporate-page/infectious-disease-insurance-corporate-page.component"
      ).then((m) => m.InfectiousDiseaseInsuranceCorporatePageComponent),
  },
  {
    path: "traveller-insurance",
    loadComponent: () =>
      import(
        "./physical-insurance-corporate/traveller-insurance-corporate-page/traveller-insurance-corporate-page.component"
      ).then((m) => m.TravellerInsuranceCorporatePageComponent),
  },
  {
    path: "voluntary-health-insurance",
    loadComponent: () =>
      import(
        "./physical-insurance-corporate/voluntary-health-insurance-corporate-page/voluntary-health-insurance-corporate-page.component"
      ).then((m) => m.VoluntaryHealthInsuranceCorporatePageComponent),
  },
  {
    path: "workers-collective-insurance-against-accident",
    loadComponent: () =>
      import(
        "./physical-insurance-corporate/workers-collective-insurance-against-accident-corporate-page/workers-collective-insurance-against-accident-corporate-page.component"
      ).then(
        (m) => m.WorkersCollectiveInsuranceAgainstAccidentCorporatePageComponent
      ),
  },
  {
    path: "cargo-insurance",
    loadComponent: () =>
      import(
        "./real-estate-insurance-corporate/cargo-insurance-corporate-page/cargo-insurance-corporate-page.component"
      ).then((m) => m.CargoInsuranceCorporatePageComponent),
  },
  {
    path: "mortgage-insurance",
    loadComponent: () =>
      import(
        "./real-estate-insurance-corporate/mortgage-insurance-corporate-page/mortgage-insurance-corporate-page.component"
      ).then((m) => m.MortgageInsuranceCorporatePageComponent),
  },
  {
    path: "pledged-property-insurance",
    loadComponent: () =>
      import(
        "./real-estate-insurance-corporate/pledged-property-insurance-corporate-page/pledged-property-insurance-corporate-page.component"
      ).then((m) => m.PledgedPropertyInsuranceCorporatePageComponent),
  },
  {
    path: "property-insurance-against-all-risks",
    loadComponent: () =>
      import(
        "./real-estate-insurance-corporate/property-insurance-against-all-risks-corporate-page/property-insurance-against-all-risks-corporate-page.component"
      ).then((m) => m.PropertyInsuranceAgainstAllRisksCorporatePageComponent),
  },
  {
    path: "property-leased-insurance",
    loadComponent: () =>
      import(
        "./real-estate-insurance-corporate/property-leased-insurance-corporate-page/property-leased-insurance-corporate-page.component"
      ).then((m) => m.PropertyLeasedInsuranceCorporatePageComponent),
  },
];
