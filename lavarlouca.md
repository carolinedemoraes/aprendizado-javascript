loucasSujas <- [...]

coposSujos <-[]
talheresSujos <-[]
pratosSujos <-[]

esponja <- @

function abrirTorneira() {}
function fecharTorneira() {}
function ensaboarEsponja(esp) {}
function levarAbaixoDaTorneira(louca) {}
function tirarDebaixoDaTorneira(louca) {}
function aguardar(segundos){}
function precisaEnsaboarAEsponja(esp):bool {}
function ensaboarLouca(louca, esp){}
function colocarNoEscorredor(louca){}

function molhar(louca, segundos){
levarAbaixoDaTorneira(louca)
abrirTorneira()
aguardar(segundos)
tirarDebaixoDaTorneira(louca)
fecharTorneira()
}

function lavar (louca, esp){
molhar(louca, 3)
if precisaEnsaboarAEsponja (esp){
ensaboarEsponja(esp)
}
ensaboarLouca(louca, esp)
molhar(louca, 6)
colocarNoEscorredor(louca)
}

for louca of loucasSujas {
if louca type copo {
coposSujos <<- louca
}
else if louca type talher{
talheresSujos <<- louca
} else{
pratosSujos <<- louca
}
}

for copo of coposSujos {
lavar (copo)
}

for talher of talheresSujos{
lavar(talher)
}

for prato of pratosSujos{
lavar(prato)
}
