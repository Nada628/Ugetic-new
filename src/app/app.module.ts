import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { TrustedByComponent } from './components/trusted-by/trusted-by.component';
import { featureOneComponent } from './components/feature-one/feature-one.component';
import { FeatureTwoThreeComponent } from './components/featureTwoThree/featureTwoThree.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { OurTeamComponent } from './components/our-team/our-team.component';
import { BlockFaqComponent } from './components/block-faq/block-faq.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { GiveUsCallComponent } from './components/give-us-call/give-us-call.component';
import { LoginComponent } from './pages/login/login.component';
import { BlogComponent } from './pages/blog/blog.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { PriceCardComponent } from './components/price-card/price-card.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SingleBlogComponent } from './pages/single-blog/single-blog.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { HomeCallToActionComponent } from './components/home-call-to-action/home-call-to-action.component';
import { OurMissionAndVissionComponent } from './components/our-mission-and-vission/our-mission-and-vission.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { StoreComponent } from './pages/store/store.component';
import { WebsiteComponent } from './pages/website/website.component';
import { EOMComponent } from './pages/eom/eom.component';
import { EomSliderComponent } from './pages/eom/eom-slider/eom-slider.component';
import { EomFeature1Component } from './pages/eom/eom-feature1/eom-feature1.component';
import { EomFeatureTwoThreeComponent } from './pages/eom/eom-feature-two-three/eom-feature-two-three.component';
import { EomTabsComponent } from './pages/eom/eom-tabs/eom-tabs.component';
import { StoreHeaderComponent } from './pages/store/store-header/store-header.component';
import { StoreFeatureOneComponent } from './pages/store/store-feature-one/store-feature-one.component';
import { StoreFeatureTwoThreeComponent } from './pages/store/store-feature-two-three/store-feature-two-three.component';
import { StoreTabsComponent } from './pages/store/store-tabs/store-tabs.component';


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    TrustedByComponent,
    featureOneComponent,
    FeatureTwoThreeComponent,
    TabsComponent,
    ReviewsComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    OurTeamComponent,
    BlockFaqComponent,
    ServicesComponent,
    ContactUsComponent,
    GiveUsCallComponent,
    LoginComponent,
    BlogComponent,
    PricingComponent,
    PriceCardComponent,
    SingleBlogComponent,
    PrivacyPolicyComponent,
    HomeCallToActionComponent,
    OurMissionAndVissionComponent,
    SideBarComponent,
    NavigationBarComponent,
    StoreComponent,
    WebsiteComponent,
    EOMComponent,
    EomSliderComponent,
    EomFeature1Component,
    EomFeatureTwoThreeComponent,
    EomTabsComponent,
    StoreHeaderComponent,
    StoreFeatureOneComponent,
    StoreFeatureTwoThreeComponent,
    StoreTabsComponent,

  ],

  imports: [
    BrowserModule,
    FormsModule,
    SlickCarouselModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage:"en",
      useDefaultLang: true,
      loader:{provide:TranslateLoader,useFactory:createTranslateLoader,deps:[HttpClient]}
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
