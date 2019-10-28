package com.sanluis.hibernateQuery;

import java.util.List;

import org.hibernate.Session;

import com.sanluis.hibernateQuery.entity.PostCategoria;
import com.sanluis.hibernateQuery.util.HibernateUtil;

/**
 * Hello world!
 *
 */
public class App {
	public static void main(String[] args) {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            List<PostCategoria> posts = session.createQuery("from PostCategoria", PostCategoria.class).list();
            
            System.out.println(posts);
            
            for(PostCategoria p : posts) {
            	System.out.println(p.getPost().getTitulo() + " - " + p.getCategoria().getNombre() + " - " + p.getFechaCreacion());
            }
        }
	}
}
