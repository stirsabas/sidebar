import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  const [isExpend, setExpendState] = useState(false);
  const menuItems = [
    {
      text: "Home",
      ruta: "/",
      icon: "Sidebar_icons/homehome.svg"
    },
    {
      text: "Agregar",
      ruta: "agregar",
      icon: "Sidebar_icons/boxagregar.svg"
    },
    {
      text: "Resumen",
      ruta: "resumen",
      icon: "Sidebar_icons/filetextresumen.svg"
    },
    {
      text: "Inventario",
      ruta: "inventario",
      icon: "Sidebar_icons/creditcardinventario.svg"
    },
    {
      text: "Archivos",
      ruta: "archivos",
      icon: "Sidebar_icons/folderarchivos.svg"
    },
    {
      text: "Help",
      ruta: "help",
      icon: "Sidebar_icons/helpcirclehelp.svg"
    },
    {
      text: "Configuracion",
      ruta: "configuracion",
      icon: "Sidebar_icons/settings.svg"
    },
    {
      text: "Inbox",
      ruta: "inbox",
      icon: "Sidebar_icons/inboxon.svg"
    }
  ];

  return (
    <div>
      <div
        className={
          isExpend
            ? "sidebar_nav_container"
            : "sidebar_nav_container sidebar_nav_container_NX"
        }
      >
        <div className="sidebar_nav_upper">
          <div className="sidebar_nav_heading">
            {isExpend && (
              <div className="sidebar_nav_brand">
                <img src="./Sidebar_icons/logo.svg" alt="nav brand" />
                <h2>TecnoBurger</h2>
              </div>
            )}
            <button
              className={
                isExpend
                  ? "sidebar_hamburger sidebar_hamburger_in"
                  : "sidebar_hamburger sidebar_hamburger_out"
              }
              onClick={() => setExpendState(!isExpend)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          <div className="sidebar_nav_menu">
            {menuItems.map(({ text, icon, ruta }, index) => (
              <Link
                key={index}
                to={ruta}
                className={
                  isExpend
                    ? "sidebar_menu_items"
                    : "sidebar_menu_items sidebar_menu_items_NX"
                }
              >
                <img src={icon} alt="" srcset="" />
                {isExpend && <p>{text}</p>}
                {!isExpend && <div className="sidebar_tooltip">{text}</div>}
              </Link>
            ))}
          </div>
        </div>
        <div className="sidebar_nav_footer">
          {isExpend && (
            <div className="sidebar_nav_details">
              <img src="Sidebar_icons/Avatar 1.svg" alt="Admin" />
              <div className="sidebar_nav_info">
                <p className="sidebar_nav_footer_user_name">Brayan Fernandez</p>
                <p className="sidebar_nav_footer_user_position">Store Admin</p>
              </div>
            </div>
          )}
          <img
            className="sidebar_logout_icon"
            src="Sidebar/logout.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
