import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API = "http://localhost:7887/api/quiz"
const QuizApp = () => {
  const [data, setData] = useState();
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [score, setScore] = useState(null);

  // Fetch quiz data from the API
  const fetchData = async () => {
    try {
      const res = await axios.get(API); // Replace with your actual API endpoint
      setData(res.data); 
      console.log(res.data);
      
      setLoading(false);
    } catch (err) {
      setError('Failed to load quiz data.');
      setLoading(false);
    }
  };

  // Handle selection of answers
  const handleAnswerSelect = (questionId, answer) => {
    setSelectedAnswers((prevState) => ({
      ...prevState,
      [questionId]: answer
    }));
  };

  // Post the user's selected answers to the API
  const submitAnswers = async () => {
    try {
      // Prepare the answers in the format expected by the API
      const answersToSubmit = Object.keys(selectedAnswers)
      .map((questionId) => ({
        id: questionId,
        selectedAnswer: selectedAnswers[questionId]
      }));

      const response = await axios.post(API, { answers: answersToSubmit });
      setScore(response.data.score); // Assuming the response contains a score
    } catch (err) {
      setError('Failed to submit answers.');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <div>Loading quiz...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Quiz App</h1>

      <form>
        <ul>
        {data.map((question) => (
          <div key={question.id}>
            <h3>{question.question}</h3>
            {question.answers.map((answer, index) => (
              <div key={index}>
                <input
                  type="radio"
                  name={`question-${question.id}`}
                  value={answer.answer1}
                  checked={selectedAnswers[question.id] === answer.answer1}
                  onChange={() => handleAnswerSelect(question.id, answer.answer1)}
                />
                <label>{answer.answer1}</label>

                <input
                  type="radio"
                  name={`question-${question.id}`}
                  value={answer.answer2}
                  checked={selectedAnswers[question.id] === answer.answer2}
                  onChange={() => handleAnswerSelect(question.id, answer.answer2)}
                />
                <label>{answer.answer2}</label>

                <input
                  type="radio"
                  name={`question-${question.id}`}
                  value={answer.answer3}
                  checked={selectedAnswers[question.id] === answer.answer3}
                  onChange={() => handleAnswerSelect(question.id, answer.answer3)}
                />
                <label>{answer.answer3}</label>

                <input
                  type="radio"
                  name={`question-${question.id}`}
                  value={answer.answer4}
                  checked={selectedAnswers[question.id] === answer.answer4}
                  onChange={() => handleAnswerSelect(question.id, answer.answer4)}
                />
                <label>{answer.answer4}</label>
              </div>
            ))}
          </div>
        ))}</ul>
      </form>

      <button onClick={submitAnswers}>Submit Answers</button>

      {score !== null && <div>Your score: {score}</div>}
    </div>
  );
};

export default QuizApp;
