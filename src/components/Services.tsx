const Services = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#044E83] mb-4">Services</h2>
          <p className="text-xl text-gray-600">What I Offer</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Web Development */}
          <div className="p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-[#044E83] mb-3">Web Development</h3>
            <p className="text-gray-600">
              Modern websites built with [Next.js](https://nextjs.org/) for speed and scalability.
            </p>
          </div>

          {/* E-commerce Development */}
          <div className="p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-[#044E83] mb-3">E-commerce Development</h3>
            <p className="text-gray-600">
              Custom-built online stores to help you grow your business.
            </p>
          </div>

          {/* Business Plans */}
          <div className="p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-[#044E83] mb-3">Business Plans</h3>
            <p className="text-gray-600">
              Comprehensive business plans to help launch and grow your venture.
            </p>
          </div>

          {/* Sponsorship Proposals */}
          <div className="p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-[#044E83] mb-3">Sponsorship Proposals</h3>
            <p className="text-gray-600">
              Professional sponsorship proposals to help secure partnerships and funding.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;