import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { QuestionsComponent, RatingComponent } from './questions/questions.component';
import { HoverHighlightDirective } from './hover-highlight.directive';
import { RepeaterDirective } from './repeater.directive';
import { TrainerInfoComponent } from './trainer-info/trainer-info.component';
import { RatingPipe } from './rating.pipe';
import { MaxValPipe } from './max-val.pipe';
import { SomeFilterPipe } from './some-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RatingComponent,
    QuestionsComponent,
    HoverHighlightDirective,
    RepeaterDirective,
    TrainerInfoComponent,
    RatingPipe,
    MaxValPipe,
    SomeFilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
