import "./App.css";
import Nature01 from "./assets/Nature01.jpg";
import Nature02 from "./assets/Nature02.jpg";
import Nature04 from "./assets/Nature04.jpg";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";

function App() {
  const navbarLinks = [
    { url: "#", title: "Home" },
    { url: "#", title: "Products" },
    { url: "#", title: "Rewards" },
  ];

  return (
    <div className="App">
      <Navbar navbarLinks={navbarLinks} />
      <Hero imageSrc={Nature01} />
      <Slider
        imageSrc={Nature02}
        title={"Be Naturistic."}
        subtitle={
          "Our platform offers a wide variety of unique Eco Friendly Products!"
        }
      />
      <Slider
        imageSrc={Nature04}
        title={"Memories that heals Nature."}
        subtitle={"Your one effort can heal the nature by just adding a little bit contribution to add these products into your lifestyle ."}
        flipped={true}
      />
      <Slider
        imageSrc={Nature02}
        title={"Be Naturistic."}
        subtitle={
          "Our platform offers a wide variety of unique Eco Friendly Products!"
        }
      />
    
    </div>
  );
}

export default App;
