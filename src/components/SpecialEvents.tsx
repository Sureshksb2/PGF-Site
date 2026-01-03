import React from "react";

const specialEvents = [
  {
    title: "Christmas Celebration",
    date: "2025-12-25",
    description: "A joyful Christmas service with carols, skit, and a special message.",
    color: "#ffb703"
  },
  {
    title: "New Year Service",
    date: "2026-01-01",
    description: "Ring in the New Year with worship, prayer, and blessings!",
    color: "#219ebc"
  },
  {
    title: "Youth Camp",
    date: "2026-02-10",
    description: "A weekend of fun, learning, and spiritual growth for our youth.",
    color: "#d7263d"
  },
  {
    title: "Easter Service",
    date: "2026-04-05",
    description: "Celebrate the resurrection with us! Special music and message.",
    color: "#8ac926"
  }
];

const SpecialEvents: React.FC = () => (
  <section style={{ margin: "48px 0" }}>
    <h2 style={{ textAlign: "center", color: "#219ebc", fontWeight: 700, marginBottom: 24 }}>Special Events</h2>
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 32 }}>
      {specialEvents.map((event, idx) => (
        <div
          key={idx}
          style={{
            background: `linear-gradient(135deg, ${event.color} 60%, #fff 100%)`,
            borderRadius: 20,
            boxShadow: "0 4px 24px rgba(33,158,188,0.12)",
            padding: 28,
            minWidth: 260,
            maxWidth: 320,
            color: "#222",
            margin: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start"
          }}
        >
          <span style={{ fontWeight: 600, fontSize: 18, marginBottom: 8 }}>{event.title}</span>
          <span style={{ fontSize: 14, color: "#555", marginBottom: 12 }}>{new Date(event.date).toLocaleDateString()}</span>
          <span style={{ fontSize: 15 }}>{event.description}</span>
        </div>
      ))}
    </div>
  </section>
);

export default SpecialEvents;
