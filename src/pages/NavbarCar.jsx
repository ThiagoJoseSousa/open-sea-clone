import { useOutletContext } from "react-router-dom";
import { v4 } from "uuid";

function CarItem ({itemData, i, cartEvents}){
        return (<div className="car__item">
        <div className="item__img-container">
            <img src={itemData?.img} className="item__img" alt="proposital"/>
        </div>
        <div className="item__data">
            <span className="data__text data__text--title">{itemData?.name}</span>
            <span className="data__text">{itemData?.collection}</span>
            <span className="data__text data__text--uppercase">{itemData?.price} {itemData?.coin}</span>
            <span className="data__text data__text--earnings">Creator earnings</span>
        </div>
        <div className="item__remove"><button className="item__remove-btn" onClick={()=>{
            cartEvents.removeCartItem(i);
        }}>🗑</button></div>    
    </div>)
    }

    //mission:




    //create async items for item page (theres a folder in each collection)

export default function NavbarCar({showCar}) {
    const {carState,cartEvents} = useOutletContext();
    const [carItems, setCarItems] = carState;  

    function getPrice(){
        let price=0; 
        for (let i=0; i<carItems.length; i++){
            price += parseInt(carItems[i].price,10);
        }
        return price
    }


    //where should viewCar state stay? navcontakner, which contasins more jsx buttons in an obj too

    // think on state structure
    // ill need a state to know what items i chose
    //this will be in collections
    //will nav be evoked in coll?
    // totally unrelated. Contextapi is 100x cleaner
    // I got collections state up

    //complete purchase just should send data to firebase like waiting payment from `&{data}`
    return (
        <div className="black">
        <div className="car">
            
            <header className="car__header"> <h4 className="header__title">Your cart</h4> <button className="close-btn" onClick={showCar}>✖</button></header>
            <section className="car__items">
                <div className="items__count"><span>{carItems.length} items</span><span className="cursor-pointer" onClick={()=> setCarItems([])}>Clear all</span></div>
                {!carItems.length && <div className="car__item car__item--empty"><span className="span__center">Add items to get started.</span></div>}
                {
                    (function (){
                        return carItems.map((itemData,i)=>{
                                return <CarItem itemData={itemData} i={i} cartEvents={cartEvents} key={v4()}/>
                        })
                    })()
                }
            </section>
            <footer className="car__buy">
                <div className="items__purchase">
                    <div className="items__price"><span className="price__text">Total price</span><span className="price__total"><div className="price__text">{getPrice()} ETH</div><div className="price__text--dollar"> $____</div></span> </div>
                    <div className="items__payment"></div>
                </div>
                <button className="buy-btn">Complete purchase</button>
                </footer>
        </div>
        </div>
    )
}