import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../components/Home/Banner';
import featuredProducts from '../data/products';
import { useCart } from '../context/CartContext';
import CartIcon from '../components/CartIcon';
import ImageCarousel from '../components/Home/ImageCarousel';

const formatVNĐ = (number) => {
  if (typeof number === 'string' && number.toLowerCase() === 'liên hệ') {
    return 'Liên hệ';
  }
  return number.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
};

const categoryColors = {
  PLC: '#e3f2fd',
  'Cảm biến': '#fff3e0',
  HMI: '#e8f5e9',
};

const ProductCategorySection = ({ category, products, onAddToCart }) => (
  <section style={{ marginBottom: '50px' }}>
    <div
      className="category-title"
      style={{ backgroundColor: categoryColors[category] || '#fff' }}
    >
      <h3>{category}</h3>
    </div>

    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <Link
            to={`/product/${product.id}`}
            style={{
              textDecoration: 'none',
              color: 'inherit',
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <img src={product.image} alt={product.name} className="product-image" />
            <div
              className="product-info"
              style={{
                padding: '10px',
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                textAlign: 'center',
              }}
            >
              <div className="product-details">
                <h3 style={{ fontSize: '14px', margin: '0 0 6px 0' }}>{product.name}</h3>
                <p
                  style={{
                    fontSize: '12px',
                    color: '#666',
                    marginBottom: '8px',
                    minHeight: '20px',
                  }}
                >
                  {product.description}
                </p>
              </div>
              <p
                className="price"
                style={{
                  fontSize: '14px',
                  fontWeight: 'bold',
                  color: '#e63946',
                }}
              >
                {formatVNĐ(product.price)}
              </p>
            </div>
          </Link>
          <div style={{ textAlign: 'center', padding: '0 15px 15px' }}>
            <button
              className="btn-add-cart"
              style={{
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                padding: '10px 18px',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '14px',
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

      {/* Bao bọc toàn bộ nội dung chính bằng container */}
      <div className="container">
        {/* Về chúng tôi */}
        <section className="about-section">
          <h2>Về chúng tôi</h2>
          <p>
            Chúng tôi cung cấp các thiết bị tự động hóa hàng đầu, giúp tối ưu hóa quy
            trình sản xuất và nâng cao chất lượng sản phẩm. Với đội ngũ kỹ thuật giàu
            kinh nghiệm, cam kết đem đến giải pháp phù hợp nhất cho khách hàng.
          </p>
        </section>

        {/* Sản phẩm nổi bật */}
        <section className="featured-products-section">
          <h2>Sản phẩm nổi bật</h2>
          {categories.map((category) => {
            const productsInCategory = featuredProducts.filter(
              (p) => p.category === category
            );
            return (
              <ProductCategorySection
                key={category}
                category={category}
                products={productsInCategory}
                onAddToCart={handleAddToCart}
              />
            );
          })}

          {/* Hình ảnh nổi bật */}
          <h2 className="highlighted-images-title">Hình ảnh nổi bật</h2>
          <ImageCarousel />
        </section>
      </div>
    </div>
  );
};

export default Home;
