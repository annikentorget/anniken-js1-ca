const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const detailContainer = document.querySelector(".detail-container");


let id;

if (params.has("id")) {
    id = params.get("id");
}

const detailsUrl = `https://rickandmortyapi.com/api/character/?id=${id}`;

fetch(detailsUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        console.log(json);
        fetchDetails(json);
    })
    .catch(function (error) {
        console.log(error);
    });

function fetchDetails(json) {
    let html = "";

    let data = json.results;
    
    html += `<div class="detail-container">
            <img class="details-image" src="${data.image}" alt="${data.name}"/>
            <div class="detail-details">
            <h1>${data.name}</h1>
            <p>Status: <span class="value" id="status">"${data.status}"</span></p>
            <p>Species: <span class="value" id="species">"${data.species}"</span></p>
            <p>Origin: <span class="value" id="origin">"${data.origin}"</span></p>
            <p>Location: <span class="value" id="location">"${data.location}"</span></p>                   
            </div>
            </div>`;
    detailContainer.innerHTML = html;
};