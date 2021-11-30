import { Button } from 'antd';
import Link from 'next/link';
import Head from 'next/head';
import React from 'react';

const RedirButton = React.forwardRef(({ onClick, href }, ref) => {
  return (
    <Button href={href} onClick={onClick} ref={ref} type="primary">
      Quotes List
    </Button>
  )
})

export default function Home() {
  return (
    <>
      <Head>
        <title>Programming Quotes</title>
      </Head>
      <Link href="/quotes/" passHref>
        <RedirButton />
      </Link>
      
    </>
  )
}