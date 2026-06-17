function Stats() {
  const stats = [
    {
      number: "5+",
      title: "Projects Built",
    },
    {
      number: "10+",
      title: "Technologies Learned",
    },
    {
      number: "100+",
      title: "Hours of Coding",
    },
    {
      number: "1+",
      title: "Years Learning",
    },
  ];

  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((stat) => (
            <div
              key={stat.title}
              className="
                text-center
                bg-white/10
                p-8
                rounded-2xl
                backdrop-blur-sm
                hover:bg-white/20
                transition
              "
            >
              <h2 className="text-5xl font-bold mb-3">
                {stat.number}
              </h2>

              <p className="text-lg">
                {stat.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Stats;