import { NgModule } from '@angular/core';
import { DataResolverService } from './services/data-resolver.service';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'tabs', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'appareils', loadChildren: './pages/appareils/appareils.module#AppareilsPageModule' },
  { path: 'single-appareil/:name', 
    resolve: {
      appareil: DataResolverService
    },
    loadChildren: './pages/appareils/single-appareil/single-appareil.module#SingleAppareilPageModule' 
  },
  { path: 'settings', loadChildren: './pages/settings/settings.module#SettingsPageModule' },
  { path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'options', loadChildren: './pages/options/options.module#OptionsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
