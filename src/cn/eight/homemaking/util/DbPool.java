package cn.eight.homemaking.util;

import com.mchange.v2.c3p0.ComboPooledDataSource;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.Properties;

public class DbPool {
    private static ComboPooledDataSource  ds;
    static {
        ds = new ComboPooledDataSource();
        Properties db = new Properties();
        try {
            db.load(DbPool.class.getClassLoader().getResourceAsStream("db.properties"));
            ds.setDriverClass(db.getProperty("driverName"));
            ds.setUser(db.getProperty("username"));
            ds.setPassword(db.getProperty("password"));
            ds.setJdbcUrl(db.getProperty("url"));
            ds.setInitialPoolSize(Integer.valueOf(db.getProperty("InitialPoolSize")));
            ds.setMaxPoolSize(Integer.valueOf(db.getProperty("MaxPoolSize")));
            ds.setMinPoolSize(Integer.valueOf(db.getProperty("MinPoolSize")));
            ds.setMaxIdleTime(Integer.valueOf(db.getProperty("MaxIdleTime")));
            ds.setMaxStatements(Integer.valueOf(db.getProperty("MaxStatements")));
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static Connection getConnection(){
        try {
            return ds.getConnection();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
    }
}
