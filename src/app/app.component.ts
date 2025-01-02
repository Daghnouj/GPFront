import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProduitListeComponent } from "./components/produit-liste/produit-liste.component";
import { ProduitDetailsComponent } from "./components/produit-details/produit-details.component";
import { AjouterProduitComponent } from "./components/ajouter-produit/ajouter-produit.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProduitListeComponent, ProduitDetailsComponent, AjouterProduitComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GPFront';
}
