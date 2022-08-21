import Footer from '@/layouts/part/Footer';
import Header from '@/layouts/part/Header';

const Layout = ({ children }) => {
    return (
        <>
            <div>
                <Header/>
                    {children}
                <Footer/>
            </div>
        </>
    )
}

export default Layout;