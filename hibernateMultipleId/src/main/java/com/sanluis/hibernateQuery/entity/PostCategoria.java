package com.sanluis.hibernateQuery.entity;

import java.util.Date;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.Table;

import com.sanluis.hibernateQuery.entity.ids.PostCategoriaId;

@Entity
@Table(name="post_categoria")
public class PostCategoria {

	@EmbeddedId
	private PostCategoriaId id;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@MapsId("postId")
	private Post post;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@MapsId("categoriaId")
	private Categoria categoria;
	
	private Date fechaCreacion;

	public PostCategoriaId getId() {
		return id;
	}

	public void setId(PostCategoriaId id) {
		this.id = id;
	}

	public Post getPost() {
		return post;
	}

	public void setPost(Post post) {
		this.post = post;
	}

	public Categoria getCategoria() {
		return categoria;
	}

	public void setCategoria(Categoria categoria) {
		this.categoria = categoria;
	}

	public Date getFechaCreacion() {
		return fechaCreacion;
	}

	public void setFechaCreacion(Date fechaCreacion) {
		this.fechaCreacion = fechaCreacion;
	}
	
}
