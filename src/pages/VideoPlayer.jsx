import React from 'react';

const VideoPlayer = () => {
  return (
    <div className='text-center'>
      <h2>My Video Player</h2>
      <video
        width="720"
        controls
        style={{ borderRadius: '12px' }}
      >
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
