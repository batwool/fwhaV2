import React, { useState, useEffect } from 'react';

const Specials = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const TARGET_DATE_KEY = "grandSlamDealTargetDate";
    
    // Set target date to October 15th of the current year
    const now = new Date();
    const targetDate = new Date(now.getFullYear(), 9, 15); // Month is 0-indexed (9 = October)
    
    // If October 15th has already passed this year, set it for next year
    if (now > targetDate) {
      targetDate.setFullYear(now.getFullYear() + 1);
    }
    
    localStorage.setItem(TARGET_DATE_KEY, targetDate.toISOString());

    const countdown = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(countdown);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        
        // Reset to next year if the date has passed
        targetDate.setFullYear(now.getFullYear() + 1);
        localStorage.setItem(TARGET_DATE_KEY, targetDate.toISOString());
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
      <div className="text-5xl font-bold bg-[#003049] rounded-lg p-4 min-w-[80px] text-center">
        {value.toString().padStart(2, "0")}
      </div>
      <div className="text-sm mt-2 uppercase">{label}</div>
    </div>
  );

  return (
    <section 
      className="min-h-screen flex items-center text-white py-20 relative overflow-hidden" 
      style={{ 
        backgroundImage: `repeating-linear-gradient(
          45deg,
          #003049 0px,
          #003049 60px,
          #004366 60px,
          #004366 64px
        )`
      }}
    >
      {/* Animated elements for visual interest */}
      <div className="absolute top-0 left-0 w-full h-1 bg-[#780000] animate-pulse"></div>
      <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full border-8 border-[#780000] opacity-20 animate-ping"></div>
      
      <div className="max-w-6xl mx-auto px-6 lg:px-12 w-full relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4 uppercase">GET READY FOR OUR</h2>
          <div className="relative inline-block mx-auto">
            <h1 className="text-7xl font-black text-[#f77f00] mb-6 uppercase tracking-wider relative z-10 px-4">
              GRAND SLAM DEAL
            </h1>
            <div className="absolute inset-0 bg-[#780000] rounded-lg blur-md opacity-70 mx-2 animate-pulse"></div>
          </div>
          <p className="text-2xl text-white max-w-2xl mx-auto uppercase mt-6">
            THE ULTIMATE HVAC OFFER IS COMING SOON
          </p>
          <div className="w-24 h-1 mx-auto mt-6" style={{ backgroundColor: '#780000' }}></div>
        </div>

        {/* Countdown Timer */}
        <div className="flex justify-center mb-16">
          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 sm:p-8 border-2 border-[#f77f00] shadow-2xl flex flex-wrap sm:flex-nowrap gap-4 sm:gap-6 justify-center">
            <TimerBlock label="Days" value={days} />
            <div className="text-4xl sm:text-5xl font-bold self-center">:</div>
            <TimerBlock label="Hours" value={hours} />
            <div className="text-4xl sm:text-5xl font-bold self-center">:</div>
            <TimerBlock label="Minutes" value={minutes} />
            <div className="text-4xl sm:text-5xl font-bold self-center">:</div>
            <TimerBlock label="Seconds" value={seconds} />
          </div>
        </div>

        {/* Teaser Cards */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch mb-16">
          {/* Card 1 */}
          <div className="flex flex-col justify-center rounded-2xl p-8 bg-white/10 backdrop-blur-sm border-2 border-dashed h-[280px] hover:scale-105 transition-all duration-300 max-w-md mx-auto w-full group relative overflow-hidden"
            style={{ borderColor: '#f77f00' }}
          >
            <div className="absolute -inset-2 bg-[#f77f00] opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
            <div className="text-center">
              <div className="text-6xl mb-6">⚡</div>
              <h3 className="text-3xl font-bold text-white mb-3 uppercase">Game Changing</h3>
              <p className="text-lg text-white">This offer will revolutionize how you think about HVAC services</p>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="flex flex-col justify-center rounded-2xl p-8 bg-white/10 backdrop-blur-sm border-2 border-dashed h-[280px] hover:scale-105 transition-all duration-300 max-w-md mx-auto w-full group relative overflow-hidden"
            style={{ borderColor: '#f77f00' }}
          >
            <div className="absolute -inset-2 bg-[#f77f00] opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
            <div className="text-center">
              <div className="text-6xl mb-6">💰</div>
              <h3 className="text-3xl font-bold text-white mb-3 uppercase">Massive Savings</h3>
              <p className="text-lg text-white">The biggest discount we've ever offered on premium services</p>
            </div>
          </div>
          
          {/* Card 3 */}
          <div className="flex flex-col justify-center rounded-2xl p-8 bg-white/10 backdrop-blur-sm border-2 border-dashed h-[280px] hover:scale-105 transition-all duration-300 max-w-md mx-auto w-full group relative overflow-hidden"
            style={{ borderColor: '#f77f00' }}
          >
            <div className="absolute -inset-2 bg-[#f77f00] opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
            <div className="text-center">
              <div className="text-6xl mb-6">🏆</div>
              <h3 className="text-3xl font-bold text-white mb-3 uppercase">Premium Service</h3>
              <p className="text-lg text-white">Top-tier service paired with an unbeatable limited-time offer</p>
            </div>
          </div>
        </div>

        {/* Notification CTA */}
        <div className="text-center">
          <p className="text-xl text-white mb-6">Be the first to know when our Grand Slam Deal drops!</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-6 py-4 rounded-lg text-[#003049] text-lg min-w-[300px] focus:outline-none focus:ring-4 focus:ring-[#f77f00]"
            />
            <button 
              className="text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors uppercase hover:bg-[#003049] hover:scale-105"
              style={{ backgroundColor: '#780000' }}
            >
              Notify Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specials;