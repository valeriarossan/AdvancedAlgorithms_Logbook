
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, BookOpen, ScrollText } from "lucide-react";
import { missions } from "../data/missions";
import { algorithms } from "../data/algorithms";
import "./missions.css";

export default function Missions() {
  const { id } = useParams();

  const mission = missions.find((item) => item.id === id);

  if (id && !mission) {
    return (
      <section className="missions-page">
        <Link to="/missions" className="back-link">
          <ArrowLeft size={16} /> Volver a las misiones
        </Link>
        <h1>Misión no encontrada</h1>
        <p>No encontré una misión con ese identificador.</p>
      </section>
    );
  }

  if (mission) {
    const relatedAlgorithms = algorithms.filter((algorithm) =>
      (mission.algorithmIds ?? []).includes(algorithm.id)
    );

    return (
      <section className="missions-page">
        <Link to="/missions" className="back-link">
          <ArrowLeft size={16} /> Todas las misiones
        </Link>

        <article className="mission-detail">
          <p className="archive-label">REGISTRO DE MISIÓN · {mission.code}</p>
          <h1>{mission.title}</h1>
          <p className="mission-date">{mission.dateLabel || mission.date}</p>

          {mission.summary && (
            <p className="mission-summary">{mission.summary}</p>
          )}

          <div className="mission-reflection">
            {mission.reflection
              ?.split(/\n\s*\n/)
              .filter(Boolean)
              .map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
          </div>

          {relatedAlgorithms.length > 0 && (
            <section className="mission-related">
              <h2>
                <BookOpen size={19} />
                Fichas técnicas relacionadas
              </h2>

              {relatedAlgorithms.map((algorithm) => (
                <Link
                  key={algorithm.id}
                  to={`/algorithms/${algorithm.id}`}
                  className="related-algorithm-link"
                >
                  {algorithm.name || algorithm.title} →
                </Link>
              ))}
            </section>
          )}
        </article>
      </section>
    );
  }

  return (
    <section className="missions-page">
      <header className="missions-header">
        <p className="archive-label">THE PROGRAMMING ARCHIVES</p>
        <h1>Misiones</h1>
        <p>
          Un registro de los retos, experimentos y aprendizajes del curso.
        </p>
      </header>

      <div className="missions-list">
        {[...missions]
          .sort((a, b) => b.date.localeCompare(a.date))
          .map((item) => (
            <article className="mission-card" key={item.id}>
              <div className="mission-card-icon">
                <ScrollText size={22} />
              </div>

              <div className="mission-card-content">
                <p className="archive-label">{item.code}</p>
                <h2>{item.title}</h2>
                <p className="mission-date">
                  {item.dateLabel || item.date}
                </p>
                <p>{item.summary}</p>

                <Link
                  to={`/missions/${item.id}`}
                  className="read-mission-link"
                >
                  Leer registro →
                </Link>
              </div>
            </article>
          ))}
      </div>
    </section>
  );
}
