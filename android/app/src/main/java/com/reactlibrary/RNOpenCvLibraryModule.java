package com.reactlibrary;

public class RNOpenCvLibraryModule extends ReactContextBaseJavaModule{

    private final ReactApplicationContext reactContext;
    private String TAG="APP";
  
    public RNOpenCvLibraryModule(ReactApplicationContext reactContext) {
      super(reactContext);
      this.reactContext = reactContext;
    }
  
    @Override
    public String getName() {
      return "RNOpenCvLibrary";
    }


    @ReactMethod
    public void addContrastMethod(String imageAsBase64, int alpha ,Callback errorCallback,
    Callback successCallback){

    }

     @ReactMethod
    public void rotate90Degrees(String imageAsBase64, Callback errorCallback, Callback successCallback){
        
    }
  
}


