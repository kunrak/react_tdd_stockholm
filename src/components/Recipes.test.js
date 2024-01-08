import { render, screen } from "@testing-library/react"
import Recipes from "./Recipes"

import { setupServer } from 'msw/node'
import { rest } from "msw";

const allRecipes = [
    { id: 1, title: 'Burger' },
    { id: 2, title: 'French toast' },
    { id: 3, title: 'Salmon' },
];

const server = setupServer(
    rest.get('/api/recipes', (req, res, cts) => {
        return res(ctx.json({ recipes: allRecipes }))
    })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('renders the heading and form elements and recipe list', async () => {
    render(<Recipes />);

    expect(screen.getByRole('heading')).toHaveTextContent("Recipe Finder");
    expect(screen.getByPlaceholderText('Enter an ingredient to find recipes...'));
    expect(screen.getByRole('button')).toHaveTextContent('Find');

    const listItems = await screen.findByRole('listitem');
    expect(listItems).toHaveLength(3);
    expect(listItems[0]).toHaveTextContent("Burger");
    expect(listItems[1]).toHaveTextContent("French toast");
    expect(listItems[2]).toHaveTextContent("Salmon");

})