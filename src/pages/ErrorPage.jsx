import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  // console.dir(error); // When using console.dir donot pass a console string identifier
  // That was the mistake I was doing when using dir. If I pass a string while using dir my object in the console won't get printed !!!
  const customErrorMessage =  "OOPs!!! Something went wrong. Try again later."
  const errorMessage = customErrorMessage || error?.error?.message;
  return (
    <div>
      <h2>{errorMessage}</h2>
    </div>
  );
};

export default ErrorPage;
