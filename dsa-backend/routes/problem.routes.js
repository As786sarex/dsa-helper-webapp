const express = require('express');
const service = require('../db/problem.service');
const router = express.Router();

router.get('/getAllProblem', async (req, res, next) => {
  try {
    const data = await service.getAllProblems();
    res.json({
      status: 200,
      data: data,
    });
  } catch (err) {
    next(err);
  }
});

router.get('/getProblemById/:id', async (req, res, next) => {
  try {
    const data = await service.getProblemById(req.params.id);
    res.json({
      status: 200,
      data: data,
    });
  } catch (err) {
    next(err);
  }
});

router.post('/addProblem', async (req, res, next) => {
  try {
    const { name, description, io, url } = req.body;
    const shortLength = description.length > 60 ? 60 : description.length;
    const shortDescription = description.substring(0, shortLength);
    const payload = { name, description, io, url, shortDescription };
    const savedProblem = await service.createProblem(payload);
    res.json({
      message: 'problem created',
      status: 201,
    });
  } catch (err) {
    next(err);
  }
});

router.post('/addCode', async (req, res, next) => {
  try {
    const { time, space, body, id } = req.body;
    const snippet = {
      timeComplexity: time,
      spaceComplexity: space,
      body,
    };
    console.log(snippet);
    const addedSnippet = await service.addCodeSnippet(id, snippet);
    res.json({
      data: addedSnippet,
    });
  } catch (err) {
    next(err);
  }
});

router.post('/deleteCode', async (req, res, next) => {
  try {
    const { codeId, problemId } = req.body;
    if (!codeId || !problemId) {
      const err = new Error('Bad request');
      err.code = 405;
      throw err;
    }
    const deletedCode = await service.deleteCode(codeId, problemId);
    if (!deletedCode) {
      const err = new Error('Unable to delete');
      err.code = 400;
      throw err;
    }
    res.json({
      message: 'successfully deleted',
    });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
