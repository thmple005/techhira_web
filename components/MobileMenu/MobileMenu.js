import React, { Fragment, useState } from 'react';
import List from "@mui/material/List";
import ListItem from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import Link from "next/link";

const menus = [
    {
        id: 1,
        title: 'Home',
        link: '/',
        // submenu: [
        //     {
        //         id: 11,
        //         title: 'Home style 1',
        //         link: '/'
        //     },
        //     {
        //         id: 12,
        //         title: 'Home style 2',
        //         link: '/home-2'
        //     },
        //     {
        //         id: 13,
        //         title: 'Home style 3',
        //         link: '/home-3'
        //     },
           
        // ]
    },

    {
        id: 6,
        title: 'About',
        link: '/about',
    },
    {
        id: 7,
        title: 'Services',
        link: '#',
        submenu: [
            {
                id: 71,
                title: 'App Development',
                link: '/service-app/app-development',
            },
            {
                id: 72,
                title: 'Web Development',
                link: '/service-web/web-development'
            },
            {
                id: 73,
                title: 'UI/UX Design',
                link: '/service-ui/ui-design'
            },
            {
                id: 74,
                title: 'ecommerce',
                link: '/service-ecommerce/ecommerce'
            },
        ]
    },
    {
        id: 8,
        title: 'Portfolio',
        link: '/project',
        // submenu: [
        //     {
        //         id: 81,
        //         title: 'Portfolio',
        //         link: '/project',
        //     },
        //     {
        //         id: 82,
        //         title: 'Portfolio Single',
        //         link: '/project-single/Product-Design'
        //     },
        // ]
    },
    // {
    //     id: 5,
    //     title: 'Blog',
    //     link: '/blog',
    //     submenu: [
    //         {
    //             id: 51,
    //             title: 'Blog',
    //             link: '/blog'
    //         },
    //         {
    //             id: 52,
    //             title: 'Blog Left sidebar',
    //             link: '/blog-left-sidebar'
    //         },
    //         {
    //             id: 53,
    //             title: 'Blog full width',
    //             link: '/blog-fullwidth'
    //         },
    //         {
    //             id: 54,
    //             title: 'Blog single',
    //             link: '/blog-single/15-Secrets-Of-Digital-Transformation'
    //         },
    //         {
    //             id: 55,
    //             title: 'Blog single Left sidebar',
    //             link: '/blog-single-left-sidebar/15-Secrets-Of-Digital-Transformation'
    //         },
    //         {
    //             id: 56,
    //             title: 'Blog single Left sidebar',
    //             link: '/blog-single-fullwidth/15-Secrets-Of-Digital-Transformation'
    //         },
    //     ]
    // },
    {
        id: 3,
        title: 'Testimonials',
        link: '/testimonials',
        // submenu: [
        //     {
        //         id: 31,
        //         title: 'Testimonials',
        //         link: '/testimonials'
        //     },
        //     {
        //         id: 32,
        //         title: 'Login',
        //         link: '/login'
        //     },
        //     {
        //         id: 33,
        //         title: 'Register',
        //         link: '/register'
        //     },
        //     {
        //         id: 34,
        //         title: '404',
        //         link: '/404'
        //     },
            
        // ]
    },

    // {
    //     id: 88,
    //     title: 'Contact',
    //     link: '/contact',
    // }


]


const MobileMenu = () => {

    const [openId, setOpenId] = useState(0);
    const [menuActive, setMenuState] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div>
            <div className={`mobileMenu ${menuActive ? "show" : ""}`}>
                <div className="menu-close">
                    <div className="clox" onClick={() => setMenuState(!menuActive)}><i className="ti-close"></i></div>
                </div>

                <ul className="responsivemenu">
                    {menus.map((item, mn) => {
                        return (
                            <ListItem className={item.id === openId ? 'active' : null} key={mn}>
                                {item.submenu ?
                                    <Fragment>
                                        <p onClick={() => setOpenId(item.id === openId ? 0 : item.id)}>{item.title}
                                            <i className={item.id === openId ? 'fa fa-angle-up' : 'fa fa-angle-down'}></i>
                                        </p>
                                        <Collapse in={item.id === openId} timeout="auto" unmountOnExit>
                                            <List className="subMenu">
                                                <Fragment>
                                                    {item.submenu.map((submenu, i) => {
                                                        return (
                                                            <ListItem key={i}>
                                                                <Link onClick={ClickHandler} className="active"
                                                                    href={submenu.link}>{submenu.title}</Link>
                                                            </ListItem>
                                                        )
                                                    })}
                                                </Fragment>
                                            </List>
                                        </Collapse>
                                    </Fragment>
                                    : <Link className="active"
                                        href={item.link}>{item.title}</Link>
                                }
                            </ListItem>
                        )
                    })}
                </ul>

            </div>

            <div className="showmenu mobail-menu" onClick={() => setMenuState(!menuActive)}>
                <button type="button" className="navbar-toggler open-btn">
                    <span className="icon-bar first-angle"></span>
                    <span className="icon-bar middle-angle"></span>
                    <span className="icon-bar last-angle"></span>
                </button>
            </div>
        </div>
    )
}

export default MobileMenu;