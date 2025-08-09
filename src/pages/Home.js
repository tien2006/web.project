import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../components/Home/Banner';
import featuredProducts from '../data/products';
import { useCart } from '../context/CartContext';
import CartIcon from '../components/CartIcon';

const formatVNĐ = (number) => {
  return number.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
};

const Home = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`Đã thêm "${product.name}" vào giỏ hàng!`);
  };

  return (
    <div
      style={{
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: '#f4f6f8',
        minHeight: '100vh',
        position: 'relative',
      }}
    >
      {/* Dùng chung CartIcon */}
      <CartIcon />

      <Banner />

      {/* ...phần nội dung còn lại giữ nguyên như bạn đã có... */}

      <section style={{ padding: '60px 20px', textAlign: 'center', maxWidth: '1000px', margin: 'auto' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: '#007bff' }}>Về chúng tôi</h2>
        <p style={{ fontSize: '18px', color: '#555', lineHeight: '1.8' }}>
          Chúng tôi cung cấp các thiết bị tự động hóa hàng đầu, giúp tối ưu hóa quy trình sản xuất và nâng cao chất
          lượng sản phẩm. Với đội ngũ kỹ thuật giàu kinh nghiệm, cam kết đem đến giải pháp phù hợp nhất cho khách hàng.
        </p>
      </section>

      <section style={{ backgroundColor: '#fff', padding: '60px 20px' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '40px', color: '#333' }}>Sản phẩm nổi bật</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              style={{
                width: '280px',
                backgroundColor: 'white',
                borderRadius: '12px',
                boxShadow: '0 6px 15px rgba(0,0,0,0.1)',
                textDecoration: 'none',
                color: '#333',
                overflow: 'hidden',
                transition: 'transform 0.3s, box-shadow 0.3s',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 12px 25px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 6px 15px rgba(0,0,0,0.1)';
              }}
            >
              <Link
                to={`/products/${product.id}`}
                style={{ textDecoration: 'none', color: 'inherit', flexGrow: 1, display: 'flex', flexDirection: 'column' }}
              >
                <img src={product.image} alt={product.name} style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
                <div
                  style={{
                    padding: '15px',
                    textAlign: 'center',
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <h3 style={{ fontSize: '18px', margin: '0 0 8px 0' }}>{product.name}</h3>
                    <p style={{ fontSize: '14px', color: '#666', marginBottom: '10px', minHeight: '40px' }}>{product.description}</p>
                  </div>
                  <p style={{ fontSize: '16px', fontWeight: 'bold', color: '#e63946' }}>{formatVNĐ(product.price)}</p>
                </div>
              </Link>
              <div style={{ textAlign: 'center', padding: '0 15px 15px' }}>
                <button
                  style={{
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    padding: '10px 20px',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    transition: 'background-color 0.3s, transform 0.2s',
                    width: '100%',
                  }}
                  onClick={() => handleAddToCart(product)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#0056b3';
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#007bff';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  Thêm vào giỏ hàng
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ... */}
    </div>
  );
};

export default Home;
