import { ArrowLeft, ArrowUpRight, FileText } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import FileCard from "../components/FileCard";
import { classes } from "../data/classes";
import { algorithms } from "../data/algorithms";

export default function Classes() {
  const { id } = useParams();

  // Vista individual de una clase
  if (id) {
    const item = classes.find(
      (record) => String(record.id) === String(id)
    );

    if (!item) {
      return (
        <div className="page">
          <div className="empty-state">
            <h2>Archivo no encontrado</h2>
            <p>
              No se encontró una clase con el identificador: {id}
            </p>
            <Link to="/classes">
              Volver a los registros de clase
            </Link>
          </div>
        </div>
      );
    }

    const relatedAlgorithms = algorithms.filter((algorithm) =>
      (item.algorithmIds ?? []).includes(algorithm.id)
    );

    return (
      <div className="page">
        <Link to="/classes" className="back-link">
          <ArrowLeft size={16} />
          Todos los registros de clase
        </Link>

        <article className="class-document">
          <div className="class-document-header">
            <div>
              <span className="eyebrow">
                {item.code} / {item.type}
              </span>

              <h1>{item.title}</h1>

              <p className="class-date">
                FECHA DE LA SESIÓN · {item.date}
              </p>
            </div>

            <div className="document-stamp">
              REGISTRO
              <br />
              DE CLASE
            </div>
          </div>

          <section className="document-section reflection-block">
            <h2>04 / Reflexión personal</h2>
            <p>
              {item.reflection || "Sin reflexión registrada."}
            </p>
          </section>

          <section className="document-section">
            <h2>05 / Fichas de algoritmos relacionadas</h2>

            {relatedAlgorithms.length > 0 ? (
              <div className="related-documents">
                {relatedAlgorithms.map((algorithm) => (
                  <Link
                    to={`/algorithms/${algorithm.id}`}
                    className="related-document"
                    key={algorithm.id}
                  >
                    <FileText size={19} />

                    <span>
                      <strong>
                        {algorithm.code} — {algorithm.name}
                      </strong>
                      <small>Abrir especificación técnica</small>
                    </span>

                    <ArrowUpRight size={16} />
                  </Link>
                ))}
              </div>
            ) : (
              <p>
                Aún no hay fichas de algoritmos vinculadas a esta clase.
              </p>
            )}
          </section>

          <div className="document-footer">
            <span>{item.code}</span>
            <span>FIN DEL REGISTRO</span>
          </div>
        </article>
      </div>
    );
  }

  // Vista con todas las clases
  return (
    <div className="page">
      <section className="page-intro">
        <span className="eyebrow">
          COLECCIÓN 02 / REGISTROS DE SESIÓN
        </span>

        <h1>Registros de clase</h1>

        <p>
          Cada clase deja un registro: conceptos, actividades,
          descubrimientos técnicos y reflexiones personales.
        </p>
      </section>

      <div className="file-grid">
        {classes.map((item) => (
          <FileCard
            key={item.id}
            code={item.code}
            title={item.title}
            description={item.summary}
            to={`/classes/${item.id}`}
            type="REGISTRO DE CLASE"
            meta={item.date}
          />
        ))}
      </div>
    </div>
  );
}