import axios from "axios";
import { useState,  ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
interface AddType {
  fname: string;
  lname: string;
  username: string;
  password: string;
  email: string;
  avatar: string;
  confirmpassword: string;
}
const Add = () => {
  const navigate = useNavigate();
  const [create, setCreat] = useState<AddType>({
    fname: "",
    lname: "",
    username: "",
    password: "",
    confirmpassword: "",
    email: "",
    avatar: "",
  });

  const handleCreate = (e: ChangeEvent<HTMLInputElement>) => {
    setCreat({ ...create, [e.target.name]: e.target.value });
  };

  const handleAdd = async () => {
    try {
      if (create.password === create.confirmpassword) {
        console.log(create);
        const respones = await axios.post(
          " https://www.melivecode.com/api/users/create",
          {
            fname: create.fname,
            lname: create.lname,
            username: create.username,
            password: create.password,
            email: create.email,
            avatar: create.avatar,
          }
        );
        if(respones.status===200){
          alert('เพิ่มข้อมูลสำเร็จ')
          navigate('/')
        }
      } else {
        alert("passeord ไม้ตรงกันนะจ้ะ");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className=" flex flex-col items-center justify-center ">
      <h1 className="text-[36px] font-[600]">Create From </h1>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Fname</span>
        </label>
        <input
          type="text"
          name="fname"
          placeholder="fname"
          onChange={handleCreate}
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
          onChange={handleCreate}
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
          name="username"
          placeholder="username"
          onChange={handleCreate}
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">password</span>
        </label>
        <input
          type="password"
          name="password"
          onChange={handleCreate}
          placeholder="password"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">confirmPassword</span>
        </label>
        <input
          type="password"
          name="confirmpassword"
          placeholder="password"
          onChange={handleCreate}
          className="input input-bordered w-full max-w-xs"
        />
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            onChange={handleCreate}
            placeholder="email"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">avatar</span>
        </label>
        <input
          type="text"
          name="avatar"
          onChange={handleCreate}
          placeholder="avatar"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
     
        <button
          onClick={handleAdd}
          className="btn btn-active  bg-blue-500 text-white w-[100px] mt-[20px]" >
          Add
        </button>
      </div>
   
  );
};

export default Add;
