
class Usuario{
    private nome: string;
    private senha: string;
    constructor(name:	string, password: string)	{
            this.nome	=	name;	
            this.senha = password;
    }

    getNome(){
        return this.nome;
    }

    getSenha(){
        return this.senha;
    }
}

class Aluno extends Usuario{
    reservarLanche(tia: Tia, lanche: Lanche){
        //to do
    }
}

class Tia extends Usuario{
    adicionarLanche(nome: string, preco:number){
        //to do
    }

}

class Lanche{
    private nome: string;
    private preco: number;
    constructor(name:	string, price: number)	{
            this.nome	=	name;	
            this.preco = price;
    }

    getNome(){
        return this.nome;
    }

    getPreco(){
        return this.preco;
    }
}

