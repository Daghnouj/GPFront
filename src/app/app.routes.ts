import { Routes } from '@angular/router';
import { ProduitListeComponent } from './components/produit-liste/produit-liste.component';
import { AjouterProduitComponent } from './components/ajouter-produit/ajouter-produit.component';
import { ProduitDetailsComponent } from './components/produit-details/produit-details.component';
import { ModifierProduitComponent } from './components/modifier-produit/modifier-produit.component';

export const routes: Routes = [
  { path: 'produits', component: ProduitListeComponent },
  { path: 'produits/ajouter', component: AjouterProduitComponent },
  { path: 'produits/modifier/:id', component: ModifierProduitComponent },
  { path: 'produits/:id', component: ProduitDetailsComponent },
  { path: '', redirectTo: '/produits', pathMatch: 'full' },
  { path: '**', redirectTo: '/produits' },
];
