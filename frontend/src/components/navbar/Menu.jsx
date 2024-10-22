import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = useSelector((state) => state.user.user);
  return (
    <div>
      <img
        className=" w-8 cursor-pointer"
        src="/menu.png"
        alt="menu"
        onClick={() => {
          setIsMenuOpen((prev) => !prev);
        }}
      />
      {isMenuOpen && (
        <div
          className=" absolute left-0 top-20 bg-black text-white w-full h-[calc(100vh-80px)] flex 
        flex-col items-center justify-center gap-8 text-xl z-10"
        >
          <Link
            onClick={() => {
              setIsMenuOpen(false);
            }}
          >
            Membership
          </Link>

          <Link
            onClick={() => {
              setIsMenuOpen(false);
            }}
            to="/trainer-list"
          >
            trainer
          </Link>
          <Link
            onClick={() => {
              setIsMenuOpen(false);
            }}
          >
            careers
          </Link>
          <Link
            onClick={() => {
              setIsMenuOpen(false);
            }}
            to="/signup"
          >
            Join now
          </Link>
          {user.role === "ADMIN" ? (
            <Link
              onClick={() => {
                setIsMenuOpen(false);
              }}
              to="/admin-panel"
            >
              Admin panel
            </Link>
          ) : (
            <Link
              onClick={() => {
                setIsMenuOpen(false);
              }}
              to="/user-panel"
            >
              User panel
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default Menu;
