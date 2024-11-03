import ChatBubbleIcon from "../assets/icons/ChatBubbleIcon";

const Welcome = () => {
  return (
    <div className="flex flex-col gap-5 max-w-full w-full max-w-sm">
      <div className="text-3xl md:text-4xl lg:text-5xl text-white capitalize font-medium flex flex-col gap-3 ">
        <div>Eccobell Hotel</div>
        <div>Shoreditch</div>
      </div>

      <div className=" text-blue font-bold text-3xl md:text-4xl">Room 301</div>

      <div className="text lg:text-lg">
        Welcome to the Guest Code. This is your home for all the information and
        services you may require during your stay.
      </div>

      <div className="flex justify-center  w-full bg-blue text-white gap-6 rounded-lg px-4 py-2.5 lg:py-3.5">
        <ChatBubbleIcon className="" />
        <div>Ask Belle, your guest assistant</div>
      </div>
    </div>
  );
};

export default Welcome;
