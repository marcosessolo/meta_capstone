import React, { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { submitAPI } from '../API/fakeAPI';
import BookingForm from "./BookingForm";

const availableTimesReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return state;
    default:
      return state;
  }
};

function BookingPage() {
  const navigate = useNavigate();
  const initialTimes = [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ];

  const [availableTimes, dispatch] = useReducer(availableTimesReducer, initialTimes);

  const submitForm = async (formData) => {
    const response = await submitAPI(formData);
    if (response === true) {
      navigate('/confirmedbooking');
    }
  };

  return(
    <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
  )
};

export default BookingPage;