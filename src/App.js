import { useEffect, useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const url = "https://course-api.com/react-tabs-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  async function fetchJobs() {
    const response = await fetch(url);
    const newJobs = await response.json();

    setJobs(newJobs);
    setLoading(false);
  }

  useEffect(() => {
    fetchJobs();
  }, []);
  if (loading) {
    return (
      <section className="flex w-full min-h-screen justify-center items-center">
        <h1 className="text-4xl font-extrabold">Loading...</h1>
      </section>
    );
  }
  const { company, dates, duties, title } = jobs[value];
  return (
    <section className="flex flex-col w-full min-h-screen justify-center items-center">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-extrabold mb-4">Experience</h1>
        <div className="w-20 h-1 bg-teal-600"></div>
      </div>
      <div className="flex justify-between mx-20 items-center ">
        {/* btn container */}
        <div>
          {jobs.map((item, index) => {
            return (
              <button
                className={`flex btn flex-col justify-center m-6 items-center pl-6  ml-6 transform text-2xl hover:text-teal-600 ${
                  index === value && "text-teal-600 border-l-4 border-teal-600"
                }`}
                onClick={() => {
                  setValue(index);
                }}
                key={index}
              >
                {item.company}
              </button>
            );
          })}
        </div>
        {/* job info */}
        <article className=" p-12 leading-12">
          <h3 className="text-2xl my-8">{title}</h3>
          <h4 className="border bg-slate-200 text-slate-700 font-bold  w-20 h-full text-center ">{company}</h4>
          <p className="my-4 text-slate-700 tracking-widest">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className="flex justify-center items-center ">
                <FaAngleDoubleRight className="text-teal-600"></FaAngleDoubleRight>
                <p className="mx-12 text-slate-700 text-lg">{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
}

export default App;
