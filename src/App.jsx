import {
  ArrowRightIcon,
  ChatBubbleBottomCenterIcon,
  GlobeAltIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import "./App.css";
import logo from "./assets/logo-svg.svg";

function App() {
  return (
    <>
      <div className="content-row  bg-gray-900">
        <div className="content-div min-h-screen flex flex-col gap-5 p-6">
          <div className="flex flex-col md:flex-row"></div>
          <div className="flex justify-between gap-5 items-center">
            <div>
              <img src={logo} className="w-8 opacity-80 aspect-square" />
            </div>

            <div className="text-gray-500 flex items-center gap-5">
              <div className="uppercase">en</div>
              <GlobeAltIcon className="w-6" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex flex-col gap-5 max-w-full w-full">
              <div className="text-4xl text-white capitalize font-medium flex flex-col gap-3 py-4 ">
                <div>Eccobell Hotel</div>
                <div>Shoreditch</div>
              </div>

              <div className="py-5 text-blue font-bold text-3xl">Room 301</div>

              <div className="text">
                Welcome to the Guest Code. This is your home for all the
                information and services you may require during your stay.
              </div>

              <div className="flex justify-center  w-full bg-blue text-white gap-6 rounded-lg px-4 py-2.5">
                <ChatBubbleBottomCenterIcon className="w-4" />
                <div>Ask Belle, your guest assistant</div>
              </div>
            </div>

            <div className="flex flex-col gap-5 bg-white bg-opacity-60 rounded-xl w-[100.1vw] -mx-[10vw] md:-mx-0 min-h-screen md:min-h-auto w-full">
              <div className="bg-white rounded-tl-xl rounded-tr-xl flex justify-between p-4 text-gray-900">
                <div className="flex gap-3 items-center">
                  <PhoneIcon className="w-4" />
                  <div className="text-gray-900">Hotel phone</div>
                </div>

                <ArrowRightIcon className="w-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
