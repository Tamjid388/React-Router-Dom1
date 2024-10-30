

export default function About() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
        <h1 className="text-4xl font-bold mb-4 text-center text-blue-600">About Us</h1>
        <p className="text-lg text-gray-700 text-center max-w-xl">
          Welcome to our application! We are dedicated to providing the best service
          to our users. Our goal is to connect people and make their lives easier.
          Thank you for being a part of our community!
        </p>
        <p className="text-lg text-gray-700 text-center mt-4">
          If you have any questions or feedback, feel free to reach out!
        </p>
      </div>
    );
  }