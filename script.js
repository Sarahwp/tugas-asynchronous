// nomor 1

let profilGithub = document.getElementById("profilgithub")
let API =`https://api.github.com/users/Sarahwp`

fetch(API,{method: "GET"})
.then(result => result.json())
.then(result => {
    console.log(result)
    profilGithub.innerHTML = `<div class="profil"> 
    <div class="profilimage"><img src="${result.avatar_url}"/></div>

    <div class="profildetail">
    <h2>${result.name}</h2>
    <ul><li> <a target="_blank" href="${result.html_url}">Sarhan's Github</a></li><li>Location :${result.location}</li>
    <li>Followes: ${result.followers}</li>
    <li>Following: ${result.following}</li></ul></div></div>`
})

// // nomor 2
let benderaNegara = document.getElementById("benderanegara")
let API2 = `https://restcountries.eu/rest/v2/all`

async function getBendera(API2){
    let data = await fetch (API2, {method: "GET"})
    data = await data.json()

    for (let i=0; i<data.length; i++){
        benderaNegara.innerHTML += `<div class="flag">
        <img src="${data[i].flag}"/>
        <h3>${data[i].name}</h3></div>`
    }
}
getBendera(API2)