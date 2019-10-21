package com.sanluis.hibernateMapping;

import java.util.List;

import org.hibernate.Session;

import com.sanluis.hibernateMapping.entity.Post;
import com.sanluis.hibernateMapping.util.HibernateUtil;

/**
 * Hello world!
 *
 */
public class App {
    public static void main( String[] args ){
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            List<Post> posts = session.createQuery("from Post", Post.class).list();
            
            for(Post p : posts) {
            	System.out.println(p.getTitulo());
            }
        }
    }
}
