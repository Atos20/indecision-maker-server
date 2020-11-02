const questionsData = require('../../data/questions.js');

const createQuestions = async (knex, question) => {
  const newQuestion = await knex('questions').insert({
    question: question.question,
    choices: question.choices.join(', '),
    activities: question.activities,
    answerType: question.answerType,
  });
}

exports.seed = async (knex) => {
  try {
    await knex('questions').del();
    let allQuestions = questionsData.map(question => {
      return createQuestions(knex, question);
    })
    return Promise.all(allQuestions);
  } catch (error) {
    console.log(`Error seeding data: ${error}`)
  }
};
