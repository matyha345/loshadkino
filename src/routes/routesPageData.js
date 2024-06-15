


import Information from "../components/page/Information/Information";
import Application from "../components/page/application/Application";
import Contacts from "../components/page/contacts/Contacts";
import Gallery from "../components/page/gallery/Gallery";

import Home from "../components/page/main/Home";

export const routesPageData = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/application',
        component: Application
    },
    {
        path: '/address',
        component: Contacts
    },
    {
        path: '/information',
        component: Information
    },
    {
        path: '/gallery',
        component: Gallery
    }
]