import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error=useRouteError()
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-red-100">
        <h2 className="text-4xl font-bold text-red-600">Oops! Something went wrong.</h2>
        <p className="mt-4 text-lg text-gray-700">We couldn't find the page you were looking for.</p>
        <a href="/" className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500">
          Go to Home
        </a>
      </div>
    );
  }
  