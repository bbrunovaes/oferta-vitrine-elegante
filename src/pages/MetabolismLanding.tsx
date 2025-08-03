import React from "react";

const MetabolismPage = () => {
  const videoUrl =
    "https://mitolyn.com/science/?hopId=92b62861-4864-4117-ae94-1fdd8cc838c7&affiliate=blackk1";

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h1>⚖️ Discover How Metabolism Affects Your Weight and Energy</h1>
        <p>
          Many people struggle with weight and fatigue—without knowing why. Learn how your metabolism may be involved and what you can do to support it.
        </p>

        <h2>🚫 Frustrated by Weight That Won’t Budge?</h2>
        <p>
          If you’ve been eating well, exercising, and still not seeing results, you’re not alone—and it may not be your fault.
        </p>
        <p>
          <span style={styles.highlight}>One possible factor?</span> Your metabolic function.
        </p>
        <p>
          A slower metabolism can influence how your body uses energy and stores fat. Understanding how it works is the first step toward regaining control.
        </p>

        <h2>🧠 How Metabolic Changes Can Affect You:</h2>
        <ul>
          <li>You feel low on energy—even after a good night’s sleep</li>
          <li>You find it harder to maintain or lose weight</li>
          <li>You experience strong cravings, especially for sweets or carbs</li>
          <li>You notice mental fatigue or reduced focus</li>
          <li>You feel like your body isn’t responding like it used to</li>
        </ul>
        <p>
          These may be signs that your metabolism isn’t working as efficiently as it once did. The good news? There are ways to support your body naturally.
        </p>

        <h2>🎯 Weight gain and fatigue are complex issues.</h2>
        <p>
          Learning what may be behind them can help you take smart, safe action.
        </p>

        <div style={styles.videoSection}>
          <h2>🎥 Want to Understand More?</h2>
          <p>Watch a short educational video that explains:</p>
          <ul>
            <li>✅ What metabolism really is (and isn’t)</li>
            <li>✅ How it affects weight, energy, and cravings</li>
            <li>✅ Simple steps to help support your body’s natural balance</li>
          </ul>
          <a href={videoUrl} target="_blank" rel="noopener noreferrer">
            <img
              src="https://i.imgur.com/6PhSBTG.png"
              alt="Video Preview"
              style={styles.videoImage}
            />
          </a>
          <br />
          <a
            className="cta-button"
            href={videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.ctaButton}
          >
            👉 Watch the Video Now
          </a>
        </div>

        <p><strong>Knowledge is the first step to change.</strong></p>
      </div>
    </div>
  );
};

const styles = {
  body: {
    fontFamily: "Arial, sans-serif",
    margin: 0,
    padding: 0,
    background: "linear-gradient(to bottom right, #e6fff2, #ccffcc)",
    color: "#003300",
    minHeight: "100vh",
  },
  container: {
    maxWidth: "960px",
    margin: "0 auto",
    padding: "30px",
  },
  highlight: {
    fontWeight: "bold",
    color: "#008000",
  },
  videoSection: {
    textAlign: "center",
    margin: "40px 0",
  },
  videoImage: {
    maxWidth: "100%",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
    cursor: "pointer",
  },
  ctaButton: {
    display: "inline-block",
    backgroundColor: "#008000",
    color: "#fff",
    padding: "12px 24px",
    fontSize: "16px",
    border: "none",
    borderRadius: "6px",
    textDecoration: "none",
    marginTop: "20px",
  },
};

export default MetabolismPage;
