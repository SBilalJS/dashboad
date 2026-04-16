import { render, screen } from "@testing-library/react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "./Header";

const renderHeader = (props) =>
  render(
    <ThemeProvider theme={createTheme()}>
      <Header {...props} />
    </ThemeProvider>
  );

describe("Header", () => {
  test("renders the provided title and subtitle", () => {
    renderHeader({
      title: "Dashboard",
      subtitle: "Welcome to your dashboard",
    });

    expect(
      screen.getByRole("heading", { name: "Dashboard", level: 2 })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: "Welcome to your dashboard",
        level: 5,
      })
    ).toBeInTheDocument();
  });

  test("updates the displayed text when props change", () => {
    renderHeader({
      title: "Contacts",
      subtitle: "Manage your contact records",
    });

    expect(screen.getByText("Contacts")).toBeInTheDocument();
    expect(screen.getByText("Manage your contact records")).toBeInTheDocument();
  });
});