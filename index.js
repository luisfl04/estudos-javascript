/* Essas são algumas anotações que fiz estudando o artigo "manual de javascript para iniciantes"
link: https://www.freecodecamp.org/portuguese/news/o-manual-de-javascript-para-iniciantes/ */


//verificando tipo de variavel:

function verifVar(index) {
    if (typeof index == "boolean") {
        console.log("tipo = variável booleana")
    } else if (typeof index == "string") {
        console.log("tipo = é uma string")
    } else if (typeof index == "number") {
        console.log("tipo = é um numero")
    } else {
        console.log("indefinido")
    }
}
//verificacão:
verifVar()


//criando um objeto e adicionando valores a ele:

const carroPadrao = {

    EspecGerais: {
        motor: "1.0",
        Arosdospneus: "20",
        TipodeFreio: "ABS",
        TipodeSom: "peoneer",
        direção: "hidráulica"    
    }
}
//adicionando careacterísticas ao carro1:
const carro1 = {
    ...carroPadrao,
    placa:"Odv0d97",
    estilo:{
        cor:"amarelo",
        MarcadoAro:"BBS",
        Interior: "Todo de couro em cor marrom",
        TamPortamalas:"100L"
    }
}
// adicionando características do carro2:
const carro2 = {
    ...carroPadrao,
    estilo:{
        cor:"preto",
        MarcadoAro:"Solid",
        Interior:"Bancos de tecido macio de cor branca",
        TamPortaMalas:"250L"
    }
}

// Fazendo busca de elemento e do índice do elemento em um array:

//adc o array:
SistemasOperacionais = ["windows", "linux", "mac-os", "ubuntu", "kali-linux"]
//Variável de busca de elemento:
busca = (SistemasOperacionais.find(SistemasOperacionais => SistemasOperacionais == "windows"))
//Buscando o índice do elemento:
busca = (SistemasOperacionais.findIndex(SistemasOperacionais => SistemasOperacionais == "windows"))


// Adicionado valores em um array:
NumerosPrimos = [2,3,5,7,9]
//adicionando valor novo:
NumerosPrimos.push(11)
//removendo valor:
NumerosPrimos.pop(3)


//Unindo valores de arrays:

//criando arrays:
arrayA = [2,5,7]
arrayB = [1,3,6]
//unindo:
arrayAB = arrayA.concat(arrayB)


//Adicionado valores de variáveis em strings:

//criando variaveis:
MeuNome = "Luis Felipe"
MinhaIdade = 19
//utilizando variáveis:
MinhasInformações = `Eu me chamo ${MeuNome} e tenho ${MinhaIdade}`


//Exemplo de loop while:

//criando array e variavel:
NumerosRedondos = [10,20,30,40,50,60,70,80,90]
l = 0
//criando o loop:
while(l < NumerosRedondos.length){
    console.log(l)
    l++
}


//Atribuindo valores de retorno a variáveis:

//criando função com os "retornos":
function MeusDados (){
    return ["luis" , "sistemas de informação" , "flamengo"]
}
//criando as variáveis que serão atribuidas aos retornos:
atribuição = [nome, curso , time] = MeusDados()


// função dentro de outra função:

//criando função dupla:
const MyFunction = () => {
    const MySecondFunction = () => {
        return "eu sou a função secundária"
    }
    return "ola, esse é minha função primária"
    MySecondFunction()
}


//Declarando Objeto com "new" e passando valores aos objetos por referêcia através de uma função:

//Declarando valores:
function DeclarandoValores(carro, marca){
    this.carro = carro
    this.marca = marca
}
//Passando os valores por referência:
 passandoValores = new DeclarandoValores("siena", "fiat")

 
 //Criando uma matriz com arrays e depois buscando por índice:

 //criando Matriz:
 Matriz = [1,2,3],
 [9,8,7],
 [4,6,5]
// Buscando o elemento 8:
Matriz [1] [1]

//Usando o loop for:
 
//criando lista:
lista = ["l", "f","o", "s"]
//loop:
// declaro i = 0 e digo que enquanto ele for menor que o tamanho da lista será acrescentado +1 ao seu valor.
for(i = 0; i < lista.length; i++){
    console.log(lista[i])// retorno as letras.
    console.log(i)//retorno os indices.
}
    

//declarando valores padrão em uma função:
function MeuTime(nome = "flamengo", estado = "riodejaneiro"){}


//declarando uma função com arrow functions:

//exemplo:
let Meunome = () => {} // "MeuNome" é o nome da função, que fica subentendido pois não é preciso declarar o nome da função nesse caso.
//pode se omitir os parênteses e as chaves em casos que só existe um parâmetro e uma instrução. Exemplo:
let meunome = parametro => console.log(parametro)
// Com arrows podemos passar um retorno sem usar a expressão "return":
const retorno = () => "hello"


//passando valores iguais em objetos:
copo1 = {
    cor: "branco"
}
copo2 = copo1
copo2.cor = "preto" 
//inicialmente o copo2 recebeu a cor branca, mas depois da definição de cor preta ambos os copos receberam preto.


