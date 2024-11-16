import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const LatestNews = () => {
    return (
        <div className="flex gap-2 items-center bg-base-200 p-4">
           <p className="bg-[#D72050] text-base-100 px-3 py-1 mr-5">Latest</p>
            <div className="lg:mr-24">
            <Marquee pauseOnHover={true} speed={100} className="space-x-10">
                <Link to='/news'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, assumenda?</Link>
                <Link to='/news'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, assumenda?</Link>
                <Link to='/news'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, assumenda?</Link>
                <Link to='/news'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, assumenda?</Link>
            </Marquee>
            </div>
        </div>
    );
};

export default LatestNews;