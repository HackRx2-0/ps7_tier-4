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
    public void addContrastMethod(String imageAsBase64, int alpha ,Callback errorCallback,
    Callback successCallback){



    }

     @ReactMethod
    public void rotate90Degrees(String imageAsBase64, Callback errorCallback, Callback successCallback){
        

    }


    @ReactMethod
    public void skewByAngle(String imageAsBase64,double angle, Callback errorCallback, Callback successCallback) throws ExecutionException, InterruptedException{

      Mat src = new Mat();
      Mat srcOrig;

      
      try {
        
        srcOrig = base64ToMat(imageAsBase64);
        
        Point rotPoint = new Point(srcOrig.cols() / 2.0,
        srcOrig.rows() / 2.0);


        Mat rotMat = Imgproc.getRotationMatrix2D(
        rotPoint, angle * 1.8, 1);

    
        Imgproc.warpAffine(srcOrig, src, rotMat, srcOrig.size(),
        Imgproc.WARP_INVERSE_MAP);

       

        String encoded = matTobase64(src);
        
        successCallback.invoke(encoded);
      
      }catch(Exception e){
        Log.d(TAG,e.toString());
      }
      
    }


  
}


