import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { DashComponent } from './components/dash/dash.component';
import { UserComponent } from './components/dash/user/user.component';
import { ProjectsComponent } from './components/dash/projects/projects.component';
import { IdeasComponent } from './components/dash/ideas/ideas.component';
import { ProjectComponent } from './components/project/project.component';
import { ProgressComponent } from './components/project/progress/progress.component';
import { DescriptionComponent } from './components/project/description/description.component';
import { MilestonesComponent } from './components/project/milestones/milestones.component';
import { QuotesComponent } from './components/project/quotes/quotes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    DashComponent,
    UserComponent,
    ProjectsComponent,
    IdeasComponent,
    ProjectComponent,
    ProgressComponent,
    DescriptionComponent,
    MilestonesComponent,
    QuotesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
