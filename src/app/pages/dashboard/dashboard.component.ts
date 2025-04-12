import { Component } from '@angular/core';
import { SliderComponent } from "../../components/page_sections/slider/slider.component";
import { DiscountCouponComponent } from "../../components/page_sections/discount-coupon/discount-coupon.component";
import { FeaturedProductsComponent } from "../../components/page_sections/featured-products/featured-products.component";
import { CollectionProductsComponent } from "../../components/page_sections/collection-products/collection-products.component";
import { LatestProductsComponent } from "../../components/page_sections/latest-products/latest-products.component";
import { FooterComponent } from "../../components/page_sections/footer/footer.component";

@Component({
  selector: 'app-dashboard',
  imports: [SliderComponent, DiscountCouponComponent, FeaturedProductsComponent, CollectionProductsComponent, LatestProductsComponent, FooterComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
