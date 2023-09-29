import MainHeaderContainer from "../components/MainContainer"
import RankingContainer from "../components/RankingContainer"
import SlidesContainer from "../components/SlidesContainer"
import HomeFooter from "../components/HomeFooter"
import { Link } from "react-router-dom"

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