import React from "react";
import { FiSearch } from "react-icons/fi";
import { AiOutlineBell } from "react-icons/ai";

export default function Header() {
  return (

      <div className="header ">
            <div className="search-bar flex">
            
                <div>
                    <FiSearch />
                </div>
                <div>
                    <input
                    className="search"
                    type="text"
                    placeholder="Search your project"
                    />
                </div>
            </div>
            <div className="profile flex">
                    <div >
                        <select className="select">
                        <option defaultValue="english">English</option>
                        <option value="french">French</option>
                        <option value="spanish">Spanish</option>
                        <option value="german">German</option>
                        </select>
                    </div>
                    <div>
                        <AiOutlineBell />
                    </div>
                    <div><img className="profile-image" src="../images/profile1.png"/></div>
            </div>
      </div>

      
  )
}
