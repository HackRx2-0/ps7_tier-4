def lab_equalizer(img, new_channel):
    lab = cv2.cvtColor(original, cv2.COLOR_BGR2LAB)
    l,a,b =  cv2.split(lab)
    merged_lab = cv2.merge((new_channel,a,b))
    bgr_img = cv2.cvtColor(merged_lab, cv2.COLOR_LAB2BGR)
    return bgr_img

# def get_perceive_brightness(img):

#     float_img = np.float64(img)  # unit8 will make overflow
#     b, g, r = cv2.split(float_img)
#     float_brightness = np.sqrt(
#         (0.241 * (r ** 2)) + (0.691 * (g ** 2)) + (0.068 * (b ** 2)))
#     brightness_channel = np.uint8(np.absolute(float_brightness))
#     return brightness_channel

# org.opencv.imgproc.CLAHE
CLAHE c = new CLAHE(imgproc.createCLAHE_0(clipLimit, tileGridSize_width, tileGridSize_height));

perceived_brightness_channel = get_perceive_brightness(original)

clahe = cv2.createCLAHE(clipLimit=3.0, tileGridSize=(8,8))
clahe_applied_perceived_channel = clahe.apply(perceived_brightness_channel) 

lab_equalized_img = lab_equalizer(original,clahe_applied_perceived_channel)

show(hsv_equalized_img)
show(lab_equalized_img)
show(original)
show(sharpen(lab_equalized_img))