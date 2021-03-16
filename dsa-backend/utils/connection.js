const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const codeSchema = mongoose.Schema(
  {
    timeComplexity: {
      type: String,
      required: [true, 'Time complexity is required!'],
    },
    spaceComplexity: {
      type: String,
      required: [true, 'Space complexity is required!'],
    },
    body: {
      type: String,
      required: [true, 'Code Body is required'],
    },
  },
  { collection: 'Codes', timestamp: true }
);
const codeModel = mongoose.model('CodesModel', codeSchema, 'Codes');
const problemSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'name is required!!'],
    },
    shortDescription: {
      type: String,
      required: [true, 'short description is required!!'],
    },
    description: {
      type: String,
      required: [true, 'description is required!!'],
    },
    io: {
      type: String,
      required: [true, 'Input/Output is required!!'],
    },
    url: {
      type: String,
      required: [true, 'url is required!!'],
    },
    creationDate: { type: Date, default: new Date().toISOString() },
    codes: {
      type: [mongoose.Schema.Types.ObjectId],
      default: [],
      ref: 'CodesModel',
    },
  },
  { collection: 'Problems', timestamp: true }
);

const problemsModel = mongoose.model(
  'ProblemsModel',
  problemSchema,
  'Problems'
);

module.exports = {
  codeModel,
  problemsModel,
};
