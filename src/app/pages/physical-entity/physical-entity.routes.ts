import { Routes } from "@angular/router";

export const physicalEntityRoutes: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("./physical-entity-page/physical-entity-page.component").then(
        (m) => m.PhysicalEntityPageComponent
      ),
  },
  {
    path: "car-insurance",
    loadComponent: () =>
      import(
        "./car-insurance/car-insurance-physical-page/car-insurance-physical-page.component"
      ).then((m) => m.CarInsurancePhysicalPageComponent),
  },
  {
    path: "gas-equipment-insurance",
    loadComponent: () =>
      import(
        "./car-insurance/gas-equipment-insurance-physical-page/gas-equipment-insurance-physical-page.component"
      ).then((m) => m.GasEquipmentInsurancePhysicalPageComponent),
  },
  {
    path: "civil-liability-insurance",
    loadComponent: () =>
      import(
        "./liability-insurance/civil-liability-insurance-physical-page/civil-liability-insurance-physical-page.component"
      ).then((m) => m.CivilLiabilityInsurancePhysicalPageComponent),
  },
  {
    path: "accident-insurance",
    loadComponent: () =>
      import(
        "./physical-insurance/accident-insurance-physical-page/accident-insurance-physical-page.component"
      ).then((m) => m.AccidentInsurancePhysicalPageComponent),
  },
  {
    path: "athletes-insurance",
    loadComponent: () =>
      import(
        "./physical-insurance/athletes-insurance-physical-page/athletes-insurance-physical-page.component"
      ).then((m) => m.AthletesInsurancePhysicalPageComponent),
  },
  {
    path: "infectious-disease-insurance",
    loadComponent: () =>
      import(
        "./physical-insurance/infectious-disease-insurance-physical-page/infectious-disease-insurance-physical-page.component"
      ).then((m) => m.InfectiousDiseaseInsurancePhysicalPageComponent),
  },
  {
    path: "traveller-insurance",
    loadComponent: () =>
      import(
        "./physical-insurance/traveller-insurance-physical-page/traveller-insurance-physical-page.component"
      ).then((m) => m.TravellerInsurancePhysicalPageComponent),
  },
  {
    path: "gadget-insurance",
    loadComponent: () =>
      import(
        "./real-estate-insurance/gadget-insurance-physical-page/gadget-insurance-physical-page.component"
      ).then((m) => m.GadgetInsurancePhysicalPageComponent),
  },
  {
    path: "mortgage-insurance",
    loadComponent: () =>
      import(
        "./real-estate-insurance/mortgage-insurance-physical-page/mortgage-insurance-physical-page.component"
      ).then((m) => m.MortgageInsurancePhysicalPageComponent),
  },
  {
    path: "property-damage-insurance",
    loadComponent: () =>
      import(
        "./real-estate-insurance/property-damage-insurance-physical-page/property-damage-insurance-physical-page.component"
      ).then((m) => m.PropertyDamageInsurancePhysicalPageComponent),
  },
  {
    path: "property-insurance-for-individuals",
    loadComponent: () =>
      import(
        "./real-estate-insurance/property-insurance-for-individuals-physical-page/property-insurance-for-individuals-physical-page.component"
      ).then((m) => m.PropertyInsuranceForIndividualsPhysicalPageComponent),
  },
];
