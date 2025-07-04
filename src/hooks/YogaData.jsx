"use client";

import { useState, useEffect, useCallback } from "react";
import { Alert } from "react-native";

export const YogaData = (postureData) => {
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [sessionTime, setSessionTime] = useState(0);
  const [postureStatus, setPostureStatus] = useState("unknown");
  const [postureScore, setPostureScore] = useState(100);
  const [alertsCount, setAlertsCount] = useState(0);

  // Start session timer
  useEffect(() => {
    let interval;
    if (isMonitoring) {
      interval = setInterval(() => {
        setSessionTime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isMonitoring]);

  // Update posture from real WebView data
  useEffect(() => {
    if (isMonitoring && postureData) {
      const { posture, score } = postureData;
      setPostureStatus(posture || "unknown");
      setPostureScore(score || 100);

      if (posture === "poor" || posture === "bad") {
        setAlertsCount((prev) => prev + 1);
      }
    }
  }, [postureData, isMonitoring]);

  const handleStartStop = useCallback(() => {
    if (isMonitoring) {
      Alert.alert(
  "Stop Posture Tracking?",
  "Would you like to end your current posture monitoring session?",
  [
    { text: "Keep Monitoring", style: "cancel" },
    {
      text: "Stop Now",
      onPress: () => setIsMonitoring(false),
    },
  ]
);

    } else {
      setIsMonitoring(true);
      setSessionTime(0);
      setAlertsCount(0);
      setPostureScore(100);
      setPostureStatus("good");
    }
  }, [isMonitoring]);

  const resetSession = useCallback(() => {
    setSessionTime(0);
    setAlertsCount(0);
    setPostureScore(100);
    setPostureStatus("good");
  }, []);

  return {
    isMonitoring,
    sessionTime,
    postureStatus,
    postureScore,
    alertsCount,
    handleStartStop,
    resetSession,
  };
};
