import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import * as $ from 'jquery';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TrackDetailsComponent } from './track-details/track-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { GetTrackService } from './get-track.service';
import { ModalComponent } from './modal/modal.component';
import { MainTrackPageComponent } from './main-track-page/main-track-page.component';
import { EmployeeComponent } from './employee/employee.component';
import { SortPipe } from './sort.pipe';
import { QuoteComponent } from './quote/quote.component';
import { CoursesComponent } from './courses/courses.component';
import { FormComponent } from './form/form.component';
import { RegisterComponent } from './register/register.component';
import { ToastComponent } from './toast/toast.component';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    TrackDetailsComponent,
    PageNotFoundComponent,
    HeaderComponent,
    ModalComponent,
    MainTrackPageComponent,
    EmployeeComponent,
    SortPipe,
    QuoteComponent,
    CoursesComponent,
    FormComponent,
    RegisterComponent,
    ToastComponent,
    AlertComponent,
    
  ],
  entryComponents: [
    ModalComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [GetTrackService],
  bootstrap: [AppComponent]
})
export class AppModule { }
