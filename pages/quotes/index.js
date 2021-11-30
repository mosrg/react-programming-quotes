import { Button, Table, Typography } from 'antd';
import Head from 'next/head';
import { render } from 'react-dom';

const { Title } = Typography;

export default function QuotesList({quotes}) {
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
            render: author => <a href={`/quotes/author/${encodeURIComponent(author)}`}>{author}</a>
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
                <title>Quotes List</title>
            </Head>
            <Title level={3}>
                Quotes of well-known computer scientists, programmers, scientists, and other public figures.
            </Title>
            <Table columns={columns} dataSource={quotes} rowKey='id'/>
        </>
    )
}

export async function getStaticProps() {
    const response = await fetch("https://programming-quotes-api.herokuapp.com/Quotes", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const quotes = await response.json();

    return {
        props: {
            quotes
        }
    }
}