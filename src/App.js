import "./App.css";
import LinksButton from "./linkButton";
import ShareIcon from "./shareButton.svg";
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

          <LinksButton link={"Twitter Link"} />
          <LinksButton link={"Zuri Team"} />
          <LinksButton link={"Twitter Link"} />
          <LinksButton link={"Twitter Link"} />
          <LinksButton link={"Twitter Link"} />
        </div>
      </div>
    </>
  );
};

export default App;
