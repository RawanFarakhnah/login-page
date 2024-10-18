
import './Login.css'; // Make sure to import your CSS file

const Login = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen">
      <div className="background-image"></div>
      <div className="content-container max-w-4xl w-full p-8 shadow-lg flex flex-col md:flex-row overflow-hidden">

        {/* Left Side - Login Form */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          {/* Logo/Brand */}
          <div className="flex justify-center mb-6">
            <img
              src="/src/assets/dark-logo.jpeg" // Replace with your logo URL
              alt="Mee3ad Logo"
              className="h-16"
            />
          </div>

          <h1 className="text-3xl font-bold text-center text-gold mb-2">Mee3ad</h1>
          <p className="text-center text-gray-600 mb-6">Welcome to your account</p>

          {/* Form */}
          <form className="space-y-4">
            <div>
              <label htmlFor="emailOrPhone" className="block text-sm font-medium text-gray-700">
                Email or Phone Number
              </label>
              <input
                type="text"
                id="emailOrPhone"
                className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold"
                placeholder="Enter your email or phone number"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold"
                placeholder="••••••••"
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <a href="#" className="text-sm text-gold hover:underline">
                Forgot password?
              </a>
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-gold text-black font-semibold rounded-lg shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold"
              >
                Sign In
              </button>
            </div>
          </form>

          {/* Divider */}
          <div className="relative mt-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-600">Or sign in with</span>
            </div>
          </div> 

          {/* Horizontal Social Media Login */}
          <div className="mt-6 flex justify-between space-x-4">
            <button className="w-full py-2 px-4 flex justify-center items-center bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              <i className="fab fa-facebook mr-2"></i> Facebook
            </button>
            <button className="w-full py-2 px-4 flex justify-center items-center bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
              <i className="fab fa-google mr-2"></i> Google
            </button>
            <button className="w-full py-2 px-4 flex justify-center items-center bg-gray-900 text-white rounded-lg shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
              <i className="fab fa-apple mr-2"></i> Apple
            </button>
          </div>

          {/* Signup */}
          <p className="mt-4 text-center text-sm text-gray-600">
            Don’t have an account?{' '}
            <a href="#" className="text-gold hover:underline">
              Sign up
            </a>
          </p>
        </div>

         {/* Right Side - Image */}
         <div className="hidden md:block md:w-1/2 pl-4">
          <img
            src="/src/assets/login-background.jpg"
            alt="Barbershop"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
