import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ProjectCard } from '@/app/components/ProjectCard';

describe('ProjectCard', () => {
  const mockProps = {
    title: 'Test Project',
    description: 'This is a test project.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS'],
    githubLink: 'https://github.com/example/test-project',
    liveLink: 'https://example.com',
  };

  it('renders the title and description', () => {
    render(<ProjectCard {...mockProps} />);
    expect(screen.getByText('Test Project')).toBeInTheDocument();
    expect(screen.getByText('This is a test project.')).toBeInTheDocument();
  });

  it('renders the tech stack when provided', () => {
    render(<ProjectCard {...mockProps} />);
    expect(screen.getByText('Tech Stack:')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('Tailwind CSS')).toBeInTheDocument();
  });

  it('does not render the tech stack when none is provided', () => {
    // Pass props without the techStack field
    const propsWithoutTechStack = {
      ...mockProps,
      techStack: undefined, // Ensure techStack is not provided
    };
    render(<ProjectCard {...propsWithoutTechStack} />);
    expect(screen.queryByText('Tech Stack:')).not.toBeInTheDocument();
  });

  it('renders the GitHub link with the correct href', () => {
    render(<ProjectCard {...mockProps} />);
    const githubLink = screen.getByLabelText('GitHub');
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', mockProps.githubLink);
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders the live link when provided', () => {
    render(<ProjectCard {...mockProps} />);
    const liveLink = screen.getByLabelText('Acessar site');
    expect(liveLink).toBeInTheDocument();
    expect(liveLink).toHaveAttribute('href', mockProps.liveLink);
    expect(liveLink).toHaveAttribute('target', '_blank');
    expect(liveLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('does not render the live link when none is provided', () => {
    // Pass props without the liveLink field
    const propsWithoutLiveLink = {
      ...mockProps,
      liveLink: undefined, // Ensure liveLink is not provided
    };
    render(<ProjectCard {...propsWithoutLiveLink} />);
    expect(screen.queryByText('Acessar site')).not.toBeInTheDocument();
  });

});