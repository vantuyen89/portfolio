import Image from "next/image";
import React from "react";

const AboutMe = () => {
  const personal = {
    name: "Nguyen Van Tuyen",
    age: 22,
    gender: "Male",
    address: "Thach That , Ha Noi",
    email: "vantuyenfpl@gmail.com",
    phone: "0326892004",
  };
  return (
    <div className="w-full">
      <h3 className="text-2xl font-semibold text-center py-2">About Me</h3>
      <div className="grid grid-cols-1 gap-4">
        <div className="w-full flex flex-row justify-between bg-[#2d2d2d] rounded-[10px] p-4 col-span-1 gap-2 items-center">
          <div className="flex flex-col gap-2">
            <p>My Name : {personal.name}</p>
            <p>Age : {personal.age}</p>
            <p>Gender : {personal.gender}</p>
            <p>Email : {personal.email}</p>
            <p>Phone : {personal.phone}</p>
            <p>Address : {personal.address}</p>
          </div>
          <div>
            <Image
              src={"/images/imgcv.jpg"}
              alt="cv"
              width={150}
              height={200}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
