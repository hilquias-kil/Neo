import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Neo from "./index";
import { setupServer } from "msw/node";
import { rest } from "msw";

const handlers = [
  rest.get("https://api.nasa.gov/neo/rest/v1/neo/undefined", (req, res, ctx) => {
    return res(
      ctx.json({
        name: "neo 01",
        designation: "01",
        orbital_data: {
          orbit_determination_date: ""
        }
      })
    );
  }),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("should show neo with api data", async () => {
  render(<Neo />, { wrapper: MemoryRouter, });

  await waitFor(() => screen.findByText('neo 01'))

  expect(screen.getByText('neo 01')).toBeInTheDocument()
  expect(screen.getByText('01')).toBeInTheDocument()
});
