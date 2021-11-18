import { React, useState, Fragment } from "react";

//components
import CarCard from "../CarCard/CarCard.jsx";

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

  const colourOptions = ["black", "white", "blue", "gray"];

  const carsOptions = [
    {
      make: "Ferrari",
      model: "GTC4Lusso",
      price: 578.0,
      engine: "6.3-litre V12",
      body_type: "Coupe",
      fuel: "electric",
      colour: "White",
      url: "https://www.whichcar.com.au/reviews/2017-ferrari-gtc4-lusso-targa-tasmania-review",
      image:
        "https://i.pinimg.com/564x/6f/3f/43/6f3f432b58ffd3a57d9123eb7ac5b6c0.jpg",
    },

    {
      make: "Bentley",
      model: "Mulsanne Speed",
      price: 569.5,
      engine: "6.8-litre Twin Turbo V8",
      body_type: "sedan",
      fuel: "petrol",
      colour: "Black",
      url: "https://www.lamborghinigoldcoast.com/imagetag/7802/2/l/New-2019-Bentley-Mulsanne-Speed-Speed-1563822913.jpg",
      image:
        "https://www.lamborghinigoldcoast.com/imagetag/7802/2/l/New-2019-Bentley-Mulsanne-Speed-Speed-1563822913.jpg",
    },
    {
      make: "Rolls-Royce",
      model: "Ghost",
      price: 595.0,
      engine: "6.7-litre V12",
      colour: "blue",
      body_type: "Sedan",
      url: "https://livecarmodel.com/products/1-8-2010-rolls-royce-ghost-diamond-black-resin-car-model.html",
      image:
        "https://assets.whichcar.com.au/image/upload/s--oTBFlRAO--/ar_2.304921968787515,c_fill,f_auto,q_auto:good/c_scale,w_2048/v1/archive/wheels/2015/04/02/34553/RR-Ghost-005.jpg",
      fuel: "Petrol",
    },
    {
      make: "Porsche",
      model: "911 GT2 RS",
      price: 645.4,
      engine: "3.8 -litre twin-turbocharged flat-6",
      "body type": "coupe",
      fuel: "petrol",
      colour: "Gray",
      url: "https://www.wallpaperflare.com/grey-luxury-car-porsche-911-gt2-rs-2018-4k-wallpaper-175215",
      image:
        "https://c4.wallpaperflare.com/wallpaper/356/622/428/porsche-911-gt2-rs-2018-4k-wallpaper-preview.jpg",
    },
  ];

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
      console.log(
        "Your answer is",
        answersMood[0],
        "and your best match car is",
        carsOptions[0]
      );
      setSuggestedCar(carsOptions[0]);
    }
    if (e.target.value === answersMood[1]) {
      console.log(
        "Your answer is",
        answersMood[1],
        "and your best match car is",
        carsOptions[1]
      );
      setSuggestedCar(carsOptions[1]);
    }
    if (e.target.value === answersMood[2]) {
      console.log(
        "Your answer is",
        answersMood[2],
        "and your best match car is",
        carsOptions[2]
      );
      setSuggestedCar(carsOptions[2]);
    }
    if (e.target.value === answersMood[3]) {
      console.log(
        "Your answer is",
        answersMood[3],
        "and your best match car is",
        carsOptions[3]
      );
      setSuggestedCar(carsOptions[3]);
    }
  };

  //function to loop through the hardcoded array of cars objects and get recommendation based on user input
  //should be async/await

  const filterCars = (e) => {
    const { id, value } = e.target;
    setSuggestedCar((prevSuggestedCar) => ({
      ...prevSuggestedCar,
      [id]: value,
    }));
    console.log("I'm looking for suggestedCar", suggestedCar);
  };

  const matchingCar = (e) => { carsOptions.filter((car) => {
    if (car.colour === suggestedCar.colour) {
      console.log("We found a match", car);
      return true;
    }
    return false;
  });
}
  function handleSubmit(e) {
    e.preventDefault();
    console.log("We found a match", car);
    matchingCar().then((response) => {
      console.log("We gotcha-------------", response);
      console.log("We found a match", car);
    });
  }

  // if (e.target.id === "colour") {
  //   console.log("I start filtering", e.target.id);
  // }
  //   console.log("I'm looking for new suggestedCar", suggestedCar)
  //   console.log("I'm looking for suggestedCar", setSuggestedCar)
  //   carsOptions.filter(car =>
  //     car.colour.includes('colour')).map(filteredCar =>
  //       console.log("The filtered car is----------", filteredCar))
  // }
  // if (e.target.id === "price") {
  //   console.log("I start filtering", e.target.id)
  //   setSuggestedCar({
  //     ...suggestedCar,
  //     [e.target.id]: e.target.value
  //   })
  //   console.log("I'm looking for suggestedCar", suggestedCar)
  //   console.log("I'm looking for suggestedCar", setSuggestedCar)
  // }
  //}
  //}
  return (
    <div className="car_form">
      <form>
        <div>
          <label>What color do you prefer?</label>
          <select
            onChange={(e) => setColourQuestion(e.target)}
            onClick={filterCars}
            id="colour"
            name="colour"
          >
            <option value="black">Black</option>
            <option value="white">White</option>
            <option value="blue">Blue</option>
            <option value="red">Gray</option>
          </select>
        </div>
        <div>
          <label>How much money are you willing to spend?</label>
          <select
            onChange={(e) => setPriceQuestion(e.target.value)}
            onClick={filterCars}
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
            onChange={(e) => setBodyTypeQuestion(e.target.value)}
            onClick={filterCars}
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
            onChange={(e) => setFuelQuestion(e.target.value)}
            onClick={matchingCar}
            id="fuel"
            name="fuel"
          >
            <option value="petrol">Not really</option>
            <option value="electric">Yes, of course</option>
          </select>
        </div>

        <div>
          <label>How are you feeling today?</label>
          <select
            value={mood}
            onChange={(e) => setMood(e.target.value)}
            onClick={handleMoodQuestion}
            id="mood"
            name="mood"
          >
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

      <h2>Our AI has defined that the best match for you</h2>
      <CarCard {...suggestedCar} />
      {/* <div>
        <h3>Filtered cars:</h3>
        {carsOptions
          .filter((car) => car.colour === "gray")
          .map((filteredCar) => (
            <li>{filteredCar.make}</li>
          ))}
      </div> */}
    </div>
  );
}

export default Form;
