export function findSafestPath(dream) {
  const rows = dream.length;
  const cols = dream[0].length;
  const safestPath = Array.from({ length: rows }, () => Array(cols).fill(0))

  function TravelPath([rows, cols]){
    if(!dream[rows] || !dream[rows][cols])
      return

    const currentDanger = dream[rows][cols]

    //Exist top and left
    if(dream[rows - 1] && dream[rows][cols - 1])
      safestPath[rows][cols] = currentDanger + Math.min(safestPath[rows][cols - 1], safestPath[rows - 1][cols])
    //Exists only top
    else if(dream[rows - 1])
      safestPath[rows][cols] = currentDanger + safestPath[rows - 1][cols]
    //Exists only left
    else if(dream[rows][cols - 1])
      safestPath[rows][cols] = currentDanger + safestPath[rows][cols - 1]
    else
      safestPath[rows][cols] = currentDanger

    TravelPath([rows + 1, cols])
    TravelPath([rows, cols + 1])
  }

  TravelPath([0,0])
  return safestPath.at(-1).at(-1)
}

export function findSafestPathIterative (dream) {
  const n = dream.length
  const m = dream[0].length
  const safestPath = Array.from({ length: n }, () => Array(m).fill(0))

  // Start spot
  safestPath[0][0] = dream[0][0]

  // Fill first row
  for (let j = 1; j < m; j++) {
    safestPath[0][j] = safestPath[0][j - 1] + dream[0][j]
  }

  // Fill first column
  for (let i = 1; i < n; i++) {
    safestPath[i][0] = safestPath[i - 1][0] + dream[i][0]
  }

  // Fill the rest
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      // Get minimun between left and top
      safestPath[i][j] = dream[i][j] + Math.min(safestPath[i - 1][j], safestPath[i][j - 1])
    }
  }

  return safestPath[n - 1][m - 1]
}
