import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MyworkComponent } from './components/mywork/mywork.component';
import { ResumeComponent } from './components/resume/resume.component';
import { SkillsComponent } from './components/skills/skills.component';

const routes: Routes = [
  {path:'',component: DashboardComponent},
  { path: 'aboutme', component : AboutmeComponent},
  { path: 'skills&experience', component : SkillsComponent},
  { path: 'resume', component : ResumeComponent},
  { path: 'my-work', component : MyworkComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
