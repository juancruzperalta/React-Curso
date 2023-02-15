const { render, screen } = require("@testing-library/react");
const { MemoryRouter } = require("react-router-dom");
const { MainApp } = require("../../src/09-useContext/MainApp");

describe("Pruebas en <MainApp/>", () => {
  test("debe de mostrar el HomePage", () => {
    render(
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>
    );
    expect(screen.getByText("HomePage")).toBeTruthy();
    // screen.debug();
  });
  test("debe de mostrar el LoginPage", () => {
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <MainApp />
      </MemoryRouter>
    );
    expect(screen.getByText("LoginPage")).toBeTruthy();
    // screen.debug();
  });
  test("debe de mostrar el AboutPage", () => {
    render(
      <MemoryRouter initialEntries={["/about"]}>
        <MainApp />
      </MemoryRouter>
    );
    expect(screen.getByText("AboutPage")).toBeTruthy();
    // screen.debug();
  });
});
