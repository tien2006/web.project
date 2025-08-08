import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const allProducts = [
  {
    id: 1,
    name: 'PLC Mitsubishi FX5U',
    brand: 'Mitsubishi',
    type: 'PLC',
    image: 'images/FX5U.jpg',
    description: 'Bộ điều khiển lập trình FX5U hiệu suất cao.',
  },
  {
    id: 2,
    name: 'Cảm biến Omron E3Z',
    brand: 'Omron',
    type: 'Cảm biến',
    image: 'https://via.placeholder.com/150',
    description: 'Cảm biến quang Omron E3Z cho dây chuyền sản xuất.',
  },
  {
    id: 3,
    name: 'Màn hình HMI Siemens KTP700',
    brand: 'Siemens',
    type: 'HMI',
    image: 'https://via.placeholder.com/150',
    description: 'Màn hình cảm ứng HMI 7 inch dùng cho hệ thống tự động.',
  },
];

const Products = () => {
  const [brandFilter, setBrandFilter] = useState('Tất cả');
  const [typeFilter, setTypeFilter] = useState('Tất cả');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = allProducts.filter((product) => {
    const matchesBrand = brandFilter === 'Tất cả' || product.brand === brandFilter;
    const matchesType = typeFilter === 'Tất cả' || product.type === typeFilter;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesBrand && matchesType && matchesSearch;
  });

  return (
    <div style={{ padding: '20px' }}>
      <h1>Danh sách sản phẩm</h1>

      {/* Bộ lọc và tìm kiếm */}
      <div style={{ marginBottom: '20px', display: 'flex', flexWrap: 'wrap', gap: '15px', alignItems: 'center' }}>
        <label>
          Hãng:&nbsp;
          <select onChange={(e) => setBrandFilter(e.target.value)} value={brandFilter}>
            <option value="Tất cả">Tất cả</option>
            <option value="Mitsubishi">Mitsubishi</option>
            <option value="Siemens">Siemens</option>
            <option value="Omron">Omron</option>
          </select>
        </label>

        <label>
          Loại:&nbsp;
          <select onChange={(e) => setTypeFilter(e.target.value)} value={typeFilter}>
            <option value="Tất cả">Tất cả</option>
            <option value="PLC">PLC</option>
            <option value="HMI">HMI</option>
            <option value="Cảm biến">Cảm biến</option>
          </select>
        </label>

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

      {/* Danh sách sản phẩm */}
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
              <p><strong>Hãng:</strong> {product.brand}</p>
              <p><strong>Loại:</strong> {product.type}</p>
              <p style={{ fontSize: '14px', color: '#555' }}>{product.description}</p>

              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '12px' }}>
                <Link to={`/products/${product.id}`} style={{ color: '#007bff', textDecoration: 'none' }}>
                  Xem chi tiết
                </Link>
                <button
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
