import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TrackDetailsComponent } from './track-details/track-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainTrackPageComponent } from './main-track-page/main-track-page.component';
import { EmployeeComponent } from './employee/employee.component';
import { QuoteComponent } from './quote/quote.component';
import { FormComponent } from './form/form.component';
import { RegisterComponent } from './register/register.component';
//import { AuthGuard } from './_helpers';


const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path: 'home', component: HomeComponent },
  {path: 'track-Details', component : TrackDetailsComponent},
  {path: 'single-track/:id', component : MainTrackPageComponent},
  {path: 'employee', component:EmployeeComponent},
  {path: 'get-a-quote', component:QuoteComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'form', component:FormComponent},
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
