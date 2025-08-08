import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../components/Home/Banner';

const featuredProducts = [
  {
    id: 1,
    name: 'PLC Mitsubishi FX5U',
    image: '/images/FX5U.jpg',
    description: 'Bộ điều khiển lập trình hiệu suất cao, phù hợp cho nhiều ứng dụng công nghiệp.'
  },
  {
    id: 2,
    name: 'Cảm biến Omron E3Z',
    image: '/images/omrone3z.jpg',
    description: 'Cảm biến quang học chính xác, phản hồi nhanh và độ bền cao.'
  },
  {
    id: 3,
    name: 'Màn hình HMI Siemens KTP700',
    image: '/images/ktp700.jpg',
    description: 'Màn hình giao diện người dùng thân thiện, dễ dàng cài đặt và vận hành.'
  },
];

const Home = () => {
  return (
    <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", backgroundColor: '#f4f6f8' }}>
      
      {/* Banner */}
      <Banner />

      {/* Giới thiệu */}
      <section style={{ padding: '60px 20px', textAlign: 'center', maxWidth: '1000px', margin: 'auto' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: '#007bff' }}>Về chúng tôi</h2>
        <p style={{ fontSize: '18px', color: '#555', lineHeight: '1.8' }}>
          Chúng tôi cung cấp các thiết bị tự động hóa hàng đầu, giúp tối ưu hóa quy trình sản xuất và nâng cao chất lượng sản phẩm.
          Với đội ngũ kỹ thuật giàu kinh nghiệm, cam kết đem đến giải pháp phù hợp nhất cho khách hàng.
        </p>
      </section>

      {/* Sản phẩm nổi bật */}
      <section style={{ backgroundColor: '#fff', padding: '60px 20px' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '40px', color: '#333' }}>Sản phẩm nổi bật</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
          {featuredProducts.map(product => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              style={{
                width: '280px',
                backgroundColor: 'white',
                borderRadius: '12px',
                boxShadow: '0 6px 15px rgba(0,0,0,0.1)',
                textDecoration: 'none',
                color: '#333',
                overflow: 'hidden',
                transition: 'transform 0.3s, box-shadow 0.3s'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 12px 25px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 6px 15px rgba(0,0,0,0.1)';
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{ width: '100%', height: '180px', objectFit: 'cover' }}
              />
              <div style={{ padding: '15px', textAlign: 'center' }}>
                <h3 style={{ fontSize: '18px', margin: '0 0 8px 0' }}>{product.name}</h3>
                <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>{product.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Lợi ích */}
      <section style={{ maxWidth: '1000px', margin: '60px auto', padding: '0 20px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '2rem', color: '#007bff' }}>Lợi ích khi chọn chúng tôi</h2>
        <ul style={{
          listStyle: 'none',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '30px',
          padding: 0
        }}>
          <li style={{ flex: '1 1 280px', backgroundColor: '#007bff', color: 'white', borderRadius: '10px', padding: '25px', textAlign: 'center' }}>
            <h3>Chất lượng cao</h3>
            <p>Thiết bị đạt tiêu chuẩn quốc tế, đảm bảo độ bền và hiệu suất.</p>
          </li>
          <li style={{ flex: '1 1 280px', backgroundColor: '#28a745', color: 'white', borderRadius: '10px', padding: '25px', textAlign: 'center' }}>
            <h3>Giải pháp tối ưu</h3>
            <p>Phù hợp cho từng ngành nghề với đội ngũ tư vấn chuyên nghiệp.</p>
          </li>
          <li style={{ flex: '1 1 280px', backgroundColor: '#ffc107', color: '#333', borderRadius: '10px', padding: '25px', textAlign: 'center' }}>
            <h3>Hỗ trợ kỹ thuật</h3>
            <p>Dịch vụ hậu mãi nhanh chóng, giải quyết sự cố kịp thời.</p>
          </li>
        </ul>
      </section>

      {/* Liên hệ */}
      <section style={{ textAlign: 'center', padding: '60px 20px', backgroundColor: '#007bff', color: 'white' }}>
        <h2 style={{ fontSize: '2rem' }}>Liên hệ tư vấn ngay</h2>
        <p style={{ fontSize: '20px', margin: '15px 0' }}>📞 <strong>0889 322 577</strong></p>
        <Link to="/contact" style={{
          backgroundColor: 'white',
          color: '#007bff',
          padding: '14px 36px',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: '600',
          fontSize: '18px',
          display: 'inline-block',
          transition: 'background-color 0.3s, transform 0.3s'
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        >
          Trang liên hệ
        </Link>
      </section>

    </div>
  );
};

export default Home;
