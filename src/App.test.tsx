import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('App', () => {
  it('renderiza o header e a chamada principal da home', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: /psicóloga waldirene dias/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /o cuidado também pode abrir caminhos de transformação/i })).toBeInTheDocument();
  });
});
