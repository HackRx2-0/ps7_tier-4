package com.example;

import android.app.Application;

import com.facebook.react.ReactApplication;

import com.th3rdwave.safeareacontext.SafeAreaContextPackage;
import com.horcrux.svg.SvgPackage;
import com.ubidreams.RNDocumentScanner.RNDocumentScannerPackage;
import org.reactnative.camera.RNCameraPackage;
import com.reactlibrary.RNOpenCvLibraryPackage;

import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import android.util.Log;
import java.util.Arrays;
import java.util.List;
import org.opencv.android.OpenCVLoader;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new SafeAreaContextPackage(),
            new SvgPackage(),
            new RNDocumentScannerPackage(),
            new RNCameraPackage(),
            new RNOpenCvLibraryPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
    if (!OpenCVLoader.initDebug())
   Log.e("OpenCv", "Unable to load OpenCV");
else
   Log.d("OpenCv", "OpenCV loaded");
  }
}
