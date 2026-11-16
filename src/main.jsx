
import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import poster from "./assets/christmas-party-poster.png";
import christmasSong from "./assets/navidad.mp3";

import welcomeBackground from "./assets/welcome-christmas.png";

const WHATSAPP_NUMBER = "529612989610";

function sendRSVP(answer) {
  const message =
    answer === "yes"
      ? "¡Hola! Confirmo que SÍ asistiré a la Christmas Party del 5 de diciembre a las 7:00 pm. ¡Nos vemos!"
      : "¡Hola! Gracias por la invitación a la Christmas Party del 5 de diciembre. Lamentablemente NO podré asistir. ¡Que se diviertan mucho!";

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

function Snow() {
  return (
    <div className="snow" aria-hidden="true">
      {Array.from({ length: 34 }, (_, i) => (
        <span
          key={i}
          style={{
            left: `${(i * 37) % 100}%`,
            animationDelay: `${(i % 11) * -1.7}s`,
            animationDuration: `${9 + (i % 8)}s`,
            opacity: 0.35 + (i % 5) * 0.12,
            fontSize: `${8 + (i % 4) * 4}px`,
          }}
        >
          ❄
        </span>
      ))}
    </div>
  );
}

function App() {
  const [playing, setPlaying] = React.useState(false);
  const [entered, setEntered] = React.useState(false);
  const audioRef = React.useRef(null);

  // Iniciar la música al entrar a la invitación
  const enterParty = async () => {
    const audio = audioRef.current;

    if (audio) {
      audio.volume = 0.5;

      try {
        await audio.play();
        setPlaying(true);
      } catch (error) {
        console.error("No se pudo iniciar la música:", error);
        setPlaying(false);
      }
    }

    setEntered(true);
  };

  // Botón para pausar o reanudar la música
  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (!audio.paused) {
      audio.pause();
      setPlaying(false);
    } else {
      try {
        await audio.play();
        setPlaying(true);
      } catch (error) {
        console.error("No se pudo reproducir la música:", error);
        setPlaying(false);
      }
    }
  };

  return (
    <main className="page">
      <audio
        ref={audioRef}
        src={christmasSong}
        loop
        preload="auto"
      />

      {!entered ? (
        // PANTALLA DE BIENVENIDA
        <div
          className="welcome-screen"
          style={{
            backgroundImage: `
              linear-gradient(rgba(4, 15, 30, 0.35), rgba(4, 15, 30, 0.45)),
              url(${welcomeBackground})
            `,
          }}
        >
          <Snow />

          <div className="welcome-content">
            <div className="eyebrow">
              <span />
              TEMPORADA DE CELEBRAR
              <span />
            </div>

            <h1>
              Christmas <em>Party</em>
            </h1>

            <div className="welcome-decoration">
              ❄️ 🎄 ❄️
            </div>

            <p className="welcome-message">
              La Navidad se vive mejor juntos.
              <br />
              ¡Te esperamos para celebrar!
            </p>

            <button
              className="enter-button"
              onClick={enterParty}
            >
              ✨ Entrar a la fiesta ✨
            </button>

            {/* <p className="welcome-note">
              🎵 La música comenzará al entrar
            </p> */}
          </div>
        </div>
      ) : (
        // INVITACIÓN PRINCIPAL
        
        <div className="invitation-screen">
          <button
            className="music-button"
            onClick={toggleMusic}
          >
            {playing ? "⏸ Pausar música" : "🎵 Escuchar música"}
          </button>

          <Snow />

          <div className="glow glow-one" />
          <div className="glow glow-two" />

          <section className="invitation">
            <div className="eyebrow">
              <span />
              TEMPORADA DE CELEBRAR
              <span />
            </div>

            <h1>
              Christmas <em>Party</em>
            </h1>

            <p className="intro">
              ¡La Navidad se disfruta más cuando estamos juntos!
            </p>

            <div className="poster-frame">
              <img
                src={poster}
                alt="Invitación ilustrada de Christmas Party con Santa Claus, reno, muñeco de nieve y decoración navideña"
              />
            </div>

            <div className="event-details">
              <div className="detail">
                <span className="detail-icon">📅</span>
                <div>
                  <small>FECHA</small>
                  <strong>5 de diciembre</strong>
                </div>
              </div>

              <div className="detail">
                <span className="detail-icon">🕖</span>
                <div>
                  <small>HORA</small>
                  <strong>7:00 pm</strong>
                </div>
              </div>

              <a
                className="detail location location-link"
                href="https://maps.app.goo.gl/QVormhJrrFnR95n97"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir ubicación en Google Maps"
              >
                <span className="detail-icon">📍</span>

                <div>
                  <small>UBICACIÓN</small>
                  <strong>
                    3 Poniente entre 14 y 15 Sur
                    <br />
                    Barrio San Francisco
                  </strong>

                  <span className="map-hint">
                    Ver ubicación en Google Maps ↗
                  </span>
                </div>
              </a>

              <div className="detail snack">
                <span className="detail-icon">🥂</span>
                <div>
                  <small>UN PEQUEÑO DETALLE</small>
                  <strong>
                    Trae una botana o bebidas de tu preferencia.
                  </strong>
                </div>
              </div>
            </div>

            <div className="rsvp">
              <p className="rsvp-kicker">
                Queremos celebrar contigo
              </p>

              <h2>¿Contamos contigo?</h2>

              <p className="rsvp-copy">
                Confirma tu asistencia. Tu respuesta nos llegará
                directamente por WhatsApp.
              </p>

              <button
                className="yes"
                onClick={() => sendRSVP("yes")}
              >
                <span>🎅</span> ¡Sí asistiré!
              </button>

              <button
                className="no"
                onClick={() => sendRSVP("no")}
              >
                No podré asistir
              </button>

              <p className="whatsapp-note">
                💬 Se abrirá WhatsApp con tu respuesta lista para enviar.
              </p>
            </div>

            <footer>
              Con cariño y espíritu navideño <span>✦</span>
            </footer>
          </section>
        </div>
      )}
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
