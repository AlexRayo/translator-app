package com.translateapp;

import android.app.Activity;
import android.content.Intent;
import android.util.Log;
import android.widget.Toast;

import androidx.annotation.Nullable;

import com.facebook.react.bridge.ActivityEventListener;
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

public class SignInModule extends ReactContextBaseJavaModule implements ActivityEventListener {
    private static final int RC_SIGN_IN = 1000;
    private GoogleSignInClient mGoogleSignInClient;
    private Promise mPromise = null;

    public SignInModule(ReactApplicationContext reactContext) {
        super(reactContext);
        reactContext.addActivityEventListener(this);
    }

    @Override
    public String getName() {
        return "SignInModule";
    }

    @ReactMethod
    public void login(Promise promise) {
        try {

// Configura las opciones de "Google Sign In"
            GoogleSignInOptions gso = new GoogleSignInOptions.Builder(GoogleSignInOptions.DEFAULT_SIGN_IN)
                    .requestEmail()
                    .requestIdToken("")
                    .requestServerAuthCode("")
                    .build();

            // Inicializa el cliente de "Google Sign In"
            mGoogleSignInClient = GoogleSignIn.getClient(getCurrentActivity(), gso);
            // Inicia el flujo de inicio de sesión de Google

            Intent signInIntent = mGoogleSignInClient.getSignInIntent();
            getCurrentActivity().startActivityForResult(signInIntent, RC_SIGN_IN);
            if (mPromise != null) {
                mPromise = promise;
            }

        } catch (Exception e) {
            Log.e("LoginModule", "Error al iniciar Google sign in " + e.getMessage());
            if (mPromise != null) {
                mPromise.reject(e);
            }
        }

    }

    @Override
    public void onActivityResult(Activity activity, int requestCode, int resultCode, @Nullable Intent data) {

        if (requestCode == RC_SIGN_IN) {
            if (resultCode == Activity.RESULT_OK) {
                try {
                    Task<GoogleSignInAccount> task = GoogleSignIn.getSignedInAccountFromIntent(data);
                    GoogleSignInAccount account = task.getResult(ApiException.class);
                    handleSignInResult(account);
                } catch (ApiException e) {
                    showErrorMessage();
                    Toast.makeText(getCurrentActivity(), "Hubo un problema al pasear los datos", Toast.LENGTH_LONG).show();
                    Log.e("Pikachu error", e.getMessage());
                }
            }
            else {
                Toast.makeText(getCurrentActivity(), "resultCode ERROR: ", Toast.LENGTH_LONG).show();
                Log.e("Pikachu requestCode", String.valueOf(requestCode));
                Log.e("Pikachu resultCode", String.valueOf(resultCode));
                Log.e("Pikachu data", String.valueOf(data));
            }
        }
    }

    private void handleSignInResult(GoogleSignInAccount account) {
// Aquí puedes iniciar sesión en tu aplicación con la cuenta del usuario
// Por ejemplo, puedes enviar la información de la cuenta al servidor y obtener
// un token de acceso para que el usuario pueda acceder a las funcionalidades de tu aplicación
    }

    private void showErrorMessage() {
// Aquí puedes mostrar un mensaje de error al usuario si el inicio de sesión falló
    }

    @Override
    public void onNewIntent(Intent intent) {

    }
}
