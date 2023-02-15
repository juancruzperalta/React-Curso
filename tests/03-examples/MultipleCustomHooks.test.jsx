const { render, screen, fireEvent } = require("@testing-library/react");
const { MultipleCustomHooks } = require("../../src/03-examples");
const { useCounter } = require("../../src/hooks/useCounter");
const { useFetch } = require("../../src/hooks/useFetch");

jest.mock("../../src/hooks/useFetch");
jest.mock("../../src/hooks/useCounter");

describe("Pruebas en <MultipleCustomHooks/>", () => {
  const mockIncrement = jest.fn();

  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("debe de mostrar el componente por defecto", () => {
    useFetch.mockReturnValue({ data: null, IsLoading: true, hasError: null });

    render(<MultipleCustomHooks />);

    const nextButton = screen.getByRole("button", { name: "Next Quote" });

    // console.log(nextButton.disabled);
    expect(nextButton.disabled).toBeTruthy();
    screen.debug();
  });

  test("debe de mostrar un Quote", () => {
    useFetch.mockReturnValue({
      data: [{ author: "Fernando", quote: "Hola Mundo" }],
      IsLoading: false,
      hasError: null,
    });
    render(<MultipleCustomHooks />);

    expect(screen.getByText("Hola Mundo")).toBeTruthy();

    expect(screen.getByText("Fernando")).toBeTruthy();

    const nextButton = screen.getByRole("button", { name: "Next Quote" });

    expect(nextButton.disabled).toBeFalsy();
  });

  test("debe de llamar la función de incrementar", () => {
    useFetch.mockReturnValue({
      data: [{ author: "Fernando", quote: "Hola Mundo" }],
      IsLoading: false,
      hasError: null,
    });
    render(<MultipleCustomHooks />);

    const nextButton = screen.getByRole("button", { name: "Next Quote" });
    fireEvent.click(nextButton);

    expect(mockIncrement).toHaveBeenCalled();
  });
});
