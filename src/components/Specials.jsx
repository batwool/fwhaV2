import React, { useState, useEffect } from 'react';

const ChristmasSpecial = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Target date: December 24, 2025, 12:00 noon CST (18:00 UTC)
    const targetDate = new Date('2025-12-24T18:00:00Z'); // 12:00 CST = 18:00 UTC

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
      <div className="text-5xl font-bold bg-[#0a5c36] rounded-lg p-4 min-w-[80px] text-center shadow-lg border-2 border-[#ffd700]">
        {value.toString().padStart(2, "0")}
      </div>
      <div className="text-sm mt-2 uppercase font-semibold text-[#ffd700]">{label}</div>
    </div>
  );

  return (
    <section 
      className="min-h-screen flex items-center text-white py-20 relative overflow-hidden" 
      style={{ 
        backgroundImage: `repeating-linear-gradient(
          45deg,
          #0a5c36 0px,
          #0a5c36 60px,
          #1d8348 60px,
          #1d8348 64px
        )`
      }}
    >
      {/* Christmas-themed animated elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#b22222] to-[#ffd700] animate-pulse"></div>
      <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full border-8 border-[#b22222] opacity-20 animate-ping"></div>
      <div className="absolute -bottom-16 -left-16 w-32 h-32 opacity-10">
        <div className="text-8xl">🎄</div>
      </div>
      <div className="absolute top-16 right-16 w-24 h-24 opacity-10">
        <div className="text-6xl">❄️</div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 lg:px-12 w-full relative z-10">
        {/* Heading with Christmas theme */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center mb-4">
            <div className="text-4xl mr-4">🎅</div>
            <h2 className="text-5xl font-bold text-white mb-4 uppercase tracking-wide">WELCOME TO THE</h2>
            <div className="text-4xl ml-4">🎄</div>
          </div>
          <div className="relative inline-block mx-auto">
            <h1 className="text-7xl font-black text-[#ffd700] mb-6 uppercase tracking-wider relative z-10 px-6 py-2">
              CHRISTMAS COMFORT CLUB
            </h1>
            <div className="absolute inset-0 bg-[#b22222] rounded-full blur-lg opacity-60 animate-pulse"></div>
            <div className="absolute -top-2 -right-2 text-3xl">✨</div>
            <div className="absolute -bottom-2 -left-2 text-3xl">✨</div>
          </div>
          <p className="text-2xl text-white max-w-2xl mx-auto uppercase mt-6 font-semibold">
            HOLIDAY SPECIAL ENDS DECEMBER 24TH AT NOON
          </p>
          <p className="text-xl text-[#ffd700] mt-4">🎁 Limited Time Christmas Offer 🎁</p>
          <div className="w-24 h-1 mx-auto mt-6" style={{ background: 'linear-gradient(to right, #b22222, #ffd700)' }}></div>
        </div>

        {/* Countdown Timer */}
        <div className="flex justify-center mb-16">
          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 sm:p-8 border-4 border-[#ffd700] shadow-2xl flex flex-wrap sm:flex-nowrap gap-4 sm:gap-6 justify-center relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#b22222] px-6 py-1 rounded-full text-lg font-bold">
              TIME REMAINING
            </div>
            <TimerBlock label="Days" value={days} />
            <div className="text-4xl sm:text-5xl font-bold self-center text-[#ffd700]">:</div>
            <TimerBlock label="Hours" value={hours} />
            <div className="text-4xl sm:text-5xl font-bold self-center text-[#ffd700]">:</div>
            <TimerBlock label="Minutes" value={minutes} />
            <div className="text-4xl sm:text-5xl font-bold self-center text-[#ffd700]">:</div>
            <TimerBlock label="Seconds" value={seconds} />
          </div>
        </div>

        {/* Christmas-themed Teaser Cards */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch mb-16">
          {/* Card 1 */}
          <div className="flex flex-col justify-center rounded-2xl p-8 bg-white/10 backdrop-blur-sm border-3 border-[#ffd700] h-[280px] hover:scale-105 transition-all duration-300 max-w-md mx-auto w-full group relative overflow-hidden"
            style={{ boxShadow: '0 0 20px rgba(255, 215, 0, 0.3)' }}
          >
            <div className="absolute -inset-2 bg-[#ffd700] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            <div className="absolute top-4 right-4 text-3xl">🎁</div>
            <div className="text-center">
              <div className="text-6xl mb-6">🔥</div>
              <h3 className="text-3xl font-bold text-white mb-3 uppercase">Holiday Warmth</h3>
              <p className="text-lg text-white">Stay cozy all winter with our special Christmas heating services</p>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="flex flex-col justify-center rounded-2xl p-8 bg-white/10 backdrop-blur-sm border-3 border-[#ffd700] h-[280px] hover:scale-105 transition-all duration-300 max-w-md mx-auto w-full group relative overflow-hidden"
            style={{ boxShadow: '0 0 20px rgba(255, 215, 0, 0.3)' }}
          >
            <div className="absolute -inset-2 bg-[#ffd700] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            <div className="absolute top-4 right-4 text-3xl">🎄</div>
            <div className="text-center">
              <div className="text-6xl mb-6">💰</div>
              <h3 className="text-3xl font-bold text-white mb-3 uppercase">Christmas Savings</h3>
              <p className="text-lg text-white">Special holiday discounts to make your season bright & affordable</p>
            </div>
          </div>
          
          {/* Card 3 */}
          <div className="flex flex-col justify-center rounded-2xl p-8 bg-white/10 backdrop-blur-sm border-3 border-[#ffd700] h-[280px] hover:scale-105 transition-all duration-300 max-w-md mx-auto w-full group relative overflow-hidden"
            style={{ boxShadow: '0 0 20px rgba(255, 215, 0, 0.3)' }}
          >
            <div className="absolute -inset-2 bg-[#ffd700] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            <div className="absolute top-4 right-4 text-3xl">❄️</div>
            <div className="text-center">
              <div className="text-6xl mb-6">🏆</div>
              <h3 className="text-3xl font-bold text-white mb-3 uppercase">Premium Service</h3>
              <p className="text-lg text-white">Top-tier HVAC care wrapped in holiday cheer</p>
            </div>
          </div>
        </div>

        {/* Notification CTA with Christmas theme */}
        <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border-3 border-[#b22222]">
          <p className="text-3xl font-bold text-white mb-4">🎄 Don't Miss Out on Christmas Comfort! 🎄</p>
          <p className="text-xl text-white mb-6">Join our Christmas Comfort Club and receive exclusive holiday offers!</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <input 
              type="email" 
              placeholder="Enter your email for holiday specials" 
              className="px-6 py-4 rounded-lg text-[#0a5c36] text-lg min-w-[300px] focus:outline-none focus:ring-4 focus:ring-[#ffd700] placeholder-[#0a5c36]/60"
            />
            <button 
              className="text-white px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 uppercase hover:scale-105 hover:shadow-lg flex items-center gap-2"
              style={{ 
                background: 'linear-gradient(135deg, #b22222 0%, #ff4500 100%)',
                boxShadow: '0 4px 15px rgba(178, 34, 34, 0.4)'
              }}
            >
              <span>Join Christmas Club</span>
              <span className="text-xl">🎅</span>
            </button>
          </div>
          <p className="text-sm text-[#ffd700] mt-4">*Offer expires December 24, 2025 at 12:00 PM CST</p>
        </div>

        {/* Christmas decorations */}
        <div className="flex justify-center mt-12 gap-8 text-4xl">
          <div className="animate-bounce" style={{ animationDelay: '0s' }}>❄️</div>
          <div className="animate-bounce" style={{ animationDelay: '0.2s' }}>✨</div>
          <div className="animate-bounce" style={{ animationDelay: '0.4s' }}>🎄</div>
          <div className="animate-bounce" style={{ animationDelay: '0.6s' }}>🎁</div>
          <div className="animate-bounce" style={{ animationDelay: '0.8s' }}>❄️</div>
        </div>
      </div>
    </section>
  );
};

export default ChristmasSpecial;