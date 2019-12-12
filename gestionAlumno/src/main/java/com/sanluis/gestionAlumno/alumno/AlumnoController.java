package com.sanluis.gestionAlumno.alumno;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/alumnos")
public class AlumnoController {
	
	@Autowired
	private AlumnoService alumnoService;
	
	@GetMapping
	public List<Alumno> getAlumnos(){
		return alumnoService.getAlumnos();
	}
	
	@PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
	public Alumno saveAlumno(@RequestBody Alumno alumno) {
		return alumnoService.saveAlumno(alumno);
	}
	
	@DeleteMapping
	public void deleteAlumno(@RequestBody Alumno alumno) {
		alumnoService.deleteAlumno(alumno);
	}

}
