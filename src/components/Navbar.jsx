const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-200 px-14">
        <div className="flex-none items-center ">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Rent</a>
              </li>
              <li tabIndex={0}>
                <a className="justify-between">Buy</a>
              </li>
              <li>
                <a>Sell</a>
              </li>
            </ul>
          </div>
          <a className="normal-case font-bold text-xl lg:text-2xl text-neutral">
            Rent-a-property
          </a>
          <ul className="menu menu-horizontal px-5 hidden lg:flex gap-8">
            <li>Buy</li>
            <li tabIndex={0}>Rent</li>
            <li>Sell</li>
          </ul>
        </div>
        <div className="navbar-end flex-1 gap-2">
          <a className="btn btn-outline">Login</a>
          <div className="btn">Sign Up</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
