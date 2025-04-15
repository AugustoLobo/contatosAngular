package com.senai.augustolobo.contatosAPI.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.senai.augustolobo.contatosAPI.entities.Contatos;
import com.senai.augustolobo.contatosAPI.repositories.ContatosRepository;

@Service
public class ContatosService {

    @Autowired
    private ContatosRepository contatosRepository;

    public List<Contatos> findAll() {
        List<Contatos> contatos = contatosRepository.findAll();
        if (contatos.isEmpty()) {
            throw new RuntimeException("Não há contatos cadastradas.");
        }
        return contatos;
    }

    public Contatos findById(Integer id) {
        return contatosRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("ID: " + id + " não tem correspondente."));
    }

    public Contatos save(Contatos contatos) {
        if (contatos == null) {
            throw new IllegalArgumentException("Erro! Faltam informações.");
        }
        return contatosRepository.save(contatos);
    }

    public void delete(Integer id) {
        if (!contatosRepository.existsById(id)) {
            throw new RuntimeException("ID: " + id + " não tem correspondente.");
        }
        contatosRepository.deleteById(id);
    }

    public Contatos update(Contatos contatos) {
        if (contatos == null || contatos.getId() == null) {
            throw new IllegalArgumentException("Erro! Faltam informações.");
        }
        return contatosRepository.save(contatos);
    }
}
