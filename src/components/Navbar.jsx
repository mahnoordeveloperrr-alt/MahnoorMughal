export default function Navbar({ logoRef, menuRef, onMenuClick, isMenuActive }) {
  return (
    <nav className="main-nav">
      <h1 className="logo" ref={logoRef}>MAHNOOR MUGHAL</h1>
      <div className={`dev-menu ${isMenuActive ? 'active' : ''}`} ref={menuRef} onClick={onMenuClick}>
        <span></span><span></span><span></span>
      </div>
    </nav>
  )
}