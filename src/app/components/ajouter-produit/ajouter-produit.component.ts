import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProduitService, Produit } from '../../services/produit.service';
import { FormsModule } from '@angular/forms';
import { Comment } from '@angular/compiler';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ajouter-produit',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './ajouter-produit.component.html',
  styleUrls: ['./ajouter-produit.component.css'] // Correction ici
})
export class AjouterProduitComponent {
  produit: Produit = { nom: '', prix: 0, categorie: '' };
  errorMessage: string = '';  // Variable pour stocker l'erreur

  constructor(
    private produitService: ProduitService,
    private router: Router
  ) {}

  ajouterProduit(): void {
    this.produitService.ajouterProduit(this.produit).subscribe(
      () => {
        console.log('Produit ajouté avec succès');
        this.router.navigate(['/produits']);
        this.errorMessage = '';  // Réinitialiser l'erreur en cas de succès
      },
      (error) => {
        console.error('Erreur lors de l’ajout du produit :', error);
        this.errorMessage = 'Erreur lors de l’ajout du produit. Veuillez réessayer plus tard.'; // Message d'erreur
      }
    );
  }

  isValidObjectId(id: string): boolean {
    return /^[a-f\d]{24}$/i.test(id); // Vérifie si c'est un ObjectId MongoDB valide
  }
}