// URL
const url = new URL('https://dattebayo-api.onrender.com/characters')

export default url;
// Exportar los elementos de la URL
let getALL = async () => {
    const url = 'https://dattebayo-api.onrender.com/characters'
    const config = {
        method: "GET",
    }
    const response = await fetch(url, config)
    return response.json()
}

let info = await fetch("https://dattebayo-api.onrender.com/characters")
let data = await info.json() 

const [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t] = data.characters

console.log(a.name)
console.log(a.images[1])

let titulo1 = document.getElementById("cardtitle1")
let imagen1 = document.getElementById("cardimage1")
let clan1 = document.getElementById("cardhead1")
let habilidad1 = document.getElementById("carddescription1")
imagen1.src = e.images[0]
titulo1.innerHTML = e.name
clan1.innerHTML = (`Clan: No clan Aldea: ${e.personal.affiliation[0]}`)
habilidad1.innerHTML = (`Habilidad: ${e.jutsu[5]}`)


let titulo2 = document.getElementById("cardtitle2")
let imagen2 = document.getElementById("cardimage2")
let clan2 = document.getElementById("cardhead2")
let habilidad2 = document.getElementById("carddescription2")
imagen2.src = f.images[0]
titulo2.innerHTML = f.name
clan2.innerHTML = (`Clan: ${f.personal.clan} Aldea: ${f.personal.affiliation[0]}`)
habilidad2.innerHTML = (`Habilidad: ${f.jutsu[1]}`)


let titulo3 = document.getElementById("cardtitle3")
let imagen3 = document.getElementById("cardimage3")
let clan3 = document.getElementById("cardhead3")
let habilidad3 = document.getElementById("carddescription3")
imagen3.src = g.images[0]
titulo3.innerHTML = g.name
clan3.innerHTML = (`Clan: ${g.personal.clan} Aldea: ${g.personal.affiliation[0]}`)
habilidad3.innerHTML = (`Habilidad: ${g.jutsu[1]}`)


let titulo4 = document.getElementById("cardtitle4")
let imagen4 = document.getElementById("cardimage4")
let clan4 = document.getElementById("cardhead4")
let habilidad4 = document.getElementById("carddescription4")
imagen4.src = h.images[0]
titulo4.innerHTML = h.name
clan4.innerHTML = (`Clan: ${h.personal.clan} Aldea: ${h.personal.affiliation[0]}`)
habilidad4.innerHTML = (`Habilidad: ${h.jutsu[1]}`)