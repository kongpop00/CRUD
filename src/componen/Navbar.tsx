import { Link } from "react-router-dom";

const Navbar = (props:any) => {
  const searchuser = (e: any) => {
    //console.log( props.setNavSearch(e.target.value));
    props.setFindNav(e.target.value);
  };

  //drak && light
 

  return (
    <div className="navbar bg-blue-500">
      <div className="flex-1 taxt-base-100">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          KONGPOP
        </Link>
      </div>
      <div className="flex-none gap-2">
    
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
            onChange={searchuser}
          />
        </div>

        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="public/person-png.png" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
