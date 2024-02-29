import React from "react";
import bg from "../Images/bg.jpg";
import SampleTable from "./SampleTable";
import StickyForm from "./StickyForm";
const Form2 = () => {
  return (
    <div>
      <div id="content">
        {/*----Bg-img with heading ---*/}
        <div className="bg-container">
          <div className="bg-img  h-auto py-4">
            <div className="overlay"></div>
            <h1 className="text-4xl max-[600px]:text-xl text-center font-bold text-white Uppercase">
              Form Two
            </h1>
          </div>
        </div>
        {/*Bg-img close*/}
        {/*---bread crumbs-----*/}
        <div className="p-11">
          <div>
            <span className="">
              <a href="/">🏠Home</a> &gt;
            </span>
            <span className="ml-1">
              <a href="/">Form2</a>
            </span>
          </div>
        </div>
        {/*---bread Crumbs close---*/}
        {/*---inner-content---*/}
        <div className="flex gap-8 mx-8 max-[1100px]:flex-col max-[1100px]:gap-0 ">
          <div className="w-1/2 max-[1100px]:w-full">
            <StickyForm />
          </div>
          {/*---right content---*/}
          <div className="w-1/2 max-[1100px]:w-full max-[1100px]:mt-[4%]">
            <SampleTable />
          </div>
          {/*--right content close---*/}
        </div>
        {/*----content close----*/}
      </div>
    </div>
  );
};

export default Form2;
