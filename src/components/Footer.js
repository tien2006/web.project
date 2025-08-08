import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#003366', color: 'white', padding: '40px 20px' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', maxWidth: '1200px', margin: '0 auto' }}>
        {/* Logo và địa chỉ */}
        <div style={{ flex: '1 1 300px', marginBottom: '20px' }}>
          <img src="/logo192.png" alt="Logo" style={{ height: '50px', marginBottom: '10px' }} />
          <h3>CÔNG TY CỔ PHẦN GIẢI PHÁP TỰ ĐỘNG HÓA TTA</h3>
          <p>
            Trụ sở chính: 189 Phan Trọng Tuệ, Thanh Liệt, Hà Nội<br />
            Chi nhánh HCM: Số 1 Lê Đức Thọ, Tân Thới Hiệp, TP.HCM<br />
            VP Vinh: Km2, số 9, Đại lộ Vinh - Cửa Lò, TP. Vinh, Nghệ An<br />
            Hotline: (+84)965 800 166 (Call, Zalo, WhatsApp)<br />
            Mr. Thưởng: (+84)94 552 5520<br />
            Email: info@tta-automation.vn
          </p>
        </div>

        {/* Các cột khác */}
        <div style={{ flex: '1 1 150px' }}>
          <h4>Lĩnh vực kinh doanh</h4>
          <ul>
            <li>Công nghiệp</li>
            <li>Đào tạo chuyên ngành</li>
            <li>Dân sinh</li>
            <li>Hệ sinh thái TTA</li>
          </ul>
        </div>
        <div style={{ flex: '1 1 150px' }}>
          <h4>Liên kết nhanh</h4>
          <ul>
            <li>Câu chuyện thành công</li>
            <li>Tin tức</li>
            <li>Liên hệ</li>
          </ul>
        </div>
        <div style={{ flex: '1 1 150px' }}>
          <h4>Fanpage</h4>
          <ul>
            <li><a href="https://facebook.com" style={{ color: 'white' }}>Facebook</a></li>
          </ul>
        </div>
      </div>

      {/* Bản quyền */}
      <div style={{ textAlign: 'center', paddingTop: '20px', borderTop: '1px solid #ccc', marginTop: '30px' }}>
        © Bản quyền thuộc về TTA. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
