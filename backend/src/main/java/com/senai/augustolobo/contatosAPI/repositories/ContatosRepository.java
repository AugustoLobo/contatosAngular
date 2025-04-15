package com.senai.augustolobo.contatosAPI.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.senai.augustolobo.contatosAPI.entities.Contatos;

public interface ContatosRepository extends JpaRepository<Contatos, Integer> {

}
