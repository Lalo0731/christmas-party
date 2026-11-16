import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import poster from "./assets/christmas-party-poster.png";

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
  return (
    <main className="page">
      <Snow />
      <div className="glow glow-one" />
      <div className="glow glow-two" />

      <section className="invitation">
        <div className="eyebrow"><span /> TEMPORADA DE CELEBRAR <span /></div>
        <h1>Christmas <em>Party</em></h1>
        <p className="intro">¡La Navidad se disfruta más cuando estamos juntos!</p>

        <div className="poster-frame">
          <img src={poster} alt="Invitación ilustrada de Christmas Party con Santa Claus, reno, muñeco de nieve y decoración navideña" />
        </div>

        <div className="event-details">
          <div className="detail">
            <span className="detail-icon">📅</span>
            <div><small>FECHA</small><strong>5 de diciembre</strong></div>
          </div>
          <div className="detail">
            <span className="detail-icon">🕖</span>
            <div><small>HORA</small><strong>7:00 pm</strong></div>
          </div>
          <div className="detail location">
            <span className="detail-icon">📍</span>
            <div><small>UBICACIÓN</small><strong>3 Poniente entre 14 y 15 Sur<br />Barrio San Francisco</strong></div>
          </div>
          <div className="detail snack">
            <span className="detail-icon">🥂</span>
            <div><small>UN PEQUEÑO DETALLE</small><strong>Trae una botana o bebidas de tu preferencia.</strong></div>
          </div>
        </div>

        <div className="rsvp">
          <p className="rsvp-kicker">Queremos celebrar contigo</p>
          <h2>¿Contamos contigo?</h2>
          <p className="rsvp-copy">Confirma tu asistencia. Tu respuesta nos llegará directamente por WhatsApp.</p>
          <button className="yes" onClick={() => sendRSVP("yes")}>
            <span>🎅</span> ¡Sí asistiré!
          </button>
          <button className="no" onClick={() => sendRSVP("no")}>
            No podré asistir
          </button>
          <p className="whatsapp-note">💬 Se abrirá WhatsApp con tu respuesta lista para enviar.</p>
        </div>

        <footer>Con cariño y espíritu navideño <span>✦</span></footer>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
