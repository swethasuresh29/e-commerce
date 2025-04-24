import { Component } from '@angular/core';
 import { HeaderComponent } from './header/header.component';
//  import { SigninComponent } from './signin/signin.component';
//  import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './sidenav/sidenav.component';
 import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent,SidenavComponent,LayoutComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'shopping';
  isValue:Boolean=false;
}
