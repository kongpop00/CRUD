import { ChangeEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { userType } from "../interface";

const Home = (props: any) => {
  const [user, setUser] = useState<userType[]>([]);
  const [search, setSearch] = useState<userType[]>([]);

  const GetData = async () => {
    try {
      const respones = await axios.get("https://www.melivecode.com/api/users");
      if (respones.status === 200) {
        setUser(respones.data);
        setSearch(respones.data);
      }
    } catch (err) {
      console.log("err", err);
    }
  };
  const searchUser = () => {
    const filter = user.filter((element) =>
      element.fname.toLowerCase().slice(0 , 1).includes(props.findNav)
    );
    setSearch(filter);
    console.log("imfilter", filter);
    console.log('im search ', search);
    
  };

  const Deleat = async (id: string) => {
    try {
      const res = await axios.delete(
        "https://www.melivecode.com/api/users/delete",
        {
          data: { id },
        }
      );
      console.log(res);
      GetData();
    } catch (err) {
      console.log("reject", err);
    }
  };

  //hook

  useEffect(() => {
   
    searchUser()
  }, [props.findNav]);

  useEffect(()=>{
    GetData();
  },[])

  return (
    <div className="overflow-x-auto">
      <Link
        to="/add"
        className="btn btn-active  bg-blue-500 text-white w-[100px]"
      >
        Add
      </Link>

      <table className="table mt-[10px] ">
        {/* head */}
        <thead>
          <tr className="text-[16px] ">
            <th></th>
            <th>Avatar</th>
            <th>FName</th>
            <th>Lname</th>
            <th>UserName</th>
            <th>Tool</th>
          </tr>
        </thead>
        <tbody className="">
          {/* start */}
          {!!search &&
            search.map((e, i) => {
              return (
                <tr key={e.id}>
                  <th>{i + 1}</th>
                  <td>
                    <img className="w-14" src={e.avatar} alt="" />
                  </td>
                  <td>{e.fname}</td>
                  <td>{e.lname}</td>
                  <td>{e.username}</td>
                  <td>
                    <div className="btn-group gap-4">
                      <Link to={`/edit/${e.id}`} className="btn  bg-yellow-400 hover:bg-yellow-100">
                        Edit
                      </Link>
                      <button onClick={() => Deleat(e.id)} className="btn  bg-rose-400 hover:bg-rose-200">
                        Delete{" "}
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}

          {/* end */}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
