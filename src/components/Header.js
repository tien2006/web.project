import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [openSubSubMenu, setOpenSubSubMenu] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const isActive = (path) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm('');
      if (isMobile) setMobileMenuOpen(false);
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
  };

  const handleOpenSubSubMenu = (subsubmenu) => {
    setOpenSubSubMenu(subsubmenu);
  };

  const handleCloseSubSubMenu = () => {
    setOpenSubSubMenu(null);
  };

  // Toggle menu on mobile (click)
  const toggleMenuMobile = (menu) => {
    if (openMenu === menu) handleCloseMenu();
    else handleOpenMenu(menu);
  };

  // Sample solutions list (giữ như bản gốc)
  const solutions = [
    { id: 'automation', title: 'Tự động hóa nhà máy' },
    { id: 'remote-control', title: 'Điều khiển và giám sát từ xa' },
    { id: 'iot-integration', title: 'Tích hợp IoT trong sản xuất' },
    { id: 'data-analysis', title: 'Phân tích dữ liệu sản xuất' },
  ];

  // Styles (giữ inline giống file gốc)
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
    padding: '5px 10px 5px 30px',
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

  // Mobile menu overlay style
  const mobileMenuOverlay = {
    position: 'fixed',
    top: 64, // match header height
    left: 0,
    right: 0,
    bottom: 0,
    background: '#fff',
    zIndex: 9999,
    overflowY: 'auto',
    padding: '20px',
  };

  const mobileLinkStyle = {
    display: 'block',
    padding: '12px 10px',
    fontSize: '18px',
    color: '#333',
    textDecoration: 'none',
    borderBottom: '1px solid #eee',
  };

  return (
    <>
      <header style={headerFixedStyle}>
        <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Nhóm trái: logo + tên + hamburger (chỉ hiện mobile) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img
              src="https://res.cloudinary.com/dhzfopfkh/image/upload/v1754896859/logo_d6trhr.png"
              alt="Logo"
              style={{ height: '50px', width: 'auto' }}
            />
            <span style={{ color: '#FFD700', fontWeight: 'bold', fontSize: '20px', userSelect: 'none' }}>
              THĂNG TIẾN
            </span>

            {/* Hamburger (chỉ hiện mobile) */}
            <button
              onClick={() => { setMobileMenuOpen((s) => !s); handleCloseMenu(); }}
              aria-label="Toggle menu"
              style={{
                display: isMobile ? 'block' : 'none',
                background: 'transparent',
                border: 'none',
                color: 'white',
                fontSize: '26px',
                cursor: 'pointer',
                padding: 6,
                marginLeft: '8px',  // cách tên một chút
              }}
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>

          {/* Menu chính bên phải */}
          {/* Ẩn menu chính khi mobile */}
          <div
            style={{
              display: isMobile ? 'none' : 'flex',
              gap: '20px',
              position: 'relative',
              alignItems: 'center',
            }}
          >
            <Link to="/" style={isActive('/') ? { ...navLink, ...activeStyle } : navLink}>Trang chủ</Link>

            {/* Sản phẩm (desktop hover) */}
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => !isMobile && handleOpenMenu('products')}
              onMouseLeave={() => !isMobile && handleCloseMenu()}
            >
              <Link to="/products" style={isActive('/products') ? { ...navLink, ...activeStyle } : navLink}>Sản phẩm</Link>

              {openMenu === 'products' && !isMobile && (
                <div style={dropdown}>
                  <div
                    style={{ position: 'relative' }}
                    onMouseEnter={() => !isMobile && handleOpenSubMenu('automation')}
                    onMouseLeave={() => !isMobile && handleCloseSubMenu()}
                  >
                    <Link to="/products/Tự động hóa" style={dropdownItemWithArrow}>Tự động hóa ▶</Link>

                    {openSubMenu === 'automation' && !isMobile && (
                      <div style={dropdownRight}>
                        <div
                          style={{ position: 'relative' }}
                          onMouseEnter={() => !isMobile && handleOpenSubSubMenu('plc')}
                          onMouseLeave={() => !isMobile && handleCloseSubSubMenu()}
                        >
                          <Link to="/products/Tự động hóa/PLC" style={dropdownItemWithArrow}>PLC ▶</Link>

                          {openSubSubMenu === 'plc' && !isMobile && (
                            <div style={dropdownRightLevel3}>
                              <Link to="/products/Tự động hóa/PLC/FX5U" style={dropdownItem}>FX5U</Link>
                              <Link to="/products/Tự động hóa/PLC/FX3U" style={dropdownItem}>FX3U</Link>
                              <Link to="/products/Tự động hóa/PLC/L-Series" style={dropdownItem}>L-Series</Link>
                            </div>
                          )}
                        </div>

                        <div
                          style={{ position: 'relative' }}
                          onMouseEnter={() => !isMobile && handleOpenSubSubMenu('industrial_pc')}
                          onMouseLeave={() => !isMobile && handleCloseSubSubMenu()}
                        >
                          <Link to="/products/Tự động hóa/Industrial PC" style={dropdownItemWithArrow}>Industrial PC ▶</Link>

                          {openSubSubMenu === 'industrial_pc' && !isMobile && (
                            <div style={dropdownRightLevel3}>
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

            {/* Giải pháp (desktop hover) */}
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => !isMobile && handleOpenMenu('solutions')}
              onMouseLeave={() => !isMobile && handleCloseMenu()}
            >
              <Link to="/solutions" style={isActive('/solutions') ? { ...navLink, ...activeStyle } : navLink}>Giải pháp</Link>
              {openMenu === 'solutions' && !isMobile && (
                <div style={dropdown}>
                  {solutions.map(({ id, title }) => (
                    <Link key={id} to={`/solutions/${id}`} style={dropdownItem}>{title}</Link>
                  ))}
                </div>
              )}
            </div>

            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => !isMobile && handleOpenMenu('projects')}
              onMouseLeave={() => !isMobile && handleCloseMenu()}
            >
              <Link to="/projects" style={isActive('/projects') ? { ...navLink, ...activeStyle } : navLink}>Dự án</Link>
            </div>

            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => !isMobile && handleOpenMenu('about')}
              onMouseLeave={() => !isMobile && handleCloseMenu()}
            >
              <Link to="/about" style={isActive('/about') ? { ...navLink, ...activeStyle } : navLink}>Giới thiệu</Link>
              {openMenu === 'about' && !isMobile && (
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

            {/* Thanh tìm kiếm (desktop) */}
            <form onSubmit={handleSearchSubmit} style={{ position: 'relative', maxWidth: '200px', flexShrink: 0 }}>
              <input type="text" placeholder="Tìm kiếm..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} style={searchInput} />
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#888" viewBox="0 0 24 24" style={searchIcon}>
                <path d="M10 2a8 8 0 105.292 14.292l5.708 5.708 1.414-1.414-5.708-5.708A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0 010-12z" />
              </svg>
            </form>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Panel */}
      {isMobile && mobileMenuOpen && (
        <div style={mobileMenuOverlay}>
          {/* Close button top - optional (we already have header close) */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 10 }}>
            <button onClick={() => setMobileMenuOpen(false)} style={{ border: 'none', background: 'transparent', fontSize: 22, cursor: 'pointer' }}>✕</button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Link to="/" style={mobileLinkStyle} onClick={() => setMobileMenuOpen(false)}>Trang chủ</Link>

            {/* Products (mobile clickable expand) */}
            <div>
              <div
                onClick={() => toggleMenuMobile('products')}
                style={{ ...mobileLinkStyle, display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
              >
                <span>Sản phẩm</span>
                <span>{openMenu === 'products' ? '▾' : '▸'}</span>
              </div>

              {/* products submenu */}
              {openMenu === 'products' && (
                <div style={{ paddingLeft: 12 }}>
                  {/* Automation */}
                  <div>
                    <div
                      onClick={() => {
                        // toggle automation submenu
                        if (openSubMenu === 'automation') handleCloseSubMenu();
                        else handleOpenSubMenu('automation');
                      }}
                      style={{ ...mobileLinkStyle, paddingLeft: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
                    >
                      <span>Tự động hóa</span>
                      <span>{openSubMenu === 'automation' ? '▾' : '▸'}</span>
                    </div>

                    {openSubMenu === 'automation' && (
                      <div style={{ paddingLeft: 12 }}>
                        {/* PLC */}
                        <div>
                          <div
                            onClick={() => {
                              if (openSubSubMenu === 'plc') handleCloseSubSubMenu();
                              else handleOpenSubSubMenu('plc');
                            }}
                            style={{ ...mobileLinkStyle, paddingLeft: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', borderBottom: 'none' }}
                          >
                            <span>PLC</span>
                            <span>{openSubSubMenu === 'plc' ? '▾' : '▸'}</span>
                          </div>

                          {openSubSubMenu === 'plc' && (
                            <div style={{ paddingLeft: 12 }}>
                              <Link to="/products/Tự động hóa/PLC/FX5U" style={mobileLinkStyle} onClick={() => setMobileMenuOpen(false)}>FX5U</Link>
                              <Link to="/products/Tự động hóa/PLC/FX3U" style={mobileLinkStyle} onClick={() => setMobileMenuOpen(false)}>FX3U</Link>
                              <Link to="/products/Tự động hóa/PLC/L-Series" style={mobileLinkStyle} onClick={() => setMobileMenuOpen(false)}>L-Series</Link>
                            </div>
                          )}
                        </div>

                        {/* Industrial PC */}
                        <div>
                          <div
                            onClick={() => {
                              if (openSubSubMenu === 'industrial_pc') handleCloseSubSubMenu();
                              else handleOpenSubSubMenu('industrial_pc');
                            }}
                            style={{ ...mobileLinkStyle, paddingLeft: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', borderBottom: 'none' }}
                          >
                            <span>Industrial PC</span>
                            <span>{openSubSubMenu === 'industrial_pc' ? '▾' : '▸'}</span>
                          </div>

                          {openSubSubMenu === 'industrial_pc' && (
                            <div style={{ paddingLeft: 12 }}>
                              <Link to="/products/Tự động hóa/Industrial PC/mit" style={mobileLinkStyle} onClick={() => setMobileMenuOpen(false)}>mit</Link>
                              <Link to="/products/Tự động hóa/Industrial PC/mit1" style={mobileLinkStyle} onClick={() => setMobileMenuOpen(false)}>mit1</Link>
                            </div>
                          )}
                        </div>

                        <Link to="/products/Tự động hóa/HMI" style={mobileLinkStyle} onClick={() => setMobileMenuOpen(false)}>HMI</Link>
                        <Link to="/products/Tự động hóa/Servo" style={mobileLinkStyle} onClick={() => setMobileMenuOpen(false)}>Servo</Link>
                        <Link to="/products/Tự động hóa/Biến tần" style={mobileLinkStyle} onClick={() => setMobileMenuOpen(false)}>Biến tần</Link>
                        <Link to="/products/Động cơ" style={mobileLinkStyle} onClick={() => setMobileMenuOpen(false)}>Động cơ</Link>
                      </div>
                    )}
                  </div>

                  <Link to="/products/Bộ điều khiển PLC" style={mobileLinkStyle} onClick={() => setMobileMenuOpen(false)}>Bộ điều khiển PLC</Link>
                  <Link to="/products/Servo" style={mobileLinkStyle} onClick={() => setMobileMenuOpen(false)}>Servo</Link>
                </div>
              )}
            </div>

            {/* Solutions */}
            <div>
              <div
                onClick={() => toggleMenuMobile('solutions')}
                style={{ ...mobileLinkStyle, display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
              >
                <span>Giải pháp</span>
                <span>{openMenu === 'solutions' ? '▾' : '▸'}</span>
              </div>

              {openMenu === 'solutions' && (
                <div style={{ paddingLeft: 12 }}>
                  {solutions.map(({ id, title }) => (
                    <Link
                      key={id}
                      to={`/solutions/${id}`}
                      style={mobileLinkStyle}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/projects" style={mobileLinkStyle} onClick={() => setMobileMenuOpen(false)}>Dự án</Link>
            <Link to="/about" style={mobileLinkStyle} onClick={() => setMobileMenuOpen(false)}>Giới thiệu</Link>
            <Link to="/contact" style={mobileLinkStyle} onClick={() => setMobileMenuOpen(false)}>Liên hệ</Link>

            {/* Search form mobile */}
            <form onSubmit={handleSearchSubmit} style={{ marginTop: 20 }}>
              <input
                type="text"
                placeholder="Tìm kiếm..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  padding: '10px 15px',
                  borderRadius: '4px',
                  border: '1px solid #ccc',
                  width: '100%',
                  boxSizing: 'border-box',
                  fontSize: 16,
                }}
              />
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
