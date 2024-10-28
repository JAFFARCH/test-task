
import Image from "next/image";
import MenuIcon from "./Svgs/MenuIcon";
import Posts from "@/components/Posts";

export default function Home() {
  
  return (
    <div className=" min-h-screen min-w-screen flex flex-col items-center justify-center">
      <div className=" flex justify-between items-center px-10 mt-5 w-full" >
        <Image src={'/logo.png'} alt="logo" height={43} width={182} className="md:block hidden" />
        <Image src={'/logo.png'} alt="logo" height={23} width={102} className="md:hidden block" />
        <button className=" bg-[#4A3AFF] px-10 py-5 text-white rounded-full md:block hidden">
          Get Clone
        </button>
        <button className=" md:hidden block">
          <MenuIcon />
        </button>
      </div>

      <div className="flex justify-between items-center px-10 w-full">
        <div className=" flex flex-col justify-start items-start w-full gap-7 md:mt-28 mt-16">
          <Image src={'/Subtitle.png'} alt="logo" height={20} width={264} className=" md:block hidden" />
          <Image src={'/Subtitle.png'} alt="logo" height={18} width={234} className=" md:hidden block" />
          <h1 className=" text-[#170F49] font-bold md:text-5xl text-3xl md:w-9/12 w-full leading-normal">JustCV Resume Publishing Platform</h1>
          <p className=" text-lg font-normal md:w-9/12">Lorem ipsum dolor sit amet consectetur adipiscing elit dolor posuere vel venenatis eu sit massa volutpat massa rhoncus odio feugiat tellus, elit massa sed.</p>
          <div className=" flex justify-between items-center border rounded-full shadow-sm md:p-3 p-2">
            <input type="text" placeholder="Enter Email" className="md:w-72 " />
            <button className="bg-[#4A3AFF] md:px-10 md:py-5 px-4 py-2 text-white rounded-full text-nowrap">
              Get Started
            </button>
          </div>
          <label className="flex items-center gap-3 text-[#6F6C90]">
            <div className="flex items-center h-full">
              <input
                type="checkbox"
                className="w-5 h-5 rounded-full appearance-none border border-gray-400 checked:bg-[#4A3AFF] checked:border-[#4A3AFF] cursor-pointer"
              />
            </div>
            <span>No Credit Card Required</span>
          </label>

        </div>
        <div className=" h-auto w-full relative md:flex justify-end items-end overflow-hidden hidden">
          <Image src={'/Blob.png'} alt="" height={654} width={654} className="-z-10 absolute top-28" />
          <Image src={'/mask_group.png'} alt="" height={654} width={654} className="z-10" />
        </div>
      </div>


      <div className=" mt-40 flex justify-between items-center gap-5 w-full px-10 relative overflow-hidden">
        <div className=" md:h-8 md:w-32 h-4 w-24 relative">
          <Image src={'/google.png'} alt="" fill={true} className=" object-fill" />
        </div>
        <div className=" md:h-8 md:w-32 h-4 w-24 relative">
          <Image src={'/Feature2.png'} alt="" fill={true} className=" object-fill" />
        </div>
        <div className=" md:h-8 md:w-32 h-4 w-24 relative">
          <Image src={'/Feature3.png'} alt="" fill={true} className=" object-fill" />
        </div>
        <div className=" md:h-8 md:w-32 h-4 w-24 relative">
          <Image src={'/Feature4.png'} alt="" fill={true} className=" object-fill" />
        </div>
        <div className=" md:h-8 md:w-32 h-4 w-24 relative">
          <Image src={'/Feature5.png'} alt="" fill={true} className=" object-fill" />
        </div>
        <div className=" md:h-8 md:w-32 h-4 w-24 relative">
          <Image src={'/Feature6.png'} alt="" fill={true} className=" object-fill" />
        </div>
      </div>


      <div className=" flex flex-col justify-center items-center gap-16 w-full px-10 mt-40">
        <h1 className=" font-semibold text-4xl">Posts</h1>
        <Posts/>
      </div>

      <div className=" border py-10 w-full mt-28">
        <div className=" md:px-10 px-4 flex justify-between items-center w-full">
          <div className=" flex md:justify-start md:items-start justify-center items-center flex-col gap-4">
            <Image src={'/logo.png'} alt="logo" height={24} width={162} className=" hidden md:block" />
            <Image src={'/logo.png'} alt="logo" height={14} width={102} className=" block md:hidden" />
            <p className="text-[#6F6C90] md:text-lg text-sm">Copyright © 2021 BRIX Templates | All Rights Reserved</p>
          </div>
          <div className="hidden md:flex justify-between items-center border rounded-full shadow-sm py-2 px-4">
            <input type="text" placeholder="Enter Email" className="w-72" />
            <button className="bg-[#4A3AFF] px-6 py-3 text-white rounded-full">
              Subscribe
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
