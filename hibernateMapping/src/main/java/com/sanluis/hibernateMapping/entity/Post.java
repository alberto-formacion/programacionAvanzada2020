package com.sanluis.hibernateMapping.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "post")
public class Post {
 
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
 
    private String titulo;
 
    //@OneToMany(cascade = CascadeType.ALL) UNIDIRECCIONAL
    @OneToMany(mappedBy="post") //BIDIRECCIONAL
    private List<Comentario> comentarios = new ArrayList<Comentario>();
    
    @ManyToMany
    @JoinTable(
    		name="post_categoria",
    		joinColumns = {
    				@JoinColumn(name="post_id")
    		},
    		inverseJoinColumns = {
    				@JoinColumn(name="categoria_id")
    		}
    		
    )
    private List<Categoria> categorias;
    
    @OneToOne(mappedBy = "post", cascade = CascadeType.ALL, fetch = FetchType.LAZY, optional = false)
    private PostDetalle detalle;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public List<Comentario> getComentarios() {
		return comentarios;
	}

	public void setComentarios(List<Comentario> comentarios) {
		this.comentarios = comentarios;
	}

	public List<Categoria> getCategorias() {
		return categorias;
	}

	public void setCategorias(List<Categoria> categorias) {
		this.categorias = categorias;
	}

	public PostDetalle getDetalle() {
		return detalle;
	}

	public void setDetalle(PostDetalle detalle) {
		this.detalle = detalle;
	}
	
    
}
