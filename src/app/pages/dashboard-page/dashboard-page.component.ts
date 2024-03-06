import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from "@angular/core";
import { CommonModule } from "@angular/common";

import { Observable } from "rxjs/internal/Observable";

import { CarouselComponent } from "./components/carousel/carousel.component";
import { CompanyInNumbersComponent } from "./components/company-in-numbers/company-in-numbers.component";
import { ProductsComponent } from "./components/products/products.component";
import { SpecialOfferComponent } from "./components/special-offer/special-offer.component";
import { CalculatorComponent } from "./components/calculator/calculator.component";
import { NewsComponent } from "./components/news/news.component";
import { PartnersComponent } from "./components/partners/partners.component";
import { IAdvantageInterface } from "@core/interfaces/company-about/adavantages.interface";
import { AdvantagesComponent } from "./components/advantages/advantages.component";
import { CompanyInNumsInterface } from "@core/interfaces/company-about/companyInNums.interface";
import { INews } from "@core/interfaces/news/news.interface";
import { PartnerInterface } from "@core/interfaces/company-about/partner.interface";
import { IProduct } from "@core/interfaces/products/product.interface";
import { AdvertisementInterface } from "@core/interfaces/company-about/advertisement.interface";
import { ISpecialOfferInterface } from "@core/interfaces/company-about/specialOffer.interface";
import { select, Store } from "@ngrx/store";
import {
  advantagesSelector,
  carouselSelector,
  companyInNumsSelector,
  partnerSelector,
  specialOfferSelector,
} from "../../state/company-about/selectors";
import { newsSelector } from "../../state/news/selectors";
import { productSelector } from "../../state/products/selectors";
import {
  getAdvantages,
  getCarousel,
  getCompanyInNums,
  getPartners,
  getSpecialOffer,
} from "../../state/company-about/actions";
import { getNews } from "../../state/news/actions";
import { getProducts } from "../../state/products/actions";

@Component({
  selector: "app-dashboard-page",
  templateUrl: "./dashboard-page.component.html",
  styleUrls: ["./dashboard-page.component.scss"],
  standalone: true,
  imports: [
    CommonModule,
    CarouselComponent,
    CompanyInNumbersComponent,
    ProductsComponent,
    SpecialOfferComponent,
    CalculatorComponent,
    NewsComponent,
    PartnersComponent,
    AdvantagesComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPageComponent implements OnInit {
  public carouselCards$: Observable<AdvertisementInterface[]>;
  public advantagesCards$: Observable<IAdvantageInterface[]>;
  public companyInNumsCards$: Observable<CompanyInNumsInterface[]>;
  public newsCards$: Observable<INews[]>;
  public partnersCards$: Observable<PartnerInterface[]>;
  public productsCards$: Observable<IProduct[]>;
  public specialOfferCards$: Observable<ISpecialOfferInterface[]>;

  private readonly _store = inject(Store);

  public ngOnInit(): void {
    this.defineData();
    this.launchDispatching();
  }
  public defineData(): void {
    this.carouselCards$ = this._store.pipe(select(carouselSelector));
    this.advantagesCards$ = this._store.pipe(select(advantagesSelector));
    this.companyInNumsCards$ = this._store.pipe(select(companyInNumsSelector));
    this.specialOfferCards$ = this._store.pipe(select(specialOfferSelector));
    this.partnersCards$ = this._store.pipe(select(partnerSelector));
    this.newsCards$ = this._store.pipe(select(newsSelector));
    this.productsCards$ = this._store.pipe(select(productSelector));
  }
  public launchDispatching(): void {
    this._store.dispatch(getCompanyInNums());
    this._store.dispatch(getPartners());
    this._store.dispatch(getAdvantages());
    this._store.dispatch(getCarousel());
    this._store.dispatch(getSpecialOffer());
    this._store.dispatch(getNews());
    this._store.dispatch(getProducts());
  }
}
