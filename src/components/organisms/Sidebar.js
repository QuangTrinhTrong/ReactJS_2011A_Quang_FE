import React from 'react';

function Sidebar(props) {
  return (
    <div className="c-sidebar c-sidebar-dark c-sidebar-fixed c-sidebar-lg-show" id="sidebar">
      <div className="c-sidebar-brand d-lg-down-none">
        <svg className="c-sidebar-brand-full" width={118} height={46} alt="CoreUI Logo">
          <use xlinkHref="assets/brand/coreui.svg#full" />
        </svg>
        <svg className="c-sidebar-brand-minimized" width={46} height={46} alt="CoreUI Logo">
          <use xlinkHref="assets/brand/coreui.svg#signet" />
        </svg>
      </div>
      <ul className="c-sidebar-nav">
        <li className="c-sidebar-nav-item"><a className="c-sidebar-nav-link" href="index.html">
          <svg className="c-sidebar-nav-icon">
            <use xlinkHref="node_modules/@coreui/icons/sprites/free.svg#cil-speedometer" />
          </svg> Dashboard<span className="badge badge-info">NEW</span></a></li>
        <li className="c-sidebar-nav-item"><a className="c-sidebar-nav-link" href="/room_map">
          <svg className="c-sidebar-nav-icon">
            <use xlinkHref="node_modules/@coreui/icons/sprites/free.svg#cil-speedometer" />
          </svg> RoomMap</a></li>
      </ul>
      <button className="c-sidebar-minimizer c-class-toggler" type="button" data-target="_parent" data-class="c-sidebar-minimized" />
    </div>
  );
}

export default Sidebar;