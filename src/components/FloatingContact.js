import React from 'react';

const FloatingContact = () => {
  const styleTag = `
    @keyframes wiggleZoom {
      0%, 100% {
        transform: rotate(0deg) scale(1);
      }
      20% {
        transform: rotate(10deg) scale(1.15);
      }
      40% {
        transform: rotate(-10deg) scale(1.1);
      }
      60% {
        transform: rotate(8deg) scale(1.2);
      }
      80% {
        transform: rotate(-8deg) scale(1.1);
      }
    }

    .wiggle-zoom {
      animation: wiggleZoom 0.9s infinite ease-in-out;
    }
  `;

  const btnStyle = {
    marginBottom: '12px',
    width: '55px',
    height: '55px',
    borderRadius: '50%',
    backgroundColor: '#fff',
    boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.2s',
  };

  const containerStyle = {
    position: 'fixed',
    right: '20px',
    bottom: '80px',
    zIndex: 999,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  return (
    <>
      <style>{styleTag}</style>

      <div style={containerStyle}>
        <a href="tel:+84965800166" className="wiggle-zoom" style={btnStyle}>
          <img src="https://img.icons8.com/fluency/48/phone.png" alt="Call" style={{ width: '28px' }} />
        </a>
        <a href="https://zalo.me/84965800166" className="wiggle-zoom" style={btnStyle}>
          <img src="https://img.icons8.com/color/48/zalo.png" alt="Zalo" style={{ width: '28px' }} />
        </a>
        <a href="https://m.me/yourpage" className="wiggle-zoom" style={btnStyle}>
          <img src="https://img.icons8.com/color/48/facebook-messenger.png" alt="Messenger" style={{ width: '28px' }} />
        </a>
      </div>
    </>
  );
};

export default FloatingContact;
