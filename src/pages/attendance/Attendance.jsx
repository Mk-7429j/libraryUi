// eslint-disable-next-line no-unused-vars
import React, { useState, useRef, useEffect } from "react";
import { BrowserMultiFormatReader } from "@zxing/library";

const Attendance = () => {
  const [action, setAction] = useState(null); // State to manage selected action
  const [showScanner, setShowScanner] = useState(false); // State to toggle scanner
  const [scanResult, setScanResult] = useState(""); // State to store scan result
  const videoRef = useRef(null);
  const [scanner, setScanner] = useState(null); // State to hold scanner instance

  const handleScan = (result) => {
    if (result) {
      setScanResult(result.getText()); // Store the scanned value
      setShowScanner(false); // Close the scanner after scanning
    }
  };

  const handleError = (err) => {
    console.error("Error while scanning:", err);
  };

  useEffect(() => {
    // Initialize the scanner when the component mounts
    const codeReader = new BrowserMultiFormatReader();
    setScanner(codeReader);
    return () => {
      // Clean up scanner when component unmounts
      codeReader.reset();
    };
  }, []);

  useEffect(() => {
    if (scanner && showScanner) {
      const videoElement = videoRef.current;
      if (videoElement) {
        scanner.decodeFromVideoDevice(null, videoElement, (result, err) => {
          if (result) {
            handleScan(result);
          }
          if (err) {
            handleError(err);
          }
        });
      }
    }
  }, [showScanner, scanner]);

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-r from-green-300 via-blue-300 to-purple-300">
      <div className="flex flex-col items-center gap-6 p-8 bg-white rounded-xl shadow-xl w-[350px]">
        <h1 className="text-2xl font-extrabold text-gray-800 tracking-wide">
          Library Actions
        </h1>

        {/* Main Action Buttons */}
        {!action && (
          <div className="flex flex-col gap-4 w-full">
            <button
              className="w-full px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
              onClick={() => setAction("attendance")}
            >
              Attendance
            </button>
            <button
              className="w-full px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-lg hover:bg-green-600 transition duration-300"
              onClick={() => setAction("bookEntry")}
            >
              Book Entry
            </button>
          </div>
        )}

        {/* Attendance Section */}
        {action === "attendance" && (
          <div className="flex flex-col items-center gap-4 w-full">
            <h2 className="text-xl font-semibold text-gray-700">Attendance</h2>
            {!showScanner ? (
              <>
                <input
                  type="text"
                  placeholder="Enter Registration Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={scanResult}
                  onChange={(e) => setScanResult(e.target.value)}
                />
                <button
                  className="w-full px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
                  onClick={() => setShowScanner(true)}
                >
                  Open Scanner
                </button>
              </>
            ) : (
              <video ref={videoRef} width="100%" />
            )}
          </div>
        )}

        {/* Book Entry Main Options */}
        {action === "bookEntry" && (
          <div className="flex flex-col gap-4 w-full">
            <button
              className="w-full px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
              onClick={() => setAction("read")}
            >
              Read
            </button>
            <button
              className="w-full px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-lg hover:bg-green-600 transition duration-300"
              onClick={() => setAction("home")}
            >
              Book Get to Home
            </button>
          </div>
        )}

        {/* Book Entry Details */}
        {(action === "read" || action === "home") && (
          <div className="flex flex-col items-center gap-4 w-full">
            <h2 className="text-xl font-semibold text-gray-700">
              {action === "read" ? "Reading Book Entry" : "Home Book Entry"}
            </h2>
            {!showScanner ? (
              <>
                <input
                  type="text"
                  placeholder="Enter Registration Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                  value={scanResult}
                  onChange={(e) => setScanResult(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Enter Book Reg Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <button
                  className="w-full px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-300"
                  onClick={() => setShowScanner(true)}
                >
                  Open Scanner
                </button>
              </>
            ) : (
              <video ref={videoRef} width="100%" />
            )}
          </div>
        )}

        {/* Go Back Button */}
        {action && (
          <button
            className="px-6 py-3 mt-4 bg-gray-400 text-white font-semibold rounded-lg shadow-md hover:bg-gray-500 transition duration-300"
            onClick={() => {
              setAction(null);
              setShowScanner(false);
              setScanResult("");
            }}
          >
            Go Back
          </button>
        )}
      </div>
    </div>
  );
};

export default Attendance;
