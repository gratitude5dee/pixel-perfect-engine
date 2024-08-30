import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";
import { ChevronLeft, Settings, Video, Phone, Plus, Smile, Mic } from "lucide-react";
import { motion } from "framer-motion";

const Audiovisualizer = ({ currentVolume, isSessionActive }) => {
  // Implement Audiovisualizer component
  return null;
};

const ActionButton = ({ icon, onClick, right, color, opacity = 1 }) => {
  return (
    <button
      onClick={onClick}
      className={`absolute top-2.5 right-${right} z-10 w-10 h-10 rounded-full bg-transparent border-none cursor-pointer flex justify-center items-center text-xl`}
      style={{ color, opacity, transition: 'all 0.3s ease-in-out' }}
    >
      {icon}
    </button>
  );
};

const AnimatedButton = ({ icon, onClick, isActive, loading, color, activeColor, initialRight }) => {
  const [animationProgress, setAnimationProgress] = useState(0);

  useEffect(() => {
    let animationFrame;
    const animate = () => {
      setAnimationProgress(prev => {
        const target = isActive ? 1 : 0;
        const diff = target - prev;
        if (Math.abs(diff) < 0.01) return target;
        return prev + diff * 0.1;
      });
      animationFrame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, [isActive]);

  const top = 10 + (window.innerHeight - 80) * animationProgress;
  const right = initialRight + (window.innerWidth / 2 - initialRight - 30) * animationProgress;
  const size = 40 + 20 * animationProgress;

  return (
    <button
      onClick={onClick}
      className={`fixed z-10 rounded-full border-none cursor-pointer flex justify-center items-center transition-all duration-300 ease-in-out`}
      style={{
        top: `${top}px`,
        right: `${right}px`,
        width: `${size}px`,
        height: `${size}px`,
        fontSize: `${20 + 4 * animationProgress}px`,
        backgroundColor: loading ? '#ffa500' : (isActive ? activeColor : 'transparent'),
        color: isActive ? 'white' : color,
        boxShadow: isActive ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none',
      }}
    >
      {icon}
    </button>
  );
};

const ProfilePicture = ({ src, onUpload, name, isActive, timer }) => {
  const fileInputRef = useRef(null);
  const [animationProgress, setAnimationProgress] = useState(0);

  useEffect(() => {
    let animationFrame;
    const animate = () => {
      setAnimationProgress(prev => {
        const target = isActive ? 1 : 0;
        const diff = target - prev;
        if (Math.abs(diff) < 0.01) return target;
        return prev + diff * 0.1;
      });
      animationFrame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, [isActive]);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        onUpload(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const top = isActive ? '30%' : '0';
  const fontSize = 12 + 8 * animationProgress;
  const opacity = 1 - animationProgress;

  return (
    <div 
      onClick={handleClick} 
      className="cursor-pointer absolute left-1/2 -translate-x-1/2 text-center transition-all duration-300 ease-in-out z-20"
      style={{ top }}
    >
      {isActive && (
        <div className="text-2xl text-white mb-2.5">
          {timer}
        </div>
      )}
      <Avatar
        src={src || "https://via.placeholder.com/45"}
        alt="Profile"
        className="w-[45px] h-[45px] rounded-full object-cover transition-opacity duration-300 ease-in-out"
        style={{ opacity }}
      />
      <div className="mt-1.5 text-white transition-all duration-300 ease-in-out" style={{ fontSize: `${fontSize}px` }}>
        {name}
      </div>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept="image/*"
      />
    </div>
  );
};

const ChatDetail = () => {
  const navigate = useNavigate();
  const { name } = useParams();
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isCallActive, setIsCallActive] = useState(false);
  const [isVideoActive, setIsVideoActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentVolume, setCurrentVolume] = useState(0);
  const [showChat, setShowChat] = useState(true);
  const [profilePicture, setProfilePicture] = useState(null);
  const [timer, setTimer] = useState("00:00");
  const fileInputRef = useRef(null);

  const sendMessage = useCallback(() => {
    if (inputMessage.trim() !== '') {
      setMessages(prev => [...prev, { text: inputMessage, sender: 'user' }]);
      setInputMessage('');
    }
  }, [inputMessage]);

  const toggleCall = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsCallActive(prev => !prev);
      if (!isCallActive) {
        setShowChat(false);
        // Start audio capture and timer here
      } else {
        setCurrentVolume(0);
        // Stop audio capture and timer here
        setTimeout(() => setShowChat(true), 300);
      }
    }, 1000);
  }, [isCallActive]);

  const toggleVideo = useCallback(() => {
    setIsVideoActive(prev => !prev);
    if (!isVideoActive) {
      setShowChat(false);
      // Start timer here
    } else {
      // Stop timer here
      setTimeout(() => setShowChat(true), 300);
    }
    console.log(isVideoActive ? "Stopping FaceTime..." : "Starting FaceTime...");
  }, [isVideoActive]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setMessages(prev => [...prev, { text: `File uploaded: ${file.name}`, sender: 'user', file: e.target.result }]);
      };
      reader.readAsDataURL(file);
    }
  };

  const openFileUpload = useCallback(() => {
    fileInputRef.current.click();
  }, []);

  const handleProfilePictureUpload = (imageData) => {
    setProfilePicture(imageData);
  };

  const openSettings = useCallback(() => {
    console.log("Opening settings...");
  }, []);

  return (
    <div className="flex flex-col h-screen relative overflow-hidden bg-gray-100">
      <Audiovisualizer currentVolume={currentVolume} isSessionActive={isCallActive || isVideoActive} />
      
      {/* Top buttons section */}
      <div className="flex justify-between items-center p-2.5 border-b border-gray-300 h-15 bg-white">
        <button
          onClick={() => navigate('/messages')}
          className="bg-transparent border-none text-2xl cursor-pointer"
        >
          <ChevronLeft className="text-blue-500 h-6 w-6" />
        </button>
        <ProfilePicture 
          src={profilePicture} 
          onUpload={handleProfilePictureUpload} 
          name={name} 
          isActive={isCallActive || isVideoActive} 
          timer={timer}
        />
        <div className="flex gap-2.5">
          <ActionButton icon={<Settings className="h-5 w-5" />} onClick={openSettings} right={28} color="#2196F3" opacity={(isCallActive || isVideoActive) ? 0 : 1} />
          <AnimatedButton
            icon={<Video className="h-5 w-5" />}
            onClick={toggleVideo}
            isActive={isVideoActive}
            loading={false}
            color="#4CAF50"
            activeColor="#ff4136"
            initialRight={15}
          />
          <AnimatedButton
            icon={<Phone className="h-5 w-5" />}
            onClick={toggleCall}
            isActive={isCallActive}
            loading={loading}
            color="#2ecc40"
            activeColor="#ff4136"
            initialRight={2.5}
          />
        </div>
      </div>

      {/* Chat section */}
      <div 
        className="flex-1 p-5 flex flex-col transition-opacity duration-300 ease-in-out"
        style={{ 
          opacity: showChat ? 1 : 0,
          pointerEvents: showChat ? 'auto' : 'none',
        }}
      >
        <div className="flex-1 overflow-y-auto mb-5 relative">
          {messages.map((msg, index) => (
            <div key={index} className={`mb-2.5 text-${msg.sender === 'user' ? 'right' : 'left'}`}>
              <span className={`inline-block p-2 rounded-[18px] max-w-[70%] break-words ${
                msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-green-500 text-white'
              }`}>
                {msg.text}
                {msg.file && <div><a href={msg.file} target="_blank" rel="noopener noreferrer" className="text-white underline">View File</a></div>}
              </span>
            </div>
          ))}
        </div>
        <div className="flex items-center">
          <button
            onClick={openFileUpload}
            className="w-10 h-10 rounded-full bg-blue-500 text-white border-none text-2xl mr-2.5 cursor-pointer flex justify-center items-center"
          >
            <Plus className="h-5 w-5" />
          </button>
          <div className="relative flex-1 max-w-[calc(100%-110px)]">
            <Input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              className="w-full py-3 pr-15 rounded-full border border-gray-300 text-base"
              placeholder="Type a message..."
            />
            <button
              onClick={inputMessage.trim() ? sendMessage : () => console.log("Mic button clicked")}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 bg-transparent border-none text-xl cursor-pointer"
              style={{ color: inputMessage.trim() ? '#007bff' : 'inherit' }}
            >
              {inputMessage.trim() ? '→' : <Mic className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>
      {isVideoActive && (
        <div className="absolute inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center text-white text-2xl">
          Video Call Active
        </div>
      )}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileUpload}
        className="hidden"
      />
    </div>
  );
};

export default ChatDetail;
