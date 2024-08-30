import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";
import { PenSquare, Search, Mic, ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";

const Audiovisualizer = ({ currentVolume, isSessionActive }) => {
  // ... (keep the existing Audiovisualizer component code)
};

const ActionButton = ({ icon, onClick, right, color, opacity = 1 }) => {
  // ... (keep the existing ActionButton component code)
};

const AnimatedButton = ({ icon, onClick, isActive, loading, color, activeColor, initialRight }) => {
  // ... (keep the existing AnimatedButton component code)
};

const ProfilePicture = ({ src, onUpload, name, isActive, timer }) => {
  // ... (keep the existing ProfilePicture component code)
};

const ChatDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isCallActive, setIsCallActive] = useState(false);
  const [isVideoActive, setIsVideoActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentVolume, setCurrentVolume] = useState(0);
  const [showChat, setShowChat] = useState(true);
  const [profilePicture, setProfilePicture] = useState(null);
  const [timer, setTimer] = useState("00:00");
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const dataArrayRef = useRef(null);
  const fileInputRef = useRef(null);
  const timerIntervalRef = useRef(null);

  // ... (keep all the existing functions from the ChatApp component)

  const handleBackButton = () => {
    navigate('/messages');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', position: 'relative', overflow: 'hidden', background: '#f0f0f0' }}>
      <Audiovisualizer currentVolume={currentVolume} isSessionActive={isCallActive || isVideoActive} />
      
      {/* Top buttons section */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px', borderBottom: '1px solid #ccc', height: '60px' }}>
        <button
          onClick={handleBackButton}
          style={{
            background: 'transparent',
            border: 'none',
            fontSize: '24px',
            cursor: 'pointer',
          }}
        >
          ←
        </button>
        <ProfilePicture 
          src={profilePicture} 
          onUpload={handleProfilePictureUpload} 
          name={id} 
          isActive={isCallActive || isVideoActive} 
          timer={timer}
        />
        <div style={{ display: 'flex', gap: '10px' }}>
          <ActionButton icon="⚙️" onClick={openSettings} right={110} color="#2196F3" opacity={(isCallActive || isVideoActive) ? 0 : 1} />
          <AnimatedButton
            icon="📹"
            onClick={toggleVideo}
            isActive={isVideoActive}
            loading={false}
            color="#4CAF50"
            activeColor="#ff4136"
            initialRight={60}
          />
          <AnimatedButton
            icon="📞"
            onClick={toggleCall}
            isActive={isCallActive}
            loading={loading}
            color="#2ecc40"
            activeColor="#ff4136"
            initialRight={10}
          />
        </div>
      </div>

      {/* Chat section */}
      <div 
        style={{ 
          flex: 1, 
          padding: '20px', 
          display: 'flex', 
          flexDirection: 'column',
          opacity: showChat ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out',
          pointerEvents: showChat ? 'auto' : 'none',
        }}
      >
        {/* ... (keep the existing chat section code) */}
      </div>
      {isVideoActive && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            zIndex: 999,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            fontSize: '24px',
          }}
        >
          Video Call Active
        </div>
      )}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileUpload}
        style={{ display: 'none' }}
      />
    </div>
  );
};

export default ChatDetail;