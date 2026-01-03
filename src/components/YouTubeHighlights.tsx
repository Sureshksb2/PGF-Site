import React from "react";

// Replace with your actual YouTube highlight video IDs
const highlightVideoIds = [
  "dQw4w9WgXcQ",
  "3JZ_D3ELwOQ",
  "L_jWHffIx5E",
  "eY52Zsg-KVI",
  "M7FIvfx5J10",
  "kXYiU_JCYtU"
];

const YouTubeHighlights: React.FC = () => (
  <section style={{ margin: "48px 0" }}>
    <h2 style={{ textAlign: "center", color: "#d7263d", fontWeight: 700, marginBottom: 24 }}>Special Event Highlights</h2>
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 24 }}>
      {highlightVideoIds.map((id) => (
        <div key={id} style={{ padding: 12, display: "flex", flexDirection: "column", alignItems: "center" }}>
          <iframe
            width="320"
            height="180"
            src={`https://www.youtube.com/embed/${id}`}
            title="Event Highlight Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ borderRadius: 16, boxShadow: "0 4px 24px rgba(215,38,61,0.15)" }}
          ></iframe>
        </div>
      ))}
    </div>
  </section>
);

export default YouTubeHighlights;
