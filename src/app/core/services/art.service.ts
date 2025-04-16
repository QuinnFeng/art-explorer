import { environment } from '../../../../environment';
const baseUrl = environment.generalApiUrl; // Use the general API URL from environment
const iiifUrl = environment.iiifUrl; // Use the IIIF URL from environment
const headers = {
  'Content-Type': 'application/json',
  credentials: 'include', // Include credentials in the request
  'AIC-User-Agent': 'aic-bash (quinnfeng26276@gmail.com)',
  mode: 'cors', // Enable CORS mode
};

const getArtworks = async (page: number, limit: number) => {
  const data = await fetch(`${baseUrl}/artworks?page=${page}&limit=${limit}`, {
    method: 'GET',
    headers,
  });
  return await data.json();
};

const getArtwork = async (id: number) => {
  const data = await fetch(
    `${baseUrl}/artworks/${id}?fields=id,title,image_id,description,date_display,medium_display,term_titles,artist_display`,
    {
      method: 'GET',
      headers,
    }
  );
  return await data.json();
};

const getArtworkPictureUrl = async (imageId: string, size = 843) => {
  return `${iiifUrl}/${imageId}/full/${size},/0/default.jpg`;
};



export const artService = {
  getArtworks,
  getArtwork,
  getArtworkPictureUrl,
};
