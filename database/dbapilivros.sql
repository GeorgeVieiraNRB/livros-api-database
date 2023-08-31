create database dbapilivros;
use dbapilivros;

CREATE TABLE autor (
  cpf INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(30) UNIQUE
);

CREATE TABLE livros (
  codigo INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(30) ,
  genero VARCHAR(15),
  cpf_fk INT,
  FOREIGN KEY (cpf_fk) REFERENCES autor(cpf)
);

insert into autor (nome) values ("H.P. Lovecraft");
insert into autor (nome) values ("Clarice Linspector");

insert into livros (nome,genero,cpf_fk) values ("O Chamado de Cthullu","Terror Cosmico",1);
insert into livros (nome,genero,cpf_fk) values ("Nas Montanhas da Loucura","Terror Cosmico",1);
insert into livros (nome,genero,cpf_fk) values ("A Hora da Estrela","Romance",2);

SELECT * FROM livros;
SELECT * FROM autor;