//adicionando propiedade a um objeto:
carro = {
    nome: "siena"
}
carro.modelo ="sedan"
//excluindo propiedade:
delete carro.nome


//criando um método:

const celular = {
    marca: "multilaser",
    android:"9.1",
    tela:function(){
        console.log("trincada")
    }
}
//chamando o método:
celular.tela()
//usando os valores de propiedades dentro do método com "this":
const meucaderno = {
    folhas: "300 folhas",
    materias: "13 materias",
    tamanho: "30 cm de comprimento e 16 de largura",
    conjunto: function(){
        console.log(`Meu caderno tem ${this.folhas}, ${this.materias}, ${this.tamanho}.`)
    }
}
meucaderno.conjunto()
//passando parâmetro em um método:
const Idafacul = {
    destino: "Faculdade",
    transporte: "minha moto",
    rua: function(ruaescolhida){
        console.log(` Hoje vou pra ${this.destino} com a ${this.transporte} e irei pela ${ruaescolhida}`)
    }
}
Idafacul.rua("Miguel Rosa")


// Criando uma classe com uma proppiedade dentro:

class Celular{
    modelo
}
//criando um objeto para a classe, esse objeto é chamado de "instância" da classe:
const MeuCelular = new Celular()
//Adicionado valor a propiedade "modelo" através do objeto que foi criado:
MeuCelular.modelo = "Multilaser"
//Criando uma classe e atribuindo dois valores diferentes a ela:
class Mães {
    nome
    idade
}
const MinhaMãe = new Mães()
MinhaMãe.nome = "acleucia"
 MinhaMãe.idade = "40 anos"
 const MãeDoMeuAmigo = new Mães()
 MãeDoMeuAmigo.nome = "Luciana"
 MãeDoMeuAmigo.idade = "35 anos"
 //riando uma classe com método:
 class ValoresMatematicos{
    valor(){
        return "O valor de P.i é 3,14."
    }
 }
//invocando o método "valor":
const pi = new ValoresMatematicos()
pi.valor()
//criando uma classe com 3 métodos:
class Infos{
    nome(){
        return "luis felipe"
    }
    idade(){
        return "19 anos"
    }
    curso(){
        return "sistemas de informação"
    }
}
//Chamando os métodos:
const Me = new Infos()
Me.nome(); Me.idade(); Me.curso() 
//utilizando o método "constructor()" em uma classe:
class Pessoa{
    constructor(nome){
        this.nome = nome
    }
    Valor(){
        return "meu nome é " + this.nome + "."
    }
}
//Criando objeto de instâcia para adicionar valor ao parâmetro nome:
const Eu = new Pessoa("luis felipe")
// criando uma classe e passando três propiedades através do método Constructor():
class moto{ 
    constructor(cor, ano, modelo){
        this.modelo = modelo
        this.ano = ano
        this.cor = cor
    }
    conjunto(){
        return "eu tenho uma moto " + this.cor + " do ano " + this.ano + " e o modelo dela é " + this.modelo + "."
    }
}
const minhamoto = new moto("preta", 2011, "fan")
//definindo o valor das propiedades no método constructor():
class moto2{ 
    constructor(cor, ano, modelo){
        this.modelo = modelo = "fan"
        this.ano = ano = 2011
        this.cor = cor = "preta"
    }
    conjunto(){
        return "eu tenho uma moto " + this.cor + " do ano " + this.ano + " e o modelo dela é " + this.modelo + "."
    }
}
const minhamoto2 = new moto2()
console.log(minhamoto2.conjunto())
// executando um método na classe, sem um objeto, usando "static":
class Person{
    static nome(){
        return "meu nome é luis"
    }
}
// Chamando a classe diretamente:
console.log(Person.nome())
//passando parâmetros em um método do tipo "static":   //Usar esse método é util, pois não nescessita um constructor e nem um objeto de intância
class Note{
    static meunote(marca,ram,processador){
        this.marca = marca = "Sansumg"
        this.ram = ram = "4gb de ram"
        this.processador = processador = "intel core I5"
        return " meu note é da marca " + this.marca + ", tem " + this.ram + " e o processador " + this.processador 
    }
}
 

// criando classes com herança:

class mensagem{
    texto(){
        return "Ronaldinho é o melhor de todos os tempos."
    }
}
//classe com herança:
class mensagem2 extends mensagem{} //os métodos de "mensagem" podem ser chamados em "mensagem2".
//referênciando a classe pai com "super()" :
class engenheiro{
    Iam(){
        return "i am softwere enginer"
    }
}
class program extends engenheiro{
    Iam(){
        return super.Iam() + " and developer progam" 
    }
} // recebeu o método da prmeira classe e adicionou infos com o "super"


//callbacks:

// Usando "setTimeout()":
setTimeout( () => {
    return "estou dentro da função e vou ser execultado após 2,5 segundos"
},2500)
//criando uma função com callback:
const IreiFazer = soma => {
    n1 = 10
    n2 = 20
    const resultado = n1 + n2
    soma(resultado)
}

IreiFazer(resultado => {
    console.log(resultado)
})

























































































