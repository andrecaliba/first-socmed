const Login = () => {
  return (
    <div
    className="bg-carafe w-screen h-screen flex justify-center items-center"
    >
      <div className="bg-champagne flex rounded-md w-1/2 p-2">
        <h1 className="text-sage font-bold text-4xl w-1/2">Welcome to Your First Social Media</h1>
        <form>
          <input className="block" placeholder="Email"/>
          <input className="block" placeholder="Password" type="password" />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
export default Login;