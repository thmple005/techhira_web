import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { useRouter } from 'next/router'
import blogs from '../../api/blogs'
import BlogSingle from '../../components/BlogDetails/BlogSingle.js'
import Footer from '../../components/footer/Footer';
import Logo from '/public/images/logo-2.svg'
import Phone from '/public/images/telephone.svg'
import CursorMaus from '../../components/CursorMaus/CursorMaus';

const BlogDetails = () => {

    const router = useRouter()

    const BlogDetails = blogs.find(item => item.slug === router.query.slug)

    return (
        <Fragment>
            <Navbar Logo={Logo} telephone={Phone} hclass={"wpo-site-header s3"} />
            <PageTitle pageTitle={BlogDetails?.title} pagesub={'Blog'} />
            <BlogSingle />
            <Footer ftClass={'s2'} />
            <Scrollbar />
            <CursorMaus/>
        </Fragment>
    )
};
export default BlogDetails;