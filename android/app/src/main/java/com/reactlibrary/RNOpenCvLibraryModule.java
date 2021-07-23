package com.reactlibrary;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.util.Base64;
import android.util.Log;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.logging.Logger;
import org.opencv.android.Utils;
import org.opencv.core.CvType;
import org.opencv.core.Mat;
import org.opencv.core.Size;
import org.opencv.imgproc.Imgproc;
import org.opencv.core.MatOfPoint;
import org.opencv.core.Point;
import org.opencv.core.Scalar;
import org.opencv.core.TermCriteria;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Executor;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.function.BiFunction;
import java.util.logging.Logger;


import com.facebook.react.bridge.Callback;

import android.app.ProgressDialog;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;

import android.media.ExifInterface;

import org.opencv.core.Core;
import org.opencv.core.Rect;
import org.opencv.core.CvType;
import org.opencv.core.Mat;
import org.opencv.android.Utils;
import org.opencv.core.MatOfPoint;
import org.opencv.core.Scalar;
import org.opencv.core.TermCriteria;
import org.opencv.imgproc.Imgproc;

import android.os.AsyncTask;
import android.util.Base64;
import android.util.Log;
import android.widget.Toast;
import android.graphics.Matrix;

import org.opencv.core.Size;
import org.opencv.utils.Converters;

import java.io.ByteArrayOutputStream;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.util.Base64;
import android.util.Log;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.OutputStream;
import java.io.FileOutputStream;
import org.opencv.android.Utils;
import org.opencv.core.CvType;
import org.opencv.core.Mat;
import org.opencv.core.Size;
import org.opencv.imgproc.Imgproc;

import java.io.BufferedWriter;
import java.io.ByteArrayOutputStream;
import java.nio.charset.StandardCharsets;
import java.util.*;
import org.opencv.imgcodecs.Imgcodecs;


public class RNOpenCvLibraryModule extends ReactContextBaseJavaModule {
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

      public Mat base64ToMat(String imageAsBase64){

      byte[] decodedString = Base64.decode(imageAsBase64, Base64.DEFAULT);

      Bitmap selectedImage = BitmapFactory.decodeByteArray(decodedString, 0, decodedString.length);
      
      Mat srcOrig = new Mat(selectedImage.getHeight(), selectedImage.getWidth(), CvType.CV_8UC4);
      
      Utils.bitmapToMat(selectedImage, srcOrig);

      return srcOrig;
    }
    public String matTobase64(Mat src) {

      Bitmap finalImage = Bitmap.createBitmap(src.cols(), src.rows(), Bitmap.Config.ARGB_8888);

      Utils.matToBitmap(src, finalImage);
      
      ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();

      finalImage.compress(Bitmap.CompressFormat.JPEG, 100, byteArrayOutputStream);

      byte[] byteArray = byteArrayOutputStream.toByteArray();

      String encoded = Base64.encodeToString(byteArray, Base64.DEFAULT);

      return encoded;
    }
    @ReactMethod
    public void brightnessOrContrast(String imageAsBase64, int alpha, int beta, Callback errorCallback, Callback successCallback) {
  
      Mat src = new Mat();
      Mat dst;
      
      /* Conditional transfer of options to adjust brightness or 
         contrast will be handeled in the front end
      */
      
      try {
        
        src = base64ToMat(imageAsBase64);
        dst = new Mat(src.rows(), src.cols(), src.type());
  
        src.convertTo(dst, -1, alpha, beta);
  
        String encoded = matTobase64(dst);
  
        successCallback.invoke(encoded);
  
        } catch(Exception e) {
            Log.e(TAG, "error " + e.getStackTrace());
            errorCallback.invoke(e.getStackTrace().toString());
        }
    }

    @ReactMethod 
    public void skewByAngle(String imageAsBase64,double angle, Callback errorCallback, Callback successCallback) throws ExecutionException, InterruptedException{

      Mat src = new Mat();
      Mat srcOrig;

      /*Slider value for angle parameter conversion
      0 -> 0 deg
      25 -> 90 deg
      50 -> 180 deg
      75 -> 270 deg
      100 -> 0 / 360 deg
      */
      
      try {
        
        srcOrig = base64ToMat(imageAsBase64);
        
        Point rotPoint = new Point(srcOrig.cols() / 2.0,
        srcOrig.rows() / 2.0);

        Mat rotMat = Imgproc.getRotationMatrix2D(
        rotPoint, angle * 3.6, 1);

        // Apply Affine Transformation
        Imgproc.warpAffine(srcOrig, src, rotMat, srcOrig.size(),
        Imgproc.WARP_INVERSE_MAP);

        String encoded = matTobase64(src);
        
        successCallback.invoke(encoded);
      
      }catch(Exception e){
        Log.d(TAG,e.toString());
      }
      
    }


  }

