package com.sanluis.springboot.todo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/todos")
public class TodoController {
	
	@Autowired
	TodoService todoService;
	
	@GetMapping
	List<Todo> getAllTodos(){
		return todoService.getAllTodos();
	}
	
	@GetMapping(value = "/search/tarea/{tarea}")
	List<Todo> getTodoById(@PathVariable String tarea) {
		return todoService.getTodoByTarea(tarea);
	}
	
	@GetMapping(value = "/search/descripcion/{descripcion}")
	List<Todo> getTodoByDescripcion(@PathVariable String descripcion) {
		return todoService.getTodoByDescripcion(descripcion);
	}
	
	@GetMapping(value = "/{id}")
	Todo getTodoById(@PathVariable Long id) {
		return todoService.getTodoById(id);
	}
	
	@PostMapping
	Todo saveTodo(@RequestBody Todo todo) {
		return todoService.saveTodo(todo);
	}
	
	@DeleteMapping
	Todo deleteTodo(@RequestBody Todo todo) {
		return todoService.deleteTodo(todo);
	}

}
