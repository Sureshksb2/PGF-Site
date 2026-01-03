

const ServiceLivePage = () => {
  const boxStyle = {
    flex: 1,
    borderRadius: "8px",
    padding: "20px",
    margin: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  };

  return (
    <div
      className="service-live-page"
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: 24,
        paddingTop: 96,
        paddingBottom: 64,
        minHeight: "80vh",
      }}
    >

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {/* Live Service Section */}
        <section
          style={{
            ...boxStyle,
            backgroundColor: "#f9f9f9",
          }}
        >
          <h2>📺 Watch Our Live Service</h2>
          <div style={{ maxWidth: "100%", margin: "0 auto" }}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/live_stream?channel=YOUR_CHANNEL_ID"
              title="Church Service Live"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* Announcements Section */}
        <section style={{ ...boxStyle, backgroundColor: "#ffffff" }}>
          <h2>📢 Live Service Announcements</h2>

          {/* Sunday Service */}
          <div
            style={{
              backgroundColor: "#ffe5e5", // soft red
              borderRadius: "6px",
              padding: "12px",
              marginBottom: "16px",
            }}
          >
            <h3 style={{ color: "#b22222", marginBottom: "8px" }}>🌅 Sunday Service</h3>
            <ul style={{ lineHeight: "1.8", fontSize: "16px", color: "#2c3e50" }}>
              <li>Morning Worship: <b>9:00 AM – 11:00 AM</b></li>
              <li>Second Service: <b>11:00 AM – 1:00 PM</b></li>
              <li>🎉 Every First Sunday: Youth Meeting</li>
            </ul>
          </div>

          {/* Saturday Fasting Prayer */}
          <div
            style={{
              backgroundColor: "#e5ffe5", // soft green
              borderRadius: "6px",
              padding: "12px",
              marginBottom: "16px",
            }}
          >
            <h3 style={{ color: "#228b22", marginBottom: "8px" }}>🙏 Saturday Fasting Prayer</h3>
            <ul style={{ lineHeight: "1.8", fontSize: "16px", color: "#2c3e50" }}>
              <li>Fasting Prayer: <b>6:30 PM – 8:30 PM</b></li>
            </ul>
          </div>

          {/* Wednesday Bible Study */}
          <div
            style={{
              backgroundColor: "#e5f0ff", // soft blue
              borderRadius: "6px",
              padding: "12px",
            }}
          >
            <h3 style={{ color: "#1e3a8a", marginBottom: "8px" }}>📖 Wednesday Bible Study</h3>
            <ul style={{ lineHeight: "1.8", fontSize: "16px", color: "#2c3e50" }}>
              <li>Connect Online via <b>Zoom / Google Meet</b></li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServiceLivePage;