import { createContext, ReactNode, useState } from "react";
import { ProdutosProps } from '../Home/index'

interface CartContextDataProps{
    cart: CartProps[];
    quantidadeTotal: number;
    total: string;
    AdicionarCarrinho: (newItem: ProdutosProps) => void;
    handleRemove: (product: CartProps) => void;
    handleDelete: () => void;
}

interface CartProps{
    id: string;
    title: string;
    description: string;
    price: number;
    cover: string;
    total: number;
    quantidade: number;
}

interface CartProviderProps{
    children: ReactNode;
}



export const CartContext = createContext<CartContextDataProps>({} as CartContextDataProps)


function CartProvider({children}: CartProviderProps){

    const [cart, SetCart] = useState<CartProps[]>([])
    const [total, setTotal] = useState("")

    function AdicionarCarrinho(newItem: ProdutosProps){
        const indexEncontrado = cart.findIndex(item => item.id === newItem.id)

        if(indexEncontrado !== -1){
            const cartList = cart;

            cartList[indexEncontrado].quantidade += 1;
            cartList[indexEncontrado].total = cartList[indexEncontrado].quantidade * cartList[indexEncontrado].price;


            SetCart(cartList)
            totalResultCart(cartList)
            return;
        }

        const notExist = {
            ...newItem,
            quantidade: 1,
            total: newItem.price
        }

        SetCart((products) => [...products, notExist])
        totalResultCart([...cart, notExist])

    }

    function totalResultCart(items:CartProps[]){

        const result = items.reduce((acumulador, itemAtual)=>{
            return acumulador + itemAtual.total

        }, 0)

        const formated = result.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })

        setTotal(formated)
    }


    function handleRemove(product: CartProps){
        const indexEncontrado = cart.findIndex(item => item.id === product.id)

        if(cart[indexEncontrado].quantidade > 1){
            const cartList = cart;

            cartList[indexEncontrado].quantidade -= 1;
            cartList[indexEncontrado].total -= cartList[indexEncontrado].price;

            SetCart(cartList)
            totalResultCart(cartList)
            return;
        }

        const removeItem = cart.filter(item => item.id !== product.id)
        SetCart(removeItem)
        totalResultCart(removeItem)
        
    }

    function handleDelete(){
        SetCart([])
        setTotal("")
    }

    return(
        <CartContext.Provider value={{ quantidadeTotal: cart.length, cart, total, AdicionarCarrinho, handleRemove, handleDelete}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider