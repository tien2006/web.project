import React, { useState } from 'react';
import { useParams, Link,useNavigate } from 'react-router-dom';

// Dữ liệu sản phẩm của bạn
const allProducts = [
  {
    id: 1,
    name: 'PLC Mitsubishi FX51',
    brand: 'Mitsubishi',
    type: 'PLC',
    price: 'Liên hệ',
    image: '/images/FX5U.jpg',
    description: 'Bộ điều khiển lập trình FX5U hiệu suất cao, đa dạng cổng kết nối, hỗ trợ mạng công nghiệp.',
    specifications: [
      { label: 'Số ngõ vào/ra', value: '40 điểm I/O' },
      { label: 'Bộ nhớ chương trình', value: '100k bước' },
      { label: 'Giao tiếp', value: 'Ethernet, RS-485' },
      { label: 'Nguồn điện', value: '24V DC' },
      { label: 'Nhiệt độ hoạt động', value: '-20°C đến 55°C' },
    ],
    features: [
      'Tốc độ xử lý nhanh',
      'Hỗ trợ nhiều giao thức truyền thông',
      'Thiết kế nhỏ gọn, dễ dàng lắp đặt',
      'Tương thích nhiều phần mềm lập trình',
    ],
  },
  {
    id: 2,
    name: 'PLC Mitsubishi FX52',
    brand: 'Mitsubishi',
    type: 'PLC',
    price: 'Liên hệ',
    image: '/images/FX5U.jpg',
    description: 'Bộ điều khiển lập trình FX5U hiệu suất cao, đa dạng cổng kết nối, hỗ trợ mạng công nghiệp.',
    specifications: [
      { label: 'Số ngõ vào/ra', value: '40 điểm I/O' },
      { label: 'Bộ nhớ chương trình', value: '100k bước' },
      { label: 'Giao tiếp', value: 'Ethernet, RS-485' },
      { label: 'Nguồn điện', value: '24V DC' },
      { label: 'Nhiệt độ hoạt động', value: '-20°C đến 55°C' },
    ],
    features: [
      'Tốc độ xử lý nhanh',
      'Hỗ trợ nhiều giao thức truyền thông',
      'Thiết kế nhỏ gọn, dễ dàng lắp đặt',
      'Tương thích nhiều phần mềm lập trình',
    ],
  },
  {
    id: 3,
    name: 'PLC Mitsubishi FX53',
    brand: 'Mitsubishi',
    type: 'PLC',
    price: 'Liên hệ',
    image: '/images/FX5U.jpg',
    description: 'Bộ điều khiển lập trình FX5U hiệu suất cao, đa dạng cổng kết nối, hỗ trợ mạng công nghiệp.',
    specifications: [
      { label: 'Số ngõ vào/ra', value: '40 điểm I/O' },
      { label: 'Bộ nhớ chương trình', value: '100k bước' },
      { label: 'Giao tiếp', value: 'Ethernet, RS-485' },
      { label: 'Nguồn điện', value: '24V DC' },
      { label: 'Nhiệt độ hoạt động', value: '-20°C đến 55°C' },
    ],
    features: [
      'Tốc độ xử lý nhanh',
      'Hỗ trợ nhiều giao thức truyền thông',
      'Thiết kế nhỏ gọn, dễ dàng lắp đặt',
      'Tương thích nhiều phần mềm lập trình',
    ],
  },
  {
    id: 4,
    name: 'PLC Mitsubishi FX54',
    brand: 'Mitsubishi',
    type: 'PLC',
    price: 'Liên hệ',
    image: '/images/FX5U.jpg',
    description: 'Bộ điều khiển lập trình FX5U hiệu suất cao, đa dạng cổng kết nối, hỗ trợ mạng công nghiệp.',
    specifications: [
      { label: 'Số ngõ vào/ra', value: '40 điểm I/O' },
      { label: 'Bộ nhớ chương trình', value: '100k bước' },
      { label: 'Giao tiếp', value: 'Ethernet, RS-485' },
      { label: 'Nguồn điện', value: '24V DC' },
      { label: 'Nhiệt độ hoạt động', value: '-20°C đến 55°C' },
    ],
    features: [
      'Tốc độ xử lý nhanh',
      'Hỗ trợ nhiều giao thức truyền thông',
      'Thiết kế nhỏ gọn, dễ dàng lắp đặt',
      'Tương thích nhiều phần mềm lập trình',
    ],
  },
  {
    id: 5,
    name: 'PLC Mitsubishi FX55',
    brand: 'Mitsubishi',
    type: 'PLC',
    price: 'Liên hệ',
    image: '/images/FX5U.jpg',
    description: 'Bộ điều khiển lập trình FX5U hiệu suất cao, đa dạng cổng kết nối, hỗ trợ mạng công nghiệp.',
    specifications: [
      { label: 'Số ngõ vào/ra', value: '40 điểm I/O' },
      { label: 'Bộ nhớ chương trình', value: '100k bước' },
      { label: 'Giao tiếp', value: 'Ethernet, RS-485' },
      { label: 'Nguồn điện', value: '24V DC' },
      { label: 'Nhiệt độ hoạt động', value: '-20°C đến 55°C' },
    ],
    features: [
      'Tốc độ xử lý nhanh',
      'Hỗ trợ nhiều giao thức truyền thông',
      'Thiết kế nhỏ gọn, dễ dàng lắp đặt',
      'Tương thích nhiều phần mềm lập trình',
    ],
  },
  {
    id: 6,
    name: 'PLC Mitsubishi FX56',
    brand: 'Mitsubishi',
    type: 'PLC',
    price: 'Liên hệ',
    image: '/images/FX5U.jpg',
    description: 'Bộ điều khiển lập trình FX5U hiệu suất cao, đa dạng cổng kết nối, hỗ trợ mạng công nghiệp.',
    specifications: [
      { label: 'Số ngõ vào/ra', value: '40 điểm I/O' },
      { label: 'Bộ nhớ chương trình', value: '100k bước' },
      { label: 'Giao tiếp', value: 'Ethernet, RS-485' },
      { label: 'Nguồn điện', value: '24V DC' },
      { label: 'Nhiệt độ hoạt động', value: '-20°C đến 55°C' },
    ],
    features: [
      'Tốc độ xử lý nhanh',
      'Hỗ trợ nhiều giao thức truyền thông',
      'Thiết kế nhỏ gọn, dễ dàng lắp đặt',
      'Tương thích nhiều phần mềm lập trình',
    ],
  },
  {
    id: 7,
    name: 'PLC Mitsubishi FX57',
    brand: 'Mitsubishi',
    type: 'PLC',
    price: 'Liên hệ',
    image: '/images/FX5U.jpg',
    description: 'Bộ điều khiển lập trình FX5U hiệu suất cao, đa dạng cổng kết nối, hỗ trợ mạng công nghiệp.',
    specifications: [
      { label: 'Số ngõ vào/ra', value: '40 điểm I/O' },
      { label: 'Bộ nhớ chương trình', value: '100k bước' },
      { label: 'Giao tiếp', value: 'Ethernet, RS-485' },
      { label: 'Nguồn điện', value: '24V DC' },
      { label: 'Nhiệt độ hoạt động', value: '-20°C đến 55°C' },
    ],
    features: [
      'Tốc độ xử lý nhanh',
      'Hỗ trợ nhiều giao thức truyền thông',
      'Thiết kế nhỏ gọn, dễ dàng lắp đặt',
      'Tương thích nhiều phần mềm lập trình',
    ],
  },
  {
    id: 8,
    name: 'PLC Mitsubishi FX58',
    brand: 'Mitsubishi',
    type: 'PLC',
    price: 'Liên hệ',
    image: '/images/FX5U.jpg',
    description: 'Bộ điều khiển lập trình FX5U hiệu suất cao, đa dạng cổng kết nối, hỗ trợ mạng công nghiệp.',
    specifications: [
      { label: 'Số ngõ vào/ra', value: '40 điểm I/O' },
      { label: 'Bộ nhớ chương trình', value: '100k bước' },
      { label: 'Giao tiếp', value: 'Ethernet, RS-485' },
      { label: 'Nguồn điện', value: '24V DC' },
      { label: 'Nhiệt độ hoạt động', value: '-20°C đến 55°C' },
    ],
    features: [
      'Tốc độ xử lý nhanh',
      'Hỗ trợ nhiều giao thức truyền thông',
      'Thiết kế nhỏ gọn, dễ dàng lắp đặt',
      'Tương thích nhiều phần mềm lập trình',
    ],
  },
  {
    id: 200,
    name: 'Cảm biến Omron E3Z',
    brand: 'Omron',
    type: 'Cảm biến',
    price: 'Liên hệ',
    image: 'images/omron_e3z.jpg',
    description: 'Cảm biến quang Omron E3Z cho dây chuyền sản xuất với độ chính xác cao và độ bền ổn định.',
    specifications: [
      { label: 'Loại cảm biến', value: 'Cảm biến quang điện' },
      { label: 'Khoảng cách phát hiện', value: '0.1 - 30m' },
      { label: 'Nguồn điện', value: '12-24V DC' },
      { label: 'Tín hiệu đầu ra', value: 'NPN/PNP' },
      { label: 'Nhiệt độ hoạt động', value: '-25°C đến 55°C' },
    ],
    features: [
      'Phát hiện nhanh, chính xác',
      'Chống nhiễu tốt',
      'Thiết kế chắc chắn, phù hợp môi trường công nghiệp',
      'Dễ dàng lắp đặt và điều chỉnh',
    ],
  },
  {
    id: 201,
    name: 'Cảm biến Omron E3Z',
    brand: 'Omron',
    type: 'Cảm biến',
    price: 'Liên hệ',
    image: 'images/omron_e3z.jpg',
    description: 'Cảm biến quang Omron E3Z cho dây chuyền sản xuất với độ chính xác cao và độ bền ổn định.',
    specifications: [
      { label: 'Loại cảm biến', value: 'Cảm biến quang điện' },
      { label: 'Khoảng cách phát hiện', value: '0.1 - 30m' },
      { label: 'Nguồn điện', value: '12-24V DC' },
      { label: 'Tín hiệu đầu ra', value: 'NPN/PNP' },
      { label: 'Nhiệt độ hoạt động', value: '-25°C đến 55°C' },
    ],
    features: [
      'Phát hiện nhanh, chính xác',
      'Chống nhiễu tốt',
      'Thiết kế chắc chắn, phù hợp môi trường công nghiệp',
      'Dễ dàng lắp đặt và điều chỉnh',
    ],
  },
  {
    id: 202,
    name: 'Cảm biến Omron E3Z',
    brand: 'Omron',
    type: 'Cảm biến',
    price: 'Liên hệ',
    image: 'images/omron_e3z.jpg',
    description: 'Cảm biến quang Omron E3Z cho dây chuyền sản xuất với độ chính xác cao và độ bền ổn định.',
    specifications: [
      { label: 'Loại cảm biến', value: 'Cảm biến quang điện' },
      { label: 'Khoảng cách phát hiện', value: '0.1 - 30m' },
      { label: 'Nguồn điện', value: '12-24V DC' },
      { label: 'Tín hiệu đầu ra', value: 'NPN/PNP' },
      { label: 'Nhiệt độ hoạt động', value: '-25°C đến 55°C' },
    ],
    features: [
      'Phát hiện nhanh, chính xác',
      'Chống nhiễu tốt',
      'Thiết kế chắc chắn, phù hợp môi trường công nghiệp',
      'Dễ dàng lắp đặt và điều chỉnh',
    ],
  },
  {
    id: 300,
    name: 'Màn hình HMI Siemens KTP700',
    brand: 'Siemens',
    type: 'HMI',
    price: 'Liên hệ',
    image: 'images/siemens_ktp700.jpg',
    description: 'Màn hình cảm ứng HMI 7 inch dùng cho hệ thống tự động hóa, hỗ trợ giao diện người dùng trực quan.',
    specifications: [
      { label: 'Kích thước màn hình', value: '7 inch, 800x480 pixels' },
      { label: 'Giao tiếp', value: 'PROFIBUS, Ethernet' },
      { label: 'Nguồn điện', value: '24V DC' },
      { label: 'Môi trường làm việc', value: '0°C đến 55°C' },
      { label: 'Bộ nhớ', value: '64MB' },
    ],
    features: [
      'Màn hình cảm ứng điện dung đa điểm',
      'Giao diện người dùng thân thiện',
      'Tích hợp nhiều giao thức truyền thông công nghiệp',
      'Hỗ trợ kết nối mạng và giám sát từ xa',
    ],
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = allProducts.find(p => p.id === Number(id));

  const [reviews, setReviews] = useState([]);
  const [reviewForm, setReviewForm] = useState({
    name: '',
    rating: 5,
    comment: '',
  });

  if (!product) return <h2 style={{ padding: 20 }}>Không tìm thấy sản phẩm</h2>;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReviewForm(prev => ({ ...prev, [name]: value }));
  };

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

  // Lấy danh sách sản phẩm tương tự (cùng loại, khác id)
  const similarProducts = allProducts.filter(p => p.type === product.type && p.id !== product.id);

  return (
    <div style={{ maxWidth: 900, margin: '40px auto', padding: '0 20px', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", color: '#333' }}>
      <button
        onClick={() => navigate(-1)}
        style={{
          position: 'fixed',
          top: 60,
          left: 10,
          backgroundColor: '#007bff',       // màu xanh nổi bật
          color: 'white',
          fontWeight: '600',
          fontSize: '16px',
          padding: '8px 16px',
          borderRadius: '8px',
          border: 'none',
          boxShadow: '0 4px 8px rgba(0, 123, 255, 0.3)',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
          zIndex: 9999,
        }}
        onMouseEnter={e => {
          e.currentTarget.style.backgroundColor = '#0056b3';  // màu xanh đậm hơn khi hover
          e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 86, 179, 0.5)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.backgroundColor = '#007bff';
          e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 123, 255, 0.3)';
        }}
      >
        &larr; Quay lại trang trước
      </button>

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
          <p><strong>Giá:</strong> {product.price}</p>
          <p style={{ lineHeight: 1.6, fontSize: 15, color: '#555', marginTop: 15 }}>{product.description}</p>

          <h3 style={{ marginTop: 30, marginBottom: 10 }}>Thông số kỹ thuật</h3>
          <ul>
            {product.specifications.map((spec, idx) => (
              <li key={idx}><strong>{spec.label}:</strong> {spec.value}</li>
            ))}
          </ul>

          <h3 style={{ marginTop: 30, marginBottom: 10 }}>Tính năng nổi bật</h3>
          <ul>
            {product.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>

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

      {/* Sản phẩm tương tự */}
      {similarProducts.length > 0 && (
        <div style={{ marginTop: 50 }}>
          <h2>Sản phẩm tương tự</h2>
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            {similarProducts.map(sp => (
              <Link
                to={`/product/${sp.id}`}
                key={sp.id}
                style={{
                  width: 180,
                  textDecoration: 'none',
                  color: '#333',
                  backgroundColor: '#fff',
                  borderRadius: 12,
                  boxShadow: '0 6px 15px rgba(0,0,0,0.1)',
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
                <img
                  src={sp.image}
                  alt={sp.name}
                  style={{ width: '100%', height: '100px', objectFit: 'cover' }}
                />
                <div style={{ padding: '10px', textAlign: 'center' }}>
                  <h4 style={{ margin: '0 0 8px 0', fontSize: 14 }}>{sp.name}</h4>
                  <p style={{ color: '#e63946', fontWeight: 'bold', fontSize: 13 }}>{sp.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
