"use client"
import { useRef, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation'; // Import usePathname
import PhotoPopup from '@/app/components/popup'; // Import the PhotoPopup component

const Camera = () => {
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [image, setImage] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState(false); // State to control showing the popup
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null); // Store the stream reference
  const pathname = usePathname(); // Get the current route

  console.log(process.env.NEXT_PUBLIC_TOKEN);
  console.log(process.env.NEXT_PUBLIC_ENDPOINT);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
          setIsCameraReady(true);
        }
        streamRef.current = stream; // Save the stream reference
      } catch (error) {
        console.error('Error accessing camera:', error);
      }
    };

    // Only start the camera if on the homepage
    if (pathname === '/') {
      startCamera();
    }

    // Cleanup camera stream on unmount or route change
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
        streamRef.current = null;
      }
    };
  }, [pathname]); // Re-run effect when pathname changes

  const takePhoto = () => {
    if (canvasRef.current && videoRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      if (ctx) {
        canvasRef.current.width = videoRef.current.videoWidth;
        canvasRef.current.height = videoRef.current.videoHeight;

        // Flip the canvas horizontally before capturing the photo
        ctx.translate(canvasRef.current.width, 0); // Move the canvas context to the right
        ctx.scale(-1, 1); // Flip horizontally

        // Draw the flipped video frame onto the canvas
        ctx.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);

        const photoUrl = canvasRef.current.toDataURL('image/png');
        setImage(photoUrl); // Set the captured image to state
        setShowPopup(true); // Show the popup with the captured image
      }
    }
  };

  const closePopup = () => {
    setShowPopup(false); // Close the popup
  };

  return (
    <div className="max-w-3xl mx-auto p-4 min-w-full 
      bg-gradient-to-b from-white via-white to-secondary h-screen
      flex justify-center items-center flex-col">
      <h1 className="text-black font-bold text-xl mb-2">Take a photo</h1>
      <div className="relative">
        <video
          ref={videoRef}
          className="mx-auto h-auto bg-black border-2 border-primary rounded-xl
          transform scale-x-[-1] " // Flip horizontally
        />
        {!isCameraReady && <h1 className="text-center text-black font-bold mt-4">Loading camera...</h1>}
      </div>

      <div className="mt-4 flex justify-center space-x-4">
        <button
          onClick={takePhoto}
          className="btn btn-accent text-white px-4 py-2 rounded-md"
        >
          Take Photo
        </button>
      </div>

      {/* Canvas (invisible, used to capture photo) */}
      <canvas ref={canvasRef} style={{ display: 'none' }} />

      {/* Show the popup with the photo if captured */}
      {showPopup && image && <PhotoPopup image={image} onClose={closePopup} />}
    </div>
  );
};

export default Camera;
