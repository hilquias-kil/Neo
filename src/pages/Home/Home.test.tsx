import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "./index";
import { setupServer } from "msw/node";
import { rest } from "msw";

const handlers = [
  rest.get("https://api.nasa.gov/neo/rest/v1/feed", (req, res, ctx) => {
    return res(
      ctx.json({
        near_earth_objects: {
          "2021-04-15": [
            {
              id: "123",
              name: "test 1",
              estimated_diameter: {
                meters: {
                  estimated_diameter_min: 0,
                  estimated_diameter_max: 0,
                },
              },
            },
          ],
        },
      })
    );
  }),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("should show list with api data", async () => {
  render(<Home />, { wrapper: MemoryRouter });

  await waitFor(() => screen.findByText('test 1'))

  expect(screen.getByText('test 1')).toBeInTheDocument()
  expect(screen.getByText('2021-04-15')).toBeInTheDocument()
});
