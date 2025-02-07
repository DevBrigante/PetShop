import { MdPets } from "react-icons/md";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../pages/Contexts/CartContext";

export function Header(){

    const {quantidadeTotal} = useContext(CartContext)


    return(
        <header className="w-full bg-black text-white">
            <nav className="w-full max-w-7xl flex items-center justify-between mx-auto h-14 px-5">
                <Link to="/" className="font-bold text-2xl hover:opacity-25 transition delay-9">ShopDogs</Link>
                <Link to="/cart" className="relative hover:opacity-25 transition delay-9">
                    <MdPets size={40}/>
                    {quantidadeTotal > 0 && (
                        <span className="rounded-full absolute -top-1 -right-3 w-1 h-3 flex items-center justify-center text-xs text-white font-medium p-2 bg-sky-600">
                            {quantidadeTotal}
                        </span>
                    )}
                </Link>
            </nav>
        </header>
    )
}