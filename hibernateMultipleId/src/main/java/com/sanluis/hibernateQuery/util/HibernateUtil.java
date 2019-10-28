package com.sanluis.hibernateQuery.util;

import java.util.Properties;

import org.hibernate.SessionFactory;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.cfg.Configuration;
import org.hibernate.cfg.Environment;
import org.hibernate.service.ServiceRegistry;
import org.hibernate.tool.schema.Action;

import com.sanluis.hibernateQuery.entity.Categoria;
import com.sanluis.hibernateQuery.entity.Post;
import com.sanluis.hibernateQuery.entity.PostCategoria;

public class HibernateUtil {
    private static SessionFactory sessionFactory;
    public static SessionFactory getSessionFactory() {
        if (sessionFactory == null) {
            try {
                Configuration configuration = new Configuration();
                
                // Hibernate settings equivalent to hibernate.cfg.xml's properties
                Properties settings = new Properties();
                settings.put(Environment.DRIVER, "com.mysql.cj.jdbc.Driver");
                settings.put(Environment.URL, "jdbc:mysql://localhost:3306/blog2?useSSL=false&serverTimezone=UTC");
                settings.put(Environment.USER, "sanluis");
                settings.put(Environment.PASS, "sanluis");
                settings.put(Environment.DIALECT, "org.hibernate.dialect.MySQL8Dialect");
                settings.put(Environment.FORMAT_SQL, "true");
                settings.put(Environment.SHOW_SQL, "false");
                settings.put(Environment.CURRENT_SESSION_CONTEXT_CLASS, "thread");
                settings.put(Environment.HBM2DDL_AUTO, Action.UPDATE);
                settings.put(Environment.STORAGE_ENGINE, "innodb");
                
                configuration.setProperties(settings);
                
                configuration.addAnnotatedClass(Post.class);
                configuration.addAnnotatedClass(Categoria.class);
                configuration.addAnnotatedClass(PostCategoria.class);
                
                ServiceRegistry serviceRegistry = new StandardServiceRegistryBuilder().applySettings(configuration.getProperties()).build();
                sessionFactory = configuration.buildSessionFactory(serviceRegistry);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        return sessionFactory;
    }
}
