import React from 'react';
import LinksButton from './linkButton';
import ShareIcon from '../assets/shareButton.svg';
import MobileIcon from '../assets/mobileDot.svg';
import SlackIcon from '../assets/slack.svg';
import GitHub from '../assets/GitHub.svg';
import Profile from '../assets/profile__img.png';

const Home = () => {
  return (
    <>
      <div className="container linktree mx-auto mt-10 md:mt-32">
        <div className="flex justify-end mr-10 md:mr-64">
          <div className="rounded-full border-2 border-black shadow-inner shadow-lg w-14 h-14 items-center p-2">
            <button>
              <img src={ShareIcon} alt="share" className="m-2 mt-3 shareIcon" />
              <img
                src={MobileIcon}
                alt="share"
                className="m-2 mt-5 md:hidden"
              />
            </button>
          </div>
        </div>

        <div className="flex flex-col">
          <div className=" flex flex-col gap-4 justify-center items-center p-6">
            <img src={Profile} alt="profileImg" id="profile__img" />
            <h2 className="font-bold text-2xl font-mono" id="twitter">
              AlukoKunleSam
            </h2>
            <h2 id="slack" hidden>
              Sam_dev
            </h2>
          </div>
          <div className="flex flex-col gap-5 mx-5 mt-10 md:mt-20">
            <LinksButton
              name={'Twitter'}
              links={'https://twitter.com/AlukoKunleSam'}
            />

            <LinksButton
              name={'Zuri Team'}
              links={`https://training.zuri.team/`}
              id={'btn__zuri'}
            />
            <LinksButton
              name={'Zuri Books'}
              links={` http://books.zuri.team `}
              id={'books'}
            />
            <LinksButton
              name={'Python Books'}
              links={`https://books.zuri.team//python-for-beginners?ref_id=Sam_dev`}
              id={'book__python'}
            />
            <LinksButton
              name={'Background Check for Coders'}
              links={`https://background.zuri.team`}
              id={'pitch'}
            />
            <LinksButton
              name={'Design Books'}
              links={`https://books.zuri.team/design-rules`}
              id={'book__design'}
            />
            <LinksButton
              name={'Contact Me'}
              links={'/contact'}
              id={'contact'}
            />

            <div className="flex flex-row justify-center gap-4">
              <a href="slack.com">
                <img src={SlackIcon} alt="share" onClick={() => {}} />
              </a>
              <a href="https://github.com/Sam-intellect">
                <img src={GitHub} alt="share" onClick={() => {}} />
              </a>
            </div>
          </div>
        </div>

        <hr className="bg-grey w-full h-1 mt-32" />
      </div>
    </>
  );
};

export default Home;
