import React, { useState } from "react";
import TopHeader from "../Components/TopHeader";
import Menubar from "../Components/Menubar";
import Help from "../Components/Help";
import SimpleSlider from "../Components/SimpleSlider";
import { Link } from "react-router-dom";
import SettingOptions from "../Components/SettingOptions";
import CardsData from "../Components/CardsData";
const PageOption3 = () => {
  const [showData, setShowData] = useState(false);

  const handleChange = () => {
    setShowData(!showData);
  };

  return (
    <div className="bg-gray-200">
      <TopHeader />
      <Menubar />
      <SimpleSlider />
      {/*---inner content----*/}
      <div className="mx-8 my-9 ">
        <div className="flex gap-5 justify-between max-[600px]:flex-col">
          {/*---left content---*/}
          <div className="w-4/5 max-[600px]:w-full">
            {/*---Welcome to india post----*/}
            <div className="bg-white shadow-custom rounded-md p-6">
              <h1 className="text-3xl font-bold mb-6">Welcome to the Post</h1>
              <p className="leading-80">
                Etiam nec urna sed lectus tincidunt aliquam. Aliquam id interdum
                leo. Donec tellus mauris, pharetra nec feugiat non, semper ac
                neque. Curabitur auctor erat arcu, ut scelerisque risus egestas
                a. Mauris molestie porttitor dui, id aliquet lorem fermentum
                sed. Duis congue quam et turpis porttitor egestas. Ut et arcu
                risus. Nunc ac laoreet erat, sit amet placerat arcu.
              </p>
              <br />
              <p>
                Quisque id convallis nisl, ut pulvinar justo. Donec vitae leo
                tellus. Aliquam placerat nec quam a euismod. Praesent nisi
                ipsum, commodo vitae euismod et, malesuada ut tellus. Mauris at
                nisl pharetra, malesuada turpis eu, accumsan tellus. Nunc ac
                orci tincidunt, sodales purus vel, congue ligula. Pellentesque
                in auctor sapien. Curabitur quis odio maximus, aliquam metus sit
                amet, tempor leo. In non luctus tortor, at consequat turpis.
                Nunc eget felis venenatis, pellentesque mi vel, mattis mauris.
                Morbi at hendrerit quam. Etiam quis ligula tortor.
              </p>
              <div className="mt-6">
                <Link to="/">
                  <button className="text-[#C9252C] border-2 flex gap-2 p-2 font-bold  border-[#C9252C]">
                    Read More ...
                  </button>
                </Link>
              </div>
            </div>
            {/*---Welcome to india post close----*/}
            {/*---Sample heading----*/}
            <div className="bg-white shadow-custom rounded-md p-6 my-8">
              <h1 className="text-3xl font-bold mb-6">Sample Heading</h1>
              <div className="space-y-5">
                <p className="leading-80">
                  Etiam nec urna sed lectus tincidunt aliquam. Aliquam id
                  interdum leo. Donec tellus mauris, pharetra nec feugiat non,
                  semper ac neque. Curabitur auctor erat arcu, ut scelerisque
                  risus egestas a. Mauris molestie porttitor dui, id aliquet
                  lorem fermentum sed. Duis congue quam et turpis porttitor
                  egestas. Ut et arcu risus. Nunc ac laoreet erat, sit amet
                  placerat arcu.
                </p>
                <p>
                  Ut lobortis sit amet lacus tempus rhoncus. Donec iaculis
                  mattis massa, at posuere dui porta quis. Vestibulum sed ex
                  aliquet, vulputate ante sit amet, malesuada nisl. Maecenas a
                  fringilla lectus. Integer euismod neque sed lectus efficitur,
                  in auctor lorem vestibulum. Pellentesque aliquam urna in est
                  cursus pharetra. Duis felis dolor, ultrices id velit ut,
                  egestas malesuada leo. Cras ac purus eu eros auctor luctus.
                  Suspendisse sed velit elit. Interdum et malesuada fames ac
                  ante ipsum primis in faucibus. Aenean interdum viverra
                  viverra.
                </p>
                <p>
                  Suspendisse eu lacus in nibh commodo maximus in quis tortor.
                  Orci varius natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Etiam mollis velit in scelerisque
                  dapibus. Ut id tristique eros. Nulla nec magna vehicula,
                  placerat nibh elementum, imperdiet libero. Donec bibendum
                  tempus turpis ut vulputate. Fusce in tellus ut odio fermentum
                  scelerisque. Aliquam erat volutpat. Cras viverra, metus eu
                  lobortis ornare, leo mi feugiat nisl, non imperdiet urna massa
                  ac enim. Quisque volutpat sed nibh vitae ornare. Integer
                  dictum nec ex in luctus. Fusce mattis dignissim maximus.
                  Integer eu diam lacinia, rutrum est vitae, pharetra libero.
                  Nulla eu congue massa, sed condimentum est.
                </p>
              </div>
              <div className="mt-6">
                <Link to="/">
                  <button className="text-[#C9252C] border-2 flex gap-2 p-2 font-bold  border-[#C9252C]">
                    Read More ...
                  </button>
                </Link>
              </div>
            </div>
            {/*---Sample heading close----*/}
          </div>
          {/*---left content close---*/}
          {/*----right side sticky note---*/}
          <div className="w-1/5 max-[600px]:w-full">
            <div className="bg-white shadow-custom rounded-md p-4">
              <h1 className="text-2xl mb-3 italic">Sticky Note</h1>
              <p className="">
                India Post, the world's largest postal network, Connects every
                corner of the nation, Delivering messages with care and
                dedication.
              </p>
            </div>
            {/*---settings---*/}
            <SettingOptions />
            {/*---settings close---*/}
            {/*----Account---*/}
            <div className="bg-white rounded-md shadow-custom p-4 mb-8 hover:bg-gray-300 hover:border-4  hover:border-l-red-600">
              <p>Account</p>
            </div>
            {/*----Account close---*/}
            {/*----Profile---*/}
            <div className="bg-white rounded-md shadow-custom p-4 hover:bg-gray-300 hover:border-4  hover:border-l-red-600">
              <p>Profile</p>
            </div>
            {/*----Profile close---*/}
            {/*---Help---*/}
            <Help />
            {/*---Help close---*/}
            {/*----Profile---*/}
            <div className="bg-white rounded-md shadow-custom p-4 hover:bg-gray-300 hover:border-4  hover:border-l-red-600">
              <p>FAQ</p>
            </div>
            {/*----Profile close---*/}
          </div>
          {/*----right side sticky note close---*/}
        </div>
        {/*----list of items----*/}
        <div className="grid lg:grid-cols-4 gap-3 grid-cols-1 mt-[4%] mx-5">
          {CardsData.map((e) => (
            <div className="">
              <li className="h-full bg-white shadow-custom  p-6">
                <img src={e.img} alt="post-img" className="p-2 w-24" />
                <h1 className="text-2xl">{e.heading}</h1>
                <p className="">{e.description}</p>
              </li>
            </div>
          ))}
        </div>
        {/*---list of items closed----*/}
      </div>

      {/*---inner content close----*/}
    </div>
  );
};

export default PageOption3;
