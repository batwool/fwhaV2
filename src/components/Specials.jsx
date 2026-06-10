import React, { useState, useEffect } from 'react';

const BeatTheHeatJuneSpecial = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Target: June 25, 2026 at 11:59:59 PM CDT (UTC-5) → next day 04:59:59 UTC
    const targetDate = new Date('2026-06-26T04:59:59Z');

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

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const TimerBlock = ({ label, value }) => (
    <div className="flex flex-col items-center">
      <div className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black bg-white/20 backdrop-blur-sm rounded-xl p-2 sm:p-3 md:p-4 min-w-[60px] sm:min-w-[80px] md:min-w-[90px] text-center shadow-md border-2 border-[#ffb84d] text-[#2c5f2d]">
        {value.toString().padStart(2, '0')}
      </div>
      <div className="text-[10px] sm:text-xs md:text-sm mt-1 sm:mt-2 font-bold uppercase tracking-wider text-[#c44536]">
        {label}
      </div>
    </div>
  );

  return (
    <>
      <section
        className="relative min-h-screen flex items-center py-12 sm:py-16 md:py-20 overflow-hidden"
        style={{
          background: 'linear-gradient(145deg, #fff5e6 0%, #ffe6cc 50%, #ffd9b3 100%)'
        }}
      >
        {/* Summer decorative elements - hidden on very small screens to avoid clutter */}
        <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-[#ffb84d] via-[#ff9f4a] to-[#ff6b35]"></div>
        <div className="absolute top-5 left-2 sm:top-10 sm:left-5 opacity-20 sm:opacity-30 animate-pulse">
          <div className="text-3xl sm:text-5xl">☀️</div>
        </div>
        <div className="absolute bottom-10 right-2 sm:bottom-20 sm:right-5 opacity-20 sm:opacity-30 animate-soft-float">
          <div className="text-4xl sm:text-6xl">🌊</div>
        </div>
        <div className="absolute top-1/3 right-2 sm:right-5 opacity-10 sm:opacity-20 hidden sm:block">
          <div className="text-4xl sm:text-5xl">🍉</div>
        </div>
        <div className="absolute bottom-5 left-2 sm:bottom-10 sm:left-5 opacity-20 animate-pulse">
          <div className="text-3xl sm:text-5xl">⛱️</div>
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 text-xl sm:text-2xl opacity-20 sm:opacity-30 animate-bounce-slow">🍦</div>
          <div className="absolute bottom-10 right-1/4 text-2xl sm:text-3xl opacity-10 sm:opacity-20 animate-spin-slow">🏖️</div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 w-full relative z-10">
          {/* Header – June / Summer Special */}
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
              <span className="text-2xl sm:text-3xl md:text-4xl">☀️</span>
              <span className="inline-block bg-[#ffd9b3] text-[#c44536] px-3 sm:px-5 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm md:text-base font-bold uppercase tracking-wider shadow-sm">
                June Summer Kickoff
              </span>
              <span className="text-2xl sm:text-3xl md:text-4xl">🌊</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#c44536] mb-2 sm:mb-3 uppercase tracking-wide drop-shadow-sm">
              BEAT THE HEAT
            </h2>

            <div className="relative inline-block mx-auto mt-1 sm:mt-2">
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-[#2c5f2d] uppercase tracking-wider relative z-10 px-2 sm:px-4 py-1 sm:py-2 leading-tight bg-white/30 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-sm">
                JUNE <span className="inline-block text-[#c44536]">READY</span>
              </h1>
              <div className="absolute -top-2 -right-1 sm:-top-3 sm:-right-2 text-xl sm:text-2xl md:text-3xl rotate-12">🔥</div>
              <div className="absolute -bottom-2 -left-1 sm:-bottom-3 sm:-left-2 text-xl sm:text-2xl md:text-3xl -rotate-12">❄️</div>
            </div>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#2c5f2d] max-w-2xl mx-auto mt-3 sm:mt-5 font-semibold bg-white/40 inline-block px-3 sm:px-5 py-1 sm:py-1.5 rounded-full backdrop-blur-sm shadow-sm">
            JUNE EXCLUSIVE: SUMMER AC TUNE-UP & SAVINGS
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#c44536] mt-2 sm:mt-3 font-medium">
              Get your system ready for the Texas heat with our June‑only deals!
            </p>
            <div className="w-16 sm:w-24 h-1 mx-auto mt-4 sm:mt-5 rounded-full" style={{ background: 'linear-gradient(to right, #ffb84d, #ff9f4a, #ff6b35)' }}></div>
          </div>

          {/* Countdown Timer - fully responsive */}
          <div className="flex justify-center mb-10 sm:mb-14 md:mb-20">
            <div className="bg-white/50 backdrop-blur-md rounded-xl sm:rounded-2xl px-3 sm:px-5 py-4 sm:py-6 md:p-8 border-2 border-[#ffb84d] shadow-xl w-full max-w-3xl relative">
              <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#ffb84d] to-[#ff9f4a] text-[#2c5f2d] px-3 sm:px-5 py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-bold whitespace-nowrap shadow-md">
                ⏳ JUNE SUMMER OFFER ENDS IN ⏳
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 md:gap-6 text-center mt-4 sm:mt-6">
                <TimerBlock label="DAYS" value={days} />
                <TimerBlock label="HOURS" value={hours} />
                <TimerBlock label="MINS" value={minutes} />
                <TimerBlock label="SECS" value={seconds} />
              </div>
              <p className="text-center text-[#c44536] text-[10px] sm:text-xs mt-3 sm:mt-4 md:mt-6 font-medium bg-white/30 inline-block mx-auto px-2 sm:px-3 py-1 rounded-full">
                *Valid through June 25, 2026 • 11:59 PM CDT
              </p>
            </div>
          </div>

          {/* Feature Cards - responsive grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 items-stretch mb-10 sm:mb-14 md:mb-20">
            <div className="group relative rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 bg-white/60 backdrop-blur-sm border-2 border-[#ffd9b3] h-auto min-h-[220px] sm:min-h-[260px] flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-[1.02] hover:border-[#ffb84d] shadow-md">
              <div className="absolute -inset-1 bg-[#ffb84d] opacity-0 group-hover:opacity-20 rounded-xl sm:rounded-2xl transition duration-300"></div>
              <div className="absolute top-2 right-2 sm:top-3 sm:right-3 text-xl sm:text-2xl md:text-3xl">🔥</div>
              <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4">❄️</div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#2c5f2d] uppercase mb-1 sm:mb-2">SUMMER SAVINGS</h3>
              <p className="text-sm sm:text-base md:text-lg text-[#2c5f2d]/80"> Contact Us For Exclusive Deals!</p>
              <span className="mt-2 sm:mt-3 text-[#c44536] text-xs sm:text-sm font-bold">☀️ Beat the heat offer</span>
            </div>

            <div className="group relative rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 bg-white/60 backdrop-blur-sm border-2 border-[#ffd9b3] h-auto min-h-[220px] sm:min-h-[260px] flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-[1.02] hover:border-[#ffb84d] shadow-md">
              <div className="absolute -inset-1 bg-[#ffb84d] opacity-0 group-hover:opacity-20 rounded-xl sm:rounded-2xl transition duration-300"></div>
              <div className="absolute top-2 right-2 sm:top-3 sm:right-3 text-xl sm:text-2xl md:text-3xl">🍉</div>
              <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4">⚙️</div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#2c5f2d] uppercase mb-1 sm:mb-2">SUMMER TUNE-UP</h3>
              <p className="text-sm sm:text-base md:text-lg text-[#2c5f2d]/80">NATE-certified techs, full system inspection & coil cleaning.</p>
              <span className="mt-2 sm:mt-3 text-[#c44536] text-xs sm:text-sm font-bold">🌊 June priority slots</span>
            </div>

            <div className="group relative rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 bg-white/60 backdrop-blur-sm border-2 border-[#ffd9b3] h-auto min-h-[220px] sm:min-h-[260px] flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-[1.02] hover:border-[#ffb84d] shadow-md">
              <div className="absolute -inset-1 bg-[#ffb84d] opacity-0 group-hover:opacity-20 rounded-xl sm:rounded-2xl transition duration-300"></div>
              <div className="absolute top-2 right-2 sm:top-3 sm:right-3 text-xl sm:text-2xl md:text-3xl">🏖️</div>
              <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4">⏱️</div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#2c5f2d] uppercase mb-1 sm:mb-2">SAME-DAY SERVICE</h3>
              <p className="text-sm sm:text-base md:text-lg text-[#2c5f2d]/80">Early birds get priority. Stay comfortable before summer peaks.</p>
              <span className="mt-2 sm:mt-3 text-[#c44536] text-xs sm:text-sm font-bold">⚡ Limited June capacity</span>
            </div>
          </div>

          {/* CTA - cleaned up, no email input */}
          <div className="text-center bg-white/50 backdrop-blur-md rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 border-2 border-[#ffb84d] shadow-md">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#2c5f2d] mb-2 sm:mb-3 flex flex-wrap justify-center items-center gap-2">
              ☀️ <span>SUMMER SPECIAL: SECURE YOUR SPOT</span> 🌊
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#c44536] max-w-2xl mx-auto mb-4 sm:mb-6">
            </p>
            <button
              onClick={openModal}
              className="w-full sm:w-auto bg-gradient-to-r from-[#ffb84d] to-[#ff9f4a] text-[#2c5f2d] px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg md:text-xl font-bold uppercase transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 shadow-sm mx-auto"
            >
              <span>Claim June Deal</span>
              <span className="text-lg sm:text-xl">☀️</span>
            </button>
            <p className="text-[10px] sm:text-xs text-[#c44536] mt-4 sm:mt-5 bg-white/40 inline-block px-3 sm:px-4 py-1 rounded-full">
              ⏰ Offer expires June 25, 2026 at 11:59 PM CDT — don't miss out!
            </p>
          </div>

          {/* Summer animated icons - responsive */}
          <div className="flex flex-wrap justify-center mt-8 sm:mt-10 md:mt-12 gap-3 sm:gap-4 md:gap-8 text-2xl sm:text-3xl md:text-4xl">
            <div className="animate-bounce" style={{ animationDelay: '0s' }}>☀️</div>
            <div className="animate-bounce" style={{ animationDelay: '0.1s' }}>🌊</div>
            <div className="animate-bounce" style={{ animationDelay: '0.2s' }}>🍉</div>
            <div className="animate-bounce hidden sm:inline-block" style={{ animationDelay: '0.3s' }}>⛱️</div>
            <div className="animate-bounce hidden sm:inline-block" style={{ animationDelay: '0.4s' }}>🍦</div>
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

      {/* FieldPulse Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-3 sm:p-4"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-lg shadow-xl w-full max-w-4xl h-[90%] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 sm:top-3 sm:right-4 text-gray-600 hover:text-gray-900 text-2xl sm:text-3xl font-bold z-10 bg-white rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center shadow"
              aria-label="Close"
            >
              ×
            </button>
            <iframe
              src="https://portal.fieldpulse.com/fortworthheatandair"
              width="100%"
              height="100%"
              style={{ border: 'none' }}
              title="Request Service – June Special"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default BeatTheHeatJuneSpecial;