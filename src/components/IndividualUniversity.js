import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const IndividualUniversity = () => {
  const { country, name } = useParams();

  const [university, setUniversity] = useState();

  useEffect(() => {
    const getData = async () => {
      console.log(country, name);
      const data = await fetch(
        `http://universities.hipolabs.com/search?name=${name}&country=${country}`
      );

      const university = await data.json();

      console.log(university);
      setUniversity(university[0]);
    };

    getData();
  }, []);

  return (
    <div className="container mt-5  ">
      <ul className="list-group list-group-flush  ">
        <li className="list-group-item fs-5 "> <h2>Name</h2> {university?.name}</li>
        <li className="list-group-item fs-5"><h3>Country</h3>{university?.country}</li>
        <li className="list-group-item fs-5"><h3>Country Code</h3>{university?.alpha_two_code}</li>
        <li className="list-group-item fs-5"><h3>State</h3>{university ?.state ? university["state-province"] : "Not available"}</li>
        <li className="list-group-item fs-5"><h3>Domain</h3>{university?.domains ? university.domains[0] : "Not Available"}</li>
       <li className="list-group-item fs-5"><h3>Web Page</h3>{university?.webpages ? university.webpages[0] : "Not Available"}</li>
      </ul>

      
    </div>
  );
};

export default IndividualUniversity;
