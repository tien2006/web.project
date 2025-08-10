import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FaShoppingCart } from 'react-icons/fa';

const allProducts = [
  {
    id: 1,
    name: 'PLC Mitsubishi FX5U',
    brand: 'Mitsubishi',
    type: 'PLC',
    category: 'Tự động hóa',
    model: 'FX5U',
    image: 'images/FX5U.jpg',
    description: 'Bộ điều khiển lập trình FX5U hiệu suất cao.',
    price: 15000000,
  },
  {
    id: 2,
    name: 'PLC Mitsubishi FX3U',
    brand: 'Mitsubishi',
    type: 'PLC',
    category: 'Tự động hóa',
    model: 'FX3U',
    image: 'images/FX3U.jpg',
    description: 'Bộ điều khiển lập trình FX3U phổ biến và ổn định.',
    price: 9000000,
  },
  {
    id: 3,
    name: 'Cảm biến Omron E3Z',
    brand: 'Omron',
    type: 'Cảm biến',
    category: 'Tự động hóa',
    model: '',
    image: 'https://via.placeholder.com/150',
    description: 'Cảm biến quang Omron E3Z cho dây chuyền sản xuất.',
    price: 2000000,
  },
  {
    id: 4,
    name: 'Màn hình HMI Siemens KTP700',
    brand: 'Siemens',
    type: 'HMI',
    category: 'Tự động hóa',
    model: '',
    image: 'https://via.placeholder.com/150',
    description: 'Màn hình cảm ứng HMI 7 inch dùng cho hệ thống tự động.',
    price: 10000000,
  },
  {
    id: 5,
    name: 'PLC Mitsubishi L-Series',
    brand: 'Mitsubishi',
    type: 'PLC',
    category: 'Tự động hóa',
    model: 'L-Series',
    image: 'images/L-Series.jpg',
    description: 'Bộ điều khiển lập trình dòng L-Series cho ứng dụng công nghiệp.',
    price: 12000000,
  },
  // Thêm sản phẩm mới theo category phù hợp
  {
    id: 6,
    name: 'Bộ điều khiển PLC Delta DVP',
    brand: 'Delta',
    type: 'PLC',
    category: 'Bộ điều khiển PLC',
    model: '',
    image: 'https://via.placeholder.com/150',
    description: 'Bộ điều khiển PLC Delta dòng DVP.',
    price: 7000000,
  },
  {
    id: 7,
    name: 'Động cơ Servo Yaskawa',
    brand: 'Yaskawa',
    type: 'Servo',
    category: 'Servo',
    model: '',
    image: 'https://via.placeholder.com/150',
    description: 'Động cơ Servo Yaskawa hiệu suất cao.',
    price: 25000000,
  },
  {
    id: 8,
    name: 'Động cơ Servo Yaskawa',
    brand: 'Yaskawa',
    type: 'Industrial PC',
    category: 'Tự động hóa',
    model: '1',
    image: 'https://via.placeholder.com/150',
    description: 'Động cơ Servo Yaskawa hiệu suất cao.',
    price: 25000000,
  },
];

const formatVNĐ = (number) => {
  return number.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
};

const CartIcon = () => {
  const navigate = useNavigate();
  const { totalItems } = useCart();

  return (
    <div
      onClick={() => navigate('/cart')}
      style={{
        position: 'fixed',
        top: 20,
        right: 20,
        cursor: 'pointer',
        zIndex: 1000,
        color: '#007bff',
      }}
      title="Xem giỏ hàng"
    >
      <FaShoppingCart size={30} />
      {totalItems > 0 && (
        <span
          style={{
            position: 'absolute',
            top: -5,
            right: -5,
            backgroundColor: 'red',
            color: 'white',
            borderRadius: '50%',
            padding: '2px 7px',
            fontSize: '12px',
            fontWeight: 'bold',
          }}
        >
          {totalItems}
        </span>
      )}
    </div>
  );
};

