import { Form } from "react-router-dom";

const SearchForm = ({searchTerm}) => {
  return (
    <Form method="GET">
      <input type="text" name="search" id="search" defaultValue={searchTerm} />
      <button type="submit">Search</button>
    </Form>
  );
};

export default SearchForm;
