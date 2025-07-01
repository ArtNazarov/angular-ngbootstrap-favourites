import { Routes } from '@angular/router';
import { NzCenterAreaComponent } from './nz-center-area/nz-center-area.component';

const routes: Routes = [
  { path: 'pinned', component: NzCenterAreaComponent },
  { path: 'search_engines', component: NzCenterAreaComponent },
  { path: 'ai', component: NzCenterAreaComponent },
  { path: 'freelance', component: NzCenterAreaComponent},
  { path: '', redirectTo: '/pinned', pathMatch: 'full' }
];

export  { routes };