import { React, useState, Fragment } from "react";

//components
import CarCard from '../CarCard/CarCard.jsx';

function Form() {
  const [suggestedCar, setSuggestedCar] = useState({
      colour: "",
      price: "",
      body_type: "",
      fuel: "",
    });

  //variables to handle "ai model" response
  const [car, setCar] = useState("");
  const [mood, setMood] = useState("");
  const [colourQuestion, setColourQuestion] = useState("");
  const [priceQuestion, setPriceQuestion] = useState("");
  const [bodyTypeQuestion, setBodyTypeQuestion] = useState("");
  const [fuelQuestion, setFuelQuestion] = useState("");

  


  const questions = [
    "What color do you prefer?",
    "How much money are you willing to spend?",
    "In what body type do you feel most comfortable?",
    "Do you care about environmet?",
    "How are you feeling today?",
  ];

  
  const colourOptions = [
    "red", "black", "white", "blue"
  ]

  const carsOptions = [
    {
      "make": "Ferrari",
      "model": "GTC4Lusso",
      "price": 578.000,
      "engine": "6.3-litre V12",
      "body_type": "Coupe",
       "fuel": "electric",
      "colour": "White",
       "url":    "https://www.whichcar.com.au/reviews/2017-ferrari-gtc4-lusso-targa-tasmania-review",
      "image": "https://i.pinimg.com/564x/6f/3f/43/6f3f432b58ffd3a57d9123eb7ac5b6c0.jpg"
    },
   
   {
      "make": "Bentley",
      "model": "Mulsanne Speed",
      "price": 569.500,
      "engine": "6.8-litre Twin Turbo V8",
      "body_type": "sedan",
      "fuel": "petrol",
      "colour": "Black",
      "url": "https://www.lamborghinigoldcoast.com/imagetag/7802/2/l/New-2019-Bentley-Mulsanne-Speed-Speed-1563822913.jpg",
      "image": "https://www.lamborghinigoldcoast.com/imagetag/7802/2/l/New-2019-Bentley-Mulsanne-Speed-Speed-1563822913.jpg"
    },
   {
      "make": "Rolls-Royce",
      "model": "Ghost",
      "price": 595.000,
      "engine": "6.7-litre V12",
      "colour": "blue",
      "body_type": "Sedan",
      "url": "https://livecarmodel.com/products/1-8-2010-rolls-royce-ghost-diamond-black-resin-car-model.html",
      "image": "https://assets.whichcar.com.au/image/upload/s--oTBFlRAO--/ar_2.304921968787515,c_fill,f_auto,q_auto:good/c_scale,w_2048/v1/archive/wheels/2015/04/02/34553/RR-Ghost-005.jpg",
      "fuel": "Petrol"
   
    },
    {
      "make": "Porsche",
      "model": "911 GT2 RS",
      "price": 645.400,
      "engine": "3.8 -litre twin-turbocharged flat-6",
      "body type": "coupe",
      "fuel": "petrol",
      "colour": "Gray",
      "url": "https://www.wallpaperflare.com/grey-luxury-car-porsche-911-gt2-rs-2018-4k-wallpaper-175215",
      "image": "https://c4.wallpaperflare.com/wallpaper/356/622/428/porsche-911-gt2-rs-2018-4k-wallpaper-preview.jpg"
    }
   
  ]


  //grab values from the form
  const handleChange = (e) => {
    
    // const arrayOfAnswers = [];
    // arrayOfAnswers.push(e.target)
    // console.log("This is array of answers", arrayOfAnswers)
    // setUserResponse(arrayOfAnswers)
    
  };

  const handleMoodQuestion = (e) => {
    const answersMood = ["happy", "sad", "tired", "cheerful"];
    if (e.target.value === answersMood[0]) {
      console.log("Your answer is", answersMood[0], "and your best match car is", carsOptions[0])
      //setAiResponse(carsOptions[0])
      setSuggestedCar(carsOptions[0])
      
    }
    if (e.target.value === answersMood[1]) {
      console.log("Your answer is", answersMood[1], "and your best match car is", carsOptions[1])
      setSuggestedCar(carsOptions[1])
    }
    if (e.target.value === answersMood[2]) {
      console.log("Your answer is", answersMood[2], "and your best match car is", carsOptions[2])
      setSuggestedCar(carsOptions[2])
    }
    if (e.target.value === answersMood[3]) {
      console.log("Your answer is", answersMood[3], "and your best match car is", carsOptions[3])
      setSuggestedCar(carsOptions[3])
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
 
    handleMoodQuestion(e).then((response) => {
      console.log("ai response-------------", response)
    });
  };

//function to loop through the hardcoded array of cars objects and get 2 recommendations
//should be async/await

const filterCars = () => {

  //if users chooses mood - grab matching index from answersMood
  //loop through the array of objects and find a match 
for (let i = 0; i < carsOptions.length; i++) {
  
  
}

}
  return (
    <div className="car_form">
      <form>
        <div>
          <label>What color do you prefer?</label>
            <select 
            onChange={e => 
            setColourQuestion(e.target)}
            id="colour"
            name="colour"
            > 
            <option value="red">Red</option>
            <option value="black">Black</option>
            <option value="white">White</option>
            <option value="blue">Blue</option>
          </select>
        </div>
        <div>
          <label>How much money are you willing to spend?</label>
          <select 
          onChange={e =>
          setPriceQuestion(e.target.value)} 
          id="price" 
          name="price"
          >
            <option value="$400.000-570.000">$400.000-570.000</option>
            <option value="$570.000-580.000">$570.000-580.000</option>
            <option value="$580.000-590.000">$580.000-590.000</option>
          </select>
        </div>
        <div>
          <label>In what body type do you feel most comfortable?</label>
          <select 
          onChange={e =>
          setBodyTypeQuestion(e.target.value)} 
          id="body_type" 
          name="body_type"
          >
            <option value="coupe">Coupe</option>
            <option value="sedan">Sedan</option>
            <option value="convertible">Convertible</option>
            <option value="suv">Suv</option>
          </select>
        </div>

        <div>
          <label>Do you love nature?</label>
          <select 
          onChange={e => 
          setFuelQuestion(e.target.value)} 
          id="fuel" 
          name="fuel">
            <option value="petrol">Not really</option>
            <option value="electric">Yes, of course</option>
          </select>
        </div>

        <div>
          <label>How are you feeling today?</label>
          <select 
          value={mood}
          onChange={e => 
          
          setMood(e.target.value)
          } 
          onClick={handleMoodQuestion}
          id="mood" 
          name="mood">
            <option value="happy">I'm on top of the things</option>
            <option  value="sad">It could be better</option>
            <option  value="tired">I am tried and not in the mood today</option>
            <option value="cheerful">I am smiling and happy today!</option>
          </select>
        </div>
        <div>
          <button onSubmit={handleSubmit} type="submit">
            Help me choose
          </button>
        </div>
      </form>

      <h2>Our AI has defined that the best match for you is</h2>
      <CarCard {...suggestedCar} />
    </div>
  );
}

export default Form;