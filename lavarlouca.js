const loucasSujas = [
  "prato 1",
  "copo 1",
  "prato 2",
  "talher 1",
  "talher 2",
  "copo 2",
  "copo 3",
  "copo 4",
  "prato 3",
  "prato 4",
  "talher 3",
  "talher 4",
];

const coposSujos = [];
const talheresSujos = [];
const pratosSujos = [];

const escorredor = [];

let esponja = [];

function abrirTorneira() {
  console.log("abrirTorneira");
}
function fecharTorneira() {
  console.log("fecharTorneira");
}
function ensaboarEsponja(esp) {
  console.log("ensaboarEsponja");
  esp.push("a", "a", "a", "a");
}
function levarAbaixoDaTorneira(louca) {
  console.log("levarAbaixoDaTorneira", louca);
}
function tirarDebaixoDaTorneira(louca) {
  console.log("tirarDebaixoDaTorneira", louca);
}
function aguardar(segundos) {
  console.log("aguardar", segundos);
}
function precisaEnsaboarAEsponja(esp) {
  console.log("precisaEnsaboarAEsponja", esp.length);
  return !esp.length;
}
function ensaboarLouca(louca, esp) {
  console.log("ensaboarLouca", louca);
  esp.pop();
}
function colocarNoEscorredor(louca) {
  console.log("colocarNoEscorredor", louca);
  escorredor.push(louca);
}

function molhar(louca, segundos) {
  levarAbaixoDaTorneira(louca);
  abrirTorneira();
  aguardar(segundos);
  tirarDebaixoDaTorneira(louca);
  fecharTorneira();
}

function lavar(louca, esp) {
  molhar(louca, 3);
  if (precisaEnsaboarAEsponja(esp)) {
    ensaboarEsponja(esp);
  }
  ensaboarLouca(louca, esp);
  molhar(louca, 6);
  colocarNoEscorredor(louca);
}

for (louca of loucasSujas) {
  if (louca.toLowerCase().includes("copo")) {
    coposSujos.push(louca);
  } else if (louca.toLowerCase().includes("talher")) {
    talheresSujos.push(louca);
  } else {
    pratosSujos.push(louca);
  }
}

for (copo of coposSujos) {
  lavar(copo, esponja);
}

for (talher of talheresSujos) {
  lavar(talher, esponja);
}

for (prato of pratosSujos) {
  lavar(prato, esponja);
}
console.log(escorredor);
