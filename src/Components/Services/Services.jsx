import React from 'react'

export default function Services() {
  return (
    <div className="p-6">
    <h1 className="text-3xl font-bold mb-4">Our Services</h1>
    <p className="mb-6">
      We provide a range of services designed to meet your needs and help you achieve your goals. Our dedicated team is committed to delivering quality and excellence in every project.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="service-item bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-2">Service 1</h2>
        <p>
          Brief description of Service 1, outlining its key benefits and features. This service helps customers by [insert specific advantages].
        </p>
      </div>

      <div className="service-item bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-2">Service 2</h2>
        <p>
          Brief description of Service 2, highlighting what makes it unique and valuable. Our clients appreciate this service because [insert specific advantages].
        </p>
      </div>

      <div className="service-item bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-2">Service 3</h2>
        <p>
          Brief description of Service 3, explaining its importance and how it supports our customers' needs. This service is particularly beneficial for [insert specific advantages].
        </p>
      </div>

      <div className="service-item bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-2">Service 4</h2>
        <p>
          Brief description of Service 4, focusing on its advantages and potential impact. Many of our clients find this service to be essential for [insert specific advantages].
        </p>
      </div>
    </div>
  </div>
  )
}
