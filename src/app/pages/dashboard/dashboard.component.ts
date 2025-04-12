import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { SliderComponent } from "../../components/slider/slider.component";
import { DiscountCouponComponent } from "../../components/discount-coupon/discount-coupon.component";
import { FeaturedProductsComponent } from "../../components/featured-products/featured-products.component";
import { CollectionProductsComponent } from "../../components/collection-products/collection-products.component";
import { LatestProductsComponent } from "../../components/latest-products/latest-products.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-dashboard',
  imports: [HeaderComponent, SliderComponent, DiscountCouponComponent, FeaturedProductsComponent, CollectionProductsComponent, LatestProductsComponent, FooterComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
