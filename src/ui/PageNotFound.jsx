import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <>
      <div className="h-screen text-3xl p-10">
        {' '}
        <p>
          ❌ ❌ <br />
          Sorry, the page you requested for was not found! <br />
          Pls confirm the website address and try again.
        </p>
        <p className="mt-4">
          <Link to="/" className="underline text-blue-600">
            Click here
          </Link>{' '}
          to visit{' '}
          <Link to="/" className="underline text-blue-600">
            homepage.
          </Link>
        </p>
      </div>
    </>
  );
}

export default PageNotFound;
