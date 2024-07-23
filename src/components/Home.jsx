import AboutFood from "./AboutFood";
import Blogs from "./Blogs";
import Content from "./Content";
import Context from "./Context";
import MenuCard from "./MenuCard";
import Services from "./Services";
import Testimonials from "./Testimonials";

const Home = () => {
    return(
        <>
        <Context />
        <MenuCard />
        <AboutFood />
        <Services />
        <Content />
        <Testimonials />
        <Blogs />
        
        </>
    )
}

export default Home;