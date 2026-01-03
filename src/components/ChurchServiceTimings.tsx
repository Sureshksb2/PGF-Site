import React from "react";
import "../styles/ChurchServiceTimings.css"; // Import the CSS file

const ChurchServiceTimings = () => {
  const services = [
    { title: "Sunday Worship", time: "10:00 AM - 12:00 PM", color: "#4CAF50" },
    { title: "Sunday School", time: "9:00 AM - 9:45 AM", color: "#2196F3" },
    { title: "Wednesday Prayer Meeting", time: "7:00 PM - 8:00 PM", color: "#FF9800" },
    { title: "Youth Fellowship", time: "Saturday 5:00 PM - 6:30 PM", color: "#9C27B0" },
  ];

  return (
    <section className="church-service-timings">
      <h2>⛪ Church Service Timings</h2>
      <div className="service-grid">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card"
            style={{ backgroundColor: service.color }}
          >
            <h3>{service.title}</h3>
            <p>{service.time}</p>
          </div>
        ))}
      </div>
      <p className="welcome-text">✨ All are welcome to join our services and fellowship!</p>
    </section>
  );
};

export default ChurchServiceTimings;