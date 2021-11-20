import { React, useState } from "react";

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
  const [mood, setMood] = useState("");
  const [bestCarMatches, setbestCarMatches] = useState([]);

  const carsOptions = [
    {
      make: "Ferrari",
      model: "GTC4Lusso",
      price: 575.0,
      engine: "6.3-litre V12",
      body_type: "coupe",
      fuel: "electric",
      colour: "white",
      url: "https://www.whichcar.com.au/reviews/2017-ferrari-gtc4-lusso-targa-tasmania-review",
      image:
        "https://i.pinimg.com/564x/6f/3f/43/6f3f432b58ffd3a57d9123eb7ac5b6c0.jpg",
    },

    {
      make: "Bentley",
      model: "Mulsanne Speed",
      price: 455.5,
      engine: "6.8-litre Twin Turbo V8",
      body_type: "sedan",
      fuel: "electric",
      colour: "white",
      url: "https://www.lamborghinigoldcoast.com/imagetag/7802/2/l/New-2019-Bentley-Mulsanne-Speed-Speed-1563822913.jpg",
      image:
        "https://www.lamborghinigoldcoast.com/imagetag/7802/2/l/New-2019-Bentley-Mulsanne-Speed-Speed-1563822913.jpg",
    },
    {
      make: "Rolls-Royce",
      model: "Ghost",
      price: 755.0,
      engine: "6.7-litre V12",
      colour: "gray",
      body_type: "sedan",
      url: "https://livecarmodel.com/products/1-8-2010-rolls-royce-ghost-diamond-black-resin-car-model.html",
      image:
        "https://assets.whichcar.com.au/image/upload/s--oTBFlRAO--/ar_2.304921968787515,c_fill,f_auto,q_auto:good/c_scale,w_2048/v1/archive/wheels/2015/04/02/34553/RR-Ghost-005.jpg",
      fuel: "petrol",
    },
    {
      make: "Porsche",
      model: "911 GT2 RS",
      price: 645.4,
      engine: "3.8 -litre twin-turbocharged flat-6",
      body_type: "coupe",
      fuel: "petrol",
      colour: "black",
      url: "https://www.wallpaperflare.com/grey-luxury-car-porsche-911-gt2-rs-2018-4k-wallpaper-175215",
      image:
        "https://c4.wallpaperflare.com/wallpaper/356/622/428/porsche-911-gt2-rs-2018-4k-wallpaper-preview.jpg",
    },
  ];

  //show a recommendation based on the mood

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


  // get user preferences from the form
  const getUserPreferences = (e) => {
    const { id, value } = e.target;
    setSuggestedCar((prevSuggestedCar) => ({
      ...prevSuggestedCar,
      [id]: value,
    }));
    // console.log("I'm looking for suggestedCar", suggestedCar);
  };

  //filter based on attributes
  const matchingCars = (e) => {
    //filter by price
    let filteredCars = matchingPrice(carsOptions);
    // console.log("filteredCarsByPrice ---------", filteredCars);

    if (suggestedCar.colour.length >0) {
      filteredCars = matchingColor(filteredCars);
      // console.log("filteredCarsByColors ---------", filteredCars);
    }

    if (suggestedCar.body_type.length >0) {
      filteredCars = matchingBodyType(filteredCars);
      // console.log("filteredCarsByBodyType ---------", filteredCars);
    }

    if (suggestedCar.colour.length >0) {
      filteredCars = matchingFuel(filteredCars);
      // console.log("filteredCarsByColors ---------", filteredCars);
    }

      return filteredCars;
  };

  //functions to filter based on each attribute, they are called above

  function matchingColor(cars) {
    return cars.filter((car) => {
      if (car.colour !== suggestedCar.colour) {
        
        return false;
      }
      // console.log("We found a color match ---------", car);
      return true;
    });
  }

  function matchingPrice(cars) {
    let minPrice = 0;
    let maxPrice = 0;

    switch (suggestedCar.price) {
      case "400.0-540.0":
        minPrice = 400.0;
        maxPrice = 540.0;
        break;
      case "541.0-650.0":
        minPrice = 541.0;
        maxPrice = 650.0;
        break;
      case "651.0-790.0":
        minPrice = 651.0;
        maxPrice = 790.0;
        break;
      default:
        minPrice = 100.0;
        maxPrice = 11111111111.0;
        break;
    }
    return cars.filter((car) => {
      if (car.price > minPrice && car.price < maxPrice) {
        // console.log("We found a price match ---------", car);
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
      // console.log("We found a body type match ---------", car);
      return true;
    });
  }

  function matchingFuel(cars) {
    return cars.filter((car) => {
      if (car.fuel !== suggestedCar.fuel) {
        
        return false;
      }
      // console.log("We found a fuel match ---------", car);
      return true;
    });
  }

  //submit the form
  function handleSubmit(e) {
    e.preventDefault();
    const result = matchingCars(e);
    setbestCarMatches(result)
    return result;
  }

  console.log('best match car:', bestCarMatches)

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
      <div>
          <label>How much money are you willing to spend?</label>
          <select
            //onChange={(e) => setPriceQuestion(e.target.value)}
            onClick={getUserPreferences}
            id="price"
            name="price"
          >
            <option disabled selected value=""></option>
            <option value="400.0-540.0">$400.000-540.000</option>
            <option value="541.0-650.0">$541.000-650.000</option>
            <option value="651.0-790.0">$651.000-790.000</option>
          </select>
        </div>
        <div>
          <label>What color do you prefer?</label>
          <select
            //onChange={(e) => setColourQuestion(e.target)}
            onChange={getUserPreferences}
            id="colour"
            name="colour"
          >
            <option disabled selected value=""></option>
            <option value="black">black</option>
            <option value="white">white</option>
            <option value="blue">blue</option>
            <option value="red">gray</option>
          </select>
        </div>

        <div>
          <label>In what body type do you feel most comfortable?</label>
          <select
            //onChange={(e) => setBodyTypeQuestion(e.target.value)}
            onChange={getUserPreferences}
            id="body_type"
            name="body_type"
          >
            <option disabled selected value=""></option>
            <option value="coupe">Coupe</option>
            <option value="sedan">Sedan</option>
            <option value="convertible">Convertible</option>
            <option value="suv">Suv</option>
          </select>
        </div>

        <div>
          <label>Do you love nature?</label>
          <select
            //onChange={(e) => setFuelQuestion(e.target.value)}
            //onClick={matchingCar}
            onChange={getUserPreferences}
            id="fuel"
            name="fuel"
          >
            <option disabled selected value=""></option>
            <option value="electric">Yes, of course</option>
            <option value="petrol">Not really</option>
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
            <option disabled selected value=""></option>
            <option onClick={handleMoodQuestion} value="happy">
              I'm on top of the things
            </option>
            <option onClick={handleMoodQuestion} value="sad">
              It could be better
            </option>
            <option onClick={handleMoodQuestion} value="tired">
              I am tried and not in the mood today
            </option>
            <option onClick={handleMoodQuestion} value="cheerful">
              I am smiling and happy today!
            </option>
          </select>
        </div>
        <div>
          <button type="submit">Help me choose</button>
        </div>
      </form>
      <h1 style={{ color: 'white' }}>Best Car Matches:</h1>
      {!bestCarMatches.length && (
        <p style={{ color: 'white' }}>No car matches found.</p>
      )}
      {bestCarMatches.length > 0 && bestCarMatches.map((car) => {
        return (
          <CarCard
            image={car.image}
            make={car.make}
            model={car.model}
            price={car.price}
            colour={car.color}
            url={car.url}
          />
        )
      })}
    </div>
  );
}

export default Form;
