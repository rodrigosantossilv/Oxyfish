
CREATE DATABASE oxyfish;
USE oxyfish;

-- Tabela usuarios
CREATE TABLE usuarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255),
    email VARCHAR(255),
    senha VARCHAR(255),
    data_cadastro DATE
);

-- Tabela criatorios
CREATE TABLE criatorios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255),
    localizacao VARCHAR(255),
    capacidade_maxima INT
);

-- Tabela sensor
CREATE TABLE sensor (
    id INT PRIMARY KEY AUTO_INCREMENT,
    localizacao VARCHAR(255),
    id_criatorio INT,
    FOREIGN KEY (id_criatorio) REFERENCES criatorios(id)
);

-- Tabela criatorios_usuarios (N:N entre criatorios, usuarios e sensor)
CREATE TABLE criatorios_usuarios (
    id_criatorio INT,
    id_usuario INT,
    PRIMARY KEY (id_criatorio, id_usuario),
    FOREIGN KEY (id_criatorio) REFERENCES criatorios(id),
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
);

-- Tabela peixes (vinculada apenas ao criatorio)
CREATE TABLE peixes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255),
    especie VARCHAR(255),
    idade INT,
    id_criatorio INT,
    FOREIGN KEY (id_criatorio) REFERENCES criatorios(id)
);

-- Tabela temperatura
CREATE TABLE temperatura (
    id INT PRIMARY KEY AUTO_INCREMENT,
    valor DECIMAL(10,2)
);

-- Tabela ph
CREATE TABLE ph (
    id INT PRIMARY KEY AUTO_INCREMENT,
    valor DECIMAL(10,2)
);

-- Tabela nivel_oxigenio
CREATE TABLE nivel_oxigenio (
    id INT PRIMARY KEY AUTO_INCREMENT,
    valor DECIMAL(10,2)
);

-- Tabela leituras
CREATE TABLE leituras (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_hora DATETIME,
    id_sensor INT,
    id_temperatura INT,
    id_ph INT,
    id_nivel_oxigenio INT,
    FOREIGN KEY (id_sensor) REFERENCES sensor(id),
    FOREIGN KEY (id_temperatura) REFERENCES temperatura(id),
    FOREIGN KEY (id_ph) REFERENCES ph(id),
    FOREIGN KEY (id_nivel_oxigenio) REFERENCES nivel_oxigenio(id)
);
