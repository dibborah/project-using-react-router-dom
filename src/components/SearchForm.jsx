import { Form } from "react-router-dom";
import { apiKey } from "../contants";
import axios from "axios";

export const loader = async ({ request }) => {
  const url = new URL(request.url);
  const searchParams = url.searchParams.get("search");
  const response = await axios.get(
    `http://www.omdbapi.com/?s=${searchParams}&apikey=${apiKey}`
  );
  return { movieApiResponse: response.data };
};

const SearchForm = () => {
  return (
    <Form method="GET">
      <input type="text" name="search" id="search" />
      <button type="submit">Search</button>
    </Form>
  );
};

export default SearchForm;