const Products = () => {
  const { category, type, model } = useParams(); // Lấy param từ url
  //const location = useLocation();

  const [brandFilter, setBrandFilter] = useState('Tất cả');
  //const [typeFilter, setTypeFilter] = useState('Tất cả');
  const [categoryFilter, setCategoryFilter] = useState(category || 'Tất cả');
  const [typeFilter, setTypeFilter] = useState(type || 'Tất cả');
  const [modelFilter, setModelFilter] = useState(model || 'Tất cả');
  const [searchTerm, setSearchTerm] = useState('');
  const { addToCart } = useCart();

  // Khi URL param thay đổi thì cập nhật filter tương ứng
  useEffect(() => {
    setCategoryFilter(category || 'Tất cả');
    setTypeFilter(type || 'Tất cả');
    setModelFilter(model || 'Tất cả');
  }, [category, type, model]);

  const categories = ['Tất cả', ...new Set(allProducts.map((p) => p.category).filter(c => c))];
  const modelsForTypePLC = ['Tất cả', ...new Set(allProducts.filter(p => p.type === 'PLC').map(p => p.model).filter(m => m))];

  const filteredProducts = allProducts.filter((product) => {
    const matchesBrand = brandFilter === 'Tất cả' || product.brand === brandFilter;
    const matchesType = typeFilter === 'Tất cả' || product.type === typeFilter;
    const matchesCategory = categoryFilter === 'Tất cả' || product.category === categoryFilter;
    const matchesModel = modelFilter === 'Tất cả' || product.model === modelFilter;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());

    console.log(`Kiểm tra: ${product.name} - Type: ${product.type} - matchesType: ${matchesType} - typeFilter: ${typeFilter}`);

    return matchesBrand && matchesType && matchesCategory && matchesModel && matchesSearch;
  });

  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`Đã thêm ${product.name} vào giỏ hàng!`);
  };

  return (
    <div style={{ padding: '20px', position: 'relative', minHeight: '100vh' }}>
      <CartIcon />

      <h1>Danh sách sản phẩm</h1>

      <div
        style={{
          marginBottom: '20px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '15px',
          alignItems: 'center',
        }}
      >
        <label>
          Danh mục:&nbsp;
          <select
            value={categoryFilter}
            onChange={e => {
              setCategoryFilter(e.target.value);
              setModelFilter('Tất cả');
            }}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </label>

        <label>
          Hãng:&nbsp;
          <select onChange={(e) => setBrandFilter(e.target.value)} value={brandFilter}>
            <option value="Tất cả">Tất cả</option>
            <option value="Mitsubishi">Mitsubishi</option>
            <option value="Siemens">Siemens</option>
            <option value="Omron">Omron</option>
            <option value="Delta">Delta</option>
            <option value="Yaskawa">Yaskawa</option>
          </select>
        </label>

        <label>
          Loại:&nbsp;
          <select onChange={(e) => setTypeFilter(e.target.value)} value={typeFilter}>
            <option value="Tất cả">Tất cả</option>
            <option value="PLC">PLC</option>
            <option value="HMI">HMI</option>
            <option value="Cảm biến">Cảm biến</option>
            <option value="Servo">Servo</option>
          </select>
        </label>

        {typeFilter === 'PLC' && (
          <label>
            Dòng sản phẩm:&nbsp;
            <select value={modelFilter} onChange={(e) => setModelFilter(e.target.value)}>
              {modelsForTypePLC.map((model) => (
                <option key={model} value={model}>{model || 'Tất cả'}</option>
              ))}
            </select>
          </label>
        )}

        <input
          type="text"
          placeholder="Tìm kiếm sản phẩm..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: '6px 10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            minWidth: '200px',
            fontSize: '14px',
          }}
        />
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              style={{
                border: '1px solid #ddd',
                padding: '16px',
                width: '260px',
                borderRadius: '12px',
                backgroundColor: '#fff',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{ width: '100%', height: '160px', objectFit: 'cover', borderRadius: '8px' }}
              />
              <h3 style={{ margin: '12px 0 6px' }}>{product.name}</h3>
              <p>
                <strong>Hãng:</strong> {product.brand}
              </p>
              <p>
                <strong>Loại:</strong> {product.type}
              </p>
              {product.model && <p><strong>Dòng sản phẩm:</strong> {product.model}</p>}
              <p style={{ fontSize: '14px', color: '#555' }}>{product.description}</p>

              <p style={{ fontWeight: 'bold', color: '#e63946' }}>{formatVNĐ(product.price)}</p>

              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '12px' }}>
                <Link to={`/product/${product.id}`} style={{ color: '#007bff', textDecoration: 'none' }}>
                  Xem chi tiết
                </Link>
                <button
                  onClick={() => handleAddToCart(product)}
                  style={{
                    backgroundColor: '#28a745',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '6px 10px',
                    cursor: 'pointer',
                  }}
                >
                  + Giỏ hàng
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>Không tìm thấy sản phẩm phù hợp.</p>
        )}
      </div>
    </div>
  );
};

export default Products;

