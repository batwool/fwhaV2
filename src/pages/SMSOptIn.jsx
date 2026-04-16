import React from 'react';

const SMSOptIn = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <iframe
        src="https://en-1.fieldpulse.com/usrRWy_as5XEfkFqIm-uDRBOZ04rmfqTLm50_4qPh0M/opt-in-form"
        width="100%"
        height="1000"
        style={{ border: 'none' }}
        title="SMS Opt In"
      />
    </div>
  );
};

export default SMSOptIn;