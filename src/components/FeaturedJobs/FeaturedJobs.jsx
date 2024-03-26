import { useEffect, useState } from "react";
import Jobs from "../Jobs/Jobs";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);

  // this is not the best way to show or load all data

  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((response) => response.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div>
      <div>
        <h2 className="text-5xl text-center">Featured Jobs {jobs.length} </h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit nobis
          magnam esse repellat consequuntur eos mollitia quisquam corrupti qui
          delectus sit reprehenderit optio consequatur explicabo, in eum quae
          ratione quos?
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {
            jobs.slice(0,dataLength).map((job) => (
            <Jobs key={job.id} job={job}></Jobs>
        ))
        }

        <div className={jobs.length > dataLength ?  "hidden" : " "}>
           <button onClick={()=>setDataLength(jobs.length)} className="btn bg-primary">Show All Jobs</button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;
