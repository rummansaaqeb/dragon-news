import React from 'react';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';

const HomeLayout = () => {
    return (
        <div className='font-poppins'>
            <header>
                <Header></Header>
                <section className='lg:container md:w-11/12 mx-auto'>
                    <LatestNews></LatestNews>
                </section>
            </header>
            <nav className='lg:container md:w-11/12 mx-auto py-2'>
                <Navbar></Navbar>
            </nav>
            <main className='lg:container md:w-11/12 mx-auto pt-5 grid md:grid-cols-12'>
                <aside className='col-span-3'>Left Navbar</aside>
                <section className='col-span-6'>Main Content</section>
                <aside className='col-span-3'>Right Navbar</aside>
            </main>
        </div>
    );
};

export default HomeLayout;