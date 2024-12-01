import axios from "axios"
import { useEffect, useState } from "react"
import { FiDelete } from "react-icons/fi"
import { toast } from "react-toastify"

const API = "http://localhost:7887/api/quiz"
export const Show = () => {

    const [data, setdata] = useState()
    const [loading, setloading] = useState(true)
    const [error, seterror] = useState()
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [score, setScore] = useState(0)
    const [questions, setquestions] = useState([])

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const res = await axios.get(API)
                setdata(res.data)
                setloading(false)
                // console.log(res)
                // console.log(res.data.length)
                if (Array.isArray(res.data)) {
                    setquestions(res.data);  // Set the questions array
                  } else {
                    seterror('Invalid data format'); // Handle if the data is not in the expected format
                  }
                
            } catch (error) {
                seterror(error.message)
            }
        }
        fetchdata()
    }, [])

    const handledelete = async (id) => {
        try {
            await axios.delete(`http://localhost:7887/api/quiz/${id}`)
            setdata((prevData) => prevData.filter((index) => index.id !== id))
            toast.success(`Deleted successfully id ${id}`)
        } catch (error) {
            seterror("Failed to delete user: " + error.message);
            toast.error("Delete failed..")
        }
    }

    const handleAnswerSelect = (questionId, answer) => {
        setSelectedAnswers((prevState) => ({
            ...prevState,
            [questionId]: answer
        }))
    }

    const handleSubmit = () => { 
        try{
            let totalScore = questions.reduce((score, question)=>{
                if(question.finalAns.toUpperCase() === selectedAnswers[question.id]) {
                    return score+1;
                }
            return score;
            },0)
      
      console.log(selectedAnswers);
      
      

      // Set the final score
      setScore(totalScore);
        }
        catch (e) {
            seterror('Failed to submit', e.message)
        }
    }

    if (loading) {
        return <div>Loading....</div>
    }

    if (error) {
        return <div>Error: {error} </div>
    }

    return (
        <>
            <ul>
                {
                    data.map((index, item) => (
                        <div key={index.id} className="h-[auto] w-[80vw] mx-auto my-[5px] px-[12px] py-[8px] border border-black rounded  ">
                            <h3 className="text-[black] ">Q{item + 1}.  {index.question}</h3>
                            {
                                index.answers.map((answer, answerid) => (
                                    <div key={answerid}>
                                        <input type="radio" 
                                            name={`question-${index.id}`}
                                            value={answer.answer1}
                                            checked={selectedAnswers[index.id] === answer.answer1}
                                            onChange={() => handleAnswerSelect(index.id, answer.answer1.toUpperCase())} className="checked:bg-[blue] "
                                        /> 
                                        <label>{answer.answer1.toUpperCase()}</label><br />

                                        <input type="radio"
                                            name={`question-${index.id}`}
                                            value={answer.answer2}
                                            checked={selectedAnswers[index.id] === answer.answer2}
                                            onChange={() => handleAnswerSelect(index.id, answer.answer2.toUpperCase())}
                                        />
                                        <label>{answer.answer2.toUpperCase()}</label><br />

                                        <input type="radio"
                                            name={`question-${index.id}`}
                                            value={answer.answer3}
                                            checked={selectedAnswers[index.id] === answer.answer3}
                                            onChange={() => handleAnswerSelect(index.id, answer.answer3.toUpperCase())}
                                        />
                                        <label>{answer.answer3.toUpperCase()}</label> <br />

                                        <input type="radio"
                                            name={`question-${index.id}`}
                                            value={answer.answer4}
                                            checked={selectedAnswers[index.id] === answer.answer4}
                                            onChange={() => handleAnswerSelect(index.id, answer.answer4.toUpperCase())}
                                        />
                                        <label>{answer.answer4.toUpperCase()}</label>
                                    </div>
                                ))
                            }

                        </div>

                    ))
                }
            </ul>
            <button onClick={handleSubmit}>submit</button>
            <h3>Your score: {score} / {questions.length} </h3>

        </>
    )
}