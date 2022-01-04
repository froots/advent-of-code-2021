/* eslint-disable no-loop-func */
const FLASHING = 'F';
const FLASHED = 'X';

const parse = (input) =>
  input
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => line.split('').map(Number));

const step = (grid) => {
  let gridAfter = grid.map((row) => row.map((energy) => energy + 1));

  while (
    gridAfter
      .flat()
      .filter((energy) => typeof energy === 'number' && energy >= 10).length > 0
  ) {
    gridAfter = gridAfter.map((row) =>
      row.map((energy) => (energy >= 10 ? FLASHING : energy))
    );

    const flashing = gridAfter
      .map((row, y) =>
        row.reduce(
          (cells, energy, x) =>
            energy === FLASHING ? [...cells, [x, y]] : cells,
          []
        )
      )
      .flat();

    flashing.forEach(([fx, fy]) => {
      gridAfter = gridAfter.map((row, y) =>
        row.map((energy, x) => {
          if (fx === x && fy === y) {
            return FLASHED;
          }

          if (
            typeof energy === 'number' &&
            Math.abs(fx - x) <= 1 &&
            Math.abs(fy - y) <= 1
          ) {
            return energy + 1;
          }

          return energy;
        })
      );
    });
  }

  const newFlashes = gridAfter
    .flat()
    .filter((energy) => energy === FLASHED).length;

  gridAfter = gridAfter.map((row) =>
    row.map((energy) => (energy === FLASHED ? 0 : energy))
  );

  return [gridAfter, newFlashes];
};

const part1 = (input, steps = 100) => {
  let grid = parse(input);
  let flashes = 0;

  for (let i = 0; i < steps; i += 1) {
    const [newGrid, newFlashes] = step(grid);
    flashes += newFlashes;
    grid = newGrid;
  }

  return flashes;
};

const part2 = (input) => {
  let grid = parse(input);
  let flashes = 0;
  const gridSize = grid.flat().length;
  let currentStep = 0;

  while (flashes !== gridSize) {
    [grid, flashes] = step(grid);
    currentStep += 1;
  }

  return currentStep;
};

module.exports = { part1, part2, step, parse };
