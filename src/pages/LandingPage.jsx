import { useContext, useState } from 'react';
import HERO_IMG from '../assets/hero-img.png';
import { APP_FEATURES } from '../utils/data';
import { useNavigate } from 'react-router-dom';
import { LuSparkles } from 'react-icons/lu';
import Modal from '../components/Modal';
import Login from './Auth/Login';
import SignUp from './Auth/SignUp';
import { UserContext } from '../context/userContext';
import ProfileInfoCard from '../components/Cards/ProfileInfoCard';

const LandingPage = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState('login');

  const handleCTA = () => {
    if (!user) {
      setOpenAuthModal(true);
    } else {
      navigate('/dashboard');
    }
  };

  return (
    <>
      {/* Full Gradient Background */}
      <div className="w-full min-h-screen bg-gradient-to-br from-[#dfeaeb] to-[#57a9fa] relative overflow-x-hidden">
        <div className="absolute inset-0 bg-white/20 z-0" />

        <div className="relative z-10 max-w-screen-xl w-full px-4 mx-auto">
          {/* Header */}
          <header className="flex justify-between items-center py-6">
            <div className="text-xl font-bold text-[#2C003E]">Interview Prep AI</div>
            {user ? (
              <ProfileInfoCard />
            ) : (
              <button
                className="bg-gradient-to-r from-[#dfeaeb] to-[#7da0b2] text-sm font-semibold text-white px-6 py-2.5 rounded-full hover:bg-black hover:text-white border border-white transition-colors"
                onClick={() => setOpenAuthModal(true)}
              >
                Login / Sign Up
              </button>
            )}
          </header>

          {/* Hero Section */}
          <div className="flex flex-col md:flex-row items-center gap-10 py-10">
            <div className="w-full md:w-1/2 px-2">
              <div className="flex items-center justify-start mb-2">
                <div className="flex items-center gap-2 text-[13px] text-[#670D2F] font-semibold bg-[#F7CFD8] px-3 py-1 rounded-full border border-[#7D1C4A]">
                  <LuSparkles /> AI Powered
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl text-[#2C003E] font-medium mb-6 leading-tight">
                Ace Interviews with <br />
                <span className="text-transparent bg-clip-text bg-[radial-gradient(circle,_#7D1C4A_0%,_#670D2F_100%)] bg-[length:200%_200%] animate-text-shine font-semibold">
                  AI-Powered
                </span>{' '}
                Learning
              </h1>
            </div>

            <div className="w-full md:w-1/2 px-2">
              <p className="text-[15px] sm:text-[17px] text-[#3B1F53] mb-6">
                Get interview questions tailored specifically to your job role, experience level, and goals. Unlock detailed, AI-driven explanations that break down complex concepts into simple, digestible insights. Whether you're brushing up on fundamentals or mastering advanced topics, our platform helps you stay sharp and confident. Dive deep into focused learning paths, track your progress, and build your understanding one concept at a time. From preparing for your first interview to leveling up for your dream job — this is your all-in-one intelligent toolkit for interview success.
              </p>

              <button
                className="bg-black text-sm font-semibold text-white px-7 py-2.5 rounded-full hover:bg-[#FFEEF4] hover:text-black border border-[#F7CFD8] hover:border-[#670D2F] transition-colors"
                onClick={handleCTA}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image Section */}
      <div className="w-full relative z-10">
        <section className="flex items-center justify-center -mt-36 px-4">
          <img
            src={HERO_IMG}
            alt="Hero Illustration"
            className="w-full max-w-[500px] rounded-lg shadow-md"
          />
        </section>
      </div>

      {/* Features Section - Gradient Background Updated */}
      <div className="w-full bg-gradient-to-b from-[#dfeaeb] to-[#57a9fa] mt-10">
        <div className="max-w-screen-xl w-full mx-auto px-4 pt-10 pb-20">
          <section className="mt-5">
            <h2 className="text-2xl font-medium text-center mb-12 text-[#2C003E]">
              Features That Make You Shine
            </h2>
            <div className="flex flex-col items-center gap-8">
              {/* First 3 cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                {APP_FEATURES.slice(0, 3).map((feature) => (
                  <div
                    key={feature.id}
                    className="bg-[#ffffffc5] backdrop-blur-md p-6 rounded-xl shadow-xs hover:shadow-lg shadow-[#670D2F] transition border border-[#670D2F]"
                  >
                    <h3 className="text-base font-semibold mb-3 text-[#2C003E]">{feature.title}</h3>
                    <p className="text-gray-700">{feature.description}</p>
                  </div>
                ))}
              </div>

              {/* Last 2 cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                {APP_FEATURES.slice(3).map((feature) => (
                  <div
                    key={feature.id}
                    className="bg-[#ffffffc5] backdrop-blur-md p-6 rounded-xl shadow-xs hover:shadow-lg shadow-[#670D2F] transition border border-[#670D2F]"
                  >
                    <h3 className="text-base font-semibold mb-3 text-[#2C003E]">{feature.title}</h3>
                    <p className="text-gray-700">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <div className="text-sm bg-gray-50 text-[#3B1F53] text-center p-5 mt-5">
        Crafted with ❤️ — Keep Learning, Keep Growing
      </div>

      {/* Modal */}
      <Modal
        isOpen={openAuthModal}
        onClose={() => {
          setOpenAuthModal(false);
          setCurrentPage('login');
        }}
        hideHeader
      >
        <div>
          {currentPage === 'login' && <Login setCurrentPage={setCurrentPage} />}
          {currentPage === 'signup' && <SignUp setCurrentPage={setCurrentPage} />}
        </div>
      </Modal>
    </>
  );
};

export default LandingPage;
