//Question 2
const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";
const  out = document.querySelector(".disk");

fetch(url)
.then(Response => Response.json())
.then(data => disk(data))
.catch(error => out.innerHTML = "huh");

disk = (spill) => {
    console.log(spill);
    out.innerHTML = ""
    for (disk of spill.results) {
        if(disk === spill.results[8]){
            break
        };
        let newSpill = `
        <ul>
        <li><h2>${disk.name}</h2></li>
        <li><p>Rating: ${disk.rating}</p></li>
        <li><p>Number of tags: ${disk.tags.lenght}</p></li>
        </ul>`;
        out.innerHTML += newSpill;
    }
};