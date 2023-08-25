function WorkWithUs() {
  return (
    <section id="work-with-us" className="p-5 bg-gradient-to-r from-yellow-100 to-red-100">
          <h2 className="text-3xl font-bold mb-5 text-black">Work With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="card p-4 bg-white shadow-md hover:shadow-lg transition-shadow duration-300 rounded">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">About</h3>
                  <p className="text-gray-700">At ahead our goal is to make self-improvement fun and lasting. We know there's a way how to make it work. And that's what aHead is all about!.</p>
              </div>
              <div className="card p-4 bg-white shadow-md hover:shadow-lg transition-shadow duration-300 rounded">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Product</h3>
                  <p className="text-gray-700">Sure, you could spend ages reading books or sitting in seminars on how to become a better spouse, parent, or manager - like we did...</p>
              </div>
              <div className="card p-4 bg-white shadow-md hover:shadow-lg transition-shadow duration-300 rounded">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Open Vacancies</h3>
                  <ul className="text-gray-700">
                      <li>Senior Full-Stack Engineer</li>
                      <li>Senior Designer</li>
                      <li>Superstar Intern</li>
                  </ul>
              </div>
          </div>
      </section>
  );
}

export default WorkWithUs;
