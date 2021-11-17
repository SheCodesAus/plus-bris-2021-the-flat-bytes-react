import { React, useState, Fragment } from "react";

function Form() {
  const initialResponse = {
    colour: "",
    price: "",
    body_type: "",
    fuel: "",
    mood: "",
  };
  const [userResponse, setUserResponse] = useState(initialResponse);

  //variable to handle "ai model" response
  const [moodChoice, setMoodChoice] = useState("");
  const [generateChoice, setGenerateChoice] = useState();
  const questions = [
    "What color do you prefer?",
    "How much money are you willing to spend?",
    "In what body type do you feel most comfortable?",
    "Do you care about environmet?",
    "How are you feeling today?",
  ];
  const answersMood = ["happy", "sad", "tired", "cheerful"];

  //grab values from the form
  const handleChange = (e) => {
    const { id, value } = e.target;
    setUserResponse((prevUserResponse) => ({
      ...prevUserResponse,
      [id]: value,
    }));
    console.log(userResponse);
  };

  //get data from the db according to the input
  const getRecommendation = async () => {
    await fetch(`${process.env.REACT_APP_API_URL}products/`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setUserResponse(data);
        console.log("This is the recommended car:", data);
      });
  };

  //submit form, inside this function we are calling our API
  const handleSubmit = (e) => {
    e.preventDefault();

    getRecommendation().then((response) => {});
  };

  return (
    <div className="car_form">
      <form>
        <div>
          <label>What color do you prefer?</label>
          <select onChange={handleChange} id="colour" name="colour">
            <option value="red">Red</option>
            <option value="black">Black</option>
            <option value="white">White</option>
            <option value="blue">Blue</option>
          </select>
        </div>
        <div>
          <label>How much money are you willing to spend?</label>
          <select id="price" name="price" onChange={handleChange}>
            <option value="$400.000-570.000">$400.000-570.000</option>
            <option value="$570.000-580.000">$570.000-580.000</option>
            <option value="$580.000-590.000">$580.000-590.000</option>
          </select>
        </div>
        <div>
          <label>In what body type do you feel most comfortable?</label>
          <select onChange={handleChange} id="body_type" name="body_type">
            <option value="coupe">Coupe</option>
            <option value="sedan">Sedan</option>
            <option value="convertible">Convertible</option>
            <option value="suv">Suv</option>
          </select>
        </div>

        <div>
          <label>Do you care about environmet?</label>
          <select onChange={handleChange} id="fuel" name="fuel">
            <option value="petrol">Not really</option>
            <option value="electric">Yes, of course</option>
          </select>
        </div>

        <div>
          <label>How are you feeling today?</label>
          <select onChange={handleChange} id="mood" name="mood">
            <option value="happy">I'm on top of the things</option>
            <option value="sad">It could be better</option>
            <option value="tired">I am tried and not in the mood today</option>
            <option value="cheerful">I am smiling and happy today!</option>
          </select>
        </div>
        <div>
          <button onSubmit={handleSubmit} type="submit">
            Help me choose
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
