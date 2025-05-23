import { render, screen } from "@testing-library/react";
import { Hero } from "@/components/Hero";

describe("Hero", () => {
  it("renders the headline", () => {
    render(<Hero />);
    expect(screen.getByText("Olá! Eu sou João Paulo")).toBeInTheDocument();
  });

  it("renders the main description", () => {
    render(<Hero />);
    expect(
      screen.getByText(/Sou desenvolvedor Fullstack com experiência em/i)
    ).toBeInTheDocument();
  });

  it("renders all bolded technologies", () => {
    render(<Hero />);
    expect(screen.getByText("Next", { selector: "b" })).toBeInTheDocument();
    expect(screen.getByText("Vue", { selector: "b" })).toBeInTheDocument();
    expect(screen.getByText("TypeScript", { selector: "b" })).toBeInTheDocument();
    expect(screen.getByText("React", { selector: "b" })).toBeInTheDocument();
    expect(screen.getByText("Java", { selector: "b" })).toBeInTheDocument();
    expect(screen.getByText("Spring Boot", { selector: "b" })).toBeInTheDocument();
  });
});