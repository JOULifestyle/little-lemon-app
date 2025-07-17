// src/Main.test.js
import { initializeTimes, updateTimes } from '../component/Main';
import * as api from '../api';

// ✅ Mock the fetchAPI function
jest.mock('../api', () => ({
  fetchAPI: jest.fn(),
}));

describe('Booking Times Logic', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('initializeTimes should return available times from fetchAPI', () => {
    const mockTimes = ['17:00', '18:00'];
    const today = new Date();
    api.fetchAPI.mockReturnValue(mockTimes);

    const result = initializeTimes();
    expect(api.fetchAPI).toHaveBeenCalledWith(today);
    expect(result).toEqual(mockTimes);
  });

  test('updateTimes should return updated times from fetchAPI for a new date', () => {
    const newDate = new Date('2025-07-20');
    const updatedTimes = ['18:30', '19:30'];
    api.fetchAPI.mockReturnValue(updatedTimes);

    const result = updateTimes([], { type: 'UPDATE_TIMES', date: newDate });
    expect(api.fetchAPI).toHaveBeenCalledWith(newDate);
    expect(result).toEqual(updatedTimes);
  });
});
