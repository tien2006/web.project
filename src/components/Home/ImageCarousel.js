import React, { useState } from 'react';

const images = [
  {
    src: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1754896862/slider1_huiicr.jpg',
    title: 'Digital Solutions',
    desc: 'Find out more about Digital Solutions here.',
  },
  {
    src: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1754896862/slider2_vfkzij.webp',
    title: 'Service Agreements',
    desc: 'Details about Service Agreements.',
  },
  {
    src: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1754896862/slider3_kyk7cf.jpg',
    title: 'Automation Technology',
    desc: 'Explore our Automation Technology.',
  },
  {
    src: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1754896863/slider4_evlbtc.png',
    title: 'Parts',
    desc: 'Explore our Automation Technology.',
  },
  {
    src: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1754896863/slider5_pryu22.jpg',
    title: 'Maintenance',
    desc: 'Explore our Automation Technology.',
  },
  {
    src: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1754896863/slider6_m7ekft.jpg',
    title: 'Support',
    desc: 'Explore our Automation Technology.',
  },
  {
    src: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1754896863/slider7_a4odjy.jpg',
    title: 'Training',
    desc: 'Explore our Automation Technology.',
  },
  {
    src: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1754896863/slider8_hsd9zs.png',
    title: 'Expert Service',
    desc: 'Explore our Automation Technology.',
  },
  // Bạn thêm ảnh, title, desc tùy ý
];

const ImageCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const length = images.length;
  const slideWidth = 300; // width cố định mỗi slide
    const slideMargin = 20; // margin tổng 2 bên (vd 10px mỗi bên)

    const totalSlideWidth = slideWidth + slideMargin;
    const translateX =
    activeIndex === 0
        ? 0
        : activeIndex === length - 1
        ? (length - 3) * totalSlideWidth
        : (activeIndex - 1) * totalSlideWidth;

    const prevSlide = () => {
    setActiveIndex(prevIndex => (prevIndex - 1 + length) % length);
    };

    const nextSlide = () => {
    setActiveIndex(prevIndex => (prevIndex + 1) % length);  
    };

// ...code trên như bạn đã có...

    return (
    <div style={{ maxWidth: '900px', margin: '50px auto 100px auto', position: 'relative', userSelect: 'none', overflow: 'visible' }}>
        <button
        onClick={prevSlide}
        style={{
            position: 'absolute', left: '-60px', top: '50%', transform: 'translateY(-50%)',
            background: 'transparent', border: 'none', fontSize: '2rem', color: '#00b37e', cursor: 'pointer',
            zIndex: 10, width: '40px', height: '60px', padding: 0,
        }}
        aria-label="Previous Slide"
        >
        &#10094;
        </button>

        <div
        style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            overflow: 'hidden',
            width: `${totalSlideWidth * 3}px`, // show đủ 3 slide (1 lớn + 2 nhỏ)
            margin: '0 auto',
            position: 'relative',
        }}
        >
        <div
            style={{
            display: 'flex',
            transition: 'transform 0.6s ease-in-out',
            transform: `translateX(-${translateX}px)`,
            willChange: 'transform',
            }}
        >
            {images.map((img, index) => {
            // Tính vòng tròn để xử lý đầu/cuối
            const modIndex = (i, length) => (i + length) % length;
            const circularIndex = modIndex(index, length);
            const circularActive = modIndex(activeIndex, length);

            // Kiểm tra slide active và 2 slide bên cạnh theo vòng tròn
            let scale = 0.7;
            let opacity = 0.5;
            let zIndex = 1;
            let boxShadow = 'none';

            if (activeIndex === 0) {
            // Slide đầu tiên
            if (index === 0) {
                scale = 1;
                opacity = 1;
                zIndex = 3;
                boxShadow = '0 8px 16px rgba(0,0,0,0.3)';
            } else if (index === 1 || index === 2) {
                scale = 0.85;
                opacity = 0.8;
                zIndex = 2;
                boxShadow = '0 4px 8px rgba(0,0,0,0.15)';
            }
            } else if (activeIndex === length - 1) {
            // Slide cuối cùng
            if (index === length - 1) {
                scale = 1;
                opacity = 1;
                zIndex = 3;
                boxShadow = '0 8px 16px rgba(0,0,0,0.3)';
            } else if (index === length - 2 || index === length - 3) {
                scale = 0.85;
                opacity = 0.8;
                zIndex = 2;
                boxShadow = '0 4px 8px rgba(0,0,0,0.15)';
            }
            } else {
            // Các slide giữa
            if (index === activeIndex) {
                scale = 1;
                opacity = 1;
                zIndex = 3;
                boxShadow = '0 8px 16px rgba(0,0,0,0.3)';
            } else if (index === activeIndex - 1 || index === activeIndex + 1) {
                scale = 0.85;
                opacity = 0.8;
                zIndex = 2;
                boxShadow = '0 4px 8px rgba(0,0,0,0.15)';
            }
            }


            return (
                <div
                key={index}
                style={{
                    flex: '0 0 auto',
                    width: `${slideWidth}px`,
                    margin: '0 10px',
                    position: 'relative',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow,
                    cursor: 'pointer',
                    backgroundColor: '#fff',
                    zIndex,
                    pointerEvents: 'auto',
                    transform: `scale(${scale})`,
                    opacity,
                    transition: 'all 0.6s ease-in-out',
                    willChange: 'transform, opacity',
                }}
                >
                <img
                    src={img.src}
                    alt={img.title}
                    style={{
                    width: '100%',
                    height: '250px',
                    objectFit: 'cover',
                    display: 'block',
                    }}
                />
                {circularIndex === circularActive && (
                    <div
                    style={{
                        padding: '10px',
                        backgroundColor: 'rgba(255,255,255,0.9)',
                    }}
                    >
                    <h3 style={{ margin: '0 0 8px', color: '#00b37e' }}>
                        {img.title}
                    </h3>
                    <p style={{ margin: 0, fontSize: '0.9rem', color: '#333' }}>
                        {img.desc}
                    </p>
                    <button
                        style={{
                        marginTop: '10px',
                        padding: '6px 12px',
                        backgroundColor: '#00b37e',
                        color: 'white',
                        border: 'none',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontWeight: '600',
                        }}
                        onClick={() => alert(`Learn more about ${img.title}`)}
                    >
                        Learn more
                    </button>
                    </div>
                )}
                </div>
            );
            })}
        </div>
        </div>




        {/* Dots navigation */}
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
        {images.map((_, idx) => (
            <span
            key={idx}
            onClick={() => setActiveIndex(idx)}
            style={{
                display: 'inline-block',
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                margin: '0 6px',
                cursor: 'pointer',
                backgroundColor: idx === activeIndex ? '#00b37e' : '#ccc',
                transition: 'background-color 0.3s ease',
            }}
            aria-label={`Go to slide ${idx + 1}`}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setActiveIndex(idx);
            }}
            />
        ))}
        </div>

        <button
        onClick={nextSlide}
        style={{
            position: 'absolute', right: '-100px', top: '50%', transform: 'translateY(-50%)',
            background: 'transparent', border: 'none', fontSize: '2rem', color: '#00b37e', cursor: 'pointer',
            zIndex: 10,
            width: '40px',
            height: '60px',
            padding: 0,
        }}
        aria-label="Next Slide"
        >
        &#10095;
        </button>
    </div>
    );

};

export default ImageCarousel;
