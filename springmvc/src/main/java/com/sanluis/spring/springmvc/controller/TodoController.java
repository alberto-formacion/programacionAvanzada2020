package com.sanluis.spring.springmvc.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.sanluis.spring.springmvc.service.TodoService;
import com.sanluis.spring.springmvc.vo.Todo;

@Controller
public class TodoController{
	
	@Autowired
	private TodoService todoService;
	
	@GetMapping("/todos")
	public String getTodos(Model model) {
		
		List<Todo> todos = todoService.getTodos();
		
		model.addAttribute("todos", todos);
		
		return "index";
	}

}
