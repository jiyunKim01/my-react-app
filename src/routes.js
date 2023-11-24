import React from "react";

const Home = React.lazy(() => import("./pages/Page/Home"));
const Iphone = React.lazy(() => import("./pages/Page/Iphone"));
const Flip = React.lazy(() => import("./pages/Page/Flip"));
const Galaxy = React.lazy(() => import("./pages/Page/Galaxy"));


const routes = [
{path: "/", component: Home, name: "Home"},
{path: "/Iphone", component: Home, name: "Iphone"},
{path: "/Flip", component: Home, name: "Flip"},
{path: "/Galaxy", component: Home, name: "Galaxy"},
]

export default routes;