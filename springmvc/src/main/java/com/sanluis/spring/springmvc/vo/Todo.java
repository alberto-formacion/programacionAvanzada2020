package com.sanluis.spring.springmvc.vo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

@Entity
@NamedQueries({
	@NamedQuery(name="todo.getTodos", query="SELECT t from Todo as t")
})
@Table(name="todos")
public class Todo {
	@Id
	@GeneratedValue
	@Column
	private Integer id;
	
	@Column
	private String tarea;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getTarea() {
		return tarea;
	}

	public void setTarea(String tarea) {
		this.tarea = tarea;
	}

	
	
}
