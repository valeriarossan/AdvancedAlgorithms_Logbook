import {
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  CircleUserRound,
  GraduationCap,
  Heart,
  ShieldAlert,
  Video,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./profile.css";

const profile = {
  name: "Valeria Abril Rosado Sánchez",
  nicknames: ["Vale", "Val"],
  age: 20,
  university: "Tecnológico de Monterrey",
  degree: "ITC",
  semester: "5to",
  videoUrl:
    "https://experiencia21.tec.mx/courses/706941/discussion_topics/4361488?entry_id=3578838",
};

const strengths = [
  "Responsable",
  "Dedicada",
  "Disponibilidad de tiempo",
  "Experiencia con gamificación",
];

const weaknesses = [
  "Poca tolerancia a la frustración",
  "Miedo a equivocarme",
  "Sobrepensar decisiones",
  "Impaciencia",
];

export default function Profile() {
  return (
    <div className="page profile-page">
      <Link to="/" className="profile-back">
        <ArrowLeft size={15} />
        Volver al archivo
      </Link>

      <section className="profile-heading">
        <span className="profile-kicker">
          DOCUMENTO PERSONAL · ARCHIVO 000
        </span>

        <h1>Sobre la autora</h1>

        <p>
          Antes de conocer los algoritmos, conoce a la persona
          detrás de estas páginas.
        </p>
      </section>

      <article className="profile-document">
        <div className="profile-document-top">
          <span>LOS ARCHIVOS DE PROGRAMACIÓN</span>
          <span>REGISTRO PERSONAL · 2026</span>
        </div>

        <div className="profile-main">
          <div className="profile-portrait">
            <img
              src="/vale.png"
              alt="Retrato de Valeria"
              className="profile-photo"
            />

            <div className="portrait-caption">
              <span>FIG. 001</span>
              <span>LA AUTORA</span>
            </div>
          </div>

          <div className="profile-identity">
            <span className="profile-kicker">SUJETO No. 001</span>

            <h2>{profile.name}</h2>

            <p className="profile-nicknames">
              También conocida como{" "}
              {profile.nicknames.map((nickname, index) => (
                <span key={nickname}>
                  {index > 0 ? " · " : ""}
                  {nickname}
                </span>
              ))}
            </p>

            <div className="profile-seal">ARCHIVO<br />PERSONAL</div>
          </div>
        </div>

        <section className="profile-section">
          <div className="profile-section-title">
            <BookOpen size={18} />
            <h3>01 / Información personal</h3>
          </div>

          <div className="profile-facts">
            <div className="profile-fact">
              <span>EDAD</span>
              <strong>{profile.age} años</strong>
            </div>

            <div className="profile-fact">
              <span>UNIVERSIDAD</span>
              <strong>{profile.university}</strong>
            </div>

            <div className="profile-fact">
              <span>CARRERA</span>
              <strong>{profile.degree}</strong>
            </div>

            <div className="profile-fact">
              <span>SEMESTRE</span>
              <strong>{profile.semester}</strong>
            </div>
          </div>
        </section>

        <section className="profile-section">
          <div className="profile-section-title">
            <GraduationCap size={19} />
            <h3>02 / Notas de campo</h3>
          </div>

          <p className="profile-prose">
            Una estudiante que documenta el proceso de aprender,
            experimentar, equivocarse y descubrir nuevas formas
            de resolver problemas.
          </p>

          <p className="profile-handwritten">
            "Mi meta en este curso: aprender."
          </p>
        </section>

        <div className="profile-traits">
          <section className="trait-card">
            <div className="profile-section-title">
              <Heart size={18} />
              <h3>03 / Fortalezas</h3>
            </div>

            <ul>
              {strengths.map((strength) => (
                <li key={strength}>{strength}</li>
              ))}
            </ul>
          </section>

          <section className="trait-card">
            <div className="profile-section-title">
              <ShieldAlert size={18} />
              <h3>04 / Áreas de mejora</h3>
            </div>

            <ul>
              {weaknesses.map((weakness) => (
                <li key={weakness}>{weakness}</li>
              ))}
            </ul>
          </section>
        </div>

        <section className="profile-video">
          <div className="video-icon">
            <Video size={25} strokeWidth={1.4} />
          </div>

          <div className="video-copy">
            <span className="profile-kicker">
              ANEXO DEL ARCHIVO · VIDEO 001
            </span>

            <h3>Conoce a la autora</h3>

            <p>
              Una presentación personal para conocer a la autora
              detrás de este cuaderno.
            </p>

            <a
              href={profile.videoUrl}
              target="_blank"
              rel="noreferrer"
              className="profile-video-link"
            >
              Ver video de presentación
              <ArrowUpRight size={17} />
            </a>
          </div>
        </section>

        <footer className="profile-document-footer">
          <span>REGISTRO PERSONAL · No. 001</span>
          <span>FIN DEL DOCUMENTO</span>
        </footer>
      </article>
    </div>
  );
}