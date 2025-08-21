// src/components/StreakCounter.jsx
import React, { useEffect, useState } from "react";

function StreakCounter() {
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    const today = new Date().toDateString(); // "Mon Aug 21 2025"
    const savedStreak = localStorage.getItem("streak");
    const lastDate = localStorage.getItem("lastDate");

    if (!savedStreak || !lastDate) {
      // First time user
      localStorage.setItem("streak", 1);
      localStorage.setItem("lastDate", today);
      setStreak(1);
    } else {
      const savedStreakNum = parseInt(savedStreak, 10);
      const lastDateObj = new Date(lastDate);
      const todayObj = new Date(today);

      // Difference in days
      const diffDays =
        (todayObj - lastDateObj) / (1000 * 60 * 60 * 24);

      if (diffDays === 1) {
        // Consecutive day → increment
        const newStreak = savedStreakNum + 1;
        localStorage.setItem("streak", newStreak);
        localStorage.setItem("lastDate", today);
        setStreak(newStreak);
      } else if (diffDays > 1) {
        // Missed a day → reset
        localStorage.setItem("streak", 1);
        localStorage.setItem("lastDate", today);
        setStreak(1);
      } else {
        // Same day → keep streak
        setStreak(savedStreakNum);
      }
    }
  }, []);

  return (
    <div className="flex items-center gap-2 font-medium text-orange-600">
      <span role="img" aria-label="fire">🔥</span>
      <span>{streak} day{streak !== 1 && "s"}</span>
    </div>
  );
}

export default StreakCounter;
