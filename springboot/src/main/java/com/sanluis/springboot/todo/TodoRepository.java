package com.sanluis.springboot.todo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface TodoRepository extends JpaRepository<Todo, Long> {
	
	List<Todo> findByTareaContaining(String tarea);
	
	@Query("select t from Todo t where t.descripcion like %?1%")
	List<Todo> findByDescripcion(String descripcion);

}
