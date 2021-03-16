const problems = [];

export const getAllProblemName = () => {
  return problems.map((i) => i.name);
};

export const getProblemById = (id) => {
  return problems.find((i) => id === i.name);
};
