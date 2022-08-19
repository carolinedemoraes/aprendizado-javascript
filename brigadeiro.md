function pegarLataLeiteCondensado (){}
function pegarColherManteiga (){}
function pegarColherChocolate (){}

panela <- []
fogao <- {
potencia: 0;
conteudo: \_;
}

function colocarIngredientes(pan){
pan <<- pegarLataLeiteCondensado()
pan <<- pegarColherManteiga()
pan <<- pegarColherManteiga()
pan <<- pegarColherChocolate()
pan <<- pegarColherChocolate()
pan <<- pegarColherChocolate()
}

function mexer(fog){}
function colocarPanela(pan){}
function ligarFogao(potencia){}
function desligarFogao(){}
function brigadeiroPronto(pan){}
function removerPanela(){}

function prepararBrigadeiro(){
colocarIngredientes(panela)
mexer(fogao)
colocarPanela(panela)
ligarFogao(fogo medio)
while !brigadeiroPronto(panela){
mexer(fogao)
}
desligarFogao()
removerPanela()
}
