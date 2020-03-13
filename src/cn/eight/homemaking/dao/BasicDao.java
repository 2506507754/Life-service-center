package cn.eight.homemaking.dao;


import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class BasicDao {

    //查询
 public ResultSet execQuery(PreparedStatement pst,Object...params) throws SQLException {
     ResultSet rs = null;

         if (params==null){
             for (int i = 0; i < params.length; i++) {
                 pst.setObject(i+1,params[i]);
             }
         }
         rs = pst.executeQuery();


    return rs;
 }
    //修改
    public void execUpdate(PreparedStatement pst,Object...params) throws SQLException {
            if (params==null){
                for (int i = 0; i < params.length; i++) {
                    pst.setObject(i+1,params[i]);
                }
            }
            pst.executeUpdate();
    }

    //释放资源
    public void releaseResource(Connection con,ResultSet rs,PreparedStatement pst){
        try {
            if(rs != null){
                rs.close();
            }
            if(pst != null){
                pst.close();
            }
            if(con != null){
                con.close();
                con = null;
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}