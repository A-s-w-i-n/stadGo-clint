import React, { useEffect, useState } from "react";
import UserNav from "../navbar/userNav";
import api from "../../servises/api/axios interceptor ";
import { OrgDetail } from "../../domain/modals/organization";

const UserProfile = () => {
  const [datas, setData] = useState<OrgDetail | null>(null);
  const user = JSON.parse(localStorage.getItem("user") as string);
  const check = user.LoginCheck;
  const email = user.LoginCheck.email;

  const handleFecthOrg = async () => {
    const { data } = await api.post("/org/fetchOrg", { email });
    setData(data.fetchOrg);
    console.log();
    

  };
  useEffect(() => {
    handleFecthOrg();
  }, []);

  return (
    <div>
      <UserNav />
      <div className="bg-white  w-full h-screen  flex   ">
        <div className="bg-gray-400 bg-opacity-20 w-[68rem] fixed rounded-xl ml-48 h-[36rem] m flex">
          <div className="w-[30%] p-5">
            <div className="relative mt-1 h-[540px] flex w-100  flex-col jus rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className=" flex relative ml-24  mx-4 mt-6 h-56 w-72 items-center justify-center overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                <img src="" alt="img-blur-shadow" className="h-56 w-72" />
              </div>
              <div className="p-6">
                <h5 className="mb-2 text-center block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  Profile
                </h5>

                <p className="block font-sans text-center mt-4 text-base font-light leading-relaxed text-inherit antialiased">
                  <span className="font-extrabold ">Name : </span>{" "}
                  {check.firstname + " " + check.lastname}
                </p>
                <p className="block font-sans text-center mt-4 text-base font-light leading-relaxed text-inherit antialiased">
                  <span className="font-extrabold ">Email : </span>{" "}
                  {check.email}
                </p>
                <p className="block font-sans text-center mt-4 text-base font-light leading-relaxed text-inherit antialiased">
                  <span className="font-extrabold ">Phone : </span>{" "}
                  {check.phone}
                </p>
              </div>
              <div className="flex p-6 items-center justify-center pt-0">
                <button
                  className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                  data-ripple-light="true"
                >
                  more
                </button>
              </div>
            </div>
          </div>
          <div className="w-[35%] ml-48 p-4 pt-6">
            <div className="relative ml-6 flex w-96 h-64 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="p-6 ">
                <h5 className="mb-2 block text-center font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  MY ORGANIZATION
                </h5>
                <div>
                  <p className="block font-sans text-center mt-4 text-base font-light leading-relaxed text-inherit antialiased">
                    <span className="font-extrabold ">Name : </span>{" "}
                    {datas?.organizationname}
                  </p>
                  <p className="block font-sans text-center mt-4 text-base font-light leading-relaxed text-inherit antialiased">
                    <span className="font-extrabold ">Name : </span>{" "}
                    {datas?.sportstype}
                  </p>
                  <p className="block font-sans text-center mt-4 text-base font-light leading-relaxed text-inherit antialiased">
                    <span className="font-extrabold ">Name : </span>{" "}
                    {datas?.country}
                  </p>
                </div>
              </div>
              <div className="p-6 justify-center items-center flex pt-0">
                <button
                  className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                  data-ripple-light="true"
                >
                  Read More
                </button>
              </div>
            </div>

            <div className="relative ml-6 mt-7 flex w-96 h-64 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="p-6">
                <h5 className="mb-2 block text-center font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  PURCHASED STADIUMS
                </h5>
                <p className="block font-sans text-center mt-4 text-base font-light leading-relaxed text-inherit antialiased">
                  <span className="font-extrabold ">Name : </span> The place is
                  close to
                </p>
                <p className="block font-sans text-center mt-4 text-base font-light leading-relaxed text-inherit antialiased">
                  <span className="font-extrabold ">Name : </span> The place is
                  close to
                </p>
                <p className="block font-sans text-center mt-4 text-base font-light leading-relaxed text-inherit antialiased">
                  <span className="font-extrabold ">Name : </span> The place is
                  close to
                </p>
              </div>
              <div className="p-6 justify-center items-start flex pt-0">
                <button
                  className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                  data-ripple-light="true"
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
