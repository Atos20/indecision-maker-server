const questionsData = require("../../data/questions_data.js");
const createQuestions = async (knex, question) => {
  await knex("questions").insert({
    question: question.question,
    choices: question.choices,
    activity: question.activity,
    answerType: question.answerType,
  });
};
exports.seed = async (knex) => {
  try {
    await knex("questions").del();
    let allQuestions = questionsData.map((question) => {
      return createQuestions(knex, question);
    });
    return Promise.all(allQuestions);
  } catch (error) {
    console.log(`Error seeding data: ${error}`);
  }
};
