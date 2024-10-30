import { Link, Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


export default function Home() {
  return (
    <div>
        <Header></Header>
        <main className="flex-grow p-8">
        <section className="hero bg-blue-500 text-white p-6 rounded-lg shadow-lg mb-8">
          <h1 className="text-3xl font-bold">Welcome to Our Website</h1>
          <p className="mt-4 hidden">Your go-to platform for quality content, amazing products, and innovative solutions.</p>
        </section>

        <section className="about mb-8">
          <h2 className="text-2xl font-semibold mb-2">About Us</h2>
          <p className="text-gray-700">
            We are dedicated to providing exceptional service and high-quality products. Our team works tirelessly to bring the best experience to our users.
          </p>
        </section>

        <section className="services mb-8">
          <h2 className="text-2xl font-semibold mb-2">Our Services</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Service 1 - Brief description</li>
            <li>Service 2 - Brief description</li>
            <li>Service 3 - Brief description</li>
<Link to="/services">
<button className="btn btn-primary mt-4 px-7">View All</button>
</Link>
           
          </ul>
        </section>

        <section className="contact">
          <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
          <p className="text-gray-700">
            Have questions? Reach out to us at <a href="mailto:contact@example.com" className="text-blue-500 underline">contact@example.com</a>
          </p>
        </section>
      </main>
        <Outlet></Outlet>
        <Footer></Footer>
        
        
    </div>
  )
}
