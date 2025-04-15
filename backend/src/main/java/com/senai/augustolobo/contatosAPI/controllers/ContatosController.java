package com.senai.augustolobo.contatosAPI.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.senai.augustolobo.contatosAPI.entities.Contatos;
import com.senai.augustolobo.contatosAPI.services.ContatosService;

@RestController
@RequestMapping("/contatos")
public class ContatosController {

    @Autowired
    private ContatosService contatosService;

    @GetMapping
    public List<Contatos> getAllContatos() {
        return contatosService.findAll();
    }

    @GetMapping("/{id}")
    public Contatos getContatoId(@PathVariable Integer id) {
        return contatosService.findById(id);
    }

    @PostMapping("/add")
    public Contatos saveContato(@RequestBody Contatos contatos) {
        return contatosService.save(contatos);
    }

    @PutMapping("/update")
    public Contatos updateContato(@RequestBody Contatos contatos) {
        return contatosService.update(contatos);
    }

    @DeleteMapping("/{id}")
    public void deleteContato(@PathVariable Integer id) {
        this.contatosService.delete(id);
    }
}
