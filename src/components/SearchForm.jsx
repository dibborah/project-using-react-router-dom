import { Form } from "react-router-dom";

export const loader = ({ request }) => {
  const url = new URL(request.url);
  const searchParams = url.searchParams.get("search");
  console.log(searchParams);
  return null;
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
