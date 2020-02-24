// level 1

const baseUrl = "https://rickandmortyapi.com/api/character/";


fetch(baseUrl)
.then(function(response) {

    return response.json();
})
.then(function(json) {
    handleJson(json);
})
.catch(function(error) {
    console.log(error); 
    
})

function handleJson(json) {
   
    const data = json.results;

    const dataContainer = document.querySelector(".results");

    let html = "";

    data.forEach(function(data) {
        if (!data.type){
            data.type = "Unknown";
        }
        html +=
        `<div class="col-sm-6 col-md-4 col-lg-3">                
                 <div class="card">
                   
                 <img class="image" src="${data.image}" alt="${data.name}">
                    <div class="details">
                         <h4 class="name">${data.name}</h4>
                            <p>Type: ${data.type}</p>    
                            <p>Episode count: ${data.episode.length}</p>                                       
                            <a class="btn btn-primary" href="details.html?id=${data.id}">Details</a>
                    </div>

                </div>
         </div>`;
    });
    dataContainer.innerHTML = html;
}
