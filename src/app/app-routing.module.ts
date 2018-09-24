import { SettingsComponent } from './components/settings/settings.component';
import { EditNoteComponent } from './components/edit-note/edit-note.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/calendar', pathMatch: 'full'},
  { path: 'calendar', component: HomeComponent },
  { path: 'edit/:date', component: EditNoteComponent },
  { path: 'settings', component: SettingsComponent }
];

@NgModule({
  // imports: [RouterModule.forRoot(routes, {useHash: true})],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
