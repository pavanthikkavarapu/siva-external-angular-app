import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer/footer.component';
import { HeaderComponent } from './header/header/header.component';
import { HomeComponent } from './home/home/home.component';
import { MasterComponent } from './master/master/master.component';
import { AccountsComponent } from './accounts/accounts/accounts.component';
import { ExitComponent } from './exit/exit/exit.component';
import { HelpComponent } from './help/help/help.component';
import { InventoryComponent } from './inventory/inventory/inventory.component';
import { MisComponent } from './mis/mis/mis.component';
import { PurchasesComponent } from './purchases/purchases/purchases.component';
import { SalesComponent } from './sales/sales/sales.component';
import { UtilitiesComponent } from './utilities/utilities/utilities.component';
import { LoginscreenComponent } from './loginscreen/loginscreen/loginscreen.component';


const appRoutes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: LoginscreenComponent },
  { path: 'home', component: HomeComponent },
  { path: 'master', component: MasterComponent },
  { path: 'purchases', component: PurchasesComponent },
  { path: 'inventory', component: InventoryComponent },
  { path: 'sales', component: SalesComponent },
  { path: 'accounts', component: AccountsComponent },
  { path: 'mis', component: MisComponent },
  { path: 'utilities', component: UtilitiesComponent },
  { path: 'help', component: HelpComponent },
  { path: 'exit', component: ExitComponent },
  { path: '**', component: HomeComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    MasterComponent,
    AccountsComponent,
    ExitComponent,
    HelpComponent,
    InventoryComponent,
    MisComponent,
    PurchasesComponent,
    SalesComponent,
    UtilitiesComponent,
    LoginscreenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
