import MainHeaderContainer from "../pages/MainContainer"
import RankingContainer from "../pages/RankingContainer"
import SlidesContainer from "../pages/SlidesContainer"
import HomeFooter from "../components/HomeFooter"

export default function MainPage (){
    return (
        <>
        <MainHeaderContainer />
        <RankingContainer />
        <SlidesContainer categoryFilter={"Art"}/>
        <SlidesContainer title={"Gaming"} categoryFilter="Gaming"/>
        <HomeFooter />
        </>
    )
}