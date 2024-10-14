//fetch("https://api.imgflip.com/get_memes")
//    .then((response) => {console.log(response.json)}
//);

$.getJSON("https://api.imgflip.com/get_memes", (response) => {
  for (var m of response.data.memes) {
    document.getElementById("memes").innerHTML += `
            
            <div class="card m-auto mt-4 p-3 pt-1" style="width: 18rem;">
                
                <div class="card-body">

                    <h5 class="card-title">${m.name}</h5>

                </div>

                <img src=${m.url} class="card-img-top shadow rounded" alt="meme">

            </div>
            
            `;
  }
});
// Usando o jQuery, ele faz muitas outras coisas e pode ser mais ṕesado caso eu use somente o contato com o backend
