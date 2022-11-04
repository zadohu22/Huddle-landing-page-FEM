import mobileBG from "./images/images/bg-mobile.svg";
import deskBG from "./images/images/bg-desktop.svg";
import logo from "./images/images/logo.svg";
import mockup from "./images/images/illustration-mockups.svg";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const App = () => {
  return (
    <div className="h-[100vh] w-full flex flex-col justify-center items-center bg-[url('./images/images/bg-mobile.svg')] lg:bg-[url('./images/images/bg-desktop.svg')] bg-no-repeat bg-violetHuddle relative border-2 border-red-900">
      <img
        src={logo}
        alt='logo'
        className='self-start justify-self-start absolute top-5 left-10 w-40'
      />
      <div className='content-container w-full h-full flex flex-col justify-center items-center lg:flex-row'>
        <div className='p-4 mt-32 max-w-[416px] lg:max-w-[75%] lg:min-w-[50%] lg:ml-20'>
          <img src={mockup} alt='mockup' />
        </div>

        <div className='relative info-container w-full h-full flex flex-col justify-center items-center mb-20 lg:mb-0'>
          <div className='text-center md:text-left lg:self-start text-3xl mt-10 text-white font-bold p-4'>
            <h1>Build The Community Your Fans Will Love</h1>
          </div>
          <div className='text-center lg:text-left  text-white p-4'>
            <p className='lg:mr-40 '>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
            <div className='text-center lg:text-left lg:mt-8 lg:ml-2 md:relative md:top-0'>
              <button className='w-[15em] h-12 rounded-3xl mt-8 bg-white text-violetHuddle hover:bg-soft-magenta hover:text-white'>
                Register
              </button>
            </div>
          </div>
        </div>
        <div className='absolute bottom-4 w-full flex text-white text-2xl justify-center items-center gap-8'>
          <FaFacebook className='cursor-pointer hover:text-soft-magenta' />
          <FaTwitter className='cursor-pointer hover:text-soft-magenta' />
          <FaInstagram className='cursor-pointer hover:text-soft-magenta' />
        </div>
      </div>
    </div>
  );
};

export default App;
