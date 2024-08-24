import React from 'react'

import { FaFacebook, FaYoutube, FaLinkedin, FaTwitter } from "react-icons/fa";

const HeaderTop = () => {
  return (
    <div className="border-b border-gray-200 hidden sm:block">
      <div className="container py-4">
        <div className="flex justify-between items-center">
          <div className="hidden lg:flex gap-1">
            <div className="header_top__icon_wrapper">
              <a href="https://www.facebook.com/BioSpray.Official.page" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
            </div>
            <div className="header_top__icon_wrapper">
              <a href="https://www.youtube.com/@BioSprayPlusColostrumLiquid/videos" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </a>
            </div>
            <div className="header_top__icon_wrapper">
              <FaLinkedin />
            </div>
            <div className="header_top__icon_wrapper">
              <FaTwitter />
            </div>
          </div>

          <div className="text-gray-500 text-[12px]">
            <b>নোটিশ:</b> অরিজিনাল বায়ো স্প্রে প্লাস কিনতে সরাসরি অফিসে যোগাযোগ করুন। অনলাইনে পণ্য কিনে প্রতারিত হবেন না। বিস্তারিতঃ 01742 095 986
          </div>

          <div className="flex gap-4">
            <select
              className="text-gray-500 text-[12px] w-[80px]"
              name="language"
              id="language"
            >
              <option value="English">English</option>
              <option value="Bangla">Bangla</option>
            </select>
          </div>
          
        </div>
      </div>
    </div>
  )
};

export default HeaderTop;
