import Footer from "../containers/Footer.tsx";
import Header from "../containers/Header.tsx";

export default function NotFoundPage() {
    return (
        <>
            <Header/>
            <div className="container mx-auto  flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold">404 Not Found</h1>
                <p>Sorry, the page you are looking for does not exist.</p>
            </div>
            <Footer/>
        </>
    );
}