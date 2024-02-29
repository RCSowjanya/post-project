import React from "react";

const PageOption4 = () => {
  return (
    <div>
      <div id="content">
        {/*----Bg-img with heading ---*/}
        <div>
          <div className="bg-img  h-auto py-4">
            <div className="overlay"></div>
            <h1 className="text-4xl max-[600px]:text-xl text-center font-bold text-white Uppercase">
              PageOption4
            </h1>
          </div>
        </div>
        {/*Bg-img close*/}
        {/*---bread crumbs-----*/}
        <div className="p-11">
          <div>
            <span className="">
              <a href="/">🏠 Home</a> &gt;
            </span>
            <span className="ml-1">
              <a href="/">pageoption4</a>
            </span>
          </div>
        </div>
        {/*---bread Crumbs close---*/}
        {/*---inner content---*/}
        <div className="mx-11 border-2 border-gray-600 rounded-md">
          <div className="p-4 w-full h-[380px]">
            <h1 className="text-2xl">Place Your Content Here</h1>
          </div>
        </div>
        {/*---inner content---*/}
      </div>
    </div>
  );
};

export default PageOption4;
