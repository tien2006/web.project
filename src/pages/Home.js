import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../components/Home/Banner';
import featuredProducts from '../data/products';
import { useCart } from '../context/CartContext';
import CartIcon from '../components/CartIcon';

const formatVNĐ = (number) => {
  if (typeof number === 'string' && number.toLowerCase() === 'liên hệ') {
    return 'Liên hệ';
  }
  return number.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
};

const categoryColors = {
  PLC: '#e3f2fd',       // xanh nhạt
  'Cảm biến': '#fff3e0', // cam nhạt
  HMI: '#e8f5e9',        // xanh lá nhạt
};

// Component con: hiển thị nhóm sản phẩm theo category
const ProductCategorySection = ({ category, products, onAddToCart }) => (
  <section style={{ marginBottom: '50px' }}>
    {/* Chỉ tô màu nền cho phần tiêu đề */}
    <div
      style={{
        backgroundColor: categoryColors[category] || '#fff',
        padding: '15px 20px',
        borderRadius: '12px',
        marginBottom: '20px',
      }}
    >
      <h3 style={{ fontSize: '1.8rem', color: '#007bff', margin: 0, textAlign: 'left' }}>
        {category}
      </h3>
    </div>

    {/* Phần sản phẩm không đổi màu */}
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '30px',
        justifyContent: 'flex-start',
      }}
    >
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            width: '180px',
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
            to={`/product/${product.id}`}
            style={{ textDecoration: 'none', color: 'inherit', flexGrow: 1, display: 'flex', flexDirection: 'column' }}
          >
            <img src={product.image} alt={product.name} style={{ width: '100%', height: '100px', objectFit: 'cover' }} />
            <div
              style={{
                padding: '5px',
                textAlign: 'center',
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <h3 style={{ fontSize: '12px', margin: '0 0 4px 0' }}>{product.name}</h3>
                <p style={{ fontSize: '10px', color: '#666', marginBottom: '5px', minHeight: '1px' }}>{product.description}</p>
              </div>
              <p style={{ fontSize: '12px', fontWeight: 'bold', color: '#e63946' }}>{formatVNĐ(product.price)}</p>
            </div>
          </Link>
          <div style={{ textAlign: 'center', padding: '0 15px 15px' }}>
            <button
              style={{
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '12px',
                transition: 'background-color 0.3s, transform 0.2s',
                width: '100%',
              }}
              onClick={() => onAddToCart(product)}
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
);

const Home = () => {
  const { addToCart } = useCart();

  // Lấy danh sách category duy nhất từ featuredProducts
  const categories = [...new Set(featuredProducts.map((p) => p.category))];

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
      <CartIcon />

      <Banner />

      {/* Phần "Về chúng tôi" giữ nguyên */}
      <section style={{ padding: '60px 20px', textAlign: 'center', maxWidth: '1000px', margin: 'auto' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: '#007bff' }}>Về chúng tôi</h2>
        <p style={{ fontSize: '18px', color: '#555', lineHeight: '1.8' }}>
          Chúng tôi cung cấp các thiết bị tự động hóa hàng đầu, giúp tối ưu hóa quy trình sản xuất và nâng cao chất
          lượng sản phẩm. Với đội ngũ kỹ thuật giàu kinh nghiệm, cam kết đem đến giải pháp phù hợp nhất cho khách hàng.
        </p>
      </section>

      <section style={{ backgroundColor: '#fff', padding: '60px 20px', maxWidth: '1100px', margin: 'auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '40px', color: '#333' }}>Sản phẩm nổi bật</h2>

        {/* Lặp qua các category để hiển thị từng nhóm sản phẩm */}
        {categories.map((category) => {
          const productsInCategory = featuredProducts.filter((p) => p.category === category);
          return (
            <ProductCategorySection
              key={category}
              category={category}
              products={productsInCategory}
              onAddToCart={handleAddToCart}
            />
          );
        })}
      </section>
    </div>
  );
};

export default Home;
