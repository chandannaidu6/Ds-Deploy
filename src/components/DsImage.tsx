import { useState, useEffect } from "react";

export const DsImage = () => {
  const imageUrls = [
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgYx_bNbsfTv3EiqOuh3bcFCsNU1vRifVj8ZnnMmAmdNy3PFpyIPElVcUcif7xuXJ9yzgqdvGaI-EORLTGq1Gz89UgGT_6BkWZCX8Xl94z96TuOak5Tg0x35nTTW5p6Nro_R8kshWymqq5ugW_vPwe_uVXCP7JQIdjnRURR3K_shmH03NX8kCV0NG4_Gq9z/s320/_DSC0283.jpg",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjUpvOVmWGczyMFXQDmdlEEPR50kTHoWFAlCBAbmIGHaxuGvNGn3v55b1ABZAD39xhSYLK5j4ZvZt_UOO3Mp_G-IWYo_R_ZQqFlBiISzz5GtBnZLjOn39fuHNIQm8jsr-KtLrEhUtkwvVsoZ7vcyeFiArpp3jQDkhWpBCag3AjHEDegUymEuXU2aYSytqEP/s320/IMG_1937.jpg",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgG_XadGw2MpFhfU0wxt61QxyKwHDSCKMeRq4Miad6OlJetIS68Vz6TopWCzV7_HJh_dqmTFmRe9UYMRZxmqwyjP5UmZD_qMpW3R9eTWmSU2P4Zc7h5xaRlsUHPF7Tpzsf5bE8lgfN5BXUap8tdQNFHKtZn3DkYH7lemWhMRqdOvjU-f7eJc80KYriqOVB4/s320/IMG_2000.jpg",
    "https://drive.google.com/uc?export=view&id=1pkpdSIDAL2eHWX4Jq3KfayqGqPXbS_bb"
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
      <img
        src={imageUrls[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
        className="sm:max-w-3xl lg:max-w-full h-auto"
        style={{ width: '100%', maxWidth: '1024px', height: 'auto', objectFit: 'contain' }}
      />
    </div>
  );
};
