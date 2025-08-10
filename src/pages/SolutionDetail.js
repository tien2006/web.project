import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const solutions = [
  {
    id: 'automation',
    title: 'Tự động hóa nhà máy',
    description:
      'Giải pháp tự động hóa toàn diện cho nhà máy giúp tăng hiệu quả sản xuất, giảm chi phí vận hành và cải thiện chất lượng sản phẩm.',
    details:
      'Giải pháp bao gồm hệ thống máy móc tự động, robot, phần mềm điều khiển thông minh, cảm biến và hệ thống giám sát tập trung. Mục tiêu là tối ưu hóa toàn bộ quy trình từ nhập nguyên liệu, sản xuất, kiểm tra chất lượng, đến đóng gói và vận chuyển.',
    icon: '⚙️',
    image: '/images/automation.jpg',
    features: [
      'Dây chuyền sản xuất tự động',
      'Robot lắp ráp và vận chuyển',
      'Phần mềm điều khiển trung tâm',
      'Giám sát thời gian thực qua IoT'
    ],
    benefits: [
      'Giảm 30% chi phí nhân công',
      'Tăng 40% năng suất',
      'Giảm thiểu lỗi sản xuất',
      'Rút ngắn thời gian đưa sản phẩm ra thị trường'
    ],
    applications: [
      'Ngành điện tử',
      'Chế biến thực phẩm',
      'Ô tô và linh kiện',
      'May mặc và dệt may'
    ],
    specs: [
      { label: 'Công suất hệ thống', value: '24/7 không gián đoạn' },
      { label: 'Độ chính xác', value: '±0.01 mm' },
      { label: 'Tốc độ sản xuất', value: 'Tăng 40% so với thủ công' },
      { label: 'Tiêu thụ năng lượng', value: 'Tiết kiệm 20%' }
    ],
    caseStudy: {
      title: 'Triển khai tại Nhà máy ABC',
      content:
        'Nhà máy ABC đã áp dụng giải pháp này và giảm 35% thời gian sản xuất, đồng thời tăng chất lượng sản phẩm đạt chuẩn quốc tế. Hệ thống robot và phần mềm điều khiển giúp tự động hóa hoàn toàn từ khâu nhập nguyên liệu đến đóng gói.',
      image: '/images/case-automation.jpg'
    },
    process: [
      'Khảo sát và đánh giá quy trình sản xuất hiện tại',
      'Thiết kế giải pháp và mô hình 3D',
      'Lắp đặt và cấu hình hệ thống',
      'Chạy thử, đào tạo nhân viên',
      'Bàn giao và hỗ trợ bảo trì'
    ],
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 'remote-control',
    title: 'Điều khiển và giám sát từ xa',
    description:
      'Hệ thống điều khiển và giám sát giúp quản lý thiết bị, quy trình sản xuất từ xa, nâng cao khả năng phản ứng và bảo trì.',
    details:
      'Sử dụng công nghệ IoT và điện toán đám mây để kết nối toàn bộ hệ thống máy móc, cảm biến, camera giám sát và phần mềm điều khiển. Người quản lý có thể truy cập dữ liệu và điều khiển mọi thứ từ bất kỳ đâu qua ứng dụng web hoặc di động.',
    icon: '📡',
    image: '/images/remote-control.jpg',
    features: [
      'Giám sát video thời gian thực',
      'Báo cáo dữ liệu tự động',
      'Cảnh báo sự cố tức thời',
      'Điều khiển thiết bị từ xa'
    ],
    benefits: [
      'Phản ứng nhanh với sự cố',
      'Giảm thời gian ngừng máy',
      'Tối ưu bảo trì thiết bị',
      'Tiết kiệm chi phí vận hành'
    ],
    applications: [
      'Nhà máy sản xuất',
      'Kho hàng và logistics',
      'Nông nghiệp thông minh',
      'Hệ thống năng lượng'
    ],
    specs: [
      { label: 'Hệ thống kết nối', value: 'IoT & Cloud' },
      { label: 'Độ trễ', value: '< 1 giây' },
      { label: 'Hỗ trợ đa nền tảng', value: 'Web & Mobile' },
      { label: 'Bảo mật', value: 'Mã hóa AES 256-bit' }
    ],
    caseStudy: {
      title: 'Ứng dụng tại Công ty XYZ',
      content:
        'Công ty XYZ đã áp dụng hệ thống điều khiển từ xa, giảm 50% thời gian phản ứng sự cố và tăng hiệu suất vận hành kho hàng lên 25%.',
      image: '/images/case-remote-control.jpg'
    },
    process: [
      'Khảo sát hệ thống hiện tại',
      'Thiết kế mạng IoT và phần mềm điều khiển',
      'Triển khai lắp đặt thiết bị',
      'Đào tạo và vận hành thử nghiệm',
      'Hỗ trợ bảo trì và nâng cấp'
    ],
    video: 'https://www.youtube.com/embed/ScMzIvxBSi4'
  },
  {
    id: 'iot-integration',
    title: 'Tích hợp IoT trong sản xuất',
    description:
      'Kết nối các thiết bị thông minh, cảm biến qua mạng IoT để thu thập dữ liệu, phân tích và tối ưu hóa quy trình.',
    details:
      'Triển khai các cảm biến đo lường, bộ thu thập dữ liệu, và phần mềm phân tích. Tất cả dữ liệu được gửi về hệ thống trung tâm, áp dụng AI để tối ưu vận hành và dự đoán sự cố.',
    icon: '🌐',
    image: '/images/iot.jpg',
    features: [
      'Kết nối hàng nghìn thiết bị',
      'Thu thập dữ liệu thời gian thực',
      'Phân tích dự đoán bằng AI',
      'Tích hợp với hệ thống ERP/MES'
    ],
    benefits: [
      'Tăng tính minh bạch sản xuất',
      'Giảm hao phí nguyên liệu',
      'Ra quyết định nhanh hơn',
      'Cải thiện chất lượng sản phẩm'
    ],
    applications: [
      'Nhà máy thông minh',
      'Chuỗi cung ứng',
      'Giám sát môi trường',
      'Năng lượng tái tạo'
    ],
    specs: [
      { label: 'Số lượng thiết bị', value: 'Hỗ trợ lên tới 10,000' },
      { label: 'Cập nhật dữ liệu', value: 'Theo thời gian thực' },
      { label: 'AI phân tích', value: 'Deep Learning và Machine Learning' },
      { label: 'Tích hợp hệ thống', value: 'ERP, MES, SCADA' }
    ],
    caseStudy: {
      title: 'Dự án IoT tại Nhà máy DEF',
      content:
        'Nhà máy DEF đã tích hợp hệ thống IoT giúp giảm 15% hao phí nguyên liệu và nâng cao chất lượng sản phẩm qua phân tích dữ liệu thông minh.',
      image: '/images/case-iot.jpg'
    },
    process: [
      'Đánh giá hạ tầng mạng hiện tại',
      'Lắp đặt cảm biến và thiết bị thu thập dữ liệu',
      'Xây dựng hệ thống phân tích dữ liệu',
      'Triển khai AI dự đoán và tối ưu',
      'Bảo trì và cập nhật hệ thống'
    ],
    video: 'https://www.youtube.com/embed/5qap5aO4i9A'
  },
  {
    id: 'data-analysis',
    title: 'Phân tích dữ liệu sản xuất',
    description:
      'Sử dụng Big Data và AI để phân tích dữ liệu sản xuất, dự báo sự cố và nâng cao hiệu suất.',
    details:
      'Áp dụng công nghệ AI, Machine Learning để xử lý dữ liệu lớn từ nhiều nguồn: máy móc, cảm biến, hệ thống ERP. Mục tiêu là phát hiện bất thường sớm, tối ưu sản xuất và lập kế hoạch thông minh.',
    icon: '📊',
    image: '/images/data-analysis.jpg',
    features: [
      'Xử lý dữ liệu lớn (Big Data)',
      'Mô hình AI dự đoán sự cố',
      'Báo cáo phân tích trực quan',
      'Hệ thống cảnh báo thông minh'
    ],
    benefits: [
      'Giảm rủi ro sản xuất',
      'Nâng cao hiệu suất vận hành',
      'Tối ưu sử dụng nguyên liệu',
      'Hỗ trợ lập kế hoạch sản xuất'
    ],
    applications: [
      'Ngành chế biến',
      'Ngành khai khoáng',
      'Năng lượng',
      'Logistics'
    ],
    specs: [
      { label: 'Khả năng xử lý', value: 'Hàng terabyte mỗi ngày' },
      { label: 'Mô hình AI', value: 'Mạng neuron sâu và học tăng cường' },
      { label: 'Báo cáo', value: 'Dashboard trực quan theo thời gian thực' },
      { label: 'Cảnh báo', value: 'Tự động và theo ngữ cảnh' }
    ],
    caseStudy: {
      title: 'Phân tích dữ liệu tại Nhà máy GHI',
      content:
        'Nhà máy GHI sử dụng hệ thống phân tích dữ liệu và AI để giảm 20% chi phí bảo trì và tăng 15% hiệu suất vận hành tổng thể.',
      image: '/images/case-data-analysis.jpg'
    },
    process: [
      'Thu thập dữ liệu đa nguồn',
      'Xây dựng mô hình AI dự đoán',
      'Triển khai hệ thống cảnh báo',
      'Phân tích và tối ưu quy trình',
      'Đào tạo và chuyển giao công nghệ'
    ],
    video: 'https://www.youtube.com/embed/M7lc1UVf-VE'
  }
];

const SolutionDetail = () => {
  const { solutionId } = useParams();
  const navigate = useNavigate();
  const solution = solutions.find((sol) => sol.id === solutionId);

  if (!solution) {
    return (
      <div style={{ padding: 20, textAlign: 'center' }}>
        <h2>Giải pháp không tồn tại</h2>
        <button onClick={() => navigate(-1)} style={styles.backButton}>
          ← Quay lại
        </button>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <button onClick={() => navigate(-1)} style={styles.backButton}>
        ← Quay lại
      </button>

      {/* Ảnh nằm trên cùng */}
      <img src={solution.image} alt={solution.title} style={styles.headerImage} />

      {/* Tiêu đề */}
      <h1 style={styles.title}>{solution.icon} {solution.title}</h1>

      {/* Đưa description + details xuống dưới ảnh với margin để cách ảnh */}
      <div style={{ marginTop: 20 }}>
        <p style={styles.description}>{solution.description}</p>
        <p style={styles.details}>{solution.details}</p>
      </div>

      {/* Tính năng */}
      <section style={styles.section}>
        <h2>🔹 Tính năng nổi bật</h2>
        <ul>{solution.features.map((f, i) => <li key={i}>{f}</li>)}</ul>
      </section>

      {/* Lợi ích */}
      <section style={styles.section}>
        <h2>💡 Lợi ích mang lại</h2>
        <ul>{solution.benefits.map((b, i) => <li key={i}>{b}</li>)}</ul>
      </section>

      {/* Ứng dụng */}
      <section style={styles.section}>
        <h2>🏭 Ứng dụng thực tế</h2>
        <ul>{solution.applications.map((a, i) => <li key={i}>{a}</li>)}</ul>
      </section>

      {/* Thông số kỹ thuật */}
      {solution.specs && (
        <section style={styles.section}>
          <h2>📋 Thông số kỹ thuật</h2>
          <table style={styles.table}>
            <tbody>
              {solution.specs.map((spec, i) => (
                <tr key={i}>
                  <td style={styles.tdLabel}>{spec.label}</td>
                  <td>{spec.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}

      {/* Case Study */}
      {solution.caseStudy && (
        <section style={styles.section}>
          <h2>📌 Case Study: {solution.caseStudy.title}</h2>
          <img src={solution.caseStudy.image} alt="Case Study" style={styles.caseImage} />
          <p>{solution.caseStudy.content}</p>
        </section>
      )}

      {/* Quy trình */}
      {solution.process && (
        <section style={styles.section}>
          <h2>🛠 Quy trình triển khai</h2>
          <ol>{solution.process.map((step, i) => <li key={i}>{step}</li>)}</ol>
        </section>
      )}

      {/* Video minh họa */}
      {solution.video && (
        <section style={styles.section}>
          <h2>🎥 Video minh họa</h2>
          <div style={styles.videoWrapper}>
            <iframe
              width="100%"
              height="400"
              src={solution.video}
              title="Video demo"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </section>
      )}

      {/* CTA */}
      <section style={{ ...styles.section, textAlign: 'center' }}>
        <h2>🚀 Sẵn sàng triển khai giải pháp?</h2>
        <p>Liên hệ ngay với chúng tôi để được tư vấn chi tiết và nhận báo giá tốt nhất.</p>
        <button style={styles.ctaButton}>📞 Liên hệ tư vấn</button>
      </section>
    </div>
  );
};

const styles = {
  container: { maxWidth: 900, margin: '40px auto', padding: 20, fontFamily: "'Segoe UI', sans-serif", lineHeight: 1.6, color: '#333' },
  backButton: { marginBottom: 20, padding: '8px 15px', cursor: 'pointer', borderRadius: '6px', border: 'none', backgroundColor: '#007bff', color: 'white' },
  headerImage: { width: '100%', height: 350, objectFit: 'cover', borderRadius: 8, marginBottom: 20 },
  title: { fontSize: '2rem', marginBottom: 10 },
  description: { fontSize: '1.2rem', color: '#555', marginBottom: 10 },
  details: { fontSize: '1rem', marginBottom: 30 },
  section: { marginBottom: 30 },
  table: { width: '100%', borderCollapse: 'collapse', marginTop: 10 },
  tdLabel: { fontWeight: 'bold', paddingRight: 15, width: '40%' },
  caseImage: { width: '100%', borderRadius: 8, margin: '15px 0' },
  videoWrapper: { marginTop: 10 },
  ctaButton: { padding: '12px 20px', fontSize: '1rem', border: 'none', borderRadius: '8px', backgroundColor: '#28a745', color: 'white', cursor: 'pointer' }
};

export default SolutionDetail;
