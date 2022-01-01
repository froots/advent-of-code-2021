const { sum, product } = require('../reducers');

const toPointId = (x, y) => `${x},${y}`;

const fromPointId = (pointId) => pointId.split(',').map(Number);

const parse = (input) =>
  new Map(
    input
      .split('\n')
      .map((line) => line.trim())
      .filter(Boolean)
      .map((points, y) =>
        points
          .split('')
          .map(Number)
          .map((h, x) => [toPointId(x, y), h])
      )
      .flat()
  );

const neighbours = (heightMap, x, y) => {
  const directions = [
    toPointId(x, y - 1),
    toPointId(x + 1, y),
    toPointId(x, y + 1),
    toPointId(x - 1, y),
  ];

  return new Map(
    directions
      .map((coords) => [coords, heightMap.get(coords)])
      .filter(([_, h]) => h !== undefined)
  );
};

const lowPoints = (heightMap) => {
  const lowMap = new Map();
  heightMap.forEach((h, pointId, hMap) => {
    const neighbs = neighbours(hMap, ...fromPointId(pointId));
    if ([...neighbs.values()].every((nh) => h < nh)) {
      lowMap.set(pointId, h);
    }
  });
  return lowMap;
};

const basinMap = (heightMap, startingPointId) => {
  const basin = new Map();
  const queue = [];
  queue.push(startingPointId);
  basin.set(startingPointId, heightMap.get(startingPointId));

  while (queue.length > 0) {
    const cell = queue.shift();
    neighbours(heightMap, ...fromPointId(cell)).forEach((nh, nPointId) => {
      if (!basin.has(nPointId) && nh < 9) {
        basin.set(nPointId, nh);
        queue.push(nPointId);
      }
    });
  }

  return basin;
};

const part1 = (input) =>
  [...lowPoints(parse(input)).values()].map((h) => h + 1).reduce(sum, 0);

const part2 = (input) => {
  const heightMap = parse(input);
  const basins = [];

  lowPoints(heightMap).forEach((h, lowPointId) => {
    basins.push(basinMap(heightMap, lowPointId));
  });

  return basins
    .map((b) => b.size)
    .sort((b1, b2) => b2 - b1)
    .slice(0, 3)
    .reduce(product, 1);
};

module.exports = { part1, part2, parse, lowPoints, neighbours, basinMap };
