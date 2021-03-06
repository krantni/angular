import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { GoogleAnalyticsEventsService } from './services/google-analytics.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { SocialmediaComponent } from './components/socialmedia/socialmedia.component';
import { FooterComponent } from './components/footer/footer.component';
import { RecipesComponent } from './components/recipes/recipes.component';

const appRoutes: Routes = [  
  {path: 'about', component: AboutComponent},
  {path: 'education', component: EducationComponent},
  {path: 'experience', component: ExperienceComponent},
  {path: 'recipes', component: RecipesComponent},
  {path: '**', component: AboutComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    SocialmediaComponent,
    FooterComponent,
    RecipesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [GoogleAnalyticsEventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
