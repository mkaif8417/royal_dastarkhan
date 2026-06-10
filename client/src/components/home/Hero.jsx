import heroImg from "../../assets/images/h13-img1.jpg";
import heroImgleft from "../../assets/images/Group-1260.png";
import heroImgright from "../../assets/images/Group-1266.png";
import { useEffect, useState } from "react";

const Hero = () => {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
<>


    <div style={{ display: "flex", justifyContent: "center",alignItems:"center",gap: "100px" }}>
      <div>
      <img src={heroImgleft} alt="" 
      style={{
        marginTop: "12%",
        width: "100px",
        height: "150px",
      }}
      />
      </div>
      <div>

      
      <img
        src={heroImg}
        alt="Heroimg"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          marginTop: "12%",
          width: "380px",
          height: "500px",
          objectFit: "cover",
          borderRadius: "45%",
          boxShadow: hovered
            ? "0 15px 35px rgba(0,0,0,0.3)"
            : "0 10px 25px rgba(0,0,0,0.2)",
          transform: !visible
            ? "scale(0.93)"
            : hovered
            ? "scale(1.04)"
            : "scale(1)",
          opacity: visible ? 1 : 0,
          transition: "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.6s ease-out, box-shadow 0.4s ease",
          cursor: "pointer",
        }}
      />
      </div>
      <div>

    
<img src={heroImgright} alt="" 
      style={{
          marginTop: "12%",
          width: "100px",
          height: "150px",
          }}
          p
      />
      <p>Opening hours:

Mon – Thu: 10.00 am – 01:00 am Fri – Sun: 10:00 am – 02:00 am</p>
  </div>
    </div>

    </>
  );
};

export default Hero;