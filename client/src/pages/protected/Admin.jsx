import { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

const Admin = () => {
  const editUser = useRef(null);
  const deleteUser = useRef(null);
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [inputs, setInputs] = useState({});

  const logout = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:3000/api/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    })
    navigate("/");
  }

  const updateUser = async (e) => {
    e.preventDefault();
    console.log("Inside update user");
    const response = await fetch("http://localhost:3000/api/users", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(inputs),
      credentials: "include"
    });
    if(response.ok) {
      editUser.current.close();
      setUsers(users.map((user) => {
        if(user.User_ID === inputs.id) {
          return {...user, User_Username: inputs.username, User_Email: inputs.email, User_Password: inputs.password}
        } else {
          return user;
        }
      }))
    }
  }

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch("http://localhost:3000/api/users", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include"
      })

      if(response.ok) {
        const users = await response.json();
        setUsers(users);
      }
    }
   getUsers();
  }, [])

  return (
    <>
    <dialog ref={editUser}>
      <div className="bg-champagne w-full p-6">
        <h2 className="text-sage text-2xl font-bold mb-4">Edit User Account</h2>
        <form>
          <div>
            <input
            className="w-full transition-colors border-b-sage border-b-2 focus:border-b-green-800 text-lg placeholder:text-sage mb-5"
            type="text"
            placeholder="Username"
            value={inputs.username}
            onChange={(e) => setInputs({...inputs, username: e.target.value})}/>
          </div>
          <div>
            <input
            className="w-full transition-colors border-b-sage border-b-2 focus:border-b-green-800 text-lg placeholder:text-sage mb-5"
            type="email"
            placeholder="Email"
            value={inputs.email}
            onChange={(e) => setInputs({...inputs, email: e.target.value})}/>
          </div>
          <div>
            <input
            className="w-full transition-colors border-b-sage border-b-2 focus:border-b-green-800 text-lg placeholder:text-sage"
            placeholder="Password"
            type="text"
            value={inputs.password}
            onChange={(e) => setInputs({...inputs, password: e.target.value})}/>
          </div>
          <button className="bg-sage transition-opacity w-full rounded-lg mt-8 py-1 font-bold text-champagne text-xl hover:opacity-75" onClick={updateUser}>Edit</button>
          <div className="w-full h-px bg-carafe mt-5 "></div>
          <button
          className="bg-desert transition-opacity w-full rounded-lg mt-5 py-1 font-bold text-champagne text-xl hover:opacity-75"
          type="button"
          onClick={() => editUser.current.close()}>Close</button>
        </form>
      </div>
    </dialog>
    <dialog ref={deleteUser}>
      <div className="bg-champagne w-full p-6">
        <h2 className="text-sage text-2xl font-bold mb-4">Delete User Account</h2>
        <form>
          <h3 className="text-red-400 font-bold text-lg">Are you sure you want to delete this user?</h3>
          <button className="bg-red-500 transition-opacity w-full rounded-lg mt-8 py-1 font-bold text-champagne text-xl hover:opacity-75">Delete</button>
          <div className="w-full h-px bg-carafe mt-5 "></div>
          <button
          className="bg-desert transition-opacity w-full rounded-lg mt-5 py-1 font-bold text-champagne text-xl hover:opacity-75"
          type="button"
          onClick={() => deleteUser.current.close()}>Close</button>
        </form>
      </div>
    </dialog>
      <div className="w-screen h-screen flex">
        <div className="flex flex-col w-2/12 h-full bg-champagne">
          <h2 className="p-8 text-3xl font-bold">Menu</h2>
          <div className="flex transition-colors hover:bg-carafe cursor-pointer rounded-lg group p-2 mb-2" onClick={logout}>
            <div className="flex justify-center items-center pl-2">
              <svg className="group-hover:fill-champagne" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#6a463a"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"/></svg>
            </div>
            <p className="text-right text-2xl pl-4 font-bold text-carafe group-hover:text-champagne">Logout</p>
          </div>
        </div>
        <div className="w-3/5 bg-champagne h-full flex-1 flex flex-col p-2">
          <h1 className="text-4xl font-bold text-carafe p-6">List of Users</h1>
          <div className="w-4/5 overflow-auto flex-1">
            <table className="w-full">
              <thead className="sticky top-0 border-separate">
                <tr className="border-collapse">
                  <th className="border-collapse border-none p-4 border-sage border-2 bg-sage text-champagne text-xl">Username</th>
                  <th className="border-collapse border-none p-4 border-sage border-2 bg-sage text-champagne text-xl">Email</th>
                  <th className="border-collapse border-none p-4 border-sage border-2 bg-sage text-champagne text-xl">Password</th>
                  <th className="border-collapse border-none p-4 border-sage border-2 bg-sage text-champagne text-xl">Edit</th>
                  <th className="border-collapse border-none p-4 border-sage border-2 bg-sage text-champagne text-xl">Delete</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => {
                  return (
                  <tr key={user.User_ID} className="bg-sage odd:bg-opacity-10 even:bg-opacity-20">
                    <td className="text-center text-lg p-2">{user.User_Username}</td>
                    <td className="text-center text-lg p-2">{user.User_Email}</td>
                    <td className="text-center text-lg p-2">{user.User_Password}</td>
                    <td className="text-center p-2">
                      <button className="p-2 bg-sage text-champagne rounded-lg" data-id={user.User_ID}
                      onClick={() => {
                        setInputs({username: user.User_Username, email: user.User_Email, password: user.User_Password, id: user.User_ID})
                        editUser.current.showModal();
                        }}>Edit</button>
                    </td>
                    <td className="text-center p-2">
                      <button className="p-2 bg-red-500 text-champagne rounded-lg" data-id={user.User_ID}
                      onClick={() => {
                        deleteUser.current.showModal();
                      }}>Delete</button>
                    </td>
                  </tr>
                  );
                })}
                
                {/* Add more rows */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;