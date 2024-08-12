import { useState, useEffect } from "react";

export const ImageSlider = () => {
  const imageUrls = [
    "https://static.wixstatic.com/media/374af4_e3dcc93402bc4cf2aa30a4d886614a1f~mv2.jpg/v1/fill/w_753,h_489,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/374af4_e3dcc93402bc4cf2aa30a4d886614a1f~mv2.jpg",
    "https://static.wixstatic.com/media/374af4_714f80e8a2484485bcc2418aa386460f~mv2.jpg/v1/fill/w_753,h_489,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/374af4_714f80e8a2484485bcc2418aa386460f~mv2.jpg"
   
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 3000);

    return () => clearInterval(interval);
  }, []); 
  return (
    <div className="flex justify-center">
      <img src={imageUrls[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} className="sm:max-w-3xl lg:max-w-full" />
    </div>
  );
};

