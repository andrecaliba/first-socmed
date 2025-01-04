import { useNavigate } from "react-router";
const Registration = () => {

  const navigate = useNavigate();

  return (
    <div
    className="bg-carafe w-screen h-screen flex justify-center items-center"
    >
      <div className="bg-champagne flex rounded-md w-1/2">
        <div className="flex flex-col justify-center items-center w-1/2 p-10">
          <h1 className="text-sage font-bold text-4xl text-center">Register Your Account Right Now</h1>
        </div>
        <div className="flex-1 p-10">
          <h2 className="text-sage text-2xl font-bold mb-4">Registration</h2>
          <form>
            <div>
              <input
              className="w-full transition-colors border-b-sage border-b-2 focus:border-b-green-800 text-lg placeholder:text-sage mb-5"
              type="email"
              placeholder="Email"/>
            </div>
            <div>
              <input
              className="w-full transition-colors border-b-sage border-b-2 focus:border-b-green-800 text-lg placeholder:text-sage mb-5"
              placeholder="Username"
              type="text" />
            </div>
            <div>
              <input
              className="w-full transition-colors border-b-sage border-b-2 focus:border-b-green-800 text-lg placeholder:text-sage mb-5"
              placeholder="Password"
              type="password" />
            </div>
            <div>
              <input
              className="w-full transition-colors border-b-sage border-b-2 focus:border-b-green-800 text-lg placeholder:text-sage"
              type="password"
              placeholder="Confirm Password"/>
            </div>
            <button className="bg-sage transition-opacity w-full rounded-lg mt-8 py-1 font-bold text-champagne text-xl hover:opacity-75"
            type="submit">Register</button>
            <div className="w-full h-px bg-carafe mt-5 "></div>
            <div>
              <p>Already have an account? <a href="/">Sign-in</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registration;