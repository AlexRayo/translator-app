package com.translateapp;

import android.util.Log;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.google.firebase.firestore.FirebaseFirestore;

import java.util.HashMap;
import java.util.Map;

import org.json.JSONObject;

public class FirebaseModule extends ReactContextBaseJavaModule {

    FirebaseFirestore firestore = FirebaseFirestore.getInstance();

    FirebaseModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "FirebaseModule";
    }

    @ReactMethod
    public void save(String data, Promise promise) {
        Log.w("PikachuSaveData", data);
        try {

            JSONObject json = new JSONObject(data);
            String name = json.getString("name");
            int age = json.getInt("age");
            String city = json.getString("city");

            // Create a new user
            Map<String, Object> user = new HashMap<>();
            user.put("name", name);
            user.put("age", age);
            user.put("city",city);

            // Add the user to the "users" collection

            firestore.collection("users").add(user)
                    .addOnSuccessListener(documentReference -> {
                        // Document added successfully
                        Log.d("FIREBASE_SUCCESS_ADDING", "DocumentSnapshot added with ID: " + documentReference.getId());
                        //Toast.makeText(MainActivity.this, "User added successfully", Toast.LENGTH_SHORT).show();
                    })
                    .addOnFailureListener(e -> {
                        // Error adding document
                        Log.w("ERROR_ADDING", "Error adding document", e);
                        //Toast.makeText(MainActivity.this, "Error adding user", Toast.LENGTH_SHORT).show();
                    });


        }
     catch(Exception e) {
        //
    }

    }

}



