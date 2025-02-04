import TopHeader from "./TopHeaderComponent/TopHeader";
import MainHeader from "./MainHeader/MainHeader";

export default function Header() {
    return (
        <div id="header-wrap">
            <TopHeader />
            <MainHeader />
        </div>
    );
}