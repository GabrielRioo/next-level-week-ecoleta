// document
//     .querySelector("select[name=uf]") // procura pelo seletor com name = uf
//     .addEventListener("change", () => { console. log("mudei!") }) //vai "ouvir" sempre que tiver alguma mudança

function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( res => res.json() ) // ou .then((res) => { return res.json() })
    .then( states => { 
        for()
     } )
}