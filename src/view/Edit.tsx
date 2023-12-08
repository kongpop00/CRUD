import React, { useState, useEffect } from "react";
import axios from "axios";
import { ChangeEvent } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

interface edit {
  fname: string;
  lname: string;
  username: string;
  email: string;
  avatar: string;
  
}
const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState<edit>({
    fname: "",
    lname: "",
    username: "",
    email: "",
    avatar: "",
  
  });

  const getData = async () => {
    try {
      const respones = await axios.get(
        `https://www.melivecode.com/api/users/${id}`
      );
      if (respones.status === 200) {
        setUser(respones.data.user);
      }
    } catch (err) {
      console.log("reject", err);
    }
  };

 

  const handleUpdate = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    
    
  };

 const handleEdit = async () =>{
  console.log(user);
  const respones = await axios.put(`https://www.melivecode.com/api/users/update`,
  {id,
  ...user})
  console.log(respones);
  if(respones.status===200){
    alert('OK' )
    navigate("/");
    
  }
 }



  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {!!user && (
        <div>
          <div className=" flex flex-col items-center justify-center ">
            <h1 className="text-[36px] font-[600]">Create From </h1>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Fname</span>
              </label>
              <input
                type="text"
                name="fname"
                onChange={handleUpdate}
                value={user.fname}
                placeholder="fname"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Lname</span>
              </label>
              <input
                type="text"
                name="lname"
                onChange={handleUpdate}
                value={user.lname}
                placeholder="lname"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                onChange={handleUpdate}
                name="username"
                value={user.username}
                placeholder="username"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                onChange={handleUpdate}
                value={user.email}
                placeholder="email"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">avatar</span>
              </label>
              <input
                type="text"
                onChange={handleUpdate}
                name="avatar"
                value={user.avatar}
                placeholder="avatar"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <button className="btn btn-active  bg-blue-500 text-white w-[100px] mt-[20px]" onClick={handleEdit}>
              Updeat
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Edit;
