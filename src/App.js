import "./App.css";
import LinksButton from "./linkButton";
import ShareIcon from "./shareButton.svg";
import SlackIcon from "./slack.svg";
import GitHub from "./GitHub.svg";
import Zuri from "./Zuri.svg";
import ingressiveLogo from "./I4G.svg";
import Profile from "./profile__img.png";

const App = () => {
  return (
    <>
      <div className="container mx-auto mt-10 md:mt-32">
        <div className="flex justify-end md:mr-64">
          <div className="rounded-full border-2 border-black shadow-inner shadow-lg w-13 h-13 items-center p-2">
            <img src={ShareIcon} alt="share" onClick={() => {}} />
          </div>
        </div>

        <div className="flex flex-col">
          <div className=" flex flex-col gap-4 justify-center items-center p-6">
            <img src={Profile} alt="profileImg" />
            <h2 className="font-bold text-2xl font-mono">
              Aluko Olakunle Samuel
            </h2>
          </div>
          <div className="flex flex-col gap-5 mx-5 mt-10 md:mt-20">
            <LinksButton link={"Twitter Link"} />
            <LinksButton link={"Zuri Team"} />
            <LinksButton link={"Zuri Books"} />
            <LinksButton link={"Python Books"} />
            <LinksButton link={"Background Check for Coders"} />
            <LinksButton link={"Design Books"} />

            <div className="flex flex-row justify-center gap-4">
              <img src={SlackIcon} alt="share" onClick={() => {}} />
              <img src={GitHub} alt="share" onClick={() => {}} />
            </div>
          </div>
        </div>

        <hr className="bg-grey w-full h-1 mt-32" />
        {/* Footer */}
        <footer className="mb-32 mx-10">
          <div className="flex flex-col gap-4 md:flex-row justify-between mt-4 ">
            <img src={Zuri} alt="zuri" className=" w-1/2 md:w-1/5 " />
            <h1 className="md:mt-10">HNG Internship 9 Frontend Task</h1>
            <img src={ingressiveLogo} alt="zuri" className="w-1/3 md:w-1/5" />
          </div>
        </footer>
      </div>
    </>
  );
};

export default App;
