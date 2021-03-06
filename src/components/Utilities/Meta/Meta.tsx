import { memo } from 'react'
import Head from 'next/head'
import '../../../styles/index.css'

const Meta: React.FC = (): JSX.Element => (
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>TCG Deck Builder</title>
    </Head>
)

export default memo(Meta)
