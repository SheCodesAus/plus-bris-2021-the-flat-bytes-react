import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//components
import CarCard from "../CarCard/CarCard.jsx";

function Form() {
  const [suggestedCar, setSuggestedCar] = useState({
    colour: "",
    price: "",
    body_type: "",
    fuel: "",
    favourite: false,
    //Todo:create favourite field.
    //if 'save to favourites' is clicked this is set to true
    //create if loop in favourites form - if favourite=true, display on page
  });

  const navigate = useNavigate();
  const [mood, setMood] = useState("");
  const [bestCarMatches, setBestCarMatches] = useState([]);
  const [carsOptions, setCarsOptions] = useState([]);
  const [formFilled, setFormFilled] = useState(undefined);

  //show a recommendation based on the mood

  const handleMoodQuestion = (e) => {
    const moodOptions = [
      {
        make: "Ferrari",
        car_model: "GTC4Lusso",
        price: 575.0,
        engine: "6.3-litre V12",
        body_type: "coupe",
        fuel: "electric",
        colour: "white",
        url: "https://www.whichcar.com.au/reviews/2017-ferrari-gtc4-lusso-targa-tasmania-review",
        image:
          "https://i.pinimg.com/564x/6f/3f/43/6f3f432b58ffd3a57d9123eb7ac5b6c0.jpg",
        favourite: false,
      },

      {
        make: "Bentley",
        car_model: "Mulsanne Speed",
        price: 455.5,
        engine: "6.8-litre Twin Turbo V8",
        body_type: "sedan",
        fuel: "electric",
        colour: "white",
        url: "https://www.lamborghinigoldcoast.com/imagetag/7802/2/l/New-2019-Bentley-Mulsanne-Speed-Speed-1563822913.jpg",
        image:
          "https://www.lamborghinigoldcoast.com/imagetag/7802/2/l/New-2019-Bentley-Mulsanne-Speed-Speed-1563822913.jpg",
        favourite: false,
      },
      {
        make: "Rolls-Royce",
        car_model: "Ghost",
        price: 755.0,
        engine: "6.7-litre V12",
        colour: "gray",
        body_type: "sedan",
        url: "https://livecarmodel.com/products/1-8-2010-rolls-royce-ghost-diamond-black-resin-car-model.html",
        image:
          "https://assets.whichcar.com.au/image/upload/s--oTBFlRAO--/ar_2.304921968787515,c_fill,f_auto,q_auto:good/c_scale,w_2048/v1/archive/wheels/2015/04/02/34553/RR-Ghost-005.jpg",
        fuel: "petrol",
        favourite: false,
      },
      {
        make: "Porsche",
        car_model: "911 GT2 RS",
        price: 645.4,
        engine: "3.8 -litre twin-turbocharged flat-6",
        body_type: "coupe",
        fuel: "petrol",
        colour: "black",
        url: "https://www.wallpaperflare.com/grey-luxury-car-porsche-911-gt2-rs-2018-4k-wallpaper-175215",
        image:
          "https://c4.wallpaperflare.com/wallpaper/356/622/428/porsche-911-gt2-rs-2018-4k-wallpaper-preview.jpg",
        favourite: false,
      },
    ];
    const answersMood = ["happy", "sad", "tired", "cheerful"];
    if (mood === answersMood[0]) {
      console.log(
        "Your answer is",
        answersMood[0],
        "and your best match car is",
        moodOptions[0]
      );
      setSuggestedCar(moodOptions[0]);
      setFormFilled(true);
    }
    if (mood === answersMood[1]) {
      console.log(
        "Your answer is",
        answersMood[1],
        "and your best match car is",
        moodOptions[1]
      );
      setSuggestedCar(moodOptions[1]);
      setFormFilled(true);
    }
    if (mood === answersMood[2]) {
      console.log(
        "Your answer is",
        answersMood[2],
        "and your best match car is",
        moodOptions[2]
      );
      setSuggestedCar(moodOptions[2]);
      setFormFilled(true);
    }
    if (mood === answersMood[3]) {
      console.log(
        "Your answer is",
        answersMood[3],
        "and your best match car is",
        carsOptions[3]
      );
      setSuggestedCar(moodOptions[3]);
      setFormFilled(true);
    }
  };

  // get user preferences from the form
  const getUserPreferences = (e) => {
    const { id, value } = e.target;
    setSuggestedCar((prevSuggestedCar) => ({
      ...prevSuggestedCar,
      [id]: value,
    }));
  };

  //call api to get matching cars
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}products/`)
      .then((results) => {
        console.log("results:", results);
        return results.json();
      })
      .then((data) => {
        console.log("data:", data);
        setCarsOptions(data);
      });
  }, []);

  //filter based on attributes
  const matchingCars = (e) => {
    //pass response from api
    let filteredCars = matchingPrice(carsOptions);
    console.log("the suggested cARS", suggestedCar);

    if (suggestedCar.colour !== "") {
      filteredCars = matchingColor(filteredCars);

      console.log("By color", filteredCars);
    }

    if (suggestedCar.body_type !== "") {
      filteredCars = matchingBodyType(filteredCars);
      console.log("By body", filteredCars);
    }

    console.log("The filtered cars", filteredCars);
    setBestCarMatches(filteredCars);
    return filteredCars;
  };

  //functions to filter based on each attribute, they are called above

  function matchingColor(cars) {
    return cars.filter((car) => {
      if (car.colour.toLowerCase() !== suggestedCar.colour.toLowerCase()) {
        return false;
      }
      return true;
    });
  }

  function matchingPrice(cars) {
    let minPrice = 0;
    let maxPrice = 0;

    switch (suggestedCar.price) {
      case "50.0-429.0":
        minPrice = 50.0;
        maxPrice = 429.0;
        break;
      case "431.0-620.0":
        minPrice = 430.0;
        maxPrice = 620.0;
        break;
      case "621.0-999.0":
        minPrice = 621.0;
        maxPrice = 999.0;
        break;
      default:
        minPrice = 50.0;
        maxPrice = 11111111111.0;
        break;
    }
    return cars.filter((car) => {
      if (car.price > minPrice && car.price < maxPrice) {
        return true;
      }

      return false;
    });
  }

  function matchingBodyType(cars) {
    return cars.filter((car) => {
      if (car.body_type !== suggestedCar.body_type) {
        return false;
      }
      return true;
    });
  }

  //submit the form
  function handleSubmit(e) {
    e.preventDefault();
    const result = matchingCars(e);
    handleMoodQuestion();
    console.log("This is handle mood question from submit", handleMoodQuestion);
    setFormFilled(true);
    return result;
  }

  if (!bestCarMatches.length && formFilled) {
    return (
      <div>
        <p class="standard-text">
          There are no suitable cars for you at the moment. Try searching again
        </p>
        <div class="submit-container container">
          <button
            onClick={(e) => {
              setFormFilled(false);
            }}
          >
            Try again
          </button>
        </div>
      </div>
    );
  }

  if (bestCarMatches.length > 0 && mood && formFilled) {
    return bestCarMatches.map((car) => {
      return (
        <div>
          <h1 class="standard-text">Best Car Matches:</h1>
          <CarCard
            id={car.id}
            image={car.image}
            make={car.make}
            car_model={car.car_model}
            price={car.price}
            colour={car.colour}
            body_type={car.body_type}
            url={car.url}
          />

          <div>
            <h2 class="standard-text">
              Based on your preferences and our smart analytics tool you should
              purchase
            </h2>
            <CarCard
              id={suggestedCar.id}
              image={suggestedCar.image}
              make={suggestedCar.make}
              car_model={suggestedCar.car_model}
              price={suggestedCar.price}
              colour={suggestedCar.colour}
              body_type={suggestedCar.body_type}
              url={suggestedCar.url}
            />
          </div>

          <div class="submit-container container">
            <button
              onClick={(e) => {
                setFormFilled(false);
              }}
            >
              Search again
            </button>
          </div>
        </div>
      );
    });
  }

  return (
    <div id="form-page">
      <div id="form-wrapper">
        <form onSubmit={handleSubmit}>
          <div class="container select-container">
            <div class="form-intro">
              <h1>
                Answer these few questions and our AI <br />
                will determine the best purchase for you
              </h1>
            </div>
            <label class="form-input standard-text">
              How much money are you willing to spend?
            </label>
            <select onClick={getUserPreferences} id="price" name="price">
              <option disabled selected value=""></option>
              <option value="50.0-429.0">$50.000-430.000</option>
              <option value="431.0-620.0">$450.000-620.000</option>
              <option value="621.0-999.0">$620.000-999.000</option>
            </select>
          </div>
          <div class="container select-container">
            <label class="form-input standard-text">
              What color do you prefer?
            </label>
            <select onChange={getUserPreferences} id="colour" name="colour">
              <option disabled selected value=""></option>
              <option value="Black">Black</option>
              <option value="White">White</option>
              <option value="Blue">Blue</option>
              <option value="Red">Red</option>
              <option value="Yellow">Yellow</option>
              <option value="Green">Green</option>
              <option value="Gray">Gray</option>
            </select>
          </div>

          <div class="container select-container">
            <label class="form-input standard-text">
              In what body type do you feel most comfortable?
            </label>
            <select
              onChange={getUserPreferences}
              id="body_type"
              name="body_type"
            >
              <option disabled selected value=""></option>
              <option value="coupe">Coupe</option>
              <option value="sedan">Sedan</option>
              <option value="convertible">Convertible</option>
              <option value="SUV">SUV</option>
            </select>
          </div>
          <div class="container select-container">
            <label class="form-input standard-text">
              How are you feeling today?
            </label>
            <select
              value={mood}
              onChange={(e) => setMood(e.target.value)}
              id="mood"
              name="mood"
            >
              <option disabled selected value=""></option>
              <option onClick={handleMoodQuestion} value="happy">
                I'm on top of the things
              </option>
              <option onClick={handleMoodQuestion} value="sad">
                It could be better
              </option>
              <option onClick={handleMoodQuestion} value="tired">
                I am tired and not in the mood today
              </option>
              <option onClick={handleMoodQuestion} value="cheerful">
                I am smiling and happy today!
              </option>
            </select>
          </div>
          <div class="submit-container container">
            <button type="submit">Help me choose</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
