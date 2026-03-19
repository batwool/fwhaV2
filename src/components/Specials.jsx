import React, { useState, useEffect } from 'react';

const BeatTheHeatSummer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Target date: May 31, 2026, 12:00 noon CST (18:00 UTC)
    const targetDate = new Date('2026-05-31T18:00:00Z'); // 12:00 CST = 18:00 UTC

    const countdown = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(countdown);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  const { days, hours, minutes, seconds } = timeLeft;

  const TimerBlock = ({ label, value }) => (
    <div className="flex flex-col items-center">
      <div className="text-5xl font-bold bg-[#0a5f7a] rounded-lg p-4 min-w-[80px] text-center shadow-lg border-2 border-[#f8e3b0] text-white">
        {value.toString().padStart(2, "0")}
      </div>
      <div className="text-sm mt-2 uppercase font-semibold text-[#f8e3b0]">{label}</div>
    </div>
  );

  return (
    <section 
      className="min-h-screen flex items-center text-white py-20 relative overflow-hidden" 
      style={{ 
        backgroundImage: `repeating-linear-gradient(
          45deg,
          #0a5f7a 0px,
          #0a5f7a 60px,
          #1e88e5 60px,
          #1e88e5 64px
        )`
      }}
    >
      {/* Beachy animated elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#f4d03f] to-[#f8e3b0] animate-pulse"></div>
      <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full border-8 border-[#f4d03f] opacity-20 animate-ping"></div>
      <div className="absolute -bottom-16 -left-16 w-32 h-32 opacity-10">
        <div className="text-8xl">🏖️</div>
      </div>
      <div className="absolute top-16 right-16 w-24 h-24 opacity-10">
        <div className="text-6xl">🌊</div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 lg:px-12 w-full relative z-10">
        {/* Heading with summer theme */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center mb-4">
            <div className="text-4xl mr-4">☀️</div>
            <h2 className="text-5xl font-bold text-white mb-4 uppercase tracking-wide">BEAT THE HEAT</h2>
            <div className="text-4xl ml-4">🏖️</div>
          </div>
          <div className="relative inline-block mx-auto">
            <h1 className="text-7xl font-black text-[#f8e3b0] mb-6 uppercase tracking-wider relative z-10 px-6 py-2">
              SUMMER AC READY
            </h1>
            <div className="absolute inset-0 bg-[#0a5f7a] rounded-full blur-lg opacity-60 animate-pulse"></div>
            <div className="absolute -top-2 -right-2 text-3xl">🌴</div>
            <div className="absolute -bottom-2 -left-2 text-3xl">🌞</div>
          </div>
          <p className="text-2xl text-white max-w-2xl mx-auto uppercase mt-6 font-semibold">
            WE'LL COME MAKE SURE YOUR AC IS READY BEFORE SUMMER HITS
          </p>
          <p className="text-xl text-[#f8e3b0] mt-4">🔥 Limited Time Summer Prep Offer 🔥</p>
          <div className="w-24 h-1 mx-auto mt-6" style={{ background: 'linear-gradient(to right, #0a5f7a, #f8e3b0)' }}></div>
        </div>

        {/* Countdown Timer */}
        <div className="flex justify-center mb-16">
          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 sm:p-8 border-4 border-[#f8e3b0] shadow-2xl flex flex-wrap sm:flex-nowrap gap-4 sm:gap-6 justify-center relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#1e88e5] px-6 py-1 rounded-full text-lg font-bold">
              TIME LEFT UNTIL SUMMER
            </div>
            <TimerBlock label="Days" value={days} />
            <div className="text-4xl sm:text-5xl font-bold self-center text-[#f8e3b0]">:</div>
            <TimerBlock label="Hours" value={hours} />
            <div className="text-4xl sm:text-5xl font-bold self-center text-[#f8e3b0]">:</div>
            <TimerBlock label="Minutes" value={minutes} />
            <div className="text-4xl sm:text-5xl font-bold self-center text-[#f8e3b0]">:</div>
            <TimerBlock label="Seconds" value={seconds} />
          </div>
        </div>

        {/* Summer-themed Teaser Cards */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch mb-16">
          {/* Card 1 */}
          <div className="flex flex-col justify-center rounded-2xl p-8 bg-white/10 backdrop-blur-sm border-3 border-[#f8e3b0] h-[280px] hover:scale-105 transition-all duration-300 max-w-md mx-auto w-full group relative overflow-hidden"
            style={{ boxShadow: '0 0 20px rgba(248, 227, 176, 0.3)' }}
          >
            <div className="absolute -inset-2 bg-[#f8e3b0] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            <div className="absolute top-4 right-4 text-3xl">🌊</div>
            <div className="text-center">
              <div className="text-6xl mb-6">❄️</div>
              <h3 className="text-3xl font-bold text-white mb-3 uppercase">Cool Savings</h3>
              <p className="text-lg text-white">Beat the heat with our best AC tune-up deals of the year</p>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="flex flex-col justify-center rounded-2xl p-8 bg-white/10 backdrop-blur-sm border-3 border-[#f8e3b0] h-[280px] hover:scale-105 transition-all duration-300 max-w-md mx-auto w-full group relative overflow-hidden"
            style={{ boxShadow: '0 0 20px rgba(248, 227, 176, 0.3)' }}
          >
            <div className="absolute -inset-2 bg-[#f8e3b0] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            <div className="absolute top-4 right-4 text-3xl">🏝️</div>
            <div className="text-center">
              <div className="text-6xl mb-6">🧊</div>
              <h3 className="text-3xl font-bold text-white mb-3 uppercase">Expert Tune-Up</h3>
              <p className="text-lg text-white">Professional service to keep your home cool all summer</p>
            </div>
          </div>
          
          {/* Card 3 */}
          <div className="flex flex-col justify-center rounded-2xl p-8 bg-white/10 backdrop-blur-sm border-3 border-[#f8e3b0] h-[280px] hover:scale-105 transition-all duration-300 max-w-md mx-auto w-full group relative overflow-hidden"
            style={{ boxShadow: '0 0 20px rgba(248, 227, 176, 0.3)' }}
          >
            <div className="absolute -inset-2 bg-[#f8e3b0] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            <div className="absolute top-4 right-4 text-3xl">🍹</div>
            <div className="text-center">
              <div className="text-6xl mb-6">☀️</div>
              <h3 className="text-3xl font-bold text-white mb-3 uppercase">Beat the Heat</h3>
              <p className="text-lg text-white">Don't sweat – we'll make sure your AC is ready for the hottest days</p>
            </div>
          </div>
        </div>

        {/* Notification CTA with summer theme */}
        <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border-3 border-[#1e88e5]">
          <p className="text-3xl font-bold text-white mb-4">🏖️ Don't Wait – Get Ready for Summer! 🏖️</p>
          <p className="text-xl text-white mb-6">Sign up now for exclusive deals and priority scheduling before the heat wave hits!</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <input 
              type="email" 
              placeholder="Enter your email for summer specials" 
              className="px-6 py-4 rounded-lg text-[#0a5f7a] text-lg min-w-[300px] focus:outline-none focus:ring-4 focus:ring-[#f8e3b0] placeholder-[#0a5f7a]/60"
            />
            <button 
              className="text-white px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 uppercase hover:scale-105 hover:shadow-lg flex items-center gap-2"
              style={{ 
                background: 'linear-gradient(135deg, #0a5f7a 0%, #1e88e5 100%)',
                boxShadow: '0 4px 15px rgba(10, 95, 122, 0.4)'
              }}
            >
              <span>Get Summer Ready</span>
              <span className="text-xl">🌞</span>
            </button>
          </div>
          <p className="text-sm text-[#f8e3b0] mt-4">*Offer expires May 31, 2026 at 12:00 PM CST</p>
        </div>

        {/* Summer decorations */}
        <div className="flex justify-center mt-12 gap-8 text-4xl">
          <div className="animate-bounce" style={{ animationDelay: '0s' }}>☀️</div>
          <div className="animate-bounce" style={{ animationDelay: '0.2s' }}>🌴</div>
          <div className="animate-bounce" style={{ animationDelay: '0.4s' }}>🏊</div>
          <div className="animate-bounce" style={{ animationDelay: '0.6s' }}>🍦</div>
          <div className="animate-bounce" style={{ animationDelay: '0.8s' }}>🌊</div>
        </div>
      </div>
    </section>
  );
};

export default BeatTheHeatSummer;