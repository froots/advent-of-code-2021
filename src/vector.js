const vScale = (v, d) => [v[0] * d, v[1] * d];

const vSum = (v1, v2) => [v1[0] + v2[0], v1[1] + v2[1]];

module.exports = { vScale, vSum };
