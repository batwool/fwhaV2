import React, { useState, useEffect } from 'react';

const Specials = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  
  // Set the target date for the grand slam deal (example: 2 weeks from now)
  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 14);
    
    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate - now;
      
      if (difference > 0) {
        setDays(Math.floor(difference / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        setMinutes(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)));
      }
    };
    
    updateCountdown();
    const timer = setInterval(updateCountdown, 60000);
    
    return () => clearInterval(timer);
  }, []);

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
          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-8 border-2 border-[#f77f00] shadow-2xl">
            <h3 className="text-2xl text-center text-white mb-6 uppercase">Deal launches in:</h3>
            <div className="flex gap-6 justify-center">
              <div className="flex flex-col items-center">
                <div className="text-5xl font-bold bg-[#003049] rounded-lg p-4 min-w-[80px] text-center">{days}</div>
                <div className="text-sm mt-2 uppercase">Days</div>
              </div>
              <div className="text-5xl font-bold self-center">:</div>
              <div className="flex flex-col items-center">
                <div className="text-5xl font-bold bg-[#003049] rounded-lg p-4 min-w-[80px] text-center">{hours}</div>
                <div className="text-sm mt-2 uppercase">Hours</div>
              </div>
              <div className="text-5xl font-bold self-center">:</div>
              <div className="flex flex-col items-center">
                <div className="text-5xl font-bold bg-[#003049] rounded-lg p-4 min-w-[80px] text-center">{minutes}</div>
                <div className="text-sm mt-2 uppercase">Minutes</div>
              </div>
            </div>
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