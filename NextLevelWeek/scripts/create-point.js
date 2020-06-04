
//======= Populando o select de Estados e Cidades.=======

function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then(res => res.json()) // ou .then((res) => { return res.json() })
        .then(states => {
            for (const state of states) {
                ufSelect.innerHTML += `<option value="${state.id}"> ${state.nome} </option>`
            }
        })
}
populateUFs()

function getCities(event) {
    const citySelect = document.querySelector("[name=city]")
    const stateInput = document.querySelector("[name=state]")

    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = "<option value>Selecione a Cidade</option>"
    citySelect.disabled = true

    fetch(url)
        .then(res => res.json())
        .then(cities => {
            for (const city of cities) {
                citySelect.innerHTML += `<option value="${city.nome}">${city.nome} </option>`
            }

            citySelect.disabled = false
        })
}

document
    .querySelector("select[name=uf]") // procura pelo seletor com name = uf
    .addEventListener("change", getCities) //vai "ouvir" sempre que tiver alguma mudança

//================== Itens de Coleta ====================
const ItemsToCollect = document.querySelectorAll(".items-grid li")

for (const item of ItemsToCollect) {
    item.addEventListener("click", handleSelectedItem)
}

let selectedItems = [1, 2, 3, 4, 5, 6]

function handleSelectedItem(event) {
    const itemLi = event.target

    itemLi.classList.toggle("selected") // adicionar ou remover uma classe com JS

    // console.log(event.target.dataset.id)
    const itemId = itemLi.dataset.id

    // Verificar se exitem items selecionados, se sim, pegar os itens selecionados
    const alreadySelected = selectedItems.findIndex(item =>{
        const itemFound = item == itemId // isso sera true ou false
        return itemFound
    })

    // Se ja estiver selecionado, tirar da seleção
    if(alreadySelected)

    // Se não estiver selecionado, adicionar na seleçao

    // Atualizar o campo escondido com os itens selecionados
}
