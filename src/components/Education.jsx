function Education() {
  return (
    <section
      id="education"
      className="py-20 px-6 bg-gray-50"
    >
      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-4">
          Education
        </h2>

        <p className="text-center text-gray-600 mb-12">
          My academic journey and qualifications.
        </p>

        <div className="space-y-4">

          <div
            className="
              bg-white
              p-8
              rounded-2xl
              shadow-md
              hover:shadow-xl
              transition-all
              duration-300
            "
          >
            <div className="flex flex-col md:flex-row md:justify-between">

              <div>
                <h3 className="text-2xl font-bold text-blue-600">
                  Bachelor's Degree
                </h3>

                <p className="text-lg text-black-700 mt-2">
                  Ramco Institute of Technology
                </p>

                <p className="text-black-500 mt-2">
                  <b>Computer Science and Engineering</b>
                </p>
              </div>

              <div className="mt-4 md:mt-0">
                <span
                  className="
                    bg-green-100
                    text-green-700
                    px-4
                    py-2
                    rounded-full
                  "
                >
                  Completed - (2022 - 2026)
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Education;