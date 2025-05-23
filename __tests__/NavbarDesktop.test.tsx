import { render, screen } from "@testing-library/react";
import { NavbarDesktop } from "@/components/NavbarDesktop";
import { usePathname } from "next/navigation";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

describe("NavbarDesktop", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders all navigation links", () => {
    (usePathname as jest.Mock).mockReturnValue("/");
    render(<NavbarDesktop />);
    expect(screen.getByText("Projetos")).toBeInTheDocument();
    expect(screen.getByText("Sobre")).toBeInTheDocument();
    expect(screen.getByText("Contato")).toBeInTheDocument();
  });

  it("applies the active class to the current link", () => {
    (usePathname as jest.Mock).mockReturnValue("/about");
    render(<NavbarDesktop />);
    const aboutLink = screen.getByText("Sobre").closest("a") as HTMLElement;
    const span = aboutLink.querySelector("span");
    expect(span?.className).toMatch(/scale-x-100/);
  });

  it("does not apply the active class to other links", () => {
    (usePathname as jest.Mock).mockReturnValue("/about");
    render(<NavbarDesktop />);
    const projectsLink = screen.getByText("Projetos").closest("a") as HTMLElement;
    const span = projectsLink.querySelector("span");
    expect(span?.className.split(/\s+/).includes("scale-x-100")).toBe(false);
  });
});