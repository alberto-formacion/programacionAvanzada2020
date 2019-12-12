package com.sanluis.gestionAlumno.curso;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CursoService {
	
	@Autowired
	private CursoDAO cursoDAO;

	public List<Curso> getCursos() {
		return cursoDAO.findAll();
		
	}

}
