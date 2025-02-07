import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { BsCartPlusFill } from "react-icons/bs";
import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";
import toast from "react-hot-toast";

export interface ProdutosProps{
    id: string;
    title: string;
    description: string;
    price: number;
    cover: string;
}

export function Home(){

    const [produtos, setProdutos] = useState<ProdutosProps[]>([]);
    const {AdicionarCarrinho} = useContext(CartContext)

    useEffect(()=>{
        async function getApi(){
            const response = await api.get("/products")
            setProdutos(response.data)
        }

        getApi()

    }, [])

    function handleAdd(item: ProdutosProps ){
        toast.success("Produto adicionado ao carrinho",{
            style: {
                borderRadius: 10,
                backgroundColor: "#121212",
                color: "#FFF"
            }
        })
        AdicionarCarrinho(item)
    }


    return(
        <div>
            <main className="w-full max-w-7xl px-4 mx-auto">
                <h1 className="font-bold text-4xl text-center p-3 mb-4 mt-10">Produtos</h1>
                <div className="grid grid-cols-2 gap-10 lg:grid-cols-5 md:grid-cols-3">
                    {produtos.map((product)=>(
                        <section key={product.id} className="w-full m-3">
                            <img className="w-full rounded-lg max-h-70 mb-2" src={product.cover} alt={product.title} />
                            <p className="font-medium mt-1 mb-2 flex justify-center items-center text-center leading-5">{product.title}</p>
                            <div className="flex gap-2 text-center">
                                <strong>Preço: {product.price.toLocaleString("pt-BR",{
                                    style: "currency",
                                    currency: "BRL"
                                    })}
                                </strong>
                                <button onClick={()=> handleAdd(product)} className="cursor-pointer">
                                    <BsCartPlusFill size={24}/>
                                </button>
                            </div>
                        </section>
                    ))}
                </div>
            </main>
        </div>
    )
}

