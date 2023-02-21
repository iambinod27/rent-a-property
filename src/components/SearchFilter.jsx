import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";

const SearchFilter = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { value: "Movable", label: "Movable" },
    { value: "Immovable", label: "Tangible" },
    { value: "Real", label: "Real" },
    { value: "Tangible", label: "Tangible" },
    { value: "Intangible", label: "Intangible " },
  ];

  return (
    <>
      <div className="border rounded-md p-10 my-10">
        <form className="flex items-center">
          <div className="border-r-2">
            <label className="label p-0">
              <span className="uppercase font-semibold text-[#a3a3a3]">
                Location
              </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="KATHMANDU, NEPAL"
                className="placeholder:text-xl focus:outline-none placeholder:text-semibold 
                text-semibold  placeholder:text-black py-2 text-xl"
              />
            </label>
          </div>
          <div className="px-3 border-r-2">
            <label className="label p-0">
              <span className="uppercase font-semibold text-[#a3a3a3]">
                when
              </span>
            </label>
            <label className="input-group">
              <DatePicker
                closeOnScroll={true}
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="focus:outline-none text-semibold py-2"
                dateFormat="dd/MM/yyyy"
              />
            </label>
          </div>
          <div className="px-3 border-r-2 ">
            <label className="label p-0">
              <span className="uppercase font-semibold text-[#a3a3a3]">
                Price
              </span>
            </label>
            <label className="input-group">
              <input
                type="range"
                min="0"
                max="100"
                className="range range-secondary py-2"
              />
            </label>
          </div>
          <div className="px-2">
            <label className="label p-0">
              <span className="uppercase font-semibold text-[#a3a3a3]">
                Property Type
              </span>
            </label>
            <label className="input-group">
              <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
                className="uppercase font-semibold w-52"
                placeholder="Select Type"
                isSearchable={true}
              />
            </label>
          </div>
          <button type="submit" className="btn text-xl flex-auto py-2">
            Search
          </button>
        </form>
      </div>
    </>
  );
};

export default SearchFilter;
