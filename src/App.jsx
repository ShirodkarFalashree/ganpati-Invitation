import React from 'react';
import { motion } from 'framer-motion';

import { invitationConfig } from './config/invitation';
import CurtainOpening from './components/CurtainOpening';
import DarshanSection from './components/DarshanSection';
import InvitationSection from './components/InvitationSection';
import LocationSection from './components/LocationSection';
import FinalBlessing from './components/FinalBlessing';
import FlowerPetals from './components/FlowerPetals';

export function App() {
  return (
    <div className="relative min-h-screen bg-[#FAF7F0] text-[#3B281B] overflow-x-hidden selection:bg-[#E88D37]/30 selection:text-[#5E1E09]">
      {/* 2-Curtains Royal Opening Animation */}
      <CurtainOpening />

      {/* Background Floating Marigold Petals */}
      <FlowerPetals count={16} />

      {/* Main Streamlined Ganpati Invitation Page */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10"
      >
        <main>
          {/* Section 2: Bappa's Darshan (Photo & Devotional Quote) */}
          <DarshanSection config={invitationConfig} />

          {/* Section 3: Personal Invitation Card */}
          <InvitationSection config={invitationConfig} />

          {/* Section 6: Location & Directions */}
          <LocationSection config={invitationConfig} />
        </main>

        {/* Section 10: Final Blessing & Footer */}
        {/* <FinalBlessing config={invitationConfig} /> */}
      </motion.div>
    </div>
  );
}

export default App;
