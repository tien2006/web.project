import React, { useState } from 'react';
import { Link, useNavigate,useLocation  } from 'react-router-dom';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [openSubSubMenu, setOpenSubSubMenu] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => {
  return location.pathname === path || location.pathname.startsWith(path + '/');
  };
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm('');
    }
  };

  const handleOpenMenu = (menu) => {
    setOpenMenu(menu);
    setOpenSubMenu(null);
    setOpenSubSubMenu(null);
  };

  const handleCloseMenu = () => {
    setOpenMenu(null);
    setOpenSubMenu(null);
    setOpenSubSubMenu(null);
  };

  const handleOpenSubMenu = (submenu) => {
    setOpenSubMenu(submenu);
    setOpenSubSubMenu(null);
  };

  const handleCloseSubMenu = () => {
    setOpenSubMenu(null);
    // Đã bỏ setOpenSubSubMenu(null) để không đóng submenu cấp 3 khi đóng submenu cấp 2
  };

  const handleOpenSubSubMenu = (subsubmenu) => {
    setOpenSubSubMenu(subsubmenu);
  };

  const handleCloseSubSubMenu = () => {
    setOpenSubSubMenu(null);
  };
  const solutions = [
  { id: 'automation', title: 'Tự động hóa nhà máy' },
  { id: 'remote-control', title: 'Điều khiển và giám sát từ xa' },
  { id: 'iot-integration', title: 'Tích hợp IoT trong sản xuất' },
  { id: 'data-analysis', title: 'Phân tích dữ liệu sản xuất' },
];

  return (
    <>
      <header style={headerFixedStyle}>
        <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo + tên bên trái */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img
              src="https://res.cloudinary.com/dhzfopfkh/image/upload/v1754896859/logo_d6trhr.png"
              alt="Logo"
              style={{ height: '50px', width: 'auto' }}
            />
            <span style={{ color: '#FFD700', fontWeight: 'bold', fontSize: '28px', userSelect: 'none' }}>
              TỰ ĐỘNG HÓA THĂNG TIẾN
            </span>
          </div>

          {/* Menu chính bên phải */}
          <div style={{ display: 'flex', gap: '20px', position: 'relative', alignItems: 'center' }}>
            <Link to="/" style={isActive('/') ? { ...navLink, ...activeStyle } : navLink}>Trang chủ</Link>


            {/* Sản phẩm */}
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => handleOpenMenu('products')}
              onMouseLeave={handleCloseMenu}
            >
              <Link to="/products" style={isActive('/products') ? { ...navLink, ...activeStyle } : navLink}>Sản phẩm</Link>

              {openMenu === 'products' && (
                <div style={dropdown}>
                  {/* Mục Tự động hóa */}
                  <div
                    style={{ position: 'relative' }}
                    onMouseEnter={() => handleOpenSubMenu('automation')}
                    onMouseLeave={handleCloseSubMenu}
                  >
                    <Link to="/products/Tự động hóa" style={dropdownItemWithArrow}>
                      Tự động hóa ▶
                    </Link>

                    {openSubMenu === 'automation' && (
                      <div
                        style={dropdownRight}
                        onMouseEnter={() => handleOpenSubMenu('automation')}
                        onMouseLeave={handleCloseSubMenu}
                      >
                        {/* PLC */}
                        <div
                          style={{ position: 'relative' }}
                          onMouseEnter={() => handleOpenSubSubMenu('plc')}
                          onMouseLeave={handleCloseSubSubMenu}
                        >
                          <Link to="/products/Tự động hóa/PLC" style={dropdownItemWithArrow}>
                            PLC ▶
                          </Link>

                          {openSubSubMenu === 'plc' && (
                            <div
                              style={dropdownRightLevel3}
                              onMouseEnter={() => handleOpenSubSubMenu('plc')}
                              onMouseLeave={handleCloseSubSubMenu}
                            >
                              <Link to="/products/Tự động hóa/PLC/FX5U" style={dropdownItem}>FX5U</Link>
                              <Link to="/products/Tự động hóa/PLC/FX3U" style={dropdownItem}>FX3U</Link>
                              <Link to="/products/Tự động hóa/PLC/L-Series" style={dropdownItem}>L-Series</Link>
                            </div>
                          )}
                        </div>

                        {/* Industrial PC */}
                        <div
                          style={{ position: 'relative' }}
                          onMouseEnter={() => handleOpenSubSubMenu('industrial_pc')}
                          onMouseLeave={handleCloseSubSubMenu}
                        >
                          <Link to="/products/Tự động hóa/Industrial PC" style={dropdownItemWithArrow}>
                            Industrial PC ▶
                          </Link>

                          {openSubSubMenu === 'industrial_pc' && (
                            <div
                              style={dropdownRightLevel3}
                              onMouseEnter={() => handleOpenSubSubMenu('industrial_pc')}
                              onMouseLeave={handleCloseSubSubMenu}
                            >
                              <Link to="/products/Tự động hóa/Industrial PC/mit" style={dropdownItem}>mit</Link>
                              <Link to="/products/Tự động hóa/Industrial PC/mit1" style={dropdownItem}>mit1</Link>
                            </div>
                          )}
                        </div>

                        <Link to="/products/Tự động hóa/HMI" style={dropdownItem}>HMI</Link>
                        <Link to="/products/Tự động hóa/Servo" style={dropdownItem}>Servo</Link>
                        <Link to="/products/Tự động hóa/Biến tần" style={dropdownItem}>Biến tần</Link>
                        <Link to="/products/Động cơ" style={dropdownItem}>Động cơ</Link>
                      </div>
                    )}
                  </div>

                  <Link to="/products/Bộ điều khiển PLC" style={dropdownItem}>Bộ điều khiển PLC</Link>
                  <Link to="/products/Servo" style={dropdownItem}>Servo</Link>
                </div>
              )}
            </div>

            {/* Các menu còn lại giữ nguyên */}
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => handleOpenMenu('solutions')}
              onMouseLeave={handleCloseMenu}
            >
              <Link to="/solutions" style={isActive('/solutions') ? { ...navLink, ...activeStyle } : navLink}>Giải pháp</Link>
              {openMenu === 'solutions' && (
                <div style={dropdown}>
                  {solutions.map(({ id, title }) => (
                    <Link 
                      key={id} 
                      to={`/solutions/${id}`} 
                      style={dropdownItem}
                      onClick={() => handleCloseMenu()} // Đóng menu sau khi click
                    >
                      {title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => handleOpenMenu('projects')}
              onMouseLeave={handleCloseMenu}
            >
              <Link to="/projects" style={isActive('/projects') ? { ...navLink, ...activeStyle } : navLink}>Dự án</Link>
              {/* Xóa dropdown con */}
              {/* {openMenu === 'projects' && (
                <div style={dropdown}>
                  <Link to="/projects/project1" style={dropdownItem}>Dự án A</Link>
                  <Link to="/projects/project2" style={dropdownItem}>Dự án B</Link>
                  <Link to="/projects/project3" style={dropdownItem}>Dự án C</Link>
                </div>
              )} */}
            </div>

            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => handleOpenMenu('about')}
              onMouseLeave={handleCloseMenu}
            >
              <Link to="/about" style={isActive('/about') ? { ...navLink, ...activeStyle } : navLink}>Giới thiệu</Link>
              {openMenu === 'about' && (
                <div style={dropdown}>
                  <Link to="/about#general" style={dropdownItem}>Giới thiệu chung</Link>
                  <Link to="/about#history" style={dropdownItem}>Lịch sử hình thành</Link>
                  <Link to="/about#vision" style={dropdownItem}>Tầm nhìn - sứ mệnh</Link>
                  <Link to="/about#team" style={dropdownItem}>Đội ngũ nhân sự</Link>
                  <Link to="/about#values" style={dropdownItem}>Giá trị cốt lõi</Link>
                </div>
              )}
            </div>

            <Link to="/contact" style={isActive('/contact') ? { ...navLink, ...activeStyle } : navLink}>Liên hệ</Link>
            {/* Thanh tìm kiếm */}
            <form onSubmit={handleSearchSubmit} 
              style={{
              position: 'relative',
              maxWidth: '200px',   // giới hạn chiều rộng tối đa của form
              flexShrink: 0        // không để form co lại quá nhỏ nếu flex container nhỏ
            }}
            >
              <input
                type="text"
                placeholder="Tìm kiếm..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={searchInput}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#888"
                viewBox="0 0 24 24"
                style={searchIcon}
              >
                <path d="M10 2a8 8 0 105.292 14.292l5.708 5.708 1.414-1.414-5.708-5.708A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0 010-12z" />
              </svg>
            </form>
          </div>
        </nav>
      </header>

      {/* Thêm 1 div padding giữ khoảng trống tránh nội dung bị header cố định đè lên */}
      <div style={{ height: '60px' }}></div>
    </>
  );
};

const headerFixedStyle = {
  background: '#007bff',
  padding: '12px 20px',
  color: 'white',
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  zIndex: 10000,
  boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
  userSelect: 'none',
};

const navLink = {
  color: 'white',
  textDecoration: 'none',
  fontWeight: '500',
  fontSize: '18px',
  userSelect: 'none',
};

const dropdown = {
  position: 'absolute',
  top: '100%',
  left: 0,
  background: 'white',
  color: 'black',
  minWidth: '180px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
  borderRadius: '4px',
  overflow: 'visible',
  zIndex: 1000,
};

const dropdownRight = {
  position: 'absolute',
  top: 0,
  left: '100%',
  background: 'white',
  color: 'black',
  minWidth: '160px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
  borderRadius: '4px',
  overflow: 'visible',
  zIndex: 1100,
};

const dropdownRightLevel3 = {
  position: 'absolute',
  top: 0,
  left: '100%',
  background: 'white',
  color: 'black',
  minWidth: '140px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
  borderRadius: '4px',
  overflow: 'visible',
  zIndex: 1200,
};

const dropdownItem = {
  display: 'block',
  padding: '10px 15px',
  textDecoration: 'none',
  color: 'black',
  background: 'white',
  whiteSpace: 'nowrap',
};

const dropdownItemWithArrow = {
  ...dropdownItem,
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const searchInput = {
  padding: '5px 10px 5px 30px', // padding-left để icon không chèn chữ
  borderRadius: '4px',
  border: 'none',
  fontSize: '14px',
  outline: 'none',
  width: '80%',
  boxSizing: 'border-box',
};

const searchIcon = {
  position: 'absolute',
  left: '8px',
  top: '50%',
  transform: 'translateY(-50%)',
  pointerEvents: 'none',
};
const activeStyle = {
  color: '#FFD700',
  borderBottom: '2px solid #FFD700',
  paddingBottom: '4px',
  fontWeight: '700',
};


export default Header;
