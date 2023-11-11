import { useEffect, useState } from "react";

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
  return <section className="flex w-full min-h-screen justify-center items-center">
    <div className="flex flex-col  items-center">
      <h1 className="text-4xl font-extrabold m-4">Experience</h1>
      <div className="w-20 h-1 bg-teal-600"></div>
    </div>
  </section>;
}

export default App;
