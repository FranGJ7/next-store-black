import { NextPage } from "next";
import Head from "next/head";
import Header from "../src/components/Header";

const Cart: NextPage = () =>{
    return(
        <>
        <Head>
            <title>Create Next App</title>
            <meta name="description" content="Conheça todos os nossos produtos"/>
            <link rel="stylesheet" href="favicon.ico"/>
        </Head>
        <Header/>
        <h1>
            Seus pedidos
        </h1>
        </>
    )
}

export default Cart