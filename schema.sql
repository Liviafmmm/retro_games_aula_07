
create database if not exists db_retrogames;
use db_retrogames;

create table jogos (
    id int not null auto_increment primary key,
    titulo varchar(150) not null,
    desenvolvedora varchar(150) not null,
    genero varchar(100) not null,
    plataforma varchar(100) not null,
    imagem_url varchar(500) not null,
    preco decimal(10,2) not null
);
