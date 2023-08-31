const LivroService = require('../services/LivroService')

module.exports = {
    buscarTodos: async (req,res)=>{
        let json ={error:'',result:[]};
        let livros = await LivroService.buscarTodos();
        for(let i in livros){
            json.result.push({
               codigo:livros[i].codigo,
               titulo:livros[i].nome,
               descricao:livros[i].genero,
               cpf_autor:livros[i].cpf_fk
            });
        }
        res.json(json);
    },

    buscarUm: async (req,res)=>{
        let json ={error:'',result:{}};
        let codigo = req.params.codigo;
        let livro = await LivroService.buscarUm(codigo);
        if(livro){
            json.result = livro;
        }
        res.json(json);
    },

    
    inserir: async (req,res)=>{
        let json ={error:'',result:{}};

        //let codigo = req.body.codigo;
        let nome = req.body.nome;
        let genero = req.body.genero;
        let cpf_fk = req.body.cpf_fk;
        
        if(nome && genero && cpf_fk){
            let LivroCodigo = await LivroService.inserir(nome,genero,cpf_fk);
            json.result ={
                codigo: LivroCodigo,
                nome,
                genero,
                cpf_fk
            };
        }else{
            json.error ='Campos não enviados'
        }
        res.json(json);
    },
    alterar: async (req,res)=>{
        let json ={error:'',result:{}};

        let codigo = req.params.codigo;
        let nome = req.body.nome;
        let genero = req.body.genero;
        let cpf_fk = req.body.cpf_fk;
        
        if(codigo && nome && genero && cpf_fk){
            await LivroService.alterar(codigo,nome,genero,cpf_fk);
            json.result ={
                codigo,
                nome,
                genero,
                cpf_fk
            };
        }else{
            json.error ='Campos não enviados'
        }
        res.json(json);
    },
    excluir: async (req,res) =>{
        let json = {error:'',result:{}};
        await LivroService.excluir(req.params.codigo);
        
        res.json(json);
    }
    
}