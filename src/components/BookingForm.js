import React, { useState, useReducer, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAPI, submitAPI } from "../API/fakeAPI";

function BookingForm({ submitForm }) {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const updateTimes = async (selectedDate) => {
    const updatedTimes = await fetchAPI(selectedDate);
    return updatedTimes;
  };

  const initializeTimes = async () => {
    const initialTimes = await fetchAPI(new Date().toISOString().slice(0, 10));
    return initialTimes;
  };

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "UPDATE_TIMES":
        return action.payload;
      default:
        return state;
    }
  }, []);

  useEffect(() => {
    initializeTimes().then(initialTimes => {
      dispatch({ type: 'UPDATE_TIMES', payload: initialTimes });
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { date, time, guests, occasion };
    try {
      const response = await submitForm(formData);
      if (response) {
        navigate("/confirmedbooking");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    updateTimes(selectedDate).then(updatedTimes => {
      dispatch({ type: 'UPDATE_TIMES', payload: updatedTimes });
    });
    setDate(selectedDate);
  };

  return (
    <>
      {error && <div className="error">{error}</div>}
      <form className="mx-auto mt-5" style={{ display: "grid", maxWidth: "200px", gap: "20px" }} onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" value={date} onChange={handleDateChange} required />
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
        {state.map((availableTime) => (
          <option key={availableTime}>{availableTime}</option>
        ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        required
        onChange={(e) => setGuests(parseInt(e.target.value))}
      />
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation" required />
      {error && <div className="error">{error}</div>}
    </form>
    </>
  );
}

export default BookingForm;
