import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const LeftNavbar = () => {
    const [categories, setCategories] = useState([]);
    useEffect(()=> {
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => setCategories(data.data.news_category))
        .catch(error => console.log("ERROR", error))
    }, [])
    return (
        <div>
            <h2 className="font-semibold mb-2">All Categories ({categories.length})</h2>
            <div className="flex flex-col gap-2">
                {
                    categories.map(category => <NavLink to={`/category/${category.category_id}`} key={category.category_id} className="btn bg-base-100 text-gray-400 shadow-none border-none justify-start lg:px-28">{category.category_name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default LeftNavbar;