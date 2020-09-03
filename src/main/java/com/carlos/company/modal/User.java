package com.carlos.company.modal;

import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.PBEKeySpec;
import javax.persistence.*;
import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import java.security.spec.KeySpec;
import java.util.Base64;
import java.util.Set;

@Entity
@Table(name = "Users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Integer UserId;

    @Column(unique = true)
    private String username;

    private String password;

    public User(){

    }

    public User(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public String getUsername(){return this.username;}

    @Column
    public String getPassword(){return hashPassword(password);}

    public void setPassword(String password) {
        this.password = password;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String hashPassword(String password){
        byte[] salt = {0, 12, 40, 1, 45, 1, 23, 112, 34, 123, 47, 54, 43, 97, 101, 73};
        SecretKeyFactory f;
        KeySpec spec = new PBEKeySpec(password.toCharArray(), salt, 65536, 128);
        byte[] hash = null;
        try{
            f = SecretKeyFactory.getInstance("PBKDF2WithHmacSHA1");
            hash = f.generateSecret(spec).getEncoded();
        } catch (NoSuchAlgorithmException | InvalidKeySpecException e) {
            e.printStackTrace();
        }
        return getStringFromBytes(hash);
    }

    private String getStringFromBytes(byte[] hash) {
        Base64.Encoder enc = Base64.getEncoder();
        return enc.encodeToString(hash);
    }
}
