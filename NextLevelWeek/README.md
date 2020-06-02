### Next Level Week
#### Anotações sobre a aula:

#### Box Models
* Modelo de Caixa, todas tem:
   * Largura
   * Altura
   * Espaçamento
   * Preenchimento
   * Borda
   * Cor
   * Fundo
   * Display - Maneira que é vista pelo html
   * Alinhamento
   * Posicionamento
---
Pixel é uma unidade de medida fixa <br>
Interessante usar: <br>
`width: 100%;` - valor ajustavel<br>
`max-width: 360px` - valor fixo

---

* No DevTools, ao clicar em uma TAG, e em Styles, tem um campo chamado: 
   * `element.style {}` - Se digitar uma funcionalidade, atualiza na hora para ver as alterações.
* `display: Flex;` - coloca um elemento ao lado do outro, dentro da caixa.
   * `align-items: center` - alinha os itens da flex na mesma linha 
   * `justify-content: space-between` - espaçamento entre os conteudos
   * `flex-direction: column` - Poe em colunas, um embaixo do outro
      * `flex: 1;` - crescimento
* No CSS: `:root { --title-color: #322153 }` - Define uma variavel com essa cor.
   * `color: var(--title-color)`
* `border-top-left-radius: 8px`
* Se adicionar uma imagem no `<span>` tem que definir `width` e `height` 
**Alinhar com Posição Absoluta:** <br>
* `position: absolute;` 
* `left:50%;`
* `transform: translateX(-50%)`
