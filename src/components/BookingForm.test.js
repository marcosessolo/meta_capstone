import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { fetchAPI } from '../API/fakeAPI';
import BookingForm from './BookingForm';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

jest.mock('../API/fakeAPI');

describe("BookingForm", () => {
  beforeEach(() => {
    fetchAPI.mockClear();
  });

  test('initializeTimes calls the fetchAPI with the current date and updates state', async () => {
    const mockTimes = ["18:00", "19:00", "20:00"];
    fetchAPI.mockResolvedValue(mockTimes);

    render(<BookingForm />);

    await waitFor(() => expect(fetchAPI).toHaveBeenCalledTimes(1));
    expect(fetchAPI).toHaveBeenCalledWith(new Date().toISOString().slice(0, 10));
  });

  test('updateTimes calls the fetchAPI with the selected date and updates state', async () => {
    const mockTimes = ["18:00", "19:00", "20:00"];
    const selectedDate = "2023-12-24";
    fetchAPI.mockResolvedValue(mockTimes);

    render(<BookingForm />);
    
    fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: selectedDate } });

    await waitFor(() => expect(fetchAPI).toHaveBeenCalledTimes(2));
    expect(fetchAPI).toHaveBeenLastCalledWith(selectedDate);
  });
});

test('renders learn react link', () => {
  render(
    <Router>
      <App />
    </Router>
  );
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
