export const algorithms = [
  {
    id: "sequential-search",
    code: "ALG-001",
    name: "Búsqueda secuencial",
    category: "Searching",
    paradigm: "Brute Force",
    description: "Busca un elemento recorriendo los elementos de una colección uno por uno hasta encontrarlo o agotar la colección.",
    input: "Un arreglo A de n elementos y un valor objetivo x.",
    output: "El índice donde aparece x, o -1 si no está presente.",
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    stable: "No aplica.",
    steps: [
      "Iniciar desde el primer elemento.",
      "Comparar cada elemento con el valor objetivo.",
      "Devolver el índice si hay coincidencia.",
      "Si se llega al final, devolver -1."
    ],
    pseudocode: "SEQUENTIAL-SEARCH(A, x)\nfor i = 0 to length(A) - 1\n  if A[i] == x\n    return i\nreturn -1",
    classIds: [
      "class-02"
    ],
    sources: [
      "https://www.geeksforgeeks.org/dsa/linear-search/"
    ]
  },
  {
    id: "binary-search",
    code: "ALG-002",
    name: "Búsqueda binaria",
    category: "Searching",
    paradigm: "Divide and Conquer",
    description: "Encuentra un elemento en una colección ordenada descartando la mitad del intervalo de búsqueda en cada iteración.",
    input: "Un arreglo A ordenado y un valor objetivo x.",
    output: "El índice de x, o -1 si no está presente.",
    timeComplexity: "O(log n)",
    spaceComplexity: "O(1) en la versión iterativa",
    stable: "No aplica.",
    steps: [
      "Definir los límites izquierdo y derecho.",
      "Calcular el punto medio.",
      "Comparar el elemento medio con el objetivo.",
      "Reducir el intervalo a la mitad correspondiente hasta encontrarlo o agotar el intervalo."
    ],
    pseudocode: "BINARY-SEARCH(A, x)\nleft = 0\nright = length(A) - 1\nwhile left <= right\n  mid = floor((left + right) / 2)\n  if A[mid] == x\n    return mid\n  if A[mid] < x\n    left = mid + 1\n  else\n    right = mid - 1\nreturn -1",
    classIds: [],
    sources: [
      "https://www.geeksforgeeks.org/dsa/binary-search/"
    ]
  },
  {
    id: "merge-sort",
    code: "ALG-003",
    name: "Merge Sort",
    category: "Sorting",
    paradigm: "Divide and Conquer",
    description: "Ordena una colección dividiéndola recursivamente y combinando las partes ordenadas.",
    input: "Un arreglo de n elementos.",
    output: "El mismo conjunto de elementos ordenado.",
    timeComplexity: "O(n log n)",
    spaceComplexity: "O(n)",
    stable: "Sí, en la implementación estándar.",
    steps: [
      "Dividir el arreglo en dos mitades.",
      "Ordenar recursivamente cada mitad.",
      "Combinar las mitades ordenadas."
    ],
    pseudocode: "MERGE-SORT(A)\nif length(A) <= 1\n  return A\n\nleft = MERGE-SORT(first half of A)\nright = MERGE-SORT(second half of A)\n\nreturn MERGE(left, right)",
    classIds: [
      "class-05",
      "class-06"
    ],
    sources: [
      "https://www.geeksforgeeks.org/dsa/merge-sort/"
    ]
  },
  {
    id: "quick-sort",
    code: "ALG-004",
    name: "Quick Sort",
    category: "Sorting",
    paradigm: "Divide and Conquer",
    description: "Ordena una colección seleccionando un pivote, particionando los elementos alrededor de él y ordenando recursivamente las particiones.",
    input: "Un arreglo de n elementos.",
    output: "El arreglo ordenado en el mismo espacio, según la implementación.",
    timeComplexity: "Promedio: O(n log n); peor caso: O(n²)",
    spaceComplexity: "Promedio: O(log n) por la recursión; peor caso: O(n)",
    stable: "No, en la implementación in-place estándar.",
    steps: [
      "Elegir un pivote.",
      "Particionar los elementos menores y mayores que el pivote.",
      "Ordenar recursivamente las particiones.",
      "Terminar cuando cada partición tenga cero o un elemento."
    ],
    pseudocode: "QUICK-SORT(A, low, high)\nif low < high\n  p = PARTITION(A, low, high)\n  QUICK-SORT(A, low, p - 1)\n  QUICK-SORT(A, p + 1, high)",
    classIds: [
      "class-05",
      "class-06"
    ],
    sources: [
      "https://www.geeksforgeeks.org/dsa/quick-sort-algorithm/"
    ]
  },
  {
    id: "strassen",
    code: "ALG-005",
    name: "Algoritmo de Strassen",
    category: "Matrix Multiplication",
    paradigm: "Divide and Conquer",
    description: "Multiplica matrices cuadradas usando siete multiplicaciones recursivas de submatrices en lugar de las ocho de la división clásica.",
    input: "Dos matrices cuadradas compatibles, normalmente de tamaño n × n.",
    output: "La matriz producto.",
    timeComplexity: "O(n^log₂7) ≈ O(n^2.807)",
    spaceComplexity: "Depende de la implementación; comúnmente O(n²) de espacio auxiliar o más por temporales/recursión.",
    stable: "No aplica.",
    steps: [
      "Dividir cada matriz en cuatro submatrices.",
      "Calcular siete productos intermedios mediante sumas y restas.",
      "Combinar esos productos para obtener las cuatro partes de la matriz resultado.",
      "Reunir las partes en la matriz final."
    ],
    pseudocode: "STRASSEN(A, B)\nif size(A) <= threshold\n  return standard-matrix-multiply(A, B)\n\nPartition A into A11, A12, A21, A22\nPartition B into B11, B12, B21, B22\nCompute the seven Strassen products M1 ... M7\nCombine M1 ... M7 into C11, C12, C21, C22\nreturn C",
    classIds: [
      "class-07"
    ],
    sources: [
      "https://en.wikipedia.org/wiki/Strassen_algorithm"
    ]
  },
  {
    id: "karatsuba",
    code: "ALG-006",
    name: "Karatsuba (multiplicación de enteros grandes)",
    category: "Integer Multiplication",
    paradigm: "Divide and Conquer",
    description: "Multiplica enteros grandes dividiendo cada número en partes altas y bajas y reduciendo de cuatro a tres las multiplicaciones recursivas.",
    input: "Dos enteros grandes, representados con n dígitos.",
    output: "El producto de los dos enteros.",
    timeComplexity: "O(n^log₂3) ≈ O(n^1.585)",
    spaceComplexity: "Depende de la representación y la implementación; comúnmente O(n) con gestión cuidadosa de temporales.",
    stable: "No aplica.",
    steps: [
      "Dividir cada número en una parte alta y una parte baja.",
      "Calcular el producto de las partes bajas, el de las partes altas y un producto combinado.",
      "Obtener el término cruzado mediante restas.",
      "Combinar los resultados con las potencias adecuadas de la base."
    ],
    pseudocode: "KARATSUBA(x, y)\nif x or y has few digits\n  return x * y\nSplit x into a * B^m + b\nSplit y into c * B^m + d\nz0 = KARATSUBA(b, d)\nz2 = KARATSUBA(a, c)\nz1 = KARATSUBA(a + b, c + d) - z2 - z0\nreturn z2 * B^(2*m) + z1 * B^m + z0",
    classIds: [
      "class-07"
    ],
    sources: [
      "https://en.wikipedia.org/wiki/Karatsuba_algorithm"
    ]
  },
  {
    id: "closest-pair",
    code: "ALG-007",
    name: "Closest Pair of Points",
    category: "Computational Geometry",
    paradigm: "Divide and Conquer",
    description: "Encuentra el par de puntos con la menor distancia euclidiana entre un conjunto de puntos del plano.",
    input: "Un conjunto P de n puntos en el plano.",
    output: "El par de puntos cuya distancia es mínima.",
    timeComplexity: "O(n log n)",
    spaceComplexity: "O(n) en una implementación estándar con arreglos auxiliares.",
    stable: "No aplica.",
    steps: [
      "Ordenar los puntos por coordenada x.",
      "Dividir los puntos en mitades.",
      "Resolver recursivamente cada mitad.",
      "Examinar la franja cercana a la línea divisoria y comparar los puntos relevantes por coordenada y."
    ],
    pseudocode: "CLOSEST-PAIR(P)\nSort P by x-coordinate\nreturn SOLVE(P)\n\nSOLVE(P)\nif length(P) <= 3\n  return brute-force minimum distance\nDivide P into left and right halves\nd = min(SOLVE(left), SOLVE(right))\nstrip = points within distance d of dividing line\nCheck strip points in y-order\nreturn minimum distance found",
    classIds: [
      "class-08"
    ],
    resourceUrl: "https://www.geeksforgeeks.org/dsa/closest-pair-of-points-using-divide-and-conquer-algorithm/",
    sources: [
      "https://www.geeksforgeeks.org/dsa/closest-pair-of-points-using-divide-and-conquer-algorithm/"
    ]
  },
  {
    id: "convex-hull",
    code: "ALG-008",
    name: "Convex Hull",
    category: "Computational Geometry",
    paradigm: "Divide and Conquer",
    description: "Construye el menor polígono convexo que contiene todos los puntos de un conjunto. Esta ficha usa el método de cadena monótona.",
    input: "Un conjunto P de n puntos en el plano.",
    output: "Los vértices del casco convexo ordenados alrededor de su frontera.",
    timeComplexity: "O(n log n)",
    spaceComplexity: "O(n)",
    stable: "No aplica.",
    steps: [
      "Ordenar los puntos lexicográficamente.",
      "Construir la cadena inferior eliminando giros que no pertenezcan a la frontera convexa.",
      "Construir la cadena superior de forma análoga.",
      "Unir ambas cadenas para obtener el casco convexo."
    ],
    pseudocode: "CONVEX-HULL(P)\nSort points by x, then y\nlower = empty list\nfor p in P\n  while lower has at least 2 points and last turn is not counterclockwise\n    remove last point from lower\n  append p to lower\nupper = build the same way scanning P in reverse\nreturn lower without last point + upper without last point",
    classIds: [
      "class-08"
    ],
    sources: [
      "https://en.wikibooks.org/wiki/Algorithm_Implementation/Geometry/Convex_hull/Monotone_chain"
    ]
  },
  {
    id: "binomial-coefficient",
    code: "ALG-009",
    name: "Coeficiente binomial",
    category: "Dynamic Programming",
    paradigm: "Dynamic Programming",
    description: "Calcula el coeficiente binomial C(n, k), que cuenta las formas de elegir k elementos de un conjunto de n elementos, reutilizando subresultados.",
    input: "Enteros n y k, con 0 ≤ k ≤ n.",
    output: "El valor C(n, k).",
    timeComplexity: "O(nk)",
    spaceComplexity: "O(k) con programación dinámica unidimensional.",
    stable: "No aplica.",
    steps: [
      "Usar C(i, 0) = C(i, i) = 1 como casos base.",
      "Aplicar C(i, j) = C(i-1, j-1) + C(i-1, j).",
      "Actualizar una fila de resultados desde j = min(i, k) hacia abajo para no sobrescribir valores aún necesarios."
    ],
    pseudocode: "BINOMIAL(n, k)\ncreate dp[0..k] filled with 0\ndp[0] = 1\nfor i = 1 to n\n  for j = min(i, k) down to 1\n    dp[j] = dp[j] + dp[j - 1]\nreturn dp[k]",
    classIds: [],
    sources: [
      "https://www.geeksforgeeks.org/dsa/binomial-coefficient-dp-9/"
    ]
  },
  {
    id: "floyd-warshall",
    code: "ALG-010",
    name: "Floyd-Warshall",
    category: "Graph Algorithms",
    paradigm: "Dynamic Programming",
    description: "Calcula las distancias mínimas entre todos los pares de vértices de un grafo ponderado, siempre que no existan ciclos negativos alcanzables que invaliden las distancias.",
    input: "Un grafo ponderado representado por una matriz de distancias.",
    output: "La matriz de distancias mínimas entre todos los pares de vértices.",
    timeComplexity: "O(V³)",
    spaceComplexity: "O(V²)",
    stable: "No aplica.",
    steps: [
      "Inicializar la matriz con los pesos de las aristas, cero en la diagonal e infinito cuando no hay arista.",
      "Considerar cada vértice k como posible intermediario.",
      "Para cada par i, j, comparar la distancia actual con dist[i][k] + dist[k][j].",
      "Actualizar la distancia si la ruta por k es más corta."
    ],
    pseudocode: "FLOYD-WARSHALL(dist)\nfor k = 0 to V - 1\n  for i = 0 to V - 1\n    for j = 0 to V - 1\n      if dist[i][k] + dist[k][j] < dist[i][j]\n        dist[i][j] = dist[i][k] + dist[k][j]\nreturn dist",
    classIds: [
      "class-13"
    ],
    sources: [
      "https://www.geeksforgeeks.org/dsa/floyd-warshall-algorithm-dp-16/"
    ]
  },
  {
    id: "godbole",
    code: "ALG-011",
    name: "Algoritmo de Godbole (cadena de matrices)",
    category: "Dynamic Programming",
    paradigm: "Dynamic Programming",
    description: "Resuelve el problema de parentización óptima de una cadena de matrices mediante subproblemas y reutilización de costos calculados.",
    input: "Las dimensiones de una secuencia de n matrices compatibles.",
    output: "El costo mínimo de multiplicaciones escalares y la parentización que lo consigue.",
    timeComplexity: "O(n³)",
    spaceComplexity: "O(n²)",
    stable: "No aplica.",
    steps: [
      "Resolver primero las cadenas de una matriz.",
      "Aumentar progresivamente la longitud de la cadena considerada.",
      "Probar cada punto de división posible.",
      "Guardar el menor costo para cada subcadena y la división que lo produce."
    ],
    pseudocode: "GODBole(p)\nfor length = 2 to n\n  for i = 1 to n - length + 1\n    j = i + length - 1\n    cost[i][j] = infinity\n    for k = i to j - 1\n      candidate = cost[i][k] + cost[k + 1][j] + p[i - 1] * p[k] * p[j]\n      if candidate < cost[i][j]\n        cost[i][j] = candidate\n        split[i][j] = k\nreturn cost[1][n], split",
    classIds: [],
    sources: [
      "https://link.springer.com/article/10.1007/s10878-025-01290-7",
      "https://www.researchgate.net/publication/328410616_Speeding_up_CGM-Based_Parallel_Algorithm_for_Minimum_Cost_Parenthesizing_Problem"
    ]
  },
  {
    id: "gilbert-moore",
    code: "ALG-012",
    name: "Gilbert y Moore (ABB óptimo)",
    category: "Optimal Binary Search Trees",
    paradigm: "Dynamic Programming",
    description: "Construye un árbol de búsqueda binaria óptimo para un caso de probabilidades de búsqueda ordenadas, minimizando el costo esperado de búsqueda.",
    input: "Claves ordenadas y probabilidades asociadas a las búsquedas; la formulación exacta depende de si se incluyen búsquedas exitosas y/o fallidas.",
    output: "La estructura de un árbol de búsqueda óptimo para la distribución dada.",
    timeComplexity: "O(n³) en el algoritmo clásico de Gilbert y Moore.",
    spaceComplexity: "O(n²)",
    stable: "No aplica.",
    steps: [
      "Calcular los pesos de los intervalos de claves.",
      "Considerar intervalos de longitud creciente.",
      "Probar cada clave como raíz del intervalo.",
      "Combinar los costos de los subárboles izquierdo y derecho con el peso del intervalo y conservar el mínimo."
    ],
    pseudocode: "OPTIMAL-ALPHABETIC-TREE(p)\nfor each single-key interval [i, i]\n  cost[i][i] = base cost\nfor length = 2 to n\n  for each interval [i, j] of this length\n    cost[i][j] = infinity\n    for r = i to j\n      candidate = cost[i][r - 1] + cost[r + 1][j] + weight(i, j)\n      keep the minimum candidate and root r\nreturn root table and cost table",
    classIds: [],
    sources: [
      "https://en.wikipedia.org/wiki/Optimal_binary_search_tree"
    ]
  },
  {
    id: "traveling-salesman",
    code: "ALG-013",
    name: "Problema del viajero (Held-Karp)",
    category: "Combinatorial Optimization",
    paradigm: "Dynamic Programming",
    description: "Encuentra un ciclo de costo mínimo que visita cada ciudad exactamente una vez y regresa al origen, usando subproblemas indexados por subconjuntos.",
    input: "Un grafo completo ponderado de n ciudades.",
    output: "Un recorrido de costo mínimo que visita cada ciudad una vez y vuelve al origen.",
    timeComplexity: "O(n² · 2ⁿ)",
    spaceComplexity: "O(n · 2ⁿ)",
    stable: "No aplica.",
    steps: [
      "Fijar una ciudad de origen.",
      "Definir estados por subconjunto de ciudades visitadas y ciudad final.",
      "Construir cada estado a partir de estados con una ciudad menos.",
      "Cerrar el ciclo regresando al origen y reconstruir el recorrido óptimo."
    ],
    pseudocode: "HELD-KARP(dist)\nDP[{start}, start] = 0\nfor each subset S containing start\n  for each v in S, v != start\n    DP[S, v] = min over u in S, u != v of DP[S - {v}, u] + dist[u][v]\nanswer = min over v != start of DP[all cities, v] + dist[v][start]\nreturn answer",
    classIds: [],
    sources: [
      "https://web.cs.dal.ca/~nzeh/Teaching/4113/book/dynamic_programming/tsp.html"
    ]
  },
  {
    id: "prim",
    code: "ALG-014",
    name: "Prim",
    category: "Minimum Spanning Tree",
    paradigm: "Greedy",
    description: "Construye un árbol de expansión mínima creciendo desde un vértice y agregando repetidamente la arista de menor peso que conecta el árbol con un vértice aún no incluido.",
    input: "Un grafo no dirigido, conexo y ponderado.",
    output: "Un árbol de expansión mínima.",
    timeComplexity: "O(E log V) con lista de adyacencia y cola de prioridad binaria.",
    spaceComplexity: "O(V + E)",
    stable: "No aplica.",
    steps: [
      "Elegir un vértice inicial.",
      "Mantener una cola de prioridad con las aristas candidatas más baratas.",
      "Extraer el vértice no visitado con menor costo de conexión.",
      "Agregar la arista correspondiente y actualizar los costos de sus vecinos."
    ],
    pseudocode: "PRIM(G, start)\nkey[start] = 0\npush start into min-priority queue\nwhile queue is not empty\n  u = extract-min(queue)\n  mark u visited\n  for each edge (u, v, weight)\n    if v not visited and weight < key[v]\n      parent[v] = u\n      key[v] = weight\n      decrease-key(v, weight)\nreturn parent",
    classIds: [],
    sources: [
      "https://www.geeksforgeeks.org/dsa/prims-minimum-spanning-tree-mst-greedy-algo-5/"
    ]
  },
  {
    id: "kruskal",
    code: "ALG-015",
    name: "Kruskal",
    category: "Minimum Spanning Tree",
    paradigm: "Greedy",
    description: "Construye un árbol de expansión mínima procesando las aristas en orden de peso y agregando solo aquellas que no forman un ciclo.",
    input: "Un grafo no dirigido y ponderado.",
    output: "Un árbol de expansión mínima o un bosque mínimo si el grafo no es conexo.",
    timeComplexity: "O(E log E)",
    spaceComplexity: "O(V + E)",
    stable: "No aplica.",
    steps: [
      "Ordenar las aristas por peso ascendente.",
      "Inicializar una estructura de conjuntos disjuntos, uno por vértice.",
      "Recorrer las aristas ordenadas.",
      "Agregar una arista si sus extremos pertenecen a componentes diferentes y unir esas componentes."
    ],
    pseudocode: "KRUSKAL(G)\nT = empty set\nsort edges by increasing weight\nmake-set(v) for each vertex v\nfor each edge (u, v) in sorted edges\n  if find(u) != find(v)\n    add (u, v) to T\n    union(u, v)\nreturn T",
    classIds: [],
    sources: [
      "https://www.geeksforgeeks.org/dsa/kruskals-minimum-spanning-tree-algorithm-greedy-algo/"
    ]
  },
  {
    id: "dijkstra",
    code: "ALG-016",
    name: "Dijkstra",
    category: "Shortest Paths",
    paradigm: "Greedy",
    description: "Encuentra las distancias mínimas desde un origen a los demás vértices de un grafo con pesos no negativos.",
    input: "Un grafo ponderado con pesos no negativos y un vértice origen.",
    output: "Las distancias mínimas desde el origen y, opcionalmente, los predecesores para reconstruir rutas.",
    timeComplexity: "O((V + E) log V) con lista de adyacencia y cola de prioridad binaria.",
    spaceComplexity: "O(V + E)",
    stable: "No aplica.",
    steps: [
      "Inicializar la distancia del origen en cero y las demás en infinito.",
      "Extraer de la cola el vértice con distancia tentativa mínima.",
      "Relajar las aristas salientes actualizando distancias y predecesores.",
      "Continuar hasta procesar los vértices alcanzables."
    ],
    pseudocode: "DIJKSTRA(G, source)\nfor each vertex v\n  dist[v] = infinity\n  previous[v] = undefined\ndist[source] = 0\npush (0, source) into min-priority queue\nwhile queue not empty\n  (d, u) = extract-min(queue)\n  if d != dist[u] continue\n  for each edge (u, v, weight)\n    if dist[u] + weight < dist[v]\n      dist[v] = dist[u] + weight\n      previous[v] = u\n      push (dist[v], v) into queue\nreturn dist, previous",
    classIds: [],
    sources: [
      "https://www.geeksforgeeks.org/dsa/dijkstras-shortest-path-algorithm-greedy-algo-7/"
    ]
  }
];
