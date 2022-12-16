import scoreModel from "../models/models";

exports.getScores = async () => {
  return await scoreModel.find();
};

exports.createScore = async (score: any) => {
  return await scoreModel.create(score);
};
