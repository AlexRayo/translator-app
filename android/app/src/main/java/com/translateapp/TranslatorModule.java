package com.translateapp;
import android.speech.tts.TextToSpeech;
import android.util.Log;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import com.google.android.gms.tasks.OnFailureListener;
import com.google.android.gms.tasks.OnSuccessListener;
import com.google.mlkit.common.model.DownloadConditions;
import com.google.mlkit.nl.translate.TranslateLanguage;
import com.google.mlkit.nl.translate.Translation;
import com.google.mlkit.nl.translate.Translator;
import com.google.mlkit.nl.translate.TranslatorOptions;

import java.util.Locale;

public class TranslatorModule extends ReactContextBaseJavaModule {
    ReactApplicationContext ReactAppContext;
    private Translator translateToSpanish;
    private Translator translateToEnglish;

    TextToSpeech ttsInstance;
    private boolean ttsReady = false;
    private boolean dictionaryReady = false;
    private boolean dictionaryEsReady = false;


    TranslatorModule(ReactApplicationContext context) {

        super(context);
        //Create a Translator object, configuring it with the source and target languages:
        try {
        TranslatorOptions translatorOptionsSpanish =
                new TranslatorOptions.Builder()
                        .setSourceLanguage(TranslateLanguage.ENGLISH)
                        .setTargetLanguage(TranslateLanguage.SPANISH)
                        .build();

        translateToSpanish = Translation.getClient(translatorOptionsSpanish);

        TranslatorOptions translatorOptionsEnglish =
                new TranslatorOptions.Builder()
                        .setSourceLanguage(TranslateLanguage.SPANISH)
                        .setTargetLanguage(TranslateLanguage.ENGLISH)
                        .build();

        translateToEnglish = Translation.getClient(translatorOptionsEnglish);

        }
        catch (Exception error){
            Log.d("ERROR_CREATING_DICT: ", "ERROR CREATING DICTIONARIES");
        }

        //INITIALIZE TEXT TO SPEECH
        ttsInstance = new TextToSpeech(context, init -> {
            if(init != TextToSpeech.ERROR){
                ttsReady = true;
                ttsInstance.setLanguage(Locale.US);
            }
            else{
                Log.d("ERROR_ON_INIT_TTS: ", "ERROR ON INITIALIZE TEXT TO SPEECH" + TextToSpeech.ERROR);
            }
        });

    }

    @ReactMethod
    public void checkDownloadedPackages(Promise promise) {
        DownloadConditions downloadConditions = new DownloadConditions.Builder()
                .requireWifi()
                .build();

        translateToSpanish.downloadModelIfNeeded(downloadConditions)
                .addOnSuccessListener(new OnSuccessListener<Void>() {
                    @Override
                    public void onSuccess(Void unused) {
                        dictionaryReady = true;
                        promise.resolve(true);
                    }
                })
                .addOnFailureListener(new OnFailureListener() {
                    @Override
                    public void onFailure(@NonNull Exception e) {
                        dictionaryReady = false;
                        promise.reject(e);
                    }
                });
        translateToEnglish.downloadModelIfNeeded(downloadConditions)
                .addOnSuccessListener(new OnSuccessListener<Void>() {
                    @Override
                    public void onSuccess(Void unused) {
                        dictionaryReady = true;
                        promise.resolve(true);
                    }
                })
                .addOnFailureListener(new OnFailureListener() {
                    @Override
                    public void onFailure(@NonNull Exception e) {
                        dictionaryReady = false;
                        promise.resolve(false);
                    }
                });
    }


    @Override
    public String getName() {
        return "TranslatorModule";
    }

    @ReactMethod
    public void tts(String text, Promise promise) {
        if(ttsReady){
            try {
                promise.resolve(true);
                ttsInstance.speak(text, TextToSpeech.QUEUE_FLUSH, null, null);
            }
            catch (Exception error){
                promise.reject(error);
                Log.d("ERROR: ", error.toString());
            }
        }
        else{
            Log.d("TTS ERROR: ", "Al parecer no se ha podido inicializar el TTS");
        }
    }
    @ReactMethod
    public void toSpanish(String textToTranslate, Promise promise) {
        if(dictionaryReady) {
            try {
                translateToSpanish.translate(textToTranslate)
                        .addOnSuccessListener(new OnSuccessListener<String>() {
                            @Override
                            public void onSuccess(String s) {
                                promise.resolve(s);
                                Log.d("TRANSLATED TEX: ", s);
                            }
                        })
                        .addOnFailureListener(new OnFailureListener() {
                            @Override
                            public void onFailure(@NonNull Exception e) {
                                promise.reject(e.toString());
                                Log.d("TRANSLATE ERROR: ", e.toString());
                            }
                        });
            } catch (Exception error) {
                promise.reject(error.toString());
            }
        }
        else{
            Log.d("TRANSLATE ERROR: ", "Error al cargar el diccionario. Al parecer el paquete de idiomas no existe");
            promise.reject("ERROR: LANGUAGE PACKAGE NOT FOUND");
        }

    }

    @ReactMethod
    public void toEnglish(String textToTranslate, Promise promise) {
        if(dictionaryReady){
        try {
            translateToEnglish.translate(textToTranslate)
                    .addOnSuccessListener(new OnSuccessListener<String>() {
                        @Override
                        public void onSuccess(String s) {
                            promise.resolve(s);
                            Log.d("TRANSLATED TEX: ", s);
                        }
                    })
                    .addOnFailureListener(new OnFailureListener() {
                        @Override
                        public void onFailure(@NonNull Exception e) {
                            promise.resolve(e);
                            Log.d("TRANSLATE ERROR: ", e.toString());
                        }
                    });
        }
        catch (Exception error){
            promise.reject(error);
        }
        }
        else{
            Log.d("TRANSLATE ERROR: ", "Error al cargar el diccionario. Al parecer el paquete de idiomas no existe");
            promise.reject("ERROR: LANGUAGE PACKAGE NOT FOUND");
        }
    }

}


