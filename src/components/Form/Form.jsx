import { React, useState, useEffect } from "react";

//components
import CarCard from "../CarCard/CarCard.jsx";

function Form() {
  const [suggestedCar, setSuggestedCar] = useState({
    colour: "",
    price: "",
    body_type: "",
    fuel: "",
  });

  const [mood, setMood] = useState("");
  const [bestCarMatches, setBestCarMatches] = useState([]);
  const [carsFromAPI, setCarsFromApi] = useState([]);
  const [carsOptions, setCarsOptions] = useState([]);

  // const carsOptions = [
  //   {
  //     make: "Ferrari",
  //     model: "GTC4Lusso",
  //     price: 575.0,
  //     engine: "6.3-litre V12",
  //     body_type: "coupe",
  //     fuel: "electric",
  //     colour: "white",
  //     url: "https://www.whichcar.com.au/reviews/2017-ferrari-gtc4-lusso-targa-tasmania-review",
  //     image:
  //       "https://i.pinimg.com/564x/6f/3f/43/6f3f432b58ffd3a57d9123eb7ac5b6c0.jpg",
  //   },

  //   {
  //     make: "Bentley",
  //     model: "Mulsanne Speed",
  //     price: 455.5,
  //     engine: "6.8-litre Twin Turbo V8",
  //     body_type: "sedan",
  //     fuel: "electric",
  //     colour: "white",
  //     url: "https://www.lamborghinigoldcoast.com/imagetag/7802/2/l/New-2019-Bentley-Mulsanne-Speed-Speed-1563822913.jpg",
  //     image:
  //       "https://www.lamborghinigoldcoast.com/imagetag/7802/2/l/New-2019-Bentley-Mulsanne-Speed-Speed-1563822913.jpg",
  //   },
  //   {
  //     make: "Rolls-Royce",
  //     model: "Ghost",
  //     price: 755.0,
  //     engine: "6.7-litre V12",
  //     colour: "gray",
  //     body_type: "sedan",
  //     url: "https://livecarmodel.com/products/1-8-2010-rolls-royce-ghost-diamond-black-resin-car-model.html",
  //     image:
  //       "https://assets.whichcar.com.au/image/upload/s--oTBFlRAO--/ar_2.304921968787515,c_fill,f_auto,q_auto:good/c_scale,w_2048/v1/archive/wheels/2015/04/02/34553/RR-Ghost-005.jpg",
  //     fuel: "petrol",
  //   },
  //   {
  //     make: "Porsche",
  //     model: "911 GT2 RS",
  //     price: 645.4,
  //     engine: "3.8 -litre twin-turbocharged flat-6",
  //     body_type: "coupe",
  //     fuel: "petrol",
  //     colour: "black",
  //     url: "https://www.wallpaperflare.com/grey-luxury-car-porsche-911-gt2-rs-2018-4k-wallpaper-175215",
  //     image:
  //       "https://c4.wallpaperflare.com/wallpaper/356/622/428/porsche-911-gt2-rs-2018-4k-wallpaper-preview.jpg",
  //   },
  // ];

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
    //filter by price
    //pass my response from api
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

    if (suggestedCar.fuel !== "") {
      filteredCars = matchingFuel(filteredCars);
      console.log("By fuel", filteredCars);
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

  function matchingFuel(cars) {
    return cars.filter((car) => {
      if (car.fuel !== suggestedCar.fuel) {
        return false;
      }
      return true;
    });
  }

  //submit the form
  function handleSubmit(e) {
    e.preventDefault();
    const result = matchingCars(e);

    //setbestCarMatches(result)
    return result;
  }

  console.log("cars options", carsOptions);

  return (
    <div>
      <div id="img-div">
        <img id="banner-small" src={"../Luxe-logo-banner.png"} alt="" />
      </div>
      <form onSubmit={handleSubmit}>
        <div class="container">
          <label class="standard-text">
            How much money are you willing to spend?
          </label>
          <select onClick={getUserPreferences} id="price" name="price">
            <option disabled selected value=""></option>
            <option value="400.0-540.0">$400.000-540.000</option>
            <option value="541.0-650.0">$541.000-650.000</option>
            <option value="651.0-790.0">$651.000-790.000</option>
          </select>
        </div>
        <div class="container">
          <label class="standard-text">What color do you prefer?</label>
          <select onChange={getUserPreferences} id="colour" name="colour">
            <option disabled selected value=""></option>
            <option value="black">black</option>
            <option value="white">white</option>
            <option value="Blue">blue</option>
            <option value="red">gray</option>
          </select>
        </div>

        <div class="container">
          <label class="standard-text">
            In what body type do you feel most comfortable?
          </label>
          <select onChange={getUserPreferences} id="body_type" name="body_type">
            <option disabled selected value=""></option>
            <option value="coupe">Coupe</option>
            <option value="sedan">Sedan</option>
            <option value="convertible">Convertible</option>
            <option value="suv">Suv</option>
          </select>
        </div>

        <div class="container">
          <label class="standard-text">Do you love nature?</label>
          <select onChange={getUserPreferences} id="fuel" name="fuel">
            <option disabled selected value=""></option>
            <option value="electric">Yes, of course</option>
            <option value="petrol">Not really</option>
          </select>
        </div>

        <div class="container">
          <label class="standard-text">How are you feeling today?</label>
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
        <div class="container" style={{ marginTop: "5%" }}>
          <button type="submit">Help me choose</button>
        </div>
      </form>
      <h1 class="standard-text">Best Car Matches:</h1>
      {!bestCarMatches.length && (
        <p class="standard-text">No car matches found.</p>
      )}
      {bestCarMatches.length > 0 &&
        bestCarMatches.map((car) => {
          return (
            <CarCard
              image={car.image}
              make={car.make}
              model={car.model}
              price={car.price}
              colour={car.color}
              url={car.url}
            />
          );
        })}

      {mood && (
        <div>
          <h2 class="standard-text">
            Our AI has defined that the best match for you
          </h2>
          <CarCard
            image={suggestedCar.image}
            make={suggestedCar.make}
            model={suggestedCar.model}
            price={suggestedCar.price}
            colour={suggestedCar.colour}
            url={suggestedCar.url}
          />
        </div>
      )}
    </div>
  );
}

export default Form;
