import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [openSubSubMenu, setOpenSubSubMenu] = useState(null);

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
      <nav style={{ display: 'flex', gap: '20px', position: 'relative', alignItems: 'center' }}>
        <Link to="/" style={navLink}>Trang chủ</Link>

        {/* Sản phẩm */}
        <div
          style={{ position: 'relative' }}
          onMouseEnter={() => handleOpenMenu('products')}
          onMouseLeave={handleCloseMenu}
        >
          {/* Link menu cha */}
          <Link to="/products" style={{ ...navLink, cursor: 'pointer' }}>
            Sản phẩm ▼
          </Link>

          {openMenu === 'products' && (
            <div style={dropdown}>
              {/* Tự động hóa (submenu cha) */}
              <div
                style={{ position: 'relative' }}
                onMouseEnter={() => handleOpenSubMenu('automation')}
                onMouseLeave={handleCloseSubMenu}
              >
                {/* Link submenu cha có thể bấm được */}
                <Link to="/products/automation" style={dropdownItemWithArrow}>
                  Tự động hóa ▶
                </Link>

                {openSubMenu === 'automation' && (
                  <div
                    style={dropdownRight}
                    onMouseEnter={() => handleOpenSubMenu('automation')}
                    onMouseLeave={handleCloseSubMenu}
                  >
                    {/* PLC (submenu cấp 2) */}
                    <div
                      style={{ position: 'relative' }}
                      onMouseEnter={() => handleOpenSubSubMenu('plc')}
                      onMouseLeave={handleCloseSubSubMenu}
                    >
                      {/* Link submenu cấp 2 */}
                      <Link to="/products/automation/plc" style={dropdownItemWithArrow}>
                        PLC ▶
                      </Link>

                      {openSubSubMenu === 'plc' && (
                        <div
                          style={dropdownRightLevel3}
                          onMouseEnter={() => handleOpenSubSubMenu('plc')}
                          onMouseLeave={handleCloseSubSubMenu}
                        >
                          <Link to="/products/plc/fx5u" style={dropdownItem}>FX5U</Link>
                          <Link to="/products/plc/fx3u" style={dropdownItem}>FX3U</Link>
                          <Link to="/products/plc/l-series" style={dropdownItem}>L-Series</Link>
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
              <Link to="/about/company" style={dropdownItem}>Về công ty</Link>
              <Link to="/about/team" style={dropdownItem}>Đội ngũ</Link>
              <Link to="/about/careers" style={dropdownItem}>Tuyển dụng</Link>
            </div>
          )}
        </div>

        <Link to="/contact" style={navLink}>Liên hệ</Link>
      </nav>
    </header>
  );
};

const navLink = {
  color: 'white',
  textDecoration: 'none',
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

export default Header;
