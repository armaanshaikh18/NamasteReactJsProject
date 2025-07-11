import { act, fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/mockResData.json";
import Body from "./../components/Body";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      Promise.resolve(MOCK_DATA);
    },
  });
});

test("Should render Search with value", async () => {
  await act(async () => {
    render(<Body />);
  });

  const searchBtn = screen.getByRole("button", { text: "Search" });

  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: "pizza" });

  fireEvent.click(searchBtn);

  const cardData = screen.getAllByTestId("resData");

  expect(cardData.length).toBe(1);
});
