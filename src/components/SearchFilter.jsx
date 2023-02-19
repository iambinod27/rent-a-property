import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SearchFilter = () => {
  const [startDate, setStartDate] = useState(new Date());

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
                className="placeholder:text-xl focus:outline-none placeholder:text-black py-2 text-xl"
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
                className="focus:outline-none text-semibold"
                dateFormat="dd/MM/yyyy"
              />
            </label>
          </div>
          <div className="px-3 border-r-2">
            <label className="label p-0">
              <span className="uppercase font-semibold text-[#a3a3a3]">
                Price
              </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="$500 - $2,500"
                className="placeholder:text-xl focus:outline-none placeholder:text-black placeholder:uppercase py-2 text-xl"
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
              <input
                type="text"
                placeholder="Select"
                className="focus:outline-none placeholder:text-xl placeholder:text-black placeholder:uppercase py-2 text-xl"
              />
            </label>
          </div>
          <button type="submit" className="btn text-xl ">
            Search
          </button>
        </form>
      </div>
    </>
  );
};

export default SearchFilter;
