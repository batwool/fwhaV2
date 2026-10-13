import React, { useState, useEffect } from 'react';

const DontLetItFreezeFebruary = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Target: February 28, 2027 at 11:59:59 PM CST (UTC-6) → next day 05:59:59 UTC
    const targetDate = new Date('2027-03-01T05:59:59Z');

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
      <div className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black bg-white/40 backdrop-blur-sm rounded-xl p-2 sm:p-3 md:p-4 min-w-[60px] sm:min-w-[80px] md:min-w-[90px] text-center shadow-md border-2 border-[#7fb3d5] text-[#1a3a5c]">
        {value.toString().padStart(2, '0')}
      </div>
      <div className="text-[10px] sm:text-xs md:text-sm mt-1 sm:mt-2 font-bold uppercase tracking-wider text-[#2c5f8a]">
        {label}
      </div>
    </div>
  );

  return (
    <>
      <section
        className="relative min-h-screen flex items-center py-12 sm:py-16 md:py-20 overflow-hidden"
        style={{
          background: 'linear-gradient(145deg, #eaf5fb 0%, #d4eaf5 50%, #bcdcef 100%)'
        }}
      >
        {/* Winter decorative elements */}
        <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-[#7fb3d5] via-[#5a9bc7] to-[#3d7ea6]"></div>
        <div className="absolute top-5 left-2 sm:top-10 sm:left-5 opacity-25 sm:opacity-35 animate-pulse">
          <div className="text-3xl sm:text-5xl">❄️</div>
        </div>
        <div className="absolute bottom-10 right-2 sm:bottom-20 sm:right-5 opacity-25 sm:opacity-35 animate-soft-float">
          <div className="text-4xl sm:text-6xl">🌨️</div>
        </div>
        <div className="absolute top-1/3 right-2 sm:right-5 opacity-10 sm:opacity-20 hidden sm:block">
          <div className="text-4xl sm:text-5xl">🧊</div>
        </div>
        <div className="absolute bottom-5 left-2 sm:bottom-10 sm:left-5 opacity-25 animate-pulse">
          <div className="text-3xl sm:text-5xl">🏠</div>
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 text-xl sm:text-2xl opacity-20 sm:opacity-30 animate-bounce-slow">❄️</div>
          <div className="absolute bottom-10 right-1/4 text-2xl sm:text-3xl opacity-10 sm:opacity-20 animate-spin-slow">🌬️</div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 w-full relative z-10">
          {/* Header – Winter Shield Special */}
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
              <span className="text-2xl sm:text-3xl md:text-4xl">❄️</span>
              <span className="inline-block bg-[#d4eaf5] text-[#1a3a5c] px-3 sm:px-5 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm md:text-base font-bold uppercase tracking-wider shadow-sm border border-[#7fb3d5]">
                Winter Special – $199 Deal
              </span>
              <span className="text-2xl sm:text-3xl md:text-4xl">❄️</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a3a5c] mb-2 sm:mb-3 uppercase tracking-wide drop-shadow-sm">
              DON'T LET IT FREEZE
            </h2>

            <div className="relative inline-block mx-auto mt-1 sm:mt-2">
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-[#1a3a5c] uppercase tracking-wider relative z-10 px-2 sm:px-4 py-1 sm:py-2 leading-tight bg-white/50 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-sm">
                WINTER <span className="inline-block text-[#2c5f8a]">SHIELD</span>
              </h1>
              <div className="absolute -top-2 -right-1 sm:-top-3 sm:-right-2 text-xl sm:text-2xl md:text-3xl rotate-12">❄️</div>
              <div className="absolute -bottom-2 -left-1 sm:-bottom-3 sm:-left-2 text-xl sm:text-2xl md:text-3xl -rotate-12">🧊</div>
            </div>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#1a3a5c] max-w-2xl mx-auto mt-3 sm:mt-5 font-semibold bg-white/50 inline-block px-3 sm:px-5 py-1 sm:py-1.5 rounded-full backdrop-blur-sm shadow-sm">
              WINTER EXCLUSIVE: $199 WINTER HOME SHIELD INSPECTION
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#2c5f8a] mt-2 sm:mt-3 font-medium">
              A heating safety & freeze-readiness visit — with a photo report and $75 back toward any repair.
            </p>
            <div className="w-16 sm:w-24 h-1 mx-auto mt-4 sm:mt-5 rounded-full" style={{ background: 'linear-gradient(to right, #7fb3d5, #5a9bc7, #3d7ea6)' }}></div>
          </div>

          {/* Countdown Timer */}
          <div className="flex justify-center mb-10 sm:mb-14 md:mb-20">
            <div className="bg-white/60 backdrop-blur-md rounded-xl sm:rounded-2xl px-3 sm:px-5 py-4 sm:py-6 md:p-8 border-2 border-[#7fb3d5] shadow-xl w-full max-w-3xl relative">
              <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#7fb3d5] to-[#5a9bc7] text-white px-3 sm:px-5 py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-bold whitespace-nowrap shadow-md">
                ⏳ WINTER SHIELD OFFER ENDS IN ⏳
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 md:gap-6 text-center mt-4 sm:mt-6">
                <TimerBlock label="DAYS" value={days} />
                <TimerBlock label="HOURS" value={hours} />
                <TimerBlock label="MINS" value={minutes} />
                <TimerBlock label="SECS" value={seconds} />
              </div>
              <p className="text-center text-[#2c5f8a] text-[10px] sm:text-xs mt-3 sm:mt-4 md:mt-6 font-medium bg-white/40 inline-block mx-auto px-2 sm:px-3 py-1 rounded-full">
                *Valid October 15, 2026 – February 28, 2027 • Offer ends 11:59 PM CST
              </p>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 items-stretch mb-10 sm:mb-14 md:mb-20">
            <div className="group relative rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 bg-white/70 backdrop-blur-sm border-2 border-[#bcdcef] h-auto min-h-[220px] sm:min-h-[260px] flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-[1.02] hover:border-[#7fb3d5] shadow-md">
              <div className="absolute -inset-1 bg-[#7fb3d5] opacity-0 group-hover:opacity-20 rounded-xl sm:rounded-2xl transition duration-300"></div>
              <div className="absolute top-2 right-2 sm:top-3 sm:right-3 text-xl sm:text-2xl md:text-3xl">❄️</div>
              <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4">🛡️</div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1a3a5c] uppercase mb-1 sm:mb-2">$199 SPECIAL</h3>
              <p className="text-sm sm:text-base md:text-lg text-[#1a3a5c]/80">Full heating safety & freeze‑readiness inspection for one system.</p>
              <span className="mt-2 sm:mt-3 text-[#2c5f8a] text-xs sm:text-sm font-bold">❄️ Second system only $95</span>
            </div>

            <div className="group relative rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 bg-white/70 backdrop-blur-sm border-2 border-[#bcdcef] h-auto min-h-[220px] sm:min-h-[260px] flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-[1.02] hover:border-[#7fb3d5] shadow-md">
              <div className="absolute -inset-1 bg-[#7fb3d5] opacity-0 group-hover:opacity-20 rounded-xl sm:rounded-2xl transition duration-300"></div>
              <div className="absolute top-2 right-2 sm:top-3 sm:right-3 text-xl sm:text-2xl md:text-3xl">🧊</div>
              <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4">🔍</div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1a3a5c] uppercase mb-1 sm:mb-2">SAFETY FIRST</h3>
              <p className="text-sm sm:text-base md:text-lg text-[#1a3a5c]/80">Carbon monoxide test, heat exchanger check, gas & venting verification.</p>
              <span className="mt-2 sm:mt-3 text-[#2c5f8a] text-xs sm:text-sm font-bold">🛡️ Ranked Safe / Watch / Fix Now</span>
            </div>

            <div className="group relative rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 bg-white/70 backdrop-blur-sm border-2 border-[#bcdcef] h-auto min-h-[220px] sm:min-h-[260px] flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-[1.02] hover:border-[#7fb3d5] shadow-md">
              <div className="absolute -inset-1 bg-[#7fb3d5] opacity-0 group-hover:opacity-20 rounded-xl sm:rounded-2xl transition duration-300"></div>
              <div className="absolute top-2 right-2 sm:top-3 sm:right-3 text-xl sm:text-2xl md:text-3xl">🌨️</div>
              <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4">🌡️</div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1a3a5c] uppercase mb-1 sm:mb-2">FREEZE READY</h3>
              <p className="text-sm sm:text-base md:text-lg text-[#1a3a5c]/80">Condensate lines, outdoor units & line insulation checked before the hard freeze.</p>
              <span className="mt-2 sm:mt-3 text-[#2c5f8a] text-xs sm:text-sm font-bold">⚡ $75 back toward repairs</span>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-white/60 backdrop-blur-md rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 border-2 border-[#7fb3d5] shadow-md">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a3a5c] mb-2 sm:mb-3 flex flex-wrap justify-center items-center gap-2">
              ❄️ <span>GRAB YOUR $199 WINTER SHIELD</span> 🏠
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#2c5f8a] max-w-2xl mx-auto mb-4 sm:mb-6">
              Don't let it freeze — secure your spot at the $199 rate before the first hard freeze hits North Texas.
            </p>
            <button
              onClick={openModal}
              className="w-full sm:w-auto bg-gradient-to-r from-[#7fb3d5] to-[#5a9bc7] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg md:text-xl font-bold uppercase transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 shadow-sm mx-auto"
            >
              <span>Book Winter Shield – $199</span>
              <span className="text-lg sm:text-xl">❄️</span>
            </button>
            <p className="text-[10px] sm:text-xs text-[#2c5f8a] mt-4 sm:mt-5 bg-white/50 inline-block px-3 sm:px-4 py-1 rounded-full">
              ⏰ Offer expires February 28, 2027 at 11:59 PM CST — priority slots fill fast before the first freeze!
            </p>
          </div>

          {/* Winter animated icons */}
          <div className="flex flex-wrap justify-center mt-8 sm:mt-10 md:mt-12 gap-3 sm:gap-4 md:gap-8 text-2xl sm:text-3xl md:text-4xl">
            <div className="animate-bounce" style={{ animationDelay: '0s' }}>❄️</div>
            <div className="animate-bounce" style={{ animationDelay: '0.1s' }}>🧊</div>
            <div className="animate-bounce" style={{ animationDelay: '0.2s' }}>🌨️</div>
            <div className="animate-bounce hidden sm:inline-block" style={{ animationDelay: '0.3s' }}>🏠</div>
            <div className="animate-bounce hidden sm:inline-block" style={{ animationDelay: '0.4s' }}>🌬️</div>
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
              title="Request Service – Winter Home Shield Inspection"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default DontLetItFreezeFebruary;