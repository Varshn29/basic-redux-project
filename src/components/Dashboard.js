import React from "react";
import Carousel from "./Carousel";
import Footer from "./Footer";
import Genres from "./Genres";
import Recommendation from "./Recommendation";

const Dashboard = () => {
    return (
        <React.Fragment>
            <Carousel />
            <Recommendation />
            <Genres />
            <Footer />
        </React.Fragment>
    )
}

export default Dashboard;