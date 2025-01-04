import { useNavigate } from "react-router";
const Login = () => {

  const navigate = useNavigate();

  return (
    <div
    className="bg-carafe w-screen h-screen flex justify-center items-center"
    >
      <div className="bg-champagne flex rounded-md w-1/2">
        <div className="flex flex-col justify-center items-center w-1/2 p-10">
          <h1 className="text-sage font-bold text-4xl text-center">Welcome to Your First Social Media</h1>
        </div>
        <div className="flex-1 p-10">
          <h2 className="text-sage text-2xl font-bold mb-4">Login to Your Account</h2>
          <form>
            <div>
              <input
              className="w-full transition-colors border-b-sage border-b-2 focus:border-b-green-800 text-lg placeholder:text-sage mb-5"
              type="email"
              placeholder="Email"/>
            </div>
            
            <div>
              <input
              className="w-full transition-colors border-b-sage border-b-2 focus:border-b-green-800 text-lg placeholder:text-sage"
              placeholder="Password"
              type="password" />
            </div>
            <button className="bg-sage transition-opacity w-full rounded-lg mt-8 py-1 font-bold text-champagne text-xl hover:opacity-75" type="submit">Login</button>
            <div className="w-full h-px bg-carafe mt-5 "></div>
            <button
            className="bg-desert transition-opacity w-full rounded-lg mt-5 py-1 font-bold text-champagne text-xl hover:opacity-75"
            type="button"
            onClick={() => navigate("/register")}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;