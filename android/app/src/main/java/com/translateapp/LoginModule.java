package com.translateapp;

import android.content.Intent;
import android.util.Log;
import android.widget.Toast;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.google.android.gms.auth.api.signin.GoogleSignIn;
import com.google.android.gms.auth.api.signin.GoogleSignInAccount;
import com.google.android.gms.auth.api.signin.GoogleSignInClient;
import com.google.android.gms.auth.api.signin.GoogleSignInOptions;
import com.google.android.gms.common.api.ApiException;
import com.google.android.gms.tasks.Task;

public class LoginModule extends ReactContextBaseJavaModule {
    private static final int RC_SIGN_IN = 9001;
    private GoogleSignInClient mGoogleSignInClient;
    private Promise mPromise = null;
    public LoginModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "LoginModule";
    }

    @ReactMethod
    public void login(Promise promise) {
        try {
// Configura las opciones de "Google Sign In"
            GoogleSignInOptions gso = new GoogleSignInOptions.Builder(GoogleSignInOptions.DEFAULT_SIGN_IN)
                    .requestEmail()
                    .build();

            // Inicializa el cliente de "Google Sign In"
            mGoogleSignInClient = GoogleSignIn.getClient(getCurrentActivity(), gso);
            // Inicia el flujo de inicio de sesión de Google
            Toast.makeText(getCurrentActivity(), "Iniciando...", Toast.LENGTH_LONG).show();
            Intent signInIntent = mGoogleSignInClient.getSignInIntent();
            getCurrentActivity().startActivityForResult(signInIntent, RC_SIGN_IN);
            mPromise = promise;

        } catch (Exception e) {
            Log.e("LoginModule", "Error al iniciar Google sign in " + e.getMessage());
            mPromise.reject(e);
        }

    }

    @ReactMethod
    public void handleSignInResult(Task<GoogleSignInAccount> completedTask, Promise promise) {
        try {
// Inicio de sesión exitoso, obtén la cuenta del usuario
            GoogleSignInAccount account = completedTask.getResult(ApiException.class);
            // Inicia sesión en tu aplicación con la cuenta del usuario
            login(account);
            promise.resolve(account);

            Toast.makeText(getCurrentActivity(), "Inicio exitoso!", Toast.LENGTH_LONG).show();

        } catch (ApiException e) {
            // Inicio de sesión fallido, muestra un mensaje de error al usuario
            showErrorMessage();
            promise.reject(e);

            Toast.makeText(getCurrentActivity(), "No se ha podido iniciar sessión :(", Toast.LENGTH_LONG).show();

        }
    }

            private void login(GoogleSignInAccount account) {
        // Aquí puedes iniciar sesión en tu aplicación con la cuenta del usuario
        // Por ejemplo, puedes enviar la información de la cuenta al servidor y obtener
        // un token de acceso para que el usuario pueda acceder a las funcionalidades de tu aplicación
    }

    private void showErrorMessage() {
        // Aquí puedes mostrar un mensaje de error al usuario si el inicio de sesión falló
    }
}
