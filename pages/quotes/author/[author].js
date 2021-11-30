import { Table, Typography } from 'antd';
import Head from 'next/head';

export default function Author({author}) {
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: 'Author',
            dataIndex: 'author',
            key: 'author',
        },
        {
            title: 'Quote',
            dataIndex: 'en',
            key: 'en'
        }
    ]

    return (
        <>
            <Head>
                <title>Quotes of</title>
            </Head>
            <Table columns={columns} dataSource={author} rowKey='id'/>
        </>
    )
}

export async function getStaticPaths() {
    const response = await fetch('https://programming-quotes-api.herokuapp.com/Quotes', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const quotes = await response.json()
    
    const paths = quotes.map((quote) =>({
        params: {author: quote.author.toString()}
    }))

    return { paths, fallback: false }
}

export async function getStaticProps({params}) {
    const response = await fetch(`https://programming-quotes-api.herokuapp.com/Quotes/author/${params.author}`);
    const author = await response.json();

    return { props: {author} }
}