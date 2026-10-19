export const missions = [
  {
    id: "mission-02",
    code: "MS-002",
    title: "Misión #2",
    date: "",
    dateLabel: "",
    summary: "Práctica de complejidad y medición de tiempos de ejecución.",
    reflection: "23 agosto del 2026\n\nRealmente esta actividad me sirvió no solo para practicar mi comprensión de complejidades, sino también para desempolvar mi conocimiento. Noté que con clases pasadas no había practicado cosas básicas cómo crear un array y no había regresado a C++ desde mi clase de algoritmos y estructura de datos de 3ero. Aunque he de admitir que la misión llegó a ser pesada por partes, fue un “descongelamiento” express de mis habilidades básicas que estoy segura que me van a servir en este curso. Algo que me gustó volver a ver fue una prueba de tiempos de ejecución tan evidente. Cuando no generó códigos que se tomen el tiempo solos y me lo muestren es fácil pensar que mi computadora lo hace todo en el mismo tiempo porque lo hace en menos de medio segundo. Sin embargo, ver la cifra de los microsegundos variar tanto me recordó la importancia de cuidar el tiempo, pues ahora fueron máximo un millón de datos, pero en el futuro pueden ser miles de millones y ahí es donde la complejidad temporal hará su magia.",
    algorithmIds: []
  },
  {
    id: "mission-03",
    code: "MS-003",
    title: "Misión #3",
    date: "",
    dateLabel: "",
    summary: "Experimentación con Merge Sort y Quick Sort de dos y tres particiones.",
    reflection: "30 agosto del 2026\n\nEn esta misión trabajamos mucho con merge sort y quick sort. Aquí no pude solamente ver lo que ya habíamos platicado en clase (sobre como el quick sort tiene un caso peor muy feo), sino que también pude observar que pasa cuando se intentan usar 3 particiones en vez de 2 en ambos algoritmos. Para un caso “regular” donde los elementos están inicialmente muy desordenados, si son muchísimos los datos, la realidad es que tal vez si convenga usar un quick sort en 3 particiones. Sin embargo, si los datos están muy ordenados, el quick sort no es buena idea, ni en 2 ni en 3 particiones. En cuanto al merge sort, realmente la diferencia entre 2 y 3 particiones está a favor de las 2 particiones. En cualquier caso donde las 3 particiones ganen, la ganancia es tan poca a comparación del esfuerzo que realmente me cuesta encontrar un caso en el que valga la pena 100% usar alguno de estos algoritmos modificados. En fin, fue un buen experimento que me ayudó a entender un poco más los algoritmos y prestar atención a por qué fueron diseñados así.",
    algorithmIds: [
      "merge-sort",
      "quick-sort"
    ]
  },
  {
    id: "mission-04",
    code: "MS-004",
    title: "Misión #4",
    date: "",
    dateLabel: "",
    summary: "Búsqueda de una solución para el problema de llenado de cisternas.",
    reflection: "6 septiembre del 2026\n\nEn esta misión tuvimos la oportunidad de nosotros visualizar la solución al problema de llenado de cisternas desde cero nosotros mismos. La verdad es que la primera vez que leí el problema no encontré la solución (ni la segunda, ni la tercera). Pasé algunos días pensando en cuál podría ser la solución más adecuada pues tenía varias ideas. Sin embargo, no fue hasta que, con parte de mi gremio, nos metimos al recurso de canvas y obtuvimos una pista ahí mismo que empezaron a surgir ideas más atinadas. Yo había pensado ya en una idea que hiciera uso de búsqueda binaria pero le hacia falta una parte clave: hacer solo los calculos necesarios. Mientras que mi idea tenía en las bases buscar la altura en la cual se pudiera almacenar la cantidad de agua necesaria por medio de una búsqueda binaria, también hacia uso de muchas más operaciones de las necesarias. Sin embargo fue una de las bases necesarias para que llegara a la solución adecuada. Finalmente, he de decir que la parte más díficil fue esa: pensar en la solución. Pues al ya tenerla, la programación fue mucho más simple y solo necesitaría depurar errores sencillos.",
    algorithmIds: []
  }
];
