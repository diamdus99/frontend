import React from 'react';

const LandingPage = () => {
  return (
    <div>
      <div className="absolute z-10 text-white ">hello</div>
      <video className="" loop="true" autoplay="autoplay" id="vid" muted start>
        <source
          src="../../htmlscript/ad-agency/video/slider-video.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default LandingPage;
