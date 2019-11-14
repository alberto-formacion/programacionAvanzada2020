package com.sanluis.springboot.todo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TodoService {
	
	@Autowired
	TodoRepository todoRepository;
	
	List<Todo> getAllTodos(){
		return todoRepository.findAll();
	}
	
	Todo getTodoById(Long id) {
		return todoRepository.getOne(id);
	}
	
	List<Todo> getTodoByTarea(String tarea){
		return todoRepository.findByTareaContaining(tarea);
	}
	
	List<Todo> getTodoByDescripcion(String descripcion){
		return todoRepository.findByDescripcion(descripcion);
	}

	public Todo saveTodo(Todo todo) {
		return todoRepository.save(todo);
	}

	public Todo deleteTodo(Todo todo) {
		todoRepository.delete(todo);
		return todo;
	}

}
