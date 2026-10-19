import { FlaskConical } from "lucide-react";
import FileCard from "../components/FileCard";
import AlgorithmSheet from "../components/AlgorithmSheet";
import { algorithms } from "../data/algorithms";
import { useParams } from "react-router-dom";

export default function Algorithms() {
  const { id } = useParams();

  if (id) {
    return <AlgorithmSheet />;
  }

  const categories = [...new Set(
    algorithms.map((item) => item.category)
  )];

  return (
    <div className="page">
      <section className="page-intro">
        <span className="eyebrow">COLECCIÓN 03 / REGISTROS TÉCNICOS</span>
        <h1>Índice de algoritmos</h1>
        <p>
          Un catálogo independiente de algoritmos, con sus especificaciones,
          complejidad y notas de implementación.
        </p>
      </section>

      <div className="algorithm-index-banner">
        <FlaskConical size={28} strokeWidth={1.3} />
        <div>
          <span>BIBLIOTECA TÉCNICA</span>
          <strong>{algorithms.length} algoritmos documentados</strong>
          <p>Especificaciones, procedimientos y registros de clase vinculados.</p>
        </div>
      </div>

      {categories.map((category) => (
        <section className="section-block" key={category}>
          <div className="section-heading">
            <div>
              <span className="eyebrow">CLASIFICACIÓN</span>
              <h2>{category}</h2>
            </div>
            <span className="section-count">
              {algorithms.filter((item) => item.category === category).length}
              {" "}DOCUMENTOS
            </span>
          </div>

          <div className="file-grid">
            {algorithms
              .filter((item) => item.category === category)
              .map((item) => (
                <FileCard
                  key={item.id}
                  code={item.code}
                  title={item.name}
                  description={item.description}
                  to={`/algorithms/${item.id}`}
                  type="ESPECIFICACIÓN DE ALGORITMO"
                  meta={item.timeComplexity}
                />
              ))}
          </div>
        </section>
      ))}

      <p className="index-note">
        Todos los registros técnicos están vinculados con sus archivos de clase originales.
      </p>
    </div>
  );
}