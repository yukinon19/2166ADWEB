import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PartnersComponent } from './partners/partners.component';
import { OrganizationComponent } from './organization/organization.component';
import { JoinComponent } from './join/join.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path : 'home',
  component:HomeComponent
  },
  {path : 'partners',
  component:PartnersComponent
  },
  {path : 'organization',
  component:OrganizationComponent
  },
  { path : 'join',
  component:JoinComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
