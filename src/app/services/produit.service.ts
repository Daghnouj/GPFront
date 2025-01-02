import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Interface pour un produit
export interface Produit {
  nom: string;
  prix: number;
  categorie: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProduitService {
  private apiUrl = 'http://localhost:5000/api/produits';

  constructor(private http: HttpClient) {}

  // Fonction de validation de l'ID
  private isValidObjectId(id: string): boolean {
    // Validation d'un ObjectId (24 caractères hexadécimaux)
    return /^[a-f\d]{24}$/i.test(id);
  }

  // Récupérer tous les produits
  getProduits(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.apiUrl);
  }

  // Récupérer un produit par son ID
  getProduitById(id: string): Observable<Produit> {
    if (!this.isValidObjectId(id)) {
      throw new Error('Identifiant invalide');
    }
    return this.http.get<Produit>(`${this.apiUrl}/${id}`);
  }

  // Ajouter un nouveau produit
  ajouterProduit(produit: Produit): Observable<Produit> {
    return this.http.post<Produit>(this.apiUrl, produit);
  }

  // Modifier un produit existant
  modifierProduit(id: string, produit: Produit): Observable<Produit> {
    if (!this.isValidObjectId(id)) {
      throw new Error('Identifiant invalide');
    }
    return this.http.put<Produit>(`${this.apiUrl}/${id}`, produit);
  }

  // Supprimer un produit
  supprimerProduit(id: string): Observable<void> {
    if (!this.isValidObjectId(id)) {
      throw new Error('Identifiant invalide');
    }
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
