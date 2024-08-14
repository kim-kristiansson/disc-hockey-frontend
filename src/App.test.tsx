import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import App from './App';
import React from 'react';

describe('App component', () => {
  it('renders the title', () => {
    render(<App />);
    const titleElement = screen.getByText(/Disc Hockey/i);
    expect(titleElement).toBeInTheDocument();
  });
});
