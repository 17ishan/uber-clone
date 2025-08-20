import React, { useEffect, useState } from "react";

export default function SeePrices() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const suggestionSection = document.getElementById("suggestions");

    const handleScroll = () => {
      if (!suggestionSection) return;
      const rect = suggestionSection.getBoundingClientRect();

      if (rect.bottom < window.innerHeight) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 px-2 p-3 z-50 flex justify-flex font-sans bg-white">
      <button className="w-full max-w-[] py-2 font-semibold text-white bg-black border-4 border-white rounded-xl shadow-lg">
        See prices
      </button>
    </div>
  );
}
