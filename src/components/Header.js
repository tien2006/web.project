import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [openSubSubMenu, setOpenSubSubMenu] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

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
    setOpenSubSubMenu(null);
  };
  const handleOpenSubSubMenu = (subsubmenu) => {
    setOpenSubSubMenu(subsubmenu);
  };
  const handleCloseSubSubMenu = () => {
    setOpenSubSubMenu(null);
  };

  return (
    <header style={{ background: '#007bff', padding: '10px 20px', color: 'white' }}>
      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo + tên bên trái */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img
            src="/images/logo.png"
            alt="Logo"
            style={{ height: '35px', width: 'auto' }}
          />
          <span style={{ color: '#FFD700', fontWeight: 'bold', fontSize: '20px', userSelect: 'none' }}>
            TỰ ĐỘNG HÓA THĂNG TIẾN
          </span>
        </div>

        {/* Menu chính bên phải */}
        <div style={{ display: 'flex', gap: '20px', position: 'relative', alignItems: 'center' }}>
          <Link to="/" style={navLink}>Trang chủ</Link>

          {/* Sản phẩm */}
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => handleOpenMenu('products')}
            onMouseLeave={handleCloseMenu}
          >
            <Link to="/products" style={{ ...navLink, cursor: 'pointer' }}>
              Sản phẩm ▼
            </Link>

            {openMenu === 'products' && (
              <div style={dropdown}>
                <div
                  style={{ position: 'relative' }}
                  onMouseEnter={() => handleOpenSubMenu('automation')}
                  onMouseLeave={handleCloseSubMenu}
                >
                  <Link to="/products/automation" style={dropdownItemWithArrow}>
                    Tự động hóa ▶
                  </Link>

                  {openSubMenu === 'automation' && (
                    <div
                      style={dropdownRight}
                      onMouseEnter={() => handleOpenSubMenu('automation')}
                      onMouseLeave={handleCloseSubMenu}
                    >
                      <div
                        style={{ position: 'relative' }}
                        onMouseEnter={() => handleOpenSubSubMenu('plc')}
                        onMouseLeave={handleCloseSubSubMenu}
                      >
                        <Link to="/products/automation/plc" style={dropdownItemWithArrow}>
                          PLC ▶
                        </Link>

                        {openSubSubMenu === 'plc' && (
                          <div style={dropdownRightLevel3} onMouseEnter={() => handleOpenSubSubMenu('plc')} onMouseLeave={handleCloseSubSubMenu}>
                            <Link to="/products?model=FX5U" style={dropdownItem}>FX5U</Link>
                            <Link to="/products?model=FX3U" style={dropdownItem}>FX3U</Link>
                            <Link to="/products?model=L-Series" style={dropdownItem}>L-Series</Link>
                          </div>
                        )}
                      </div>

                      <Link to="/products/industrial-pc" style={dropdownItem}>Industrial PC</Link>
                      <Link to="/products/hmi" style={dropdownItem}>HMI</Link>
                      <Link to="/products/servo" style={dropdownItem}>Servo</Link>
                      <Link to="/products/inverter" style={dropdownItem}>Biến tần</Link>
                      <Link to="/products/motor" style={dropdownItem}>Động cơ</Link>
                    </div>
                  )}
                </div>

                <Link to="/products/category2" style={dropdownItem}>Bộ điều khiển PLC</Link>
                <Link to="/products/category3" style={dropdownItem}>Động cơ Servo</Link>
              </div>
            )}
          </div>

          {/* Giải pháp */}
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => handleOpenMenu('solutions')}
            onMouseLeave={handleCloseMenu}
          >
            <Link to="/solutions" style={navLink}>Giải pháp ▼</Link>
            {openMenu === 'solutions' && (
              <div style={dropdown}>
                <Link to="/solutions/industry1" style={dropdownItem}>Giải pháp công nghiệp</Link>
                <Link to="/solutions/industry2" style={dropdownItem}>Tự động hóa nhà máy</Link>
                <Link to="/solutions/industry3" style={dropdownItem}>Điều khiển từ xa</Link>
              </div>
            )}
          </div>

          {/* Dự án */}
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => handleOpenMenu('projects')}
            onMouseLeave={handleCloseMenu}
          >
            <Link to="/projects" style={navLink}>Dự án ▼</Link>
            {openMenu === 'projects' && (
              <div style={dropdown}>
                <Link to="/projects/project1" style={dropdownItem}>Dự án A</Link>
                <Link to="/projects/project2" style={dropdownItem}>Dự án B</Link>
                <Link to="/projects/project3" style={dropdownItem}>Dự án C</Link>
              </div>
            )}
          </div>

          {/* Giới thiệu */}
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => handleOpenMenu('about')}
            onMouseLeave={handleCloseMenu}
          >
            <Link to="/about" style={navLink}>Giới thiệu ▼</Link>
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

          <Link to="/contact" style={navLink}>Liên hệ</Link>

          {/* Thanh tìm kiếm với icon kính lúp */}
          <form onSubmit={handleSearchSubmit} style={{ position: 'relative' }}>
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
  );
};

const navLink = {
  color: 'white',
  textDecoration: 'none',
  fontWeight: '500',
  fontSize: '16px',
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
  padding: '5px 10px 5px 30px', // thêm padding-left để icon không đè chữ
  borderRadius: '4px',
  border: 'none',
  fontSize: '14px',
  outline: 'none',
  width: '180px',
};

const searchIcon = {
  position: 'absolute',
  left: '8px',
  top: '50%',
  transform: 'translateY(-50%)',
  pointerEvents: 'none',
};

export default Header;
