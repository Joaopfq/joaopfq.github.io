import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Header } from '@/app/components/Header';

describe('Header', () => {
  it('renders project and contact links', () => {
    render(<Header />);

    const projetosLink = screen.getByText('Projetos');
    const contatoLink = screen.getByText('Contato');

    expect(projetosLink).toBeInTheDocument();
    expect(contatoLink).toBeInTheDocument();
  });
});