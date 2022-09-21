import React, { useState } from 'react'
import "./Sidebar.css";

function Sidebar() {
    const [isExpend, setExpendState] = useState(false);
        const menuItems = [
            {
                text: "Home",
                icon: "Sidebar/homehome.svg",
            },
            {
                text: "Agregar",
                icon: "Sidebar/boxagregar.svg",
            },
            {
                text: "Resumen",
                icon: "Sidebar/filetextresumen.svg",
            },
            {
                text: "Inventario",
                icon: "Sidebar/creditcardinventario.svg",
            },
            {
                text: "Archivos",
                icon: "Sidebar/folderarchivos.svg",
            },
            {
                text: "Help",
                icon: "Sidebar/helpcirclehelp.svg",
            },
            {
                text: "Configuracion",
                icon: "Sidebar/settings.svg",
            },
            {
                text: "Inbox",
                icon: "Sidebar/inboxon.svg",
            },
        ];


  return (
    <div>
        <div className={isExpend ? "sidebar_nav_container" : "sidebar_nav_container sidebar_nav_container_NX"}>
            <div className="sidebar_nav_upper">
                <div className="sidebar_nav_heading">
                    {isExpend && (
                        <div className="sidebar_nav_brand">
                            <img src="icons/logo.svg" alt="nav brand"/>
                            <h2>TecnoBurger</h2>
                        </div>
                    )}
                    <button 
                        className={
                            isExpend? "sidebar_hamburger sidebar_hamburger_in" : "sidebar_hamburger sidebar_hamburger_out" 
                        }

                        onClick = {() => setExpendState(!isExpend)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
                <div className="sidebar_nav_menu">
                    {menuItems.map(({text , icon}) => (
                        <a 
                            href="#" 
                            className={isExpend ? "sidebar_menu_items" : "sidebar_menu_items sidebar_menu_items_NX"}
                        >
                            <img src={icon} alt="" srcset="" />
                            {isExpend && <p>{text}</p>}
                            {!isExpend && <div className="sidebar_tooltip">{text}</div>}
                        </a>
                    ))}
                </div>
            </div>
            <div className="sidebar_nav_footer">
                {isExpend && (
                    <div className="sidebar_nav_details">
                        <img src="icons/Avatar 1.svg" alt="Admin"/>
                        <div className="sidebar_nav_info">
                            <p className="sidebar_nav_footer_user_name">Brayan Fernandez</p>
                            <p className="sidebar_nav_footer_user_position">Store Admin</p>
                        </div>
                    </div>
                )}
                <img className="sidebar_logout_icon" src="Sidebar/logout.svg" alt="" />
            </div>
        </div>
    </div>
  );
};

export default Sidebar