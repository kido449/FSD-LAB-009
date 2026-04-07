import { useState } from "react";

function App() {
  // State to control if the popup is visible or hidden
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 1. Show the popup
    setShowPopup(true);
    
    // 2. Clear the form
    e.target.reset(); 

    // 3. Set a timer to hide the popup after 3 seconds (3000 milliseconds)
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <main style={{ maxWidth: "500px", margin: "40px auto", fontFamily: "sans-serif", position: "relative" }}>
      
      {/* --- THE POP-UP NOTIFICATION --- */}
      {showPopup && (
        <div 
          role="alert" 
          aria-live="assertive"
          style={{
            position: "fixed",
            top: "20px",
            left: "50%",
            transform: "translateX(-50%)", // Centers it perfectly
            backgroundColor: "#4caf50",    // Green background
            color: "white",
            padding: "15px 25px",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            fontWeight: "bold",
            zIndex: 1000,                  // Makes sure it floats above everything
            transition: "opacity 0.3s ease-in-out"
          }}
        >
          ✅ Success! Your message has been sent.
        </div>
      )}
      {/* ------------------------------- */}

      <h1>Contact Form</h1>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        
        <div>
          <label htmlFor="name" style={{ display: "block", marginBottom: "5px" }}>Full Name</label>
          <input 
            id="name" 
            type="text" 
            required 
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }} 
          />
        </div>

        <div>
          <label htmlFor="email" style={{ display: "block", marginBottom: "5px" }}>Email Address</label>
          <input
            id="email"
            type="email"
            required
            aria-describedby="email-info"
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
          />
          <small id="email-info" style={{ color: "#555", display: "block", marginTop: "4px" }}>
            We will never share your email.
          </small>
        </div>

        <div>
          <label htmlFor="message" style={{ display: "block", marginBottom: "5px" }}>Message</label>
          <textarea 
            id="message" 
            rows="5" 
            required 
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
          ></textarea>
        </div>

        <button 
          type="submit" 
          style={{ padding: "10px", backgroundColor: "#0056b3", color: "white", border: "none", cursor: "pointer", fontSize: "16px", borderRadius: "4px" }}
        >
          Send Message
        </button>

      </form>
    </main>
  );
}

export default App;