import { Routes } from '@angular/router';
import { ElectronicsComponent } from './electronics/electronics.component';
import { JewelleryComponent } from './jewellery/jewellery.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { ArticleComponent } from './article/article.component';

export const routes: Routes = [
{  
        path:'',
        redirectTo:'article',
        pathMatch:'full'
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
    path:'jewellery',
    component:JewelleryComponent
},
{
    path:'men',
    component:MenComponent
},
{
    path:'women',
    component:WomenComponent
}
];
