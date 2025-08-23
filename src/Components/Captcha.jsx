import React, { useState, useRef, useEffect } from "react";
import { randomNumber } from "../utils/randomNumber";

export default function Captcha() {
  const [captcha, setCaptcha] = useState(randomNumber());
  const [userInput, setUserInput] = useState("");
  const [message, setMessage] = useState("");
  const canvasRef = useRef(null);

  // Function to generate random light color
  const randomLightColor = () => {
    const r = Math.floor(200 + Math.random() * 55); // 200-255
    const g = Math.floor(200 + Math.random() * 55);
    const b = Math.floor(200 + Math.random() * 55);
    return `rgb(${r},${g},${b})`;
  };

  // Function to generate random dark color
  const randomDarkColor = () => {
    const r = Math.floor(Math.random() * 100); // 0–100
    const g = Math.floor(Math.random() * 100);
    const b = Math.floor(Math.random() * 100);
    return `rgb(${r},${g},${b})`;
  };

  // Draw captcha on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Background 
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, randomLightColor());
    gradient.addColorStop(1, randomLightColor());
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Noise lines
    for (let i = 0; i < 6; i++) {
      ctx.strokeStyle = `rgba(${Math.random() * 255},${Math.random() * 255},${ Math.random() * 255},0.6)`;
      ctx.beginPath();
      ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height); 
      ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.stroke();
    }

    // Draw each captcha character separately with random alignment
    const charSpacing = canvas.width / (captcha.length + 1);
    for (let i = 0; i < captcha.length; i++) {
      const char = captcha[i];

      const x = charSpacing * (i + 1);
      const y = canvas.height / 2 + (Math.random() * 10 - 5); // random vertical shift

      const angle = (Math.random() * 70 - 30) * (Math.PI / 180); // random rotation

      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);

      ctx.font = "30px Arial Black";
      ctx.fillStyle = randomDarkColor(); 
      ctx.textBaseline = "middle";
      ctx.textAlign = "center";
      ctx.fillText(char, 0, 0);

      ctx.restore();
    }

    // Add random dots noise
    for (let i = 0; i < 40; i++) {
      ctx.fillStyle = `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255 },0.8)`;
      ctx.beginPath();
      ctx.arc( Math.random() * canvas.width, Math.random() * canvas.height,   1.5,   0,   2 * Math.PI  );
      ctx.fill();
    }
  }, [captcha]);




  const verifyCaptcha = () => {
    if (userInput === captcha) {
      setMessage("Captcha Verified Successfully!");
      
      
      
    } else {
        setMessage("Wrong Captcha. Try Again!");

    }

    
  };

  const refreshCaptcha = () => {
    setCaptcha(randomNumber());
    setUserInput("");
    setMessage("");
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-6">
      {/* Captcha Canvas */}
      <canvas
        ref={canvasRef}
        width={220}
        height={70}
        className=" rounded-lg"
      />

      {/* Input Field */}
      <input
        type="text"
        placeholder="Enter Captcha"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        className="px-4 py-2 border rounded-lg w-64 text-center "
      />

      {/* Buttons */}
      <div className="flex gap-3">
        <button
          onClick={verifyCaptcha}
          className="px-4 py-2 bg-green-500 text-white rounded-lg"
        >
          Verify
        </button>
        <button
          onClick={refreshCaptcha}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Refresh
        </button>
      </div>

      {/* Message */}
      {message && (
        <p
          className={`font-semibold ${
            message.includes("Successfully") ? "text-green-600" : "text-red-600"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
}
