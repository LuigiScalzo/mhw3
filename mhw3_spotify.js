function onJsonAlbum(json) {
  console.log('JSON ricevuto');
  console.log(json);

  // Svuotiamo la libreria
  const library = document.querySelector('#view_search');
  library.innerHTML = '';
  // Leggi il numero di risultati
  const results = json.albums.items;
  let num_results = results.length;

  // Mostriamone al massimo 10
  if (num_results > 10)
    num_results = 10;
  // Processa ciascun risultato
  for (let i = 0; i < num_results; i++) {
    // Leggi il documento
    const album_data = results[i];
    // Leggiamo info
    const title = album_data.name;
    const selected_image = album_data.images[0].url;
    // Creiamo il div che conterrà immagine e didascalia
    const album = document.createElement('div');
    album.classList.add('album');
    // Creiamo l'immagine
    const img = document.createElement('img');
    img.src = selected_image;
    // Creiamo la didascalia
    const caption = document.createElement('span');
    caption.textContent = title;
    // Aggiungiamo immagine e didascalia al div
    album.appendChild(img);
    album.appendChild(caption);
    // Aggiungiamo il div alla libreria
    library.appendChild(album);
  }
}
function onJsonArtist(json) {
  console.log('JSON ricevuto');
  console.log(json);

  
  const library = document.querySelector('#view_search');
  library.innerHTML = '';
  const results = json.artists.items;
  let num_results = results.length;

  if (num_results > 10)
    num_results = 10;
  for (let i = 0; i < num_results; i++) {
    const artist_list = results[i];

    const title = artist_list.name;

    const selected_image = artist_list.images[0].url;

    const list = document.createElement('div');

    list.classList.add('album');

    const img = document.createElement('img');

    img.src = selected_image;

    const caption = document.createElement('span');

    caption.textContent = title;

    list.appendChild(img);

    list.appendChild(caption);

    library.appendChild(list);
  }
}

function onJsonTrack(json) {
  console.log('JSON ricevuto');
  console.log(json);

  const library = document.querySelector('#view_search');

  library.innerHTML = '';

  const results = json.tracks.items;

  let num_results = results.length;

  if (num_results > 10)

    num_results = 10;

  for (let i = 0; i < num_results; i++) {

    const track_list = results[i];

    const title = track_list.name;

    const selected_image = track_list.album.images[0].url;

    const list = document.createElement('div');

    list.classList.add('album');

    const img = document.createElement('img');

    img.src = selected_image;

    const caption = document.createElement('span');

    caption.textContent = title;

    list.appendChild(img);
    list.appendChild(caption);
    library.appendChild(list);
  }
}

function onJsonPlaylist(json) {
  console.log('JSON ricevuto');
  console.log(json);

  const library = document.querySelector('#view_search');
  library.innerHTML = '';
  const results = json.playlists.items;
  let num_results = results.length;


  if (num_results > 10)
    num_results = 10;

  for (let i = 0; i < num_results; i++) {

    const playlist_list = results[i];

    const title = playlist_list.name;

    const selected_image = playlist_list.images[0].url;

    const list = document.createElement('div');

    list.classList.add('album');

    const img = document.createElement('img');

    img.src = selected_image;

    const caption = document.createElement('span');

    caption.textContent = title;

    list.appendChild(img);
    list.appendChild(caption);
    library.appendChild(list);
  }
}

function onResponse(response) {
  console.log('Risposta ricevuta');
  console.log(response.status);
  return response.json();
}


function search(event) {
  // Impedisci il submit del form
  event.preventDefault();
  // Leggi valore del campo di testo
  const input = document.querySelector('#cerca');
  //const album_value = encodeURIComponent(album_input.value);
  const input_value = input.value;

  if (input_value) {
    const contenuto = encodeURIComponent(input_value);
    //ho verificato che effettivamente è stato inserito un valore nel campo di testo
    console.log(" ricerco elementi con contenuto: " + contenuto);
    //adesso seleziono il tipo di contenuto che io voglio cercare (es. album,artista,brano ecc...)
    const tipo = document.querySelector("#tipo");
    const tipo_value = tipo.value;
    console.log('Ricerco elementi di tipo: ' + tipo_value);
    console.log('Eseguo ricerca: ' + input_value);


    if (tipo_value === "album") {
      // Esegui la richiesta
      fetch("https://api.spotify.com/v1/search?type=album&q=" + input_value,
        {
          headers:
          {
            'Authorization': 'Bearer ' + token
          }
        }
      ).then(onResponse).then(onJsonAlbum);
    } 
    else if (tipo_value === "artista") {
fetch("https://api.spotify.com/v1/search?type=artist&q=" + input_value,
{
  headers:
  {
    
    'Authorization': 'Bearer ' + token
  }
}
).then(onResponse).then(onJsonArtist);
    }

    else if ( tipo_value === "brano"){
fetch("https://api.spotify.com/v1/search?type=track&q=" + input_value,
{
  headers:
  {
    'Authorization': 'Bearer ' + token
  }
}
).then(onResponse).then(onJsonTrack);
    }
    else if(tipo_value === "playlist"){
fetch("https://api.spotify.com/v1/search?type=playlist&q=" + input_value,
{
  headers:
  {
    'Authorization': 'Bearer ' + token
  }
}
).then(onResponse).then(onJsonPlaylist);
    }
    else{
      console.log("inserisci il contenuto per effettuare la ricerca");
    }



  }



}

function onTokenResponse(response) {
  return response.json();
}


function onTokenJson(json) {
  // Imposta il token global
  token = json.access_token;
}

// OAuth
const client_id = '99ad22c3a5c642f3a2eb65bf4821ca5c';
const client_secret = '44a5886fec104a49a2a98f0fcbba5470';
// Dichiara variabile token
let token;
// All'apertura della pagina, richiediamo il token
fetch("https://accounts.spotify.com/api/token",
  {
    method: "post",
    body: 'grant_type=client_credentials',
    headers:
    {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret)
    }
  }
).then(onTokenResponse).then(onTokenJson);



const form = document.querySelector("#search");
form.addEventListener('submit', search);