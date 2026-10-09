import React, { useState } from 'react';
import Navbar from './components/Navbar';
import RoutineBuilder from './components/RoutineBuilder';
import AcneTracker from './components/AcneTracker';
import HairCareModule from './components/HairCareModule';
import InventoryManager from './components/InventoryManager';
import ProfileView from './components/ProfileView';
import LoginModal from './components/LoginModal';
import { initialRoutines, initialAcneLogs, initialHairCare, initialInventory } from './data/mockData';

export default function App() {
  const [activeTab, setActiveTab] = useState('routine');
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const [routines, setRoutines] = useState(initialRoutines);
  const [acneLogs, setAcneLogs] = useState(initialAcneLogs);
  const [hairItems, setHairItems] = useState(initialHairCare);
  const [inventory, setInventory] = useState(initialInventory);

  const [userProfile, setUserProfile] = useState({
    name: 'Skincare Member',
    skinType: 'Combination / Acne-Prone',
    streakDays: 14,
  });

  const handleLoginSuccess = (name) => {
    setIsLoggedIn(true);
    setUserProfile((prev) => ({ ...prev, name }));
  };

  return (
    <div className="min-h-screen bg-glowDark text-slate-100 flex flex-col font-sans">
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenLogin={() => setIsLoginOpen(true)}
        isLoggedIn={isLoggedIn}
        userProfile={userProfile}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8">
        {activeTab === 'routine' && <RoutineBuilder routines={routines} setRoutines={setRoutines} />}
        {activeTab === 'acne' && <AcneTracker logs={acneLogs} setLogs={setAcneLogs} />}
        {activeTab === 'hair' && <HairCareModule items={hairItems} setItems={setHairItems} />}
        {activeTab === 'inventory' && <InventoryManager inventory={inventory} setInventory={setInventory} />}
        {activeTab === 'profile' && <ProfileView userProfile={userProfile} />}
      </main>

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    </div>
  );
}
