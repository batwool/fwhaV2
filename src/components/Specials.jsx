import React, { useState, useEffect } from 'react';

const BeatTheHeatMaySpecial = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Target: May 31, 2026 at 12:00 PM CDT (UTC-5) → 17:00 UTC
    const targetDate = new Date('2026-05-31T17:00:00Z');

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
      <div className="text-4xl sm:text-6xl md:text-7xl font-black bg-white/20 backdrop-blur-sm rounded-xl p-3 sm:p-4 min-w-[70px] sm:min-w-[90px] text-center shadow-md border-2 border-[#a8e6cf] text-[#2c5f2d]">
        {value.toString().padStart(2, '0')}
      </div>
      <div className="text-xs sm:text-sm mt-2 font-bold uppercase tracking-wider text-[#2c5f2d]">
        {label}
      </div>
    </div>
  );

  return (
    <section
      className="relative min-h-screen flex items-center text-[#2c5f2d] py-12 md:py-20 overflow-hidden"
      style={{
        background: 'linear-gradient(145deg, #f9f7e8 0%, #e6f7e9 50%, #fce4d6 100%)'
      }}
    >
      {/* Spring decorative elements */}
      <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-[#ffb7b2] via-[#a8e6cf] to-[#ffdac1]"></div>
      <div className="absolute top-10 left-5 opacity-30 animate-pulse">
        <div className="text-5xl">🌸</div>
      </div>
      <div className="absolute bottom-20 right-5 opacity-30 animate-soft-float">
        <div className="text-6xl">🌼</div>
      </div>
      <div className="absolute top-1/3 right-10 opacity-20 hidden sm:block">
        <div className="text-5xl">🦋</div>
      </div>
      <div className="absolute bottom-10 left-10 opacity-20 animate-pulse">
        <div className="text-5xl">🌱</div>
      </div>

      {/* Floating petals effect (CSS) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 text-2xl opacity-30 animate-bounce-slow">🌸</div>
        <div className="absolute bottom-20 right-1/3 text-3xl opacity-20 animate-spin-slow">🌼</div>
      </div>

      <div className="max-w-6xl mx-auto px-5 md:px-8 w-full relative z-10">
        {/* Header – Spring/May Special */}
        <div className="text-center mb-8 md:mb-12">
          <div className="flex flex-wrap justify-center items-center gap-3 mb-3">
            <span className="text-3xl md:text-4xl">🌸</span>
            <span className="inline-block bg-[#ffdac1] text-[#c44536] px-5 py-1.5 rounded-full text-sm md:text-base font-bold uppercase tracking-wider shadow-sm">
              May Spring Renewal
            </span>
            <span className="text-3xl md:text-4xl">🌼</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#c44536] mb-3 uppercase tracking-wide drop-shadow-sm">
            FRESH & COOL
          </h2>

          <div className="relative inline-block mx-auto mt-2">
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-[#2c5f2d] uppercase tracking-wider relative z-10 px-4 py-2 leading-tight bg-white/30 backdrop-blur-sm rounded-2xl shadow-sm">
              MAY <span className="inline-block text-[#c44536]">AC READY</span>
            </h1>
            <div className="absolute -top-3 -right-2 text-2xl md:text-3xl rotate-12">🌷</div>
            <div className="absolute -bottom-3 -left-2 text-2xl md:text-3xl -rotate-12">🍃</div>
          </div>

          <p className="text-lg md:text-2xl text-[#2c5f2d] max-w-2xl mx-auto mt-5 font-semibold bg-white/40 inline-block px-5 py-1.5 rounded-full backdrop-blur-sm shadow-sm">
            🌿 MAY EXCLUSIVE: SPRING AC TUNE-UP & SAVINGS 🌿
          </p>
          <p className="text-base md:text-xl text-[#c44536] mt-3 font-medium">
            Refresh your home for spring & beat the coming heat with our May-only deals!
          </p>
          <div className="w-24 h-1 mx-auto mt-5 rounded-full" style={{ background: 'linear-gradient(to right, #ffb7b2, #a8e6cf, #ffdac1)' }}></div>
        </div>

        {/* Countdown Timer - fresh spring colors */}
        <div className="flex justify-center mb-14 md:mb-20">
          <div className="bg-white/50 backdrop-blur-md rounded-2xl px-5 py-6 md:p-8 border-2 border-[#a8e6cf] shadow-xl w-full max-w-3xl relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#ffb7b2] to-[#ffdac1] text-[#2c5f2d] px-5 py-1.5 rounded-full text-sm md:text-base font-bold whitespace-nowrap shadow-md">
              ⏳ MAY SPRING OFFER ENDS IN ⏳
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5 md:gap-6 text-center mt-2">
              <TimerBlock label="DAYS" value={days} />
              <TimerBlock label="HOURS" value={hours} />
              <TimerBlock label="MINS" value={minutes} />
              <TimerBlock label="SECS" value={seconds} />
            </div>
            <p className="text-center text-[#c44536] text-xs mt-4 md:mt-6 font-medium bg-white/30 inline-block mx-auto px-3 py-1 rounded-full">
              *Valid through May 31, 2026 • 12:00 PM CDT
            </p>
          </div>
        </div>

        {/* Feature Cards - spring pastels */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-stretch mb-14 md:mb-20">
          <div className="group relative rounded-2xl p-6 md:p-8 bg-white/60 backdrop-blur-sm border-2 border-[#ffdac1] h-auto min-h-[260px] flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-[1.02] hover:border-[#ffb7b2] shadow-md" style={{ background: 'rgba(255, 250, 240, 0.7)' }}>
            <div className="absolute -inset-1 bg-[#ffb7b2] opacity-0 group-hover:opacity-20 rounded-2xl transition duration-300"></div>
            <div className="absolute top-3 right-3 text-2xl md:text-3xl">🌱</div>
            <div className="text-5xl md:text-6xl mb-4">🌿</div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#2c5f2d] uppercase mb-2">SPRING SAVINGS</h3>
            <p className="text-base md:text-lg text-[#2c5f2d]/80">$20 off any AC tune-up + free filter check — exclusive May rate.</p>
            <span className="mt-3 text-[#c44536] text-sm font-bold">🌸 Fresh start offer</span>
          </div>

          <div className="group relative rounded-2xl p-6 md:p-8 bg-white/60 backdrop-blur-sm border-2 border-[#ffdac1] h-auto min-h-[260px] flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-[1.02] hover:border-[#ffb7b2] shadow-md" style={{ background: 'rgba(255, 250, 240, 0.7)' }}>
            <div className="absolute -inset-1 bg-[#ffb7b2] opacity-0 group-hover:opacity-20 rounded-2xl transition duration-300"></div>
            <div className="absolute top-3 right-3 text-2xl md:text-3xl">🦋</div>
            <div className="text-5xl md:text-6xl mb-4">🧹</div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#2c5f2d] uppercase mb-2">SPRING TUNE-UP</h3>
            <p className="text-base md:text-lg text-[#2c5f2d]/80">NATE-certified techs, full system inspection & coil cleaning.</p>
            <span className="mt-3 text-[#c44536] text-sm font-bold">🌼 May priority slots</span>
          </div>

          <div className="group relative rounded-2xl p-6 md:p-8 bg-white/60 backdrop-blur-sm border-2 border-[#ffdac1] h-auto min-h-[260px] flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-[1.02] hover:border-[#ffb7b2] shadow-md" style={{ background: 'rgba(255, 250, 240, 0.7)' }}>
            <div className="absolute -inset-1 bg-[#ffb7b2] opacity-0 group-hover:opacity-20 rounded-2xl transition duration-300"></div>
            <div className="absolute top-3 right-3 text-2xl md:text-3xl">🌷</div>
            <div className="text-5xl md:text-6xl mb-4">☀️</div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#2c5f2d] uppercase mb-2">BEAT THE HEAT</h3>
            <p className="text-base md:text-lg text-[#2c5f2d]/80">Same-day service for early birds. Get comfortable before summer.</p>
            <span className="mt-3 text-[#c44536] text-sm font-bold">⚡ Limited May capacity</span>
          </div>
        </div>

        {/* CTA + Email Signup - spring fresh look */}
        <div className="text-center bg-white/50 backdrop-blur-md rounded-2xl p-6 md:p-10 border-2 border-[#a8e6cf] shadow-md">
          <p className="text-2xl md:text-4xl font-bold text-[#2c5f2d] mb-3 flex flex-wrap justify-center items-center gap-2">
            🌼 <span>MAY SPRING SPECIAL: SECURE YOUR SPOT</span> 🌸
          </p>
          <p className="text-base md:text-xl text-[#c44536] max-w-2xl mx-auto mb-6">
            Sign up now for May-only discounts, early bird scheduling, and a <strong className="text-[#2c5f2d]">free UV sanitizer check</strong> with any May tune-up.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
            <input
              type="email"
              placeholder="Enter your email for May specials 🌸"
              className="w-full sm:w-auto px-5 py-4 rounded-xl text-[#2c5f2d] text-base md:text-lg focus:outline-none focus:ring-4 focus:ring-[#ffb7b2] placeholder-[#2c5f2d]/60 shadow-sm bg-white/80"
            />
            <button
              className="w-full sm:w-auto bg-gradient-to-r from-[#a8e6cf] to-[#ffdac1] text-[#2c5f2d] px-8 py-4 rounded-xl text-base md:text-lg font-bold uppercase transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 shadow-sm"
            >
              <span>Claim May Deal</span>
              <span className="text-xl">🌿</span>
            </button>
          </div>
          <p className="text-xs text-[#c44536] mt-5 bg-white/40 inline-block px-4 py-1 rounded-full">
            ⏰ Offer expires May 31, 2026 at 12:00 PM CDT — don't miss out!
          </p>
        </div>

        {/* Spring animated icons */}
        <div className="flex flex-wrap justify-center mt-12 gap-4 sm:gap-8 text-3xl md:text-4xl">
          <div className="animate-bounce" style={{ animationDelay: '0s' }}>🌸</div>
          <div className="animate-bounce" style={{ animationDelay: '0.1s' }}>🌼</div>
          <div className="animate-bounce" style={{ animationDelay: '0.2s' }}>🦋</div>
          <div className="animate-bounce" style={{ animationDelay: '0.3s' }}>🌷</div>
          <div className="animate-bounce hidden sm:inline-block" style={{ animationDelay: '0.4s' }}>🍃</div>
        </div>
      </div>

      <style>{`
        @keyframes soft-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        .animate-soft-float {
          animation: soft-float 6s ease-in-out infinite;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default BeatTheHeatMaySpecial;