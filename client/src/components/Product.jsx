import React from "react";
import { Link } from "react-router-dom";
import data from "../data";
export default function Tests(props) {
  const loadcontent = props.load;
  return (
    <div className="px-5 py-5 flex flex-wrap flex-col container">
      <h1 className="text-6xl font-bold text-white">Products</h1>
      <div
        id="test-container"
        className="container mt-5 p-3  rounded-t-3xl inline-flex flex-wrap flex-row"
      >
        <div
          className="bg-gradient-to-r mt-14 from-teal-300 via-green-100 to-white max-w-sm m-2 bg-white hover:scale-105 
         rounded-lg shadow-md"
        >
          <Link onClick={loadcontent} to="/about">
            <img
              className=" w-96 h-64 object-cover rounded-t-lg transition duration-300 transform hover:blur-md"
              src="https://www.standardhealthcare.in/wp-content/uploads/2018/07/Wheel-Chair-Standing.jpg"
              alt=""
            />
          </Link>
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              WheelChair
            </h5>
          </div>
        </div>
        <div className="bg-gradient-to-r mt-14 from-teal-300 via-green-100 to-white max-w-sm m-2 bg-white hover:scale-105  rounded-lg shadow-md">
          <Link onClick={loadcontent} to="/about">
            <img
              className=" w-96 h-64 object-cover rounded-t-lg"
              src="https://www.shhc.com.au/assets/thumbL/P-12173.jpg?20211021070924"
              alt=""
            />
          </Link>
          <div className="p-5 ">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Crutches
            </h5>
          </div>
        </div>
        <div className="bg-gradient-to-r mt-14 from-teal-300 via-green-100 to-white max-w-sm m-2 bg-white hover:scale-105  rounded-lg shadow-md ">
          <Link onClick={loadcontent} to="/about">
            <img
              className=" w-96 h-64 object-cover rounded-t-lg"
              src="https://5.imimg.com/data5/RR/WA/VN/SELLER-2076180/walker-rollator-adult--500x500.jpg"
              alt=""
            />
          </Link>
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Walker Frame
            </h5>
          </div>
        </div>
      </div>
      <div
        id="test-container"
        className="container mt-5 p-3  rounded-t-3xl flex flex-wrap flex-row"
      >
        <div className="bg-gradient-to-r mt-14 from-teal-300 via-green-100 to-white max-w-sm m-2 bg-white hover:scale-105  rounded-lg shadow-md">
          <Link onClick={loadcontent} to="/about">
            <img
              className=" w-96 h-64 object-cover rounded-t-lg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgkbdJqZm_6pVTJ_cN81aBdsVYm_fE_PHdcg&usqp=CAU"
              alt=""
            />
          </Link>
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Oximeter
            </h5>
          </div>
        </div>
        <div className="bg-gradient-to-r mt-14 from-teal-300 via-green-100 to-white max-w-sm m-2 bg-white hover:scale-105  rounded-lg shadow-md">
          <Link onClick={loadcontent} to="/about">
            <img
              className=" w-96 h-64 object-cover rounded-t-lg"
              src="https://cdn.moglix.com/p/D5yn6qSBgd7kT-xxlarge.jpg"
              alt=""
            />
          </Link>
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Hospital Bed
            </h5>
          </div>
        </div>
        <div className="bg-gradient-to-r mt-14 from-teal-300 via-green-100 to-white max-w-sm m-2 bg-white hover:scale-105  rounded-lg shadow-md">
          <Link onClick={loadcontent} to="/about">
            <img
              className=" w-96 h-64 object-cover rounded-t-lg"
              src="https://5.imimg.com/data5/GX/HI/MY-15598585/digital-bp-apparatus.jpg"
              alt=""
            />
          </Link>
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Blood Pressure Set
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}