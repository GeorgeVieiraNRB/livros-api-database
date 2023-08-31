const db = require('../db');

module.exports= {
    buscarTodos: ()=>{
        return new Promise((aceito,rejeitado)=>{
            db.query('SELECT * FROM livros',(error,results)=>{
                if(error){rejeitado(error); return;}
                aceito(results);
            });
        });
    },

    buscarUm: (codigo) =>{
        return new Promise((aceito,rejeitado)=>{
            db.query('SELECT * FROM livros WHERE codigo = ?',[codigo],(error,results)=>{
                if(error){rejeitado(error); return;}
                if(results.length>0){
                    aceito(results[0]);
                }
                else{
                    aceito(false)
                }
            });
        });
    },


    inserir: (nome,genero,cpf_fk) =>{
        return new Promise((aceito,rejeitado)=>{
            db.query('INSERT INTO livros (nome,genero,cpf_fk) VALUES (?,?,?)',
            [nome,genero,cpf_fk],
            (error,results)=>{
                if(error){rejeitado(error); return;}
                aceito(results.insertCodigo)
            });
        });
    },

    alterar: (codigo,nome,genero,cpf_fk) =>{
        return new Promise((aceito,rejeitado)=>{
            db.query('UPDATE livros SET nome = ?,genero = ?,cpf_fk = ? WHERE codigo = ?',
            [nome,genero,cpf_fk,codigo],
            (error,results)=>{
                if(error){rejeitado(error); return;}
                aceito(results)
            });
        });
    },

    excluir: (codigo)=>{
        return new Promise((aceito,rejeitado)=>{
            db.query('DELETE FROM livros WHERE codigo = ?',[codigo],(error,results)=>{
                if(error){rejeitado(error); return;}
                aceito(results);
            });
        });
    }
};