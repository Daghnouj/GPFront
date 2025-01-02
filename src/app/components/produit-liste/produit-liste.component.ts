import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../../services/produit.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produit-liste',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './produit-liste.component.html',
  styleUrls: ['./produit-liste.component.css']
})
export class ProduitListeComponent implements OnInit {
  produits: any[] = [];
  successMessage: string = '';

  constructor(private produitService: ProduitService) {}

  ngOnInit(): void {
    this.chargerProduits();
  }

  chargerProduits(): void {
    this.produitService.getProduits().subscribe(
      data => {
        console.log('Produits récupérés :', data); // Vérifier si les produits arrivent bien
        this.produits = data;
      },
      error => {
        console.error('Erreur lors de la récupération des produits :', error); // Si une erreur survient
      }
    );
  }

  supprimerProduit(id: number): void {
    this.produitService.supprimerProduit(id.toString()).subscribe(
      () => {
        this.chargerProduits();
        this.successMessage = 'Produit supprimé avec succès !'; 
        setTimeout(() => {
          this.successMessage = ''; 
        }, 3000);
      },
      (error) => {
        console.error('Erreur lors de la suppression du produit', error);
      }
    );
  }
  
}
