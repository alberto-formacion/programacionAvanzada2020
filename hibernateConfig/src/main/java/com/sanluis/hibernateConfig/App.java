package com.sanluis.hibernateConfig;

import java.util.List;

import org.hibernate.Session;

import com.sanluis.hibernateConfig.entity.Alumno;
import com.sanluis.hibernateConfig.util.HibernateUtil;

public class App {
    public static void main(String[] args) {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            List<Alumno> alumnos = session.createQuery("from Alumno", Alumno.class).list();
            
            for(Alumno a : alumnos) {
            	System.out.println(a.getName());
            }
        }
    }
}
