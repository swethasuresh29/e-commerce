import { Routes } from '@angular/router';
import { ElectronicsComponent } from './electronics/electronics.component';
import { JewelleryComponent } from './jewellery/jewellery.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { ArticleComponent } from './article/article.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import {LoginGuard} from './authguard.guard'
export const routes: Routes = [
{  
        path:'',
        redirectTo:'home',
        pathMatch:'full'
},
{
    path:'signin',
    component:SigninComponent,
    canActivate: [LoginGuard],

},
{
    path:'signup',
    component:SignupComponent
},
{
    path:'home',
    component:HomeComponent
},
{
    path:'article', 
    component:ArticleComponent
},
{
    path:'electronics',
    component:ElectronicsComponent
},
{
    path:'jewelery',
    component:JewelleryComponent
},
{
    path:"men's clothing",
    component:MenComponent
},
{
    path:"women's clothing",
    component:WomenComponent
},
{
    path:'detail/:productId',
    component:ProductdetailComponent
}
];
