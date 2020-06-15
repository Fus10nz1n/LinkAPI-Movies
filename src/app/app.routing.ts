import { ProfileComponent } from './pages/profile/profile.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AppComponent } from './app.component';

const APP_ROUTES: Routes = [

    { path: '', component: ProfileComponent }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);