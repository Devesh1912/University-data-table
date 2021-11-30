import React, { useState } from "react";
import { useEffect } from "react";
import { countries } from "../countries";
import { Select } from "antd";
import UniversityTable from "./UniversityTable";
import Spinner from "../components/Spinner"
import { PageHeader } from "antd";

const { Option } = Select;

function University() {
  const [currentCountry, setCurrentCountry] = useState();
  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(false)

  const updateUniversity = async (country) => {
    setLoading(true)
    const url = `http://universities.hipolabs.com/search?country=${country}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setUniversities(parsedData);
    setLoading(false)
  };

  useEffect(() => {
    updateUniversity(currentCountry);
  }, [currentCountry]);

  const handleChange = (countryName) => {
    console.log(countryName);
    setCurrentCountry(countryName);
  };

  return (
    <>
    <PageHeader className="site-page-header   "
    onBack={() => null}
    title="University Data Table"
    
  />
    
    <div className="container mt-5 ">
    
      <Select className="position-relative top-5 start-50 translate-middle "
        showSearch
        style={{ width: 500 }}
        placeholder="Select a country"
        onChange={handleChange}
      >
        
        {countries.map((country) => (
          <Option value={country.name}>{country.name}</Option>
        ))}
      </Select>
      {loading?<Spinner/>:<UniversityTable 
        universities={universities}
        currentCountry={currentCountry}
      />}
      
      
    </div>
    </>
  );
}

export default University;
