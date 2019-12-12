package com.sanluis.gestionAlumno.alumno;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AlumnoService {
	
	@Autowired
	private AlumnoDAO alumnoDAO;

	public List<Alumno> getAlumnos() {
		return alumnoDAO.findAll();
	}

	public Alumno saveAlumno(Alumno alumno) {
		return alumnoDAO.save(alumno);
	}

	public void deleteAlumno(Alumno alumno) {
		alumnoDAO.delete(alumno);
	}


}
