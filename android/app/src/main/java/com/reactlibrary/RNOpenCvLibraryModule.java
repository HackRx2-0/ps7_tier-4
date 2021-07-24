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
import org.opencv.core.CvException;

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
import java.util.List;
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
import org.opencv.imgproc.CLAHE;
import java.util.ArrayList;

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
    public void imageImprover(String imageAsBase64, Callback errorCallback, Callback successCallback) throws ExecutionException, InterruptedException {

      // org.opencv.imgproc.CLAHE
    Mat claheAppliedPerceivedChannel, src, srcOrig;
    try {

     CLAHE c = Imgproc.createCLAHE(3.0, new Size(8,8));
     
     claheAppliedPerceivedChannel = new Mat();
     

      src = base64ToMat(imageAsBase64);
      Log.d(TAG, src.size().toString());
      double proportion = src.rows() / src.cols();
      Mat resizeimage = new Mat();
      Mat resizeimage2 = new Mat();

      Size sz = new Size(1500,1500 * 1.333);
      srcOrig = src;
      Imgproc.resize(src, resizeimage, sz);
      Imgproc.resize(srcOrig, resizeimage2, sz);

     c.apply(getPerceiveBrightness(resizeimage), claheAppliedPerceivedChannel);
     
     src = null;
     

     String encode = matTobase64(labEqualizer(resizeimage2, claheAppliedPerceivedChannel));
     
     successCallback.invoke(encode);
    
     } catch(Exception e){
      Log.d(TAG,e.toString());
    }

    }

    // java.util.List

    public Mat labEqualizer(Mat src, Mat clahePercievedChannel) {

      Mat l,a,b;
    
      Imgproc.cvtColor(src, src, Imgproc.COLOR_BGR2Lab);

      List<Mat> labList= new ArrayList<>();
      Log.d(TAG,"LINE 344");
      Core.split(src, labList);
      // l=labList.get(0);
      // a=labList.get(1);
      // b=labList.get(2);

      Mat LabIm2 = new Mat();
      Mat finalMat = new Mat();

      Core.merge(new ArrayList<Mat>(Arrays.asList(clahePercievedChannel, labList.get(1), labList.get(2))), LabIm2);
      labList = null;

      Imgproc.cvtColor(LabIm2, finalMat, Imgproc.COLOR_Lab2BGR);
      LabIm2 = null;
      
      return finalMat;

    }

    public Mat getPerceiveBrightness(Mat src) {
      Mat desMat = new Mat();
      try{
      src.convertTo(src, CvType.CV_64F);
     
      
      List<Mat> rgbList= new ArrayList<>();
      Core.split(src, rgbList);
      Mat b=rgbList.get(0);
      Mat g=rgbList.get(1);
      Mat r=rgbList.get(2);
      
      r = r.mul(r);
      g = g.mul(g);
      b = b.mul(b);
      
     
      Core.multiply(r, new Scalar(0.241), r);
      Core.multiply(b, new Scalar(0.068), b);
      Core.multiply(g, new Scalar(0.691), g);


    
      desMat = new Mat();
      
      Core.add(g,b,g);
      Core.add(r,g,g);
      Core.pow(g, 0.5, g);

    
     

      Core.absdiff(g, Scalar.all(0), g);
      g.convertTo(desMat, CvType.CV_8UC1);


      }catch(CvException e){
        Log.d(TAG,e.toString());
      }
      return desMat;
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

