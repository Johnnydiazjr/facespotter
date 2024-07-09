import React, { useEffect, useMemo, useState } from "react";
import Particles from "@tsparticles/react";
import { loadAll } from "@tsparticles/all";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo.jsx";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank.jsx";
import "./App.css";

const App = () => {
  const [input, setInput] = useState('');
  const [particlesLoaded, setParticlesLoaded] = useState(false);

  const onInputChange = (event) => {
    console.log(event);
    setInput(event.target.value);
  }

const onButtonSubmit = () => {
  console.log('click');
}

  useEffect(() => {
    const initParticles = async () => {
      await loadAll(window.tsParticles);
      setParticlesLoaded(true);
    };

    initParticles();
  }, []);

  const particlesOptions = useMemo(() => ({
    background: {
      color: {
        value: "#0d47a1",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 6,
        straight: false,
      },
      number: {
        density: {
          enable: true,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  }), []);

  return (
    <div className="App">
      {particlesLoaded ? (
        <Particles className="particles"
          id="tsparticles"
          options={particlesOptions}
        />
      ) : null}
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm onInputChange={onInputChange} onButtonSubmit={onButtonSubmit}/>
    </div>
  );
};

export default App;
