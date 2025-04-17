import { environment } from '../../../../environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { art } from '../models/art.model'; // Adjust the path as needed
const baseUrl = environment.generalApiUrl; // Use the general API URL from environment
const iiifUrl = environment.iiifUrl; // Use the IIIF URL from environment
const headers = new HttpHeaders({
  'Content-Type': 'application/json',
  credentials: 'include', // Include credentials in the request
  'AIC-User-Agent': 'aic-bash (quinnfeng26276@gmail.com)',
});
const fields = [
  'id',
  'title',
  'image_id',
  'description',
  'date_display',
  'medium_display',
  'term_titles',
  'artist_display',
].join(',');

@Injectable({
  providedIn: 'root',
})
export class ArtService {
  constructor(private http: HttpClient) {}

  // Fetch artworks with pagination (page and limit)
  getArtworks(page: number, limit: number): Observable<any> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString());

    return this.http.get(`${baseUrl}/artworks`, { params, headers });
  }

  getArtworkById(id: number): Observable<any> {
    const params = new HttpParams().set('fields', fields);
    return this.http.get<{ data: art }>(`${baseUrl}/artworks/${id}`, {
      params,
      headers,
    });
  }

  getArtworkPictureUrl = (imageId: string, size = 843) => {
    return `${iiifUrl}/${imageId}/full/${size},/0/default.jpg`;
  };
}
