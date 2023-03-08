##container x item

Os **containers** (onde tem a propriedade *display: flex*), possuem propriedades diferentes dos **items** (filhos de quem tem a propriedade *display: flex), veja abaixo:

* _**Container:**_
  - **flex-direction** _(horizontal ou vertical)_
  - **flex-wrap** _(determina se quebra ou não)_
  - **justify-content** _(define alinhamento no eixo principal)_
  - **align-items** _(define alinhamento no eixo cruzado)_
  - **align-content** _(alinha as linhas quando há espaço extra no eixo cruzado)_
  - **gap** _(determina o espaçamento entre os filhos)_
* _**Item:**_
  - **flex:**
    - **flex-grow** _(faz aumentar de 0-8)_
    - **flex-shrink** _(faz diminuir de 0-8)_
    - **flex-basis** _(define um valor inicial. Funciona em conjunto com as propriedades anteriores)_
  - **align-self** _(posiciona o elemento individualmente)