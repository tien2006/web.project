import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

// Bạn có thể import allProducts từ cùng file hoặc tách ra file riêng rồi import
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

const ProductDetail = () => {
  const { id } = useParams();

  // Tìm sản phẩm theo id (chú ý id là số nên chuyển kiểu cho khớp)
  const product = allProducts.find(p => p.id === Number(id));

  // State lưu đánh giá
  const [reviews, setReviews] = useState([]);

  // Form đánh giá
  const [reviewForm, setReviewForm] = useState({
    name: '',
    rating: 5,
    comment: '',
  });

  if (!product) return <h2 style={{ padding: 20 }}>Không tìm thấy sản phẩm</h2>;

  // Xử lý form thay đổi
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReviewForm(prev => ({ ...prev, [name]: value }));
  };

  // Gửi đánh giá
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!reviewForm.name.trim() || !reviewForm.comment.trim()) {
      alert('Vui lòng nhập tên và nhận xét.');
      return;
    }
    setReviews(prev => [
      ...prev,
      {
        id: Date.now(),
        ...reviewForm,
        rating: Number(reviewForm.rating),
      }
    ]);
    setReviewForm({ name: '', rating: 5, comment: '' });
  };

  return (
    <div style={{ maxWidth: 900, margin: '40px auto', padding: '0 20px', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", color: '#333' }}>
      <Link to="/products" style={{ display: 'inline-block', marginBottom: 30, color: '#007bff', textDecoration: 'none', fontWeight: 'bold' }}>
        &larr; Quay lại danh sách sản phẩm
      </Link>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 40, alignItems: 'flex-start' }}>
        <img
          src={product.image}
          alt={product.name}
          style={{ flex: '1 1 400px', maxWidth: 400, borderRadius: 12, boxShadow: '0 6px 15px rgba(0,0,0,0.15)', objectFit: 'cover' }}
        />

        <div style={{ flex: '1 1 400px' }}>
          <h1 style={{ marginBottom: 15 }}>{product.name}</h1>
          <p><strong>Hãng:</strong> {product.brand}</p>
          <p><strong>Loại:</strong> {product.type}</p>
          <p style={{ lineHeight: 1.6, fontSize: 15, color: '#555' }}>{product.description || 'Không có mô tả.'}</p>

          <button
            style={{
              marginTop: 30,
              padding: '12px 30px',
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: 8,
              fontSize: 18,
              fontWeight: 600,
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(40,167,69,0.4)',
              transition: 'background-color 0.3s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#218838'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#28a745'}
          >
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>

      {/* Phần đánh giá & nhận xét */}
      <div style={{ marginTop: 50, border: '1px solid #ddd', padding: 20 }}>
        <h2>Đánh giá & Nhận xét</h2>

        <form onSubmit={handleSubmit} style={{ marginBottom: 30 }}>
          <label>
            Tên: <br />
            <input
              type="text"
              name="name"
              value={reviewForm.name}
              onChange={handleInputChange}
              required
              style={{ width: '100%', padding: 8, marginBottom: 10, borderRadius: 4, border: '1px solid #ccc' }}
            />
          </label>

          <label>
            Đánh giá: <br />
            <select
              name="rating"
              value={reviewForm.rating}
              onChange={handleInputChange}
              style={{ padding: 8, marginBottom: 10, borderRadius: 4, border: '1px solid #ccc' }}
            >
              {[5,4,3,2,1].map(n => (
                <option key={n} value={n}>{n} sao</option>
              ))}
            </select>
          </label>

          <label>
            Nhận xét: <br />
            <textarea
              name="comment"
              value={reviewForm.comment}
              onChange={handleInputChange}
              rows={4}
              required
              style={{ width: '100%', padding: 8, borderRadius: 4, border: '1px solid #ccc' }}
            />
          </label>

          <button type="submit" style={{
            marginTop: 10,
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: 6,
            cursor: 'pointer',
            fontSize: 16,
          }}>
            Gửi đánh giá
          </button>
        </form>

        {reviews.length === 0 ? (
          <p>Chưa có đánh giá nào.</p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {reviews.map(r => (
              <li key={r.id} style={{ marginBottom: 20, borderBottom: '1px solid #ddd', paddingBottom: 10 }}>
                <strong>{r.name}</strong> - {r.rating} sao
                <p style={{ marginTop: 6 }}>{r.comment}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
