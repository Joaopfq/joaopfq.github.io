import { Footer } from '@/app/components/Footer';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Footer', () => {
  it('renders footer text', () => {
    render(<Footer />);

    const footerText = screen.getByText('© 2025 João Paulo. Todos os direitos reservados.');


    expect(footerText).toBeInTheDocument();
  });
});