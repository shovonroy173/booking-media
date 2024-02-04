import "./header.css";
import HotelIcon from "@mui/icons-material/Hotel";
import FlightIcon from "@mui/icons-material/Flight";
import CarRentalIcon from "@mui/icons-material/CarRental";
import AttractionsIcon from "@mui/icons-material/Attractions";
import HailIcon from "@mui/icons-material/Hail";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { DateRangePicker } from "react-date-range";
import { useState } from "react";
const Header = () => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  return (
    <div className="header">
      <div className="headerContainer ">
        <div className="headerList ">
          <div className="headerListItem active">
            <HotelIcon />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FlightIcon />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <CarRentalIcon />
            <span>Car Rental</span>
          </div>
          <div className="headerListItem">
            <AttractionsIcon />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <HailIcon />
            <span>Airport Taxis</span>
          </div>
        </div>
        <div className="headerText">
          <h1 className="headerLgText">Find your next stay</h1>
          <p className="headerSmText">
            Search deals on hotels, homes, and much more...
          </p>
        </div>
        <div className="headerSearch">
          <div className="headerSearchItem">
            {" "}
            <HotelIcon />
            <input
              type="text"
              placeholder="Where are going?"
              className="headerSearchInput"
            />
          </div>
          <div className="headerSearchItem">
            {" "}
            <CalendarMonthIcon />
            <span className="headerSearchInput" onClick={(()=>(setOpen(!open)))}>
                {`${format(date[0].startDate , "dd/MM/yy")} to ${format(date[0].endDate , "dd/MM/yyyy")}`}
            </span>
            {open && <DateRangePicker 
            editableDateInputs={true}
            onChange={((item)=>(setDate([item.selection])))}
            // moveRangeOnFirstSelection={false}
            ranges={date}
            className="date"
            minDate={new Date()}
            />}
          </div>
          <div className="headerSearchItem">
            {" "}
            <HotelIcon />
            <input
              type="text"
              placeholder="Where are going?"
              className="headerSearchInput"
            />
          </div>
          <button className="headerSearchBtn">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
