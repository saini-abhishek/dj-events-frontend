import React from 'react'
import Head from "next/head";
import styles from '../styles/Layout.module.css';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ title, description, keywords, children }) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description}/>
                <meta name="keywords" content={keywords} />
            </Head>
            <Header />
            <div className={styles.container}>
                {children} 
            </div>
            <Footer />
        </div>
    )
}

export default Layout;
