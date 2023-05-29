
const contas = [
    {
        nome: 'Felis Nigripes',
        email: 'felis@nigripes.com',
        foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNPJae-JZ5IARW3hfoCwg0ArfktPc7Z8AXJlMM-KJ7H-v2Wdm9-DlmAfGowy9br0nqcx0&usqp=CAU',
        biografia: 'Gato bravo de patas negras, o felino com a maior taxa de sucesso em caça do mundo! E sou fofinho demais!',
        senha: 123
    },
    {"nome": "Cremosa" ,
"nickname": "creminha",
"foto":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc5klkKzkM_JB3e7BO6-F9cKbxLm1Fb2kAkEil9ZMgy6qk0NxyPBKRgdkif_plqdfWWQA&usqp=CAU" ,
"biografia": "Sou uma redpoint mestiça de Florianópolis, sou vesga e muito querida." ,
"senha": "123",
"confirma": "123"}]


/*
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nome TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    foto TEXT NOT NULL,
    biografia VARCHAR(300) NOT NULL,
    senha TEXT NOT NULL
    confirma TEXT NOT NULL
);

CREATE TABLE sessoes(
    id SERIAL PRIMARY KEY,
    usuario_id INTEGER NOT NULL REFERENCES usuarios(id)
    token TEXT NOT NULL;
)

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    postador INTEGER NOT NULL REFERENCES usuarios(id),
    foto_post TEXT NOT NULL, 
    descrição VARCHAR(300) NOT NULL,
    TIMESTAMP NOT NULL DEFAULT NOW()
)

CREATE TABLE posts_curtidos(
    id SERIAL PRIMARY KEY, 
    id_post INTEGER NOT NULL REFERENCES posts(id),
    id_dono INTEGER NOT NULL REFERENCES usuarios(id),
    id_curtidor UNIQUE INTEGER REFERENCES usuarios(id)
)

CREATE TABLE seguidores(
    id SERIAL PRIMARY KEY,
    id_seguido INTEGER NOT NULL REFERENCES usuarios(id);
    id_seguidor INTEGER NOT NULL REFERENCES usuarios(id)
)


CREATE TABLE categorias(
    id SERIAL PRIMARY KEY,
    nome_categoria TEXT NOT NULL;
)

CREATE TABLE posts_categorias(
     id SERIAL PRIMARY KEY,
     id_post INTEGER NOT NULL REFERENCES posts(id)
     id_categoria INTEGER NOT NULL REFERENCES categorias(id),
)


SELECT usuarios.id, usuarios.nome, usuarios.foto, usuarios.biografia ) FROM usuarios
JOIN posts ON usuarios.id = postador 
WHERE postador = $1




*/