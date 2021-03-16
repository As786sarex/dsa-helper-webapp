const { codeModel, problemsModel } = require('../utils/connection');

const service = {};

service.getAllProblems = async () => {
  const allProblems = await problemsModel
    .find()
    .select('_id name shortDescription');
  return allProblems;
};

service.getProblemById = async (id) => {
  const problem = await problemsModel.findById(id);
  const populatedProblem = await problem
    .populate({
      path: 'codes',
      model: 'CodesModel',
    })
    .execPopulate();
  return populatedProblem;
};

service.createProblem = async (payload) => {
  const doc = new problemsModel(payload);
  const savedProblem = await doc.save();
  if (!savedProblem) {
    const err = new Error('Unable to add product');
    err.status = 400;
    throw err;
  }
  return savedProblem;
};

service.deleteProblem = async (id) => {
  const deleted = await problemsModel.deleteOne({ _id: id });
  if (!deleted) {
    const err = new Error('Unable to delete product');
    err.status = 400;
    throw err;
  }
  return deleted;
};

service.addCodeSnippet = async (id, payload) => {
  const doc = new codeModel(payload);
  const added = await doc.save();
  if (!added) {
    const err = new Error('Unable to add code');
    err.status = 400;
    throw err;
  }
  const addedToProblem = await problemsModel.updateOne(
    { _id: id },
    { $push: { codes: added.id } }
  );
};

module.exports = service;
