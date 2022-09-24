package com.example.projetofuncionarios.repo;

import com.example.projetofuncionarios.model.Funcionarios;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface FuncionariosRepo extends JpaRepository<Funcionarios,Long> {
    void deleteFuncionariosById(Long id);

    Optional<Funcionarios> findFuncionariosById(Long id);
}
