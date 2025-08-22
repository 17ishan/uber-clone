import React, { useState , useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Calendar, Clock, MapPin, ChevronDown } from "lucide-react";


import emailjs from "@emailjs/browser";




export default function Home() {
  const [date, setDate] = useState(null);
  const [time, setTime] = useState("Now");
  const [open, setOpen] = useState(false);





  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_q946bvt",   // Service ID
        "template_cioikqg",  // Template ID
        form.current,
        "_J6ai-tPQgoYvQ3Ui"  //  Public Key
      )
      .then(
        (result) => {
          console.log("Message Sent:", result.text);
          alert("Email sent successfully!");
        },
        (error) => {
          console.log("Error:", error.text);
          alert("Failed to send email.");
        }
      );
    }




  


  const times = [
    "Now",
    "06:00 AM",
    "09:00 AM",
    "12:00 PM",
    "03:00 PM",
    "06:00 PM",
    "09:00 PM",
  ];

  return (
    <div className=" flex items-center max-w-full justify-center md:px-12 container  ">
      <div className=" mx-auto lg:w-[1142px] grid grid-cols-1 md:grid-cols-2 gap-12  items-center pt-32 pb-10 ">
        {/* Left Section */}
        <div className="space-y-6  ">
          {/* Location */}
          <div className="flex items-center space-x-2 text-sm">
            <MapPin className="w-4 h-4" />
            <span className="font-semibold">Bhopal, IN</span>
            <a href="#" className="underline text-sm">
              Change city
            </a>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-bold leading-tight ">
            Go anywhere with <br /> Uber
          </h1>

          <form ref={form} onSubmit={sendEmail} >

           {/* Form */}
          <div className="space-y-4 w-full max-w-md relative" >
            {/* Hidden inputs for emailjs template variables */}
            <input type="hidden" name="user_date" value={date ? date.toLocaleDateString() : ''} />
            <input type="hidden" name="user_time" value={time} />
            {/* Pickup */}
            <div className="relative">


              <div className="">
                    <svg width="20" height="10" className="ml-1  absolute  pl-3 w-8 h-[48px]  rounded-l-md bg-gray-100" viewBox="0 0 24 24" fill="none" data-baseweb="icon" >
                <title>search</title>
                <path
                  d="M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
                  fill="currentColor"
                ></path>
              </svg>
              
              </div>


              <input
                type="name"
                name="user_name"
                placeholder="Enter Name"
                className="w-[396px] ml-7  p-3 rounded-md bg-gray-100 focus:outline-none"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 px-7">
                <img src="./location-arrow.png" alt="" className="w-9 h-9" />
              </button>
            </div>
            <div className="h-[44px] bg-black w-[1.5px] absolute top-[35px] left-[24.5px] z-1"></div>

            {/* Dropoff */}
            <svg width="20" height="10"  className="ml-1   absolute  pl-3 w-8   h-[48px]  rounded-l-md bg-gray-100" viewBox="0 0 24 24" fill="none" data-baseweb="icon" >
              <title>search</title>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17 7H7v10h10V7Z"
                fill="currentColor"
              ></path>
            </svg>
            <input
              type="email"
              name="user_email"
              placeholder="Enter Email Id"
              className="w-[396px] p-3 ml-7 rounded-md bg-gray-100 focus:outline-none "
            />

            <div className="flex gap-43 pb-3 absolute ml-2 z-25 text-gray-500">
              <p>Date</p>
              <p>Time</p>
            </div>
            <br />
            <br />


            {/* Date & Time */}
            <div className="grid grid-cols-2 gap-2 w-[420px]  ">
              {/* Calendar Picker */}
              <div className="flex items-center space-x-2 text-gray-500 bg-gray-100 p-3 rounded-md w-[210px] ">
                <Calendar className="w-6 h-4" />
                <DatePicker
                  selected={date}
                  onChange={(d) => setDate(d)}
                  placeholderText="Select date"
                  className="bg-transparent outline-none cursor-pointer w-20  "
                  calendarClassName="custom-calendar"
                  dateFormat="dd/MM/yyyy"
                  
                />
              </div>
                
              {/* Time Picker */}
              
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setOpen(!open)}
                  className="flex items-center justify-between  bg-gray-100 p-3 rounded-md text-gray-500 w-[210px] "
                >
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{time}</span>
                  </div>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {open && (
                  <div className="absolute mt-1 w-[195px] max-h-[142px] overflow-y-auto text-sm font-base rounded-md bg-white shadow-md z-10">
                    {times.map((t) => (
                      <div
                        key={t}
                        onClick={() => {
                          setTime(t);
                          setOpen(false);
                        }}
                        className="px-3 py-2 cursor-pointer hover:bg-gray-100"
                      >
                        {t}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <br />

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:space-x-4 space-y-3 sm:space-y-0">
            <button type="submit" className="bg-black text-white px-6 py-3 rounded-lg font-semibold w-full sm:w-auto hover:bg-gray-900" >
              Send mail
            </button>
            <a
              href="#"
              className=" group text-gray-700 text-center sm:text-left"
            >
              Log in to see your recent activity
              <div className="w-full h-[1.6px] bg-gray-300 translate-y transition duration-700 "></div>
              <div className="w-full h-[1.6px] bg-black scale-x-0 origin-left group-hover:scale-x-100 translate-y transition duration-700 "></div>
            </a>
          </div>


          </form>

         
        </div>

        {/* Right Section (Image) */}
        <div className="flex justify-center">
          <img
            src="/homepageimage.webp"
            alt="Uber Illustration"
            className="rounded-lg w-full max-w-md md:max-w-lg lg:max-w-xl"
          />
        </div>
      </div>
    </div>
  );
}
