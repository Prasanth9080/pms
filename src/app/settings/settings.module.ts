import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { ProjectMasterComponent } from './project-master/project-master.component';
import { ProjectCodeComponent } from './project-code/project-code.component';
import { ProjectAccessComponent } from './project-access/project-access.component';
import { ProjectTeamComponent } from './project-team/project-team.component';


@NgModule({
  declarations: [
    ProjectMasterComponent,
    ProjectCodeComponent,
    ProjectAccessComponent,
    ProjectTeamComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
