import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { LoginComponent } from './pages/login/login.component';
import { BlogComponent } from './pages/blog/blog.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { SingleBlogComponent } from './pages/single-blog/single-blog.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { StoreComponent } from './pages/store/store.component';
import { WebsiteComponent } from './pages/website/website.component';
import { EOMComponent } from './pages/eom/eom.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent , data:{page: 'home'}},
  { path: 'about-us', component: AboutUsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'single-blog', component: SingleBlogComponent },
  { path: 'privacy-policy', component:PrivacyPolicyComponent },
  { path: 'store', component:StoreComponent  ,data: { page: 'store ' }},
  { path: 'website', component:WebsiteComponent,  data: { page: 'website  ' } },
  { path: 'eom', component:EOMComponent,  data: { page: 'eom  ' } },




  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',  
    scrollPositionRestoration: 'enabled',
    useHash: true,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
