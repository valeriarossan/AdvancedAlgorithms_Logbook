
import { Link } from "react-router-dom";
import {
  ArrowDownRight,
  ArrowUpRight,
  BookOpen,
  FileText,
  Library,
  NotebookPen,
} from "lucide-react";

import FileCard from "../components/FileCard";
import { classes } from "../data/classes";
import { algorithms } from "../data/algorithms";

import "./home-diario.css";

const collections = [
  {
    number: "01",
    title: "Registros de clase",
    description:
      "Apuntes, actividades, experimentos y reflexiones de cada sesión.",
    icon: NotebookPen,
    to: "/classes",
    label: "EXPLORAR REGISTROS",
  },
  {
    number: "02",
    title: "Índice de algoritmos",
    description:
      "Fichas técnicas independientes con sus características y complejidades.",
    icon: Library,
    to: "/algorithms",
    label: "CONSULTAR FICHAS",
  },
];

export default function Home() {
  const recentClasses = [...classes].reverse().slice(0, 3);

  return (
    <div className="page diary">
      {/* PORTADA */}
      <section className="diary-cover">
        <div className="cover-topline">
          <span>THE PROGRAMMING ARCHIVES</span>
          <span>TOMO I · 2026</span>
        </div>

        <div className="cover-content">
          <div className="cover-copy">
            <span className="diary-owner">
              CUADERNO DE CAMPO · REGISTRO PERSONAL
            </span>

            <h1>
              Bitácora de
              <br />
              <em>registro de</em>
              <br />
              aprendizajes
              <br />
              <em>TC2038.</em>
            </h1>

            <p className="diary-intro">
              Un registro de ideas, algoritmos, errores y descubrimientos
              a lo largo de un semestre de programación.
            </p>

            <Link to="/classes" className="diary-button">
              Abrir el archivo
              <ArrowDownRight size={17} />
            </Link>

            <span className="diary-note">
              "Lo que no se anota, se olvida."
            </span>
          </div>

          <div className="cover-art">
            <div className="cover-shadow" />

            <div className="cover-book">
              <div className="book-stitch">
                <span>PERSONAL ARCHIVE</span>
                <BookOpen size={38} strokeWidth={1.1} />
                <strong>BITÁCORA</strong>
                <strong>DE ALGORITMOS</strong>
                <div className="book-divider" />
                <small>NOTES · IDEAS · DISCOVERIES</small>
                <div className="book-year">2026</div>
              </div>
            </div>

            <div className="cover-stamp">
              <span>FIELD</span>
              <span>NOTES</span>
            </div>
          </div>
        </div>

        <div className="cover-bottomline">
          <span>DEPARTMENT OF COMPUTING</span>
          <span>EST. MMXXVI</span>
        </div>
      </section>

      {/* COLECCIONES */}
      <section className="diary-section">
        <div className="diary-heading">
          <div>
            <span className="diary-kicker">THE CATALOGUE</span>
            <h2>Explorar el archivo</h2>
          </div>

          <span className="diary-section-number">02 COLLECTIONS</span>
        </div>

        <div className="diary-collections">
          {collections.map((collection) => {
            const Icon = collection.icon;

            return (
              <Link
                key={collection.to}
                to={collection.to}
                className="diary-collection"
              >
                <div className="collection-top">
                  <span>FILE {collection.number}</span>
                  <Icon size={23} strokeWidth={1.3} />
                </div>

                <h3>{collection.title}</h3>
                <p>{collection.description}</p>

                <div className="collection-bottom">
                  <span>{collection.label}</span>
                  <ArrowUpRight size={17} />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* REGISTROS RECIENTES */}
      <section className="diary-section">
        <div className="diary-heading">
          <div>
            <span className="diary-kicker">RECENTLY FILED</span>
            <h2>Últimas anotaciones</h2>
          </div>

          <Link to="/classes" className="diary-text-link">
            Ver todos <ArrowUpRight size={14} />
          </Link>
        </div>

        {recentClasses.length > 0 ? (
          <div className="file-grid">
            {recentClasses.map((item) => (
              <FileCard
                key={item.id}
                code={item.code}
                title={item.title}
                description={item.summary}
                to={`/classes/${item.id}`}
                type={
                  item.type === "mission"
                    ? "MISSION RECORD"
                    : "CLASS RECORD"
                }
                meta={item.date}
              />
            ))}
          </div>
        ) : (
          <p className="diary-empty">
            Todavía no hay registros en el archivo.
          </p>
        )}
      </section>

      {/* FOOTER */}
      <footer className="diary-footer">
        <div className="footer-brand">
          <FileText size={17} />
          <span>THE PROGRAMMING ARCHIVES</span>
        </div>

        <div className="footer-counts">
          <span>{classes.length} REGISTROS</span>
          <span>{algorithms.length} FICHAS TÉCNICAS</span>
        </div>
      </footer>
    </div>
  );
}
