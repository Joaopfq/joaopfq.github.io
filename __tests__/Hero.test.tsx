import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Hero } from '@/app/components/Hero';

describe('Hero', () => {
  it('renders hero', () => {
    render(<Hero />);

    const presentationText = screen.getByText('Olá! Eu sou João Paulo');
    const infoText = screen.getByText('Sou desenvolvedor Fullstack com experiência em TypeScript, React, Vue e Java, construindo aplicações completas com interfaces modernas, responsivas e acessíveis, além de backends escaláveis e bem estruturados.');

    expect(presentationText).toBeInTheDocument();
    expect(infoText).toBeInTheDocument();
  });
});