import React, { useEffect, useState } from "react";
import { User } from "firebase/auth";
import Navigation from "./Navbar";
import TrazabilidadMinerales from "./components/panel";
import {UAParser} from "ua-parser-js";

interface UserPanelProps {
  user: User | null;
  onLogout: () => void;
}

const UserPanel: React.FC<UserPanelProps> = ({ user, onLogout }) => {
  // const [ipAddress, setIpAddress] = useState<string | null>(null);
  // const [deviceInfo, setDeviceInfo] = useState<string | null>(null);

  useEffect(() => {
    // Fetch IP address
    const fetchIpAddress = async () => {
      try {
        const response = await fetch("https://api64.ipify.org?format=json");
        const data = await response.json();
        // setIpAddress(data.ip);
      } catch (error) {
        console.error("Error fetching IP address:", error);
      }
    };

    // Extract device information
    const parser = new UAParser();
    const device = parser.getResult();
    // setDeviceInfo(`${device.os.name} - ${device.browser.name}`);

    fetchIpAddress();
  }, []);

  return (
    <div>
      <Navigation user={user} onLogout={onLogout} />
      <div className="p-0">
        {/* <h5>Firebase ID: {user?.uid}</h5>
        <h5>Device Info: {deviceInfo}</h5>
        <h5>IP Address: {ipAddress}</h5> */}
        
        <TrazabilidadMinerales />
      </div>
    </div>
  );
};

export default UserPanel;
