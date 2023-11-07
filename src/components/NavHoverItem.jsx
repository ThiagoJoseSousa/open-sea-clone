export default function HoverListBtn ({description, onClick, available}){
    return (
    <li> 
        <button className={`nav-hover__btn cursor-pointer ${available ? null : 'unavailable'}`} onClick={onClick ? onClick : undefined}>{description}</button>
    </li>
    )
}