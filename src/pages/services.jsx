import React from "react";
import { useParams, Link } from "react-router-dom";
import { services } from "../utils";

function ServicesDetail() {
  const { id } = useParams();
  const service = services.find((item) => item.id === parseInt(id));

  if (!service) {
    return <div className="text-[#f9f4e8] p-8">Service not found.</div>;
  }

  return (
    <div className="bg-[#1f1f1f] text-[#f9f4e8] min-h-screen p-4 sm:p-8">
      {/* Back Button */}
      <Link
        to="/"
        className="  text-[#f9f4e8] flex items-center gap-3 mb-20 hover:underline text-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="36"
          height="36"
          fill="#f9f4e8"
        >
          <path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 11V8L8 12L12 16V13H16V11H12Z"></path>
        </svg>{" "}
        <span className="font-bold text-[20px]">Back</span>
      </Link>

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">{service.title}</h1>
      <p className="mb-6 text-sm sm:text-base">{service.overview}</p>

      {/* Services Offered */}
      <div className="mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">
          Services Offered
        </h2>
        <ul className="list-disc list-inside space-y-4">
          {service.Services_Offered.map((offer, index) => (
            <li key={index}>
              <span className="font-bold">{offer.title}</span>{" "}
              <span className="text-sm sm:text-base">{offer.description}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Benefits */}
      <div className="mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Benefits</h2>
        <ul className="list-disc list-inside space-y-4">
          {service.Benefits.map((benefit, index) => (
            <li key={index}>
              <span className="font-bold">{benefit.title}</span>{" "}
              <span className="text-sm sm:text-base">
                {benefit.description}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Examples */}
      <div>
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Examples</h2>
        <ul className="list-disc list-inside space-y-4">
          {service.Examples.map((example, index) => (
            <li key={index}>
              <span className="font-bold">{example.title}</span>{" "}
              <span className="text-sm sm:text-base">
                {example.description}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ServicesDetail;
