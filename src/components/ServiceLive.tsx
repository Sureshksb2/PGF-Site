

const ServiceLive = () => {
  return (
    <section className="service-live">
      <h2>Service Live</h2>
      <p>Join our live service every Sunday at 10:00 AM!</p>
      {/* Example: Embed YouTube Live or other streaming platform */}
      <div style={{ maxWidth: "560px", margin: "0 auto" }}>
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/live_stream?channel=UCthvxxUsMOChKWucPWKSeZw"
          title="Church Service Live"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default ServiceLive;
