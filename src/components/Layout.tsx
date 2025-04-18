import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (

        <div className="">
            <Header setBg={true}/>
            <div className="ssm:mx-[10%] xl:mx-[20%]">
                {children}
            </div>
            <Footer />
        </div>
    );
}