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
  public void rotate90Degrees(String imageAsBase64,int numberRotations, Callback errorCallback, Callback successCallback) throws ExecutionException, InterruptedException {
  
    Mat srcOrig;
    numberRotations = numberRotations %4;
    try {

      srcOrig = base64ToMat(imageAsBase64);
      
      if(numberRotations == 1)
        Core.rotate(srcOrig, srcOrig, Core.ROTATE_90_CLOCKWISE);
      
      if(numberRotations == 2)
        Core.rotate(srcOrig, srcOrig, Core.ROTATE_180);
      
      if(numberRotations == 3)
        Core.rotate(srcOrig, srcOrig, Core.ROTATE_90_COUNTERCLOCKWISE);
      
      

      String encoded = matTobase64(srcOrig);

      successCallback.invoke(encoded);
     
      } catch (Exception e) {

          Log.e(TAG," STACK TRACE :" + e.toString());

      }

  }

    @ReactMethod
    public void imageSmoothening(String imageAsBase64, Callback errorCallback, Callback successCallback) {

      Mat destination;
      Mat srcOrig;
      Mat kernel;
      int kernelSize = 3;
      
      try {
        
        srcOrig = base64ToMat(imageAsBase64);
        destination = new Mat(srcOrig.rows(), srcOrig.cols(), srcOrig.type());
        kernel = new Mat(kernelSize, kernelSize, CvType.CV_32F) {
        {
          put(0, 0, -1);
          put(0, 1 , -1);
          put(0, 2 , -1);

          put(1, 0, -1);
          put(1, 1, 9);
          put(1, 2, -1);

          put(2, 0, -1);
          put(2, 1, -1);
          put(2, 2, -1);
        }
        };          
        Imgproc.filter2D(srcOrig, destination, -1, kernel);

        String encoded = matTobase64(destination);
        successCallback.invoke(encoded);

      } catch(Exception e) {
        Log.d(TAG,e.toString());
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


