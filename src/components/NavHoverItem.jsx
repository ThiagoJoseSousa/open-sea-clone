export default function HoverListBtn ({description, onClick}){
    return (
    <li> 
        <button className="nav-hover__btn cursor-pointer" onClick={onClick ? onClick : undefined}>{description}</button>
    </li>
    )
}