import { NextPage } from "next";
import { defaultConfig } from "next/dist/server/config-shared";
import Head from "next/head";

const Products: NextPage = () =>{
    return(
        <>
        <Head>
            <title>Create Next App</title>
            <meta name="description" content="Conheça todos os nossos produtos"/>
            <link rel="stylesheet" href="favicon.ico"/>
        </Head>
        <h1>
            Nossos Produtos
        </h1>
        </>
    )
}


export default Products