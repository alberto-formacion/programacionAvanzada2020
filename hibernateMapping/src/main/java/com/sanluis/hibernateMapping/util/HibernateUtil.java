package com.sanluis.hibernateMapping.util;

import java.util.Properties;

import org.hibernate.SessionFactory;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.cfg.Configuration;
import org.hibernate.cfg.Environment;
import org.hibernate.service.ServiceRegistry;
import org.hibernate.tool.schema.Action;

import com.sanluis.hibernateMapping.entity.Categoria;
import com.sanluis.hibernateMapping.entity.Comentario;
import com.sanluis.hibernateMapping.entity.Post;
import com.sanluis.hibernateMapping.entity.PostDetalle;

public class HibernateUtil {
    private static SessionFactory sessionFactory;
    public static SessionFactory getSessionFactory() {
        if (sessionFactory == null) {
            try {
                Configuration configuration = new Configuration();
                
                // Hibernate settings equivalent to hibernate.cfg.xml's properties
                Properties settings = new Properties();
                settings.put(Environment.DRIVER, "com.mysql.cj.jdbc.Driver");
                settings.put(Environment.URL, "jdbc:mysql://localhost:3306/blog?useSSL=false&serverTimezone=UTC");
                settings.put(Environment.USER, "sanluis");
                settings.put(Environment.PASS, "sanluis");
                settings.put(Environment.DIALECT, "org.hibernate.dialect.MySQL5Dialect");
                settings.put(Environment.FORMAT_SQL, "true");
                settings.put(Environment.SHOW_SQL, "true");
                settings.put(Environment.CURRENT_SESSION_CONTEXT_CLASS, "thread");
                settings.put(Environment.HBM2DDL_AUTO, Action.CREATE);
                
                configuration.setProperties(settings);
                
                configuration.addAnnotatedClass(Post.class);
                configuration.addAnnotatedClass(PostDetalle.class);
                configuration.addAnnotatedClass(Comentario.class);
                configuration.addAnnotatedClass(Categoria.class);
                
                ServiceRegistry serviceRegistry = new StandardServiceRegistryBuilder().applySettings(configuration.getProperties()).build();
                sessionFactory = configuration.buildSessionFactory(serviceRegistry);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        return sessionFactory;
    }
}
