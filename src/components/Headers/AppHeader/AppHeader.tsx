import { memo } from 'react'
import Link from 'next/link'

const AppHeader: React.FC = () => (
    <header>
        <nav>
            <ul>
                <li>
                    <Link href="/app">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/app/search">
                        <a>Search</a>
                    </Link>
                </li>
                <li>
                    <Link href="/app/ssr-profile">
                        <a>Profile</a>
                    </Link>
                </li>
                <li>
                    <Link href="/api/logout">
                        <a>Logout</a>
                    </Link>
                </li>
            </ul>
        </nav>

        <style jsx>
            {`
                    header {
                    padding: 0.2rem;
                    color: #fff;
                    background-color: #333;
                    }
                    nav {
                    max-width: 42rem;
                    margin: 1.5rem auto;
                    }
                    ul {
                    display: flex;
                    list-style: none;
                    margin-left: 0;
                    padding-left: 0;
                    }
                    li {
                    margin-right: 1rem;
                    }
                    li:nth-child(2) {
                    margin-right: auto;
                    }
                    a {
                    color: #fff;
                    text-decoration: none;
                    }
                    button {
                    font-size: 1rem;
                    color: #fff;
                    cursor: pointer;
                    border: none;
                    background: none;
                    }
                `}
        </style>
    </header>
)

export default memo(AppHeader)
