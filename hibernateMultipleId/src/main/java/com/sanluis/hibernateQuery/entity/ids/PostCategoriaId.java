package com.sanluis.hibernateQuery.entity.ids;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class PostCategoriaId implements Serializable {

	private static final long serialVersionUID = 1L;

	@Column(name = "post_id")
    private Long postId;
 
    @Column(name = "categoria_id")
    private Long categoriaId;

	public Long getPostId() {
		return postId;
	}

	public void setPostId(Long postId) {
		this.postId = postId;
	}

	public Long getCategoriaId() {
		return categoriaId;
	}

	public void setCategoriaId(Long categoriaId) {
		this.categoriaId = categoriaId;
	}

 

}
