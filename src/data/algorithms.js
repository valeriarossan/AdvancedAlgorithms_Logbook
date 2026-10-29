export const algorithms =[
  {
    id: "sequential-search",
    code: "ALG-001",
    name: "Búsqueda secuencial",
    category: "Búsqueda",
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
    category: "Búsqueda",
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
    "id": "merge-sort",
    "code": "ALG-003",
    "name": "Merge Sort",
    "category": "Ordenamiento",
    "paradigm": "Divide y vencerás",
    "description": "Ordena una colección dividiéndola recursivamente y combinando las partes ordenadas.",
    "input": "Un arreglo de n elementos.",
    "output": "El mismo conjunto de elementos ordenado.",
    "timeComplexity": "O(n log n)",
    "spaceComplexity": "O(n)",
    "stable": "Sí, en la implementación estándar.",
    "steps": [
      "Dividir los datos en dos mitades.",
      "Ordenar las mitades.",
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
    "id": "quick-sort",
    "code": "ALG-004",
    "name": "Quick Sort",
    "category": "Ordenamiento",
    "paradigm": "Divide y vencerás",
    "description": "Ordena una colección seleccionando un pivote, particionando los elementos alrededor de él y ordenando recursivamente las particiones.",
    "input": "Un arreglo de n elementos.",
    "output": "El arreglo ordenado en el mismo espacio, según la implementación.",
    "timeComplexity": "Promedio: O(n log n); peor caso: O(n²)",
    "spaceComplexity": "Promedio: O(log n) por la recursión; peor caso: O(n)",
    "stable": "No",
    "steps": [
      "Elegir un pivote.",
      "Particionar los datos.",
      "Ordenar las particiones."
    ],
    "pseudocode": "QUICK-SORT(A, low, high)\nif low < high\n  p = PARTITION(A, low, high)\n  QUICK-SORT(A, low, p - 1)\n  QUICK-SORT(A, p + 1, high)",
    "classIds": [
      "class-05",
      "class-06"
    ],
    "sources": [
      "https://www.geeksforgeeks.org/dsa/quick-sort-algorithm/"
    ]
  },
  {
    "id": "strassen",
    "code": "ALG-005",
    "name": "Algoritmo de Strassen",
    "category": "Multiplicación de matrices",
    "paradigm": "Divide y vencerás",
    "description": "Multiplica matrices cuadradas usando siete multiplicaciones recursivas de submatrices en lugar de las ocho de la división clásica.",
    "input": "Dos matrices compatibles.",
    "output": "La matriz producto.",
    "timeComplexity": "O(n^log₂7) ≈ O(n^2.807)",
    "spaceComplexity": "Comúnmente O(n²) de espacio auxiliar o más por temporales/recursión.",
    "stable": "No aplica",
    "steps": [
      "Dividir cada matriz en cuatro submatrices.",
      "Calcular siete productos intermedios mediante sumas y restas.",
      "Combinar esos productos para obtener las cuatro partes de la matriz resultado.",
      "Reunir las partes en la matriz final."
    ],
    "pseudocode": "STRASSEN(A, B)\nif size(A) <= threshold\n  return standard-matrix-multiply(A, B)\n\nPartition A into A11, A12, A21, A22\nPartition B into B11, B12, B21, B22\nCompute the seven Strassen products M1 ... M7\nCombine M1 ... M7 into C11, C12, C21, C22\nreturn C",
    "classIds": [
      "class-07"
    ],
    "sources": [
      "https://en.wikipedia.org/wiki/Strassen_algorithm"
    ]
  },
  {
    "id": "karatsuba",
    "code": "ALG-006",
    "name": "Karatsuba (multiplicación de enteros grandes)",
    "category": "Aritmética de enteros grandes",
    "paradigm": "Divide y vencerás",
    "description": "Multiplica enteros grandes dividiendo cada número en partes altas y bajas y reduciendo de cuatro a tres las multiplicaciones recursivas.",
    "input": "Dos enteros grandes.",
    "output": "El producto de los enteros.",
    "timeComplexity": "O(n^log₂3) ≈ O(n^1.585)",
    "spaceComplexity": "Comúnmente O(n).",
    "stable": "No aplica",
    "steps": [
      "Dividir cada número en una parte alta y una parte baja.",
      "Calcular el producto de las partes bajas, el de las partes altas y un producto combinado.",
      "Obtener el término cruzado mediante restas.",
      "Combinar los resultados con las potencias adecuadas de la base."
    ],
    "pseudocode": "KARATSUBA(x, y)\nif x or y has few digits\n  return x * y\nSplit x into a * B^m + b\nSplit y into c * B^m + d\nz0 = KARATSUBA(b, d)\nz2 = KARATSUBA(a, c)\nz1 = KARATSUBA(a + b, c + d) - z2 - z0\nreturn z2 * B^(2*m) + z1 * B^m + z0",
    "classIds": [
      "class-07"
    ],
    "sources": [
      "https://en.wikipedia.org/wiki/Karatsuba_algorithm"
    ]
  },
  {
    "id": "closest-pair",
    "code": "ALG-007",
    "name": "Par más cercano (Closest Pair)",
    "category": "Geometría computacional",
    "paradigm": "Divide y vencerás",
    "description": "Encuentra el par de puntos con la menor distancia euclidiana entre un conjunto de puntos del plano.",
    "input": "Un conjunto P de n puntos en el plano.",
    "output": "El par de puntos cuya distancia es mínima.",
    "timeComplexity": "O(n log n)",
    "spaceComplexity": "O(n) en una implementación estándar con arreglos auxiliares.",
    "stable": "No aplica",
    "steps": [
      "Ordenar los puntos por coordenada x.",
      "Dividir los puntos en mitades.",
      "Resolver recursivamente cada mitad.",
      "Examinar la franja cercana a la línea divisoria y comparar los puntos relevantes por coordenada y."
    ],
    "pseudocode": "CLOSEST-PAIR(P)\nSort P by x-coordinate\nreturn SOLVE(P)\n\nSOLVE(P)\nif length(P) <= 3\n  return brute-force minimum distance\nDivide P into left and right halves\nd = min(SOLVE(left), SOLVE(right))\nstrip = points within distance d of dividing line\nCheck strip points in y-order\nreturn minimum distance found",
    "classIds": [
      "class-08"
    ],
    "sources": [
      "https://www.geeksforgeeks.org/dsa/closest-pair-of-points-using-divide-and-conquer-algorithm/"
    ]
  },
  {
    "id": "convex-hull",
    "code": "ALG-008",
    "name": "Convex Hull (casco convexo)",
    "category": "Geometría computacional",
    "paradigm": "Divide y vencerás",
    "description": "Construye el menor polígono convexo que contiene todos los puntos de un conjunto.",
    "input": "Un conjunto P de n puntos en el plano.",
    "output": "Los vértices del casco convexo ordenados alrededor de su frontera.",
    "timeComplexity": "O(n log n)",
    "spaceComplexity": "O(n)",
    "stable": "",
    "steps": [],
    "pseudocode": "CONVEX-HULL(P)\n  Ordenar los puntos de P por coordenada x\n  Dividir P en dos subconjuntos de igual tamaño: Izquierda y Derecha\n  Si P cumple la condición de caso base:\n    Resolver directamente el casco convexo de P\n  HIzq = CONVEX-HULL(Izquierda)\n  HDer = CONVEX-HULL(Derecha)\n  Encontrar la tangente superior entre HIzq y HDer\n  Encontrar la tangente inferior entre HIzq y HDer\n  Unir ambos cascos convexos usando las tangentes\n  Eliminar los segmentos que quedan en el interior del polígono\n  Devolver el casco convexo resultante",
    "classIds": [
      "class-08"
    ],
    "sources": [
    ]
  },
  {
  "id": "binomial-coefficient",
  "code": "ALG-009",
  "name": "Coeficiente binomial",
  "category": "Coeficiente binomial",
  "paradigm": "Programación dinámica",
  "description": "Calcula el coeficiente binomial C(n, k), que cuenta las formas de elegir k elementos de un conjunto de n elementos, reutilizando subresultados.",
  "input": "Enteros n y k, con 0 ≤ k ≤ n.",
  "output": "El coeficiente binomial C(n, k).",
  "timeComplexity": "O(nk)",
  "spaceComplexity": "O(nk) utilizando una matriz de programación dinámica.",
  "stable": "",
  "steps": [
    "Crear una matriz B para almacenar los resultados de los subproblemas.",
    "Establecer B[i, j] = 1 cuando j = 0 o j = i.",
    "Calcular los demás valores mediante B[i, j] = B[i-1, j-1] + B[i-1, j].",
    "Resolver los subproblemas en orden ascendente, reutilizando los resultados previamente calculados.",
    "Devolver B[n, k]."
  ],
  "pseudocode": "BINOMIAL(n, k)\nCrear matriz B[0..n][0..k]\nfor i = 0 to n\n  for j = 0 to min(i, k)\n    if j = 0 or j = i\n      B[i][j] = 1\n    else\n      B[i][j] = B[i-1][j-1] + B[i-1][j]\nreturn B[n][k]",
  "classIds": [],
  "sources": []
  },
  {
    "id": "floyd-warshall",
    "code": "ALG-010",
    "name": "Algoritmo de Floyd",
    "category": "Caminos más cortos en grafos",
    "paradigm": "Programación dinámica",
    "description": "Calcula las distancias mínimas entre todos los pares de vértices de un grafo ponderado, siempre que no existan ciclos negativos alcanzables que invaliden las distancias.",
    "input": "Matriz de adyacencias de un grafo ponderado.",
    "output": "Matriz de distancias mínimas.",
    "timeComplexity": "O(n³)",
    "spaceComplexity": "O(n²)",
    "stable": "",
    "steps": [
      "Inicializar la matriz con los pesos de las aristas, cero en la diagonal e infinito cuando no hay arista.",
      "Considerar cada vértice k como posible intermediario.",
      "Para cada par i, j, comparar la distancia actual con dist[i][k] + dist[k][j].",
      "Actualizar la distancia si la ruta por k es más corta."
    ],
    "pseudocode": "D = matriz de adyacencias\nfor k = 1 to n do\n  for i = 1 to n do\n    for j = 1 to n do\n      D[i,j] = minimo(D[i,j], D[i,k] + D[k,j])",
    "classIds": ["class-12", "class-13"],
    "sources": []
  },
  {
    "id": "godbole",
    "code": "ALG-011",
    "name": "Algoritmo de Godbole (multiplicación encadenada de matrices)",
    "category": "Multiplicación encadenada de matrices",
    "paradigm": "Programación dinámica",
    "description": "Encuentra la asociación óptima para multiplicar una secuencia de matrices; no multiplica las matrices.",
    "input": "Dimensiones d₀, d₁, …, dₙ de las matrices.",
    "output": "Cantidad mínima de multiplicaciones escalares.",
    "timeComplexity": "O(n³)",
    "spaceComplexity": "O(n²)",
    "stable": "No aplica",
    "steps": [
      "Inicializar D[i,i] = 0.",
      "Calcular subproblemas por diagonales crecientes.",
      "Para cada intervalo, probar los puntos de división y conservar el mínimo."
    ],
    "pseudocode": "for i = 1 to n do D[i,i] = 0\nfor diag = 1 to n-1 do\n  for i = 1 to n-diag do\n    j = i + diag\n    D[i,j] = minimo(i, j, D, d)\nreturn D[1,n]",
    "classIds": ["class-14"],
    "sources": []
  },
  {
    "id": "gilbert-moore",
    "code": "ALG-012",
    "name": "Gilbert y Moore (ABB óptimo)",
    "category": "Árbol binario de búsqueda óptimo",
    "paradigm": "Programación dinámica",
    "description": "Encuentra el ABB que minimiza el promedio de búsqueda cuando se conocen las probabilidades de búsqueda de las llaves.",
    "input": "Llaves ordenadas y sus probabilidades de búsqueda.",
    "output": "El ABB con promedio de búsqueda mínimo.",
    "timeComplexity": "O(n³)",
    "spaceComplexity": "O(n²)",
    "stable": "",
    "steps": [
      "Definir Aᵢ,ⱼ como el promedio mínimo de búsqueda para las llaves de dᵢ a dⱼ.",
      "Evaluar posibles raíces y combinar los promedios óptimos de los subárboles.",
      "Conservar el mínimo."
    ],
    "pseudocode": "",
    "classIds": ["class-15"],
    "sources": []
  },
  {
    "id": "traveling-salesman",
    "code": "ALG-013",
    "name": "Problema del viajero",
    "category": "Optimización combinatoria",
    "paradigm": "Programación dinámica",
    "description": "Busca la ruta óptima que recorre n puntos, pasa una sola vez por cada uno y regresa al origen.",
    "input": "Grafo ponderado representado por su matriz W.",
    "output": "Ciclo hamiltoniano de costo mínimo.",
    "timeComplexity": "O(n² · 2ⁿ)",
    "spaceComplexity": "O(n · 2ⁿ)",
    "stable": "",
    "steps": [
      "Definir D[vᵢ, A] como el costo de la ruta óptima de vᵢ al origen pasando por los vértices de A.",
      "Usar D[vᵢ, ∅] = W[i,1] como caso base.",
      "Calcular cada estado probando los vértices siguientes de A y conservando el costo mínimo."
    ],
    "pseudocode": "",
    "classIds": ["class-16", "class-17"],
    "sources": []
  },
  {
    "id": "prim",
    "code": "ALG-014",
    "name": "Prim",
    "category": "Árbol de extensión mínima",
    "paradigm": "Algoritmo voraz",
    "description": "Construye un árbol de expansión mínima creciendo desde un vértice y agregando repetidamente la arista de menor peso que conecta el árbol con un vértice aún no incluido.",
    "input": "Un grafo no dirigido y ponderado.",
    "output": "Árbol de extensión mínima.",
    "timeComplexity": "O(n²)",
    "spaceComplexity": "",
    "stable": "",
    "steps": [
      "Iniciar con un vértice en Y.",
      "Seleccionar el vértice fuera de Y más cercano a alguno de los vértices en Y.",
      "Agregar el vértice y la arista correspondiente.",
      "Terminar cuando Y = V."
    ],
    "pseudocode": "S = ∅\nY = {v1}\nwhile Y != V:\n  seleccionar el vértice de V-Y más cercano a un vértice en Y\n  agregar el vértice a Y\n  agregar la arista correspondiente a S",
    "classIds": ["class-17", "class-18"],
    "sources": []
  },
  {
    "id": "kruskal",
    "code": "ALG-015",
    "name": "Kruskal",
    "category": "Árbol de extensión mínima",
    "paradigm": "Algoritmo voraz",
    "description": "Construye un árbol de expansión mínima procesando las aristas en orden de peso y agregando solo aquellas que no forman un ciclo.",
    "input": "Un grafo no dirigido y ponderado.",
    "output": "Árbol de extensión mínima.",
    "timeComplexity": "O(m log m)",
    "spaceComplexity": "",
    "stable": "",
    "steps": [
      "Ordenar las aristas por peso ascendente.",
      "Seleccionar la arista menos costosa.",
      "Agregarla si conecta vértices de subconjuntos distintos.",
      "Terminar cuando todos los subconjuntos se hayan unido."
    ],
    "pseudocode": "S = ∅\nY = subconjuntos disjuntos, uno por vértice\nordenar las aristas por peso ascendente\nwhile no se haya resuelto el problema:\n  seleccionar la siguiente arista menos costosa\n  si conecta dos subconjuntos distintos:\n    unir los subconjuntos y agregar la arista a S",
    "classIds": ["class-17", "class-18"],
    "sources": []
  },
  {
    "id": "dijkstra",
    "code": "ALG-016",
    "name": "Dijkstra",
    "category": "Árbol del camino más corto",
    "paradigm": "Algoritmo voraz",
    "description": "Obtiene los caminos más cortos desde un vértice inicial hacia el resto de los vértices.",
    "input": "Grafo ponderado y vértice origen.",
    "output": "Árbol del camino más corto desde el origen.",
    "timeComplexity": "O(n²)",
    "spaceComplexity": "",
    "stable": "",
    "steps": [
      "Inicializar la distancia del origen en cero y las demás en infinito.",
      "Extraer de la cola el vértice con distancia tentativa mínima.",
      "Relajar las aristas salientes actualizando distancias y predecesores.",
      "Continuar hasta procesar los vértices alcanzables."
    ],
    "pseudocode": "DIJKSTRA(G, source)\nfor each vertex v\n  dist[v] = infinity\n  previous[v] = undefined\ndist[source] = 0\npush (0, source) into min-priority queue\nwhile queue not empty\n  (d, u) = extract-min(queue)\n  if d != dist[u] continue\n  for each edge (u, v, weight)\n    if dist[u] + weight < dist[v]\n      dist[v] = dist[u] + weight\n      previous[v] = u\n      push (dist[v], v) into queue\nreturn dist, previous",
    "classIds": ["class-19"],
    "sources": []
  },
  {
    "id": "huffman",
    "code": "ALG-017",
    "name": "Código de Huffman",
    "category": "Compresión de datos",
    "paradigm": "Algoritmo voraz",
    "description": "Comprime información sin pérdida asignando códigos binarios de diferente longitud a los símbolos.",
    "input": "Símbolos y sus frecuencias.",
    "output": "Árbol de Huffman y código binario de cada símbolo.",
    "timeComplexity": "",
    "spaceComplexity": "",
    "stable": "",
    "steps": [
      "Identificar los dos nodos de menor frecuencia y unirlos en un nuevo nodo cuya frecuencia sea la suma.",
      "Repetir seleccionando siempre los dos nodos de menor frecuencia.",
      "Cuando se haya unido el último par, asignar 0 y 1 a las ramas del árbol.",
      "El camino desde la raíz hasta cada hoja determina el código del símbolo."
    ],
    "pseudocode": "",
    "classIds": ["class-20"],
    "sources": []
  }
]