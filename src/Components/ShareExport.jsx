import React from "react";

const ShareExport = () => {
  return (
    <div>
      {/*----share and export---*/}
      <div className="flex gap-4">
        <div className=" text-[#C9252C] font-bold border-2 border-[#C9252C] px-4 py-2">
          <button className="hover:bg-[#C9252C] hover:text-white focus:bg-[#C9252C] focus:text-[#C9252C]">
            Share
          </button>
        </div>
        <div className=" text-[#C9252C] font-bold border-2 border-[#C9252C] px-4 py-2">
          <button className="hover:border-2 hover:bg-[#C9252C] hover:text-white focus:bg-[#C9252C] focus:text-[#C9252C]">
            Export
          </button>
        </div>
      </div>
      {/*----share and export-close--*/}
    </div>
  );
};

export default ShareExport;
