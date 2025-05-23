import { render, screen, fireEvent } from "@testing-library/react";
import { NavbarMobile } from "@/components/NavbarMobile";
import { usePathname } from "next/navigation";

jest.mock("react-icons/io5", () => ({
  IoMenu: () => <svg data-testid="menu-icon" />,
}));

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

describe("NavbarMobile", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the menu button", () => {
    (usePathname as jest.Mock).mockReturnValue("/");
    render(<NavbarMobile />);
    expect(screen.getByLabelText("Abrir menu")).toBeInTheDocument();
  });

  it("opens and closes the menu with buttons", () => {
    (usePathname as jest.Mock).mockReturnValue("/");
    render(<NavbarMobile />);
    fireEvent.click(screen.getByLabelText("Abrir menu"));
    expect(screen.getByText("Projetos")).toBeInTheDocument();
    fireEvent.click(screen.getByLabelText("Fechar menu"));
    expect(screen.getByLabelText("Abrir menu")).toBeInTheDocument();
  });

  it("closes the menu when overlay is clicked", () => {
    (usePathname as jest.Mock).mockReturnValue("/");
    render(<NavbarMobile />);
    fireEvent.click(screen.getByLabelText("Abrir menu"));
    const overlay = document.querySelector(".fixed.inset-0.z-40");
    if (overlay) {
      fireEvent.click(overlay);
    }
    expect(screen.getByLabelText("Abrir menu")).toBeInTheDocument();
  });

  it("applies the active class to the current link", () => {
    (usePathname as jest.Mock).mockReturnValue("/projects");
    render(<NavbarMobile />);
    fireEvent.click(screen.getByLabelText("Abrir menu"));
    const projectsLink = screen.getByText("Projetos");
    const span = projectsLink.querySelector("span");
    expect(span?.className).toMatch(/scale-x-100/);
  });
});