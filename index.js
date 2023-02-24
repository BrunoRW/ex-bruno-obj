const obj = {
    txt: "Hello World!",
    num: 2000,
    boo: true
}

const pessoa = {
    nome: "Ana Maria",
}

console.log(pessoa.nome)

const pessoasAge = [
    {
        nome: "Maria",
        idade: 17
    },
    {
        nome: "João",
        idade: 18
    }
]

let age = 0;

const nameByAge = () => {
    
    let nome = ""

    pessoasAge.map(e=>{
        if(e.idade > age){
            age = e.idade
            nome = e.nome
        }
    })
    
    console.log(nome)
}

nameByAge()

const pessoas = [
    {
        nome: "Carlos Silva",
        salario: 6300
    },
    {
        nome: "Ana Marques",
        salario: 6700
    }
]

const getMedia = () => {
    let media = 0;
    let num = 0;

    pessoas.map(e=>{
        num++
        media += e.salario
        console.log(e.nome)
    })

    console.log(media/num)
}

getMedia()

class Retangulo {
    constructor(l, a){
        this.largura = l;
        this.altura = a;
    }

    area(){
        console.log(this.largura * this.altura)
    }

    perimetro(){
        console.log(2*(this.largura + this.altura))
    }

    diagonal(){
        console.log(Math.sqrt(this.largura * this.largura + this.altura * this.altura))
    }
}

const ret = new Retangulo(3.00, 4.00);
ret.area();
ret.perimetro();
ret.diagonal();



