import "./App.css";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import {
  HotelInfoIcon,
  InRoomDiningIcon,
  SpaBookingIcon,
  TaxiIcon,
  FoodDeliveryIcon,
  ThingsToDoIcon,
  PhoneIcon,
} from "./assets/icons/index.jsx";
import List from "./components/List";

function App() {
  const list = [
    { label: "Hotel phone", icon: <PhoneIcon /> },
    { label: "View hotel information", icon: <HotelInfoIcon /> },
    { label: "In room dining", icon: <InRoomDiningIcon /> },
    { label: "Spa bookings", icon: <SpaBookingIcon /> },
    { label: "Book a taxi", icon: <TaxiIcon /> },
    { label: "Food delivery", icon: <FoodDeliveryIcon /> },
    { label: "Things to do", icon: <ThingsToDoIcon /> },
  ];

  return (
    <div className="md:content-row bg-gray-900 min-h-screen flex justify-center w-full">
      <div className="md:content-div  flex flex-col gap-5 pt-6 h-full ">
        <div className="px-6 pb-6">
          <Header />
        </div>

        <div className="flex-grow sm:flex-grow-0 flex flex-col md:flex-row gap-12 lg:gap-24 md:min-h-[calc(100vh-7rem)] items-center md:justify-center">
          <div className="px-6 flex flex-col md:flex-row gap-12 w-full md:max-w-md">
            <div className="flex justify-center">
              <Welcome />
            </div>
          </div>

          <div className=" flex justify-center  md:max-w-md  bg-grayBg p-6 lg:p-12 rounded-tl-3xl rounded-tr-3xl md:rounded-3xl w-full">
            <div className="flex flex-col gap-1 max-w-md w-full">
              {list.map((l, index) => (
                <List
                  list={l}
                  key={index}
                  first={index === 0}
                  last={index === list.length - 1}
                  arrowType="arrow"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
