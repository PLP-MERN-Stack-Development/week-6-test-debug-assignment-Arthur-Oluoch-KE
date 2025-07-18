import { render, screen, fireEvent } from '@testing-library/react';
import BugForm from '../../components/BugForm';

test('BugForm submits title and description', () => {
  const mockAdd = jest.fn();
  render(<BugForm onAdd={mockAdd} />);

  fireEvent.change(screen.getByPlaceholderText(/Bug Title/i), { target: { value: 'Test Bug' } });
  fireEvent.change(screen.getByPlaceholderText(/Description/i), { target: { value: 'Bug details' } });
  fireEvent.click(screen.getByText(/Report Bug/i));

  expect(mockAdd).toHaveBeenCalled();
});
