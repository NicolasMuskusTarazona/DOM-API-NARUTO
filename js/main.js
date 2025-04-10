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

// obtener informacion api
let info = await fetch("https://dattebayo-api.onrender.com/characters")
let data = await info.json() 
// darle nombre a los objetos
const [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t] = data.characters

// Primer personaje
let titulo1 = document.getElementById("cardtitle1")
let imagen1 = document.getElementById("cardimage1")
let clan1 = document.getElementById("cardhead1")
let habilidad1 = document.getElementById("carddescription1")

// filtrar info 
imagen1.src = a.images[0]
titulo1.innerHTML = a.name
clan1.innerHTML = (`Clan: ${a.personal.clan} Aldea: ${a.personal.affiliation[0]}`)
habilidad1.innerHTML = (`Habilidad: ${a.jutsu[52]}`)

// Segundo personaje
let titulo2 = document.getElementById("cardtitle2")
let imagen2 = document.getElementById("cardimage2")
let clan2 = document.getElementById("cardhead2")
let habilidad2 = document.getElementById("carddescription2")

// filtrar info 
imagen2.src = b.images[0]
titulo2.innerHTML = b.name
clan2.innerHTML = (`Clan: ${b.personal.clan} Aldea: ${b.personal.affiliation[0]}`)
habilidad2.innerHTML = (`Habilidad: ${b.jutsu[1]}`)

// Tercer personaje
let titulo3 = document.getElementById("cardtitle3")
let imagen3 = document.getElementById("cardimage3")
let clan3 = document.getElementById("cardhead3")
let habilidad3 = document.getElementById("carddescription3")

// filtrar info 
imagen3.src = c.images[0]
titulo3.innerHTML = c.name
clan3.innerHTML = (`Clan: ${c.personal.clan} Aldea: ${c.personal.affiliation[0]}`)
habilidad3.innerHTML = (`Habilidad: ${c.jutsu[1]}`)

// Cuarto personaje
let titulo4 = document.getElementById("cardtitle4")
let imagen4 = document.getElementById("cardimage4")
let clan4 = document.getElementById("cardhead4")
let habilidad4 = document.getElementById("carddescription4")

// filtrar info 
imagen4.src = d.images[0]
titulo4.innerHTML = d.name
clan4.innerHTML = (`Clan: ${d.personal.clan} Aldea: ${d.personal.affiliation[0]}`)
habilidad4.innerHTML = (`Habilidad: ${d.jutsu[1]}`)