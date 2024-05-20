
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
    CONSTRAINT fk_sensor_criatorios FOREIGN KEY (id_criatorio) REFERENCES criatorios(id)
);

-- Tabela criatorios_usuarios (N:N entre criatorios, usuarios e sensor)
CREATE TABLE criatoriosUsuarios (
    id_criatorio INT,
    id_usuario INT,
    PRIMARY KEY (id_criatorio, id_usuario),
    CONSTRAINT fk_criatoriosUsuarios_criatorios FOREIGN KEY (id_criatorio) REFERENCES criatorios(id),
    CONSTRAINT fk_criatoriosUsuarios_usuarios FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
);

-- Tabela peixes (vinculada apenas ao criatorio)
CREATE TABLE peixes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255),
    especie VARCHAR(255),
    idade INT,
    id_criatorio INT,
    CONSTRAINT fk_peixes_criatorios FOREIGN KEY (id_criatorio) REFERENCES criatorios(id)
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
    CONSTRAINT fk_leituras_sensor FOREIGN KEY (id_sensor) REFERENCES sensor(id),
    CONSTRAINT fk_leituras_temperatura FOREIGN KEY (id_temperatura) REFERENCES temperatura(id),
    CONSTRAINT fk_leituras_ph FOREIGN KEY (id_ph) REFERENCES ph(id),
    CONSTRAINT fk_leituras_nivel_oxigenio FOREIGN KEY (id_nivel_oxigenio) REFERENCES nivel_oxigenio(id)
);

-- Inserir dados na tabela usuarios
INSERT INTO usuarios (nome, email, senha, data_cadastro) VALUES
('Alice Santos', 'alice.santos@example.com', 'senha123', '2024-05-01'),
('Bruno Lima', 'bruno.lima@example.com', 'senha123', '2024-05-02'),
('Carla Rocha', 'carla.rocha@example.com', 'senha123', '2024-05-03');

-- Inserir dados na tabela criatorios
INSERT INTO criatorios (nome, localizacao, capacidade_maxima) VALUES
('Criatório Alpha', 'Rio de Janeiro', 500),
('Criatório Beta', 'São Paulo', 300),
('Criatório Gamma', 'Belo Horizonte', 400);

-- Inserir dados na tabela sensor
INSERT INTO sensor (localizacao, id_criatorio) VALUES
('Setor 1', 1),
('Setor 2', 1),
('Setor 1', 2),
('Setor 2', 2),
('Setor 1', 3);

-- Inserir dados na tabela criatoriosUsuarios
INSERT INTO criatoriosUsuarios (id_criatorio, id_usuario) VALUES
(1, 1),
(1, 2),
(2, 2),
(3, 3);

-- Inserir dados na tabela peixes
INSERT INTO peixes (nome, especie, idade, id_criatorio) VALUES
('Peixe A', 'Tilápia', 2, 1),
('Peixe B', 'Carpa', 1, 1),
('Peixe C', 'Tilápia', 3, 2),
('Peixe D', 'Dourado', 4, 3),
('Peixe E', 'Tilápia', 2, 3);

-- Inserir dados na tabela temperatura
INSERT INTO temperatura (valor) VALUES
(25.5),
(26.0),
(24.8);

-- Inserir dados na tabela ph
INSERT INTO ph (valor) VALUES
(7.2),
(7.4),
(7.1);

-- Inserir dados na tabela nivel_oxigenio
INSERT INTO nivel_oxigenio (valor) VALUES
(8.0),
(7.8),
(8.2);

-- Inserir dados na tabela leituras
INSERT INTO leituras (data_hora, id_sensor, id_temperatura, id_ph, id_nivel_oxigenio) VALUES
('2024-05-20 10:00:00', 1, 1, 1, 1),
('2024-05-20 11:00:00', 2, 2, 2, 2),
('2024-05-20 12:00:00', 3, 3, 3, 3);





