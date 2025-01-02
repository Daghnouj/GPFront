import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit, ProduitService } from '../../services/produit.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modifier-produit',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './modifier-produit.component.html',
  styleUrls: ['./modifier-produit.component.css']
})
export class ModifierProduitComponent implements OnInit {
  produit: Produit = { nom: '', prix: 0, categorie: '' };
  id: string | null = null;
  errorMessage: string = '';  // Variable pour stocker l'erreur

  constructor(
    private route: ActivatedRoute,
    private produitService: ProduitService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Récupérer l'ID du produit à partir de l'URL
    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id) {
      // Charger les informations du produit à partir de l'API
      this.produitService.getProduitById(this.id).subscribe({
        next: (data) => {
          this.produit = data;
        },
        error: (err) => {
          console.error('Erreur lors de la récupération du produit:', err);
          this.errorMessage = 'Erreur lors de la récupération du produit. Veuillez réessayer plus tard.'; // Message d'erreur
        }
      });
    }
  }

  modifierProduit(): void {
    // Vérification si l'ID est valide et si le produit est bien défini
    if (this.id && this.produit) {
      this.produitService.modifierProduit(this.id, this.produit).subscribe({
        next: (data) => {
          console.log('Produit modifié avec succès:', data);
          this.router.navigate(['/produits']); // Rediriger vers la liste des produits
          this.errorMessage = '';  // Réinitialiser l'erreur en cas de succès
        },
        error: (err) => {
          console.error('Erreur lors de la modification du produit:', err);
          this.errorMessage = 'Erreur lors de la modification du produit. Veuillez réessayer plus tard.'; // Message d'erreur
        }
      });
    }
  }
}
