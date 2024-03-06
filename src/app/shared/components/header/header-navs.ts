import { SubHeaderEnum } from "@shared/components/header/components/tab/enums/subHeaderTypes.enum";
import { NavMenuItem } from "@shared/components/header/interfaces/menu.interface";

export const navMenus: NavMenuItem[] = [
  {
    title: "NavMenu.Client.Title",
    params: SubHeaderEnum.Physicals,
    content: [
      {
        category: "NavMenu.Client.PhysicalClient.PropertyInsurances.Title",
        subContent: [
          {
            title: "NavMenu.Client.PhysicalClient.PropertyInsurances.Mortgage",
            path: "/physical-entity/mortgage-insurance",
          },
          {
            title:
              "NavMenu.Client.PhysicalClient.PropertyInsurances.PropertyForIndividuals",
            path: "/physical-entity/property-insurance-for-individuals",
          },
          {
            title:
              "NavMenu.Client.PhysicalClient.PropertyInsurances.PropertyDamage",
            path: "/physical-entity/property-damage-insurance",
          },
          {
            title: "NavMenu.Client.PhysicalClient.PropertyInsurances.Gadget",
            path: "/physical-entity/gadget-insurance",
          },
        ],
      },
      {
        category: "NavMenu.Client.PhysicalClient.CarInsurances.Title",
        subContent: [
          {
            title: "NavMenu.Client.PhysicalClient.CarInsurances.CASCOCar",
            path: "/physical-entity/car-insurance",
          },
          {
            title: "NavMenu.Client.PhysicalClient.CarInsurances.CASCO-gaz",
            path: "/physical-entity/gas-equipment-insurance",
          },
        ],
      },
      {
        category: "NavMenu.Client.PhysicalClient.PersonalInsurances.Title",
        subContent: [
          {
            title: "NavMenu.Client.PhysicalClient.PersonalInsurances.Travel",
            path: "/physical-entity/traveller-insurance",
          },
          {
            title:
              "NavMenu.Client.PhysicalClient.PersonalInsurances.InfectiousDisease",
            path: "/physical-entity/infectious-disease-insurance",
          },
          {
            title: "NavMenu.Client.PhysicalClient.PersonalInsurances.Accident",
            path: "/physical-entity/accident-insurance",
          },
          {
            title: "NavMenu.Client.PhysicalClient.PersonalInsurances.Athletes",
            path: "/physical-entity/athletes-insurance",
          },
        ],
      },
      {
        category: "NavMenu.Client.PhysicalClient.LiabilityInsurances.Title",
        subContent: [
          {
            title:
              "NavMenu.Client.PhysicalClient.LiabilityInsurances.CivilLiability",
            path: "/physical-entity/civil-liability-insurance",
          },
        ],
      },
    ],
  },
  {
    title: "NavMenu.Business.Title",
    params: SubHeaderEnum.Business,
    content: [
      {
        category: "NavMenu.Business.BusinessClient.PropertyInsurances.Title",
        subContent: [
          {
            title:
              "NavMenu.Business.BusinessClient.PropertyInsurances.PropertyLeased",
            path: "/corporate-clients/property-leased-insurance",
          },
          {
            title:
              "NavMenu.Business.BusinessClient.PropertyInsurances.AllRisks",
            path: "/corporate-clients/property-insurance-against-all-risks",
          },
          {
            title: "NavMenu.Business.BusinessClient.PropertyInsurances.Pledged",
            path: "/corporate-clients/pledged-property-insurance",
          },
          {
            title: "NavMenu.Business.BusinessClient.PropertyInsurances.Cargo",
            path: "/corporate-clients/cargo-insurance",
          },
          {
            title:
              "NavMenu.Business.BusinessClient.PropertyInsurances.Mortgage",
            path: "/corporate-clients/mortgage-insurance",
          },
        ],
      },
      {
        category: "NavMenu.Business.BusinessClient.CarInsurances.Title",
        subContent: [
          {
            title: "NavMenu.Business.BusinessClient.CarInsurances.CASCOCar",
            path: "/corporate-clients/car-insurance",
          },
          {
            title: "NavMenu.Business.BusinessClient.CarInsurances.CASCO-gaz",
            path: "/corporate-clients/gas-equipment",
          },
        ],
      },
      {
        category: "NavMenu.Business.BusinessClient.PersonalInsurances.Title",
        subContent: [
          {
            title:
              "NavMenu.Business.BusinessClient.PersonalInsurances.Accident",
            path: "/corporate-clients/accident-insurance",
          },
          {
            title:
              "NavMenu.Business.BusinessClient.PersonalInsurances.Athletes",
            path: "/corporate-clients/athletes-insurance",
          },
          {
            title: "NavMenu.Business.BusinessClient.PersonalInsurances.Travel",
            path: "/corporate-clients/traveller-insurance",
          },
          {
            title:
              "NavMenu.Business.BusinessClient.PersonalInsurances.InfectiousDisease",
            path: "/corporate-clients/infectious-disease-insurance",
          },
          {
            title:
              "NavMenu.Business.BusinessClient.PersonalInsurances.Voluntary",
            path: "/corporate-clients/voluntary-health-insurance",
          },
          {
            title:
              "NavMenu.Business.BusinessClient.PersonalInsurances.Collective",
            path: "/corporate-clients/workers-collective-insurance-against-accident",
          },
        ],
      },
      {
        category: "NavMenu.Business.BusinessClient.LiabilityInsurances.Title",
        subContent: [
          {
            title:
              "NavMenu.Business.BusinessClient.LiabilityInsurances.CivilLiability",
            path: "/corporate-clients/vehicle-owners-civil-liability",
          },
          {
            title:
              "NavMenu.Business.BusinessClient.LiabilityInsurances.CompulsoryCarrier",
            path: "/corporate-clients/carrier-civil-liability",
          },
          {
            title:
              "NavMenu.Business.BusinessClient.LiabilityInsurances.MandatoryEmployer",
            path: "/corporate-clients/employers-civil-liability",
          },
          {
            title:
              "NavMenu.Business.BusinessClient.LiabilityInsurances.Construction",
            path: "/corporate-clients/construction-installation-risks",
          },
        ],
      },
    ],
  },
  {
    title: "NavMenu.AboutUs.Content.Title",
    params: SubHeaderEnum.AboutUs,
    content: [
      {
        title: "NavMenu.AboutUs.Content.AboutUs",
        path: "/about-us/",
      },
      {
        title: "NavMenu.AboutUs.Content.Financial",
        path: "/about-us/financial-report",
      },
      {
        title: "NavMenu.AboutUs.Content.Management",
        path: "/about-us/management",
      },
      {
        title: "NavMenu.AboutUs.Content.Structure",
        path: "/about-us/organisational-structure",
      },
    ],
  },
  {
    title: "NavMenu.Contacts.Content.Title",
    params: SubHeaderEnum.Contacts,
    content: [
      {
        title: "NavMenu.Contacts.Content.Contacts",
        path: "/contacts/",
      },
      {
        title: "NavMenu.Contacts.Content.OurAddresses",
        path: "/contacts/our-addresses",
      },
    ],
  },
];
