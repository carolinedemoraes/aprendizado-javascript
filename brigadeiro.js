function pegarLataLeiteCondensado() {
  console.log("pegarLataLeiteCondensado");
  return 400;
}
function pegarColherManteiga() {
  console.log("pegarColherManteiga");
  return 20;
}
function pegarColherChocolate() {
  console.log("pegarColherChocolate");
  return 20;
}

panela = {
  peso: 0,
  pesoInicial: 0,
  adicionar(qtd) {
    this.peso += qtd;
    this.pesoInicial += qtd;
  },

  evaporar(pct) {
    this.peso -= this.peso * pct;
  },
};

fogao = {
  potencia: 0,
  conteudo: null,

  potencias: {
    FOGO_BAIXO: 200,
    FOGO_MEDIO: 800,
    FOGO_ALTO: 1400,
    MAXIMO: 1400,
  },

  colocarPanela(pan) {
    console.log("colocarPanela");
    this.conteudo = pan;
  },

  ligarFogao(potencia) {
    console.log("ligarFogao", potencia);
    this.potencia = potencia;
  },

  desligarFogao() {
    console.log("desligarFogao");
    this.potencia = 0;
  },
  mexer() {
    console.log("mexer");
    if (this.conteudo !== null) {
      this.conteudo.evaporar(this.potencia / this.potencias.MAXIMO / 20);
      console.log(
        "peso depois de mexer:" +
          this.conteudo.peso +
          "/" +
          this.conteudo.pesoInicial
      );
    }
  },
  removerPanela() {
    console.log("removerPanela");
    this.conteudo = null;
  },
};

function colocarIngredientes(pan) {
  pan.adicionar(pegarLataLeiteCondensado());
  pan.adicionar(pegarColherManteiga());
  pan.adicionar(pegarColherManteiga());
  pan.adicionar(pegarColherChocolate());
  pan.adicionar(pegarColherChocolate());
  pan.adicionar(pegarColherChocolate());
}

function brigadeiroPronto(pan) {
  const pronto = pan.peso <= pan.pesoInicial * 0.7;
  console.log("brigadeiroPronto ?", pronto);
  return pronto;
}

function prepararBrigadeiro() {
  colocarIngredientes(panela);
  fogao.colocarPanela(panela);
  fogao.mexer(fogao);
  fogao.ligarFogao(fogao.potencias.FOGO_MEDIO);
  while (!brigadeiroPronto(panela)) {
    fogao.mexer(fogao);
  }
  fogao.desligarFogao();
  fogao.removerPanela();
}
prepararBrigadeiro();
