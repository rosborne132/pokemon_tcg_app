import Head from 'next/head'
import { Normalize } from 'styled-normalize'

const Meta: React.FC = () => (
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

            p { line-height: 1.5rem; }

            .container {
                max-width: 42rem;
                margin: 1.5rem auto;
            }

            .fs_s { font-size: 12px; }
            .fs_m { font-size: 14px; }
            .fs_l { font-size: 24px; }
            .fs_xl { font-size: 32px; }

            .fw_l { font-weight: 300; }
            .fw_b { font-weight: 700; }

            .bs_s { box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06); }
            .bs_m { box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); }
            .bs_l { box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); }
            .bs_xl { box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); }
            .bs_xxl { box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); }

            .br_s { border-radius: .125rem; }

            .br_m { border-radius: .25rem; }

            .br_l { border-radius: .5rem; }

            .br_f { border-radius: 9999px; }

            .b { 1px solid #000; }

            .p_1: { padding: 0.25rem; }
            .p_2: { padding: 0.5rem; }
            .p_3: { padding: 0.75rem; }
            .p_4: { padding: 1rem; }
            .p_5: { padding: 1.25rem; }
            .p_6: { padding: 1.5rem; }
            .p_8: { padding: 2rem; }
            .p_10: { padding: 2.5rem; }

            .pt_1: { padding-top: 0.25rem; }
            .pt_2: { padding-top: 0.5rem; }
            .pt_3: { padding-top: 0.75rem; }
            .pt_4: { padding-top: 1rem; }
            .pt_5: { padding-top: 1.25rem; }
            .pt_6: { padding-top: 1.5rem; }
            .pt_8: { padding-top: 2rem; }
            .pt_10: { padding-top: 2.5rem; }

            .pb_1: { padding-bottom: 0.25rem; }
            .pb_2: { padding-bottom: 0.5rem; }
            .pb_3: { padding-bottom: 0.75rem; }
            .pb_4: { padding-bottom: 1rem; }
            .pb_5: { padding-bottom: 1.25rem; }
            .pb_6: { padding-bottom: 1.5rem; }
            .pb_8: { padding-bottom: 2rem; }
            .pb_10: { padding-bottom: 2.5rem; }

            .pr_1: { padding-right: 0.25rem; }
            .pr_2: { padding-right: 0.5rem; }
            .pr_3: { padding-right: 0.75rem; }
            .pr_4: { padding-right: 1rem; }
            .pr_5: { padding-right: 1.25rem; }
            .pr_6: { padding-right: 1.5rem; }
            .pr_8: { padding-right: 2rem; }
            .pr_10: { padding-right: 2.5rem; }

            .pl_1: { padding-left: 0.25rem; }
            .pl_2: { padding-left: 0.5rem; }
            .pl_3: { padding-left: 0.75rem; }
            .pl_4: { padding-left: 1rem; }
            .pl_5: { padding-left: 1.25rem; }
            .pl_6: { padding-left: 1.5rem; }
            .pl_8: { padding-left: 2rem; }
            .pl_10: { padding-left: 2.5rem; }

            .py_1: { padding: 0.25rem 0; }
            .py_2: { padding: 0.5rem 0; }
            .py_3: { padding: 0.75rem 0; }
            .py_4: { padding: 1rem 0; }
            .py_5: { padding: 1.25rem 0; }
            .py_6: { padding: 1.5rem 0; }
            .py_8: { padding: 2rem 0; }
            .py_10: { padding: 2.5rem 0; }

            .px_1: { padding: 0 0.25rem; }
            .px_2: { padding: 0 0.5rem; }
            .px_3: { padding: 0 0.75rem; }
            .px_4: { padding: 0 1rem; }
            .px_5: { padding: 0 1.25rem; }
            .px_6: { padding: 0 1.5rem; }
            .px_8: { padding: 0 2rem; }
            .px_10: { padding: 0 2.5rem; }

            .m_1: { margin: 0.25rem; }
            .m_2: { margin: 0.5rem; }
            .m_3: { margin: 0.75rem; }
            .m_4: { margin: 1rem; }
            .m_5: { margin: 1.25rem; }
            .m_6: { margin: 1.5rem; }
            .m_8: { margin: 2rem; }
            .m_10: { margin: 2.5rem; }

            .mt_1: { margin-top: 0.25rem; }
            .mt_2: { margin-top: 0.5rem; }
            .mt_3: { margin-top: 0.75rem; }
            .mt_4: { margin-top: 1rem; }
            .mt_5: { margin-top: 1.25rem; }
            .mt_6: { margin-top: 1.5rem; }
            .mt_8: { margin-top: 2rem; }
            .mt_10: { margin-top: 2.5rem; }

            .mb_1: { margin-bottom: 0.25rem; }
            .mb_2: { margin-bottom: 0.5rem; }
            .mb_3: { margin-bottom: 0.75rem; }
            .mb_4: { margin-bottom: 1rem; }
            .mb_5: { margin-bottom: 1.25rem; }
            .mb_6: { margin-bottom: 1.5rem; }
            .mb_8: { margin-bottom: 2rem; }
            .mb_10: { margin-bottom: 2.5rem; }

            .mr_1: { margin-right: 0.25rem; }
            .mr_2: { margin-right: 0.5rem; }
            .mr_3: { margin-right: 0.75rem; }
            .mr_4: { margin-right: 1rem; }
            .mr_5: { margin-right: 1.25rem; }
            .mr_6: { margin-right: 1.5rem; }
            .mr_8: { margin-right: 2rem; }
            .mr_10: { margin-right: 2.5rem; }

            .ml_1: { margin-left: 0.25rem; }
            .ml_2: { margin-left: 0.5rem; }
            .ml_3: { margin-left: 0.75rem; }
            .ml_4: { margin-left: 1rem; }
            .ml_5: { margin-left: 1.25rem; }
            .ml_6: { margin-left: 1.5rem; }
            .ml_8: { margin-left: 2rem; }
            .ml_10: { margin-left: 2.5rem; }

            .my_1: { margin: 0.25rem 0; }
            .my_2: { margin: 0.5rem 0; }
            .my_3: { margin: 0.75rem 0; }
            .my_4: { margin: 1rem 0; }
            .my_5: { margin: 1.25rem 0; }
            .my_6: { margin: 1.5rem 0; }
            .my_8: { margin: 2rem 0; }
            .my_10: { margin: 2.5rem 0; }

            .mx_1: { margin: 0 0.25rem; }
            .mx_2: { margin: 0 0.5rem; }
            .mx_3: { margin: 0 0.75rem; }
            .mx_4: { margin: 0 1rem; }
            .mx_5: { margin: 0 1.25rem; }
            .mx_6: { margin: 0 1.5rem; }
            .mx_8: { margin: 0 2rem; }
            .mx_10: { margin: 0 2.5rem; }

            .bc_p: { background-color: #3490DC; }
            .bc_s: { background-color: #4DC0B5; }
            .bc_w: { background-color: #FFED4A; }
            .bc_d: { background-color: #E3342F; }

            .tc_p: { color: #3490DC; }
            .tc_s: { color: #4DC0B5; }
            .tc_w: { color: #FFED4A; }
            .tc_d: { color: #E3342F; }

            .o_0: {	opacity: 0; }
            .o_25: { opacity: .25; }
            .o_50: { opacity: .5; }
            .o_75: { opacity: .75; }
            .o_100: { opacity: 1; }
        `}
        </style>
    </div>
)

export default Meta
