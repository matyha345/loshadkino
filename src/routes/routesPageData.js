


import Information from "../components/page/Information/Information";
import Application from "../components/page/application/Application";
import Contacts from "../components/page/contacts/Contacts";

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
    }
]