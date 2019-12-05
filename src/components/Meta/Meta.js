import Head from 'next/head';
import { Normalize } from 'styled-normalize';

const Meta = () => (
    <div>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
            <title>Next.js with Auth0</title>
        </Head>
        <Normalize />
        <style jsx global>
            {`
           body {
                margin: 0;
                padding: 0;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
                    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            }

            p {
                line-height: 1.5rem
            }

            .container {
                max-width: 42rem;
                margin: 1.5rem auto;
            }

            .fs_s {
                font-size: 12px
            }

            .fs_m {
                font-size: 14px
            }

            .fs_l {
                font-size: 24px
            }

            .fs_xl {
                font-size: 32px
            }

            .fw_l {
                font-weight: 300;
            }

            .fw_b {
                font-weight: 700;
            }

            .bs_s {
                box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
            }

            .bs_m {
                box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            }

            .bs_l {
                box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
            }

            .bs_xl {
                box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
            }

            .bs_xxl {
                box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
            }

            .br_s {
                border-radius: .125rem;
            }

            .br_m {
                border-radius: .25rem;
            }

            .br_l {
                border-radius: .5rem;
            }

            .br_f {
                border-radius: 9999px;
            }

            .b {
                1px solid #000;
            }
        `}
        </style>
    </div>
);

export default Meta;
