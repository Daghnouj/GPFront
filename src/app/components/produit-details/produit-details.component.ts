import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from '../../services/produit.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produit-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produit-details.component.html',
  styleUrls: ['./produit-details.component.css']
})
export class ProduitDetailsComponent implements OnInit {
  produit: any;

  constructor(
    private route: ActivatedRoute,
    private produitService: ProduitService,
    private router: Router  // Ajout du Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      // Utilisation de parseInt pour une conversion sûre
      const produitId = parseInt(id, 10);
      if (!isNaN(produitId)) {
        this.produitService.getProduitById(id.toString()).subscribe(
          (produit) => {
            this.produit = produit;
          },
          (error) => {
            console.error('Erreur lors de la récupération du produit', error);
          }
        );
      } else {
        console.error('Identifiant invalide:', id);
      }
    } else {
      console.error('Aucun identifiant fourni dans la route.');
    }
  }

  // Méthode de navigation programmatique
  retourALaListe() {
    this.router.navigate(['/produits']);
  }
}
