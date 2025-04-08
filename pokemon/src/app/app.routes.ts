import { Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { PokedexComponent } from './pages/pokedex/pokedex.component';
import { CarouselComponent } from './pages/carousel/carousel.component';
import { CrudComponent } from './pages/crud/crud.component';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  { path: '', component: WelcomeComponent }, // página inicial sem layout
  {
    path: 'app', // <-- adicione este path
    component: LayoutComponent,
    children: [
      { path: 'pokedex', component: PokedexComponent },
      { path: 'carousel', component: CarouselComponent },
      { path: 'crud', component: CrudComponent }
    ]
  }
];
