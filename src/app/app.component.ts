import { Component } from '@angular/core';
// import { SectionComponent } from './section/section.component';
 import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
//import { ArticleComponent } from './article/article.component';
 import { FooterComponent } from './footer/footer.component';
//  import { JewelleryComponent } from './jewellery/jewellery.component';
import { LayoutComponent } from './layout/layout.component';
@Component({
  selector: 'app-root',
  imports: [HeaderComponent,SidenavComponent,FooterComponent,LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'shopping';
  // isValue:Boolean=false;
}
