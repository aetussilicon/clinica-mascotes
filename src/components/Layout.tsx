import { LayoutGroup } from "framer-motion";
import Header from "./Header";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (

        <div className="">
            <Header setBlackText={true}/>
            <div className="ssm:mx-[10%] xl:mx-[20%]">

            </div>
        </div>
    );
}