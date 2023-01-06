package com.translateapp;
import android.app.Activity;
import android.content.Intent;
import android.speech.RecognizerIntent;
import android.util.Log;

import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import static android.app.Activity.RESULT_OK;


import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import java.util.List;

public class STTModule extends ReactContextBaseJavaModule implements ActivityEventListener {

    private static final int SPEECH_REQUEST_CODE = 0;
    private ReactApplicationContext mReactContext;
    private Promise mPromise = null;

    public STTModule(ReactApplicationContext reactContext) {
        super(reactContext);
        mReactContext = reactContext;
        reactContext.addActivityEventListener(this);
    }

    @ReactMethod
    public Promise startVoiceRecognition(String text,Promise promise) {
        try {
            // Asigna el valor de promise a mPromise
            mPromise = promise;
            // Crea una intención para iniciar el reconocimiento de voz
            Intent intent = new Intent(RecognizerIntent.ACTION_RECOGNIZE_SPEECH);

            //Establece el modelo de lenguaje en Inglés
            intent.putExtra(RecognizerIntent.EXTRA_LANGUAGE, "en-US");

            // Establece el modelo de lenguaje en forma libre
            //intent.putExtra(RecognizerIntent.EXTRA_LANGUAGE_MODEL, RecognizerIntent.LANGUAGE_MODEL_FREE_FORM);

            intent.putExtra(RecognizerIntent.EXTRA_LANGUAGE_MODEL, "Título personalizado");
            // Establece el mensaje de promtp que se mostrará al usuario
            intent.putExtra(RecognizerIntent.EXTRA_PROMPT, "Dí la palabra: " + text);
            // Inicia la actividad esperando un resultado
            mReactContext.getCurrentActivity().startActivityForResult(intent, SPEECH_REQUEST_CODE);
        } catch (Exception e) {
            Log.e("STTModule", "Error al iniciar el reconocimiento de voz: " + e.getMessage());
            mPromise.reject(e);
        }
        return mPromise;
    }


    /**
     * Método llamado cuando se obtiene un resultado de una actividad
     *
     * @param requestCode Código de solicitud
     * @param resultCode  Código de resultado
     * @param data        Datos del resultado
     */
    @Override
    public void onActivityResult(Activity activity, int requestCode, int resultCode, @Nullable Intent data) {
        // Verifica que la actividad que inició la intención sigue estando disponible
        if (activity == null || !activity.isFinishing()) {
            // Verifica que el código de solicitud y el código de resultado sean los esperados
            if (requestCode == SPEECH_REQUEST_CODE && resultCode == RESULT_OK) {
                // Verifica que el objeto "data" no sea "null"
                if (data != null) {
                    // Obtiene la lista de resultados del reconocimiento de voz
                    List<String> results = data.getStringArrayListExtra(RecognizerIntent.EXTRA_RESULTS);
                    // Obtiene el texto hablado
                    String spokenText = results.get(0);
                    // Resuelve la promesa con el valor de "spokenText"
                    mPromise.resolve(spokenText);
                } else {
                    // Si "data" es "null", rechaza la promesa con un mensaje de error
                    mPromise.reject("Error", "No se han obtenido resultados del reconocimiento de voz");
                }
            }
        }
    }




    @Override
    public void onNewIntent(Intent intent) {

    }

    @Override
    public String getName() {
        return "STTModule";
    }
}