import { useContext } from "react"
import { CartContext } from "../Contexts/CartContext"
import { Link } from 'react-router-dom'
import { RiDeleteBin5Fill } from "react-icons/ri";



export function Cart(){

    const {cart, total, handleRemove, AdicionarCarrinho, handleDelete} = useContext(CartContext)



    return(
        <div className="w-full max-w-7xl mx-auto">
            <h1 className="font-medium text-2xl text-center mt-3">Meu carrinho:</h1>
            {cart.length === 0 && (
                <div className="flex flex-col items-center justify-center">
                    <span className="font-medium">Ops... O seu carrinho está vazio!</span>
                    <Link to="/" className="bg-slate-600 cursor-pointer my-3 rounded p-1 px-3 text-white font-medium">Acessar os produtos</Link>
                </div>
            )}
            {cart.map((item)=>(
                <section key={item.id} className="flex items-center px-3 justify-between border-b-2 border-slate-200">
                    <img src={item.cover} alt={item.title} className="w-28 mb-3" />
                    <strong>
                        {Number(item.price).toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                        })}
                    </strong>
                    <div className="flex gap-2">
                        <button onClick={()=> handleRemove(item)} className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center cursor-pointer">-</button>
                        <span>{item.quantidade}</span>
                        <button onClick={()=> AdicionarCarrinho(item)} className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center cursor-pointer">+</button>
                    </div>
                    <strong className="float-right">Subtotal: {item.total.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL"
                    })}</strong>
                </section>
            ))}
            {cart.length !== 0 && (
                <div className="flex gap-3">
                    <p className="font-bold mt-4">Total: {total}</p>
                    <button onClick={()=> handleDelete()} className="cursor-pointer">
                        <RiDeleteBin5Fill size={24} className="mt-4"/>
                    </button>
                    
                </div>
                

            ) }
            
        </div>
    )
}