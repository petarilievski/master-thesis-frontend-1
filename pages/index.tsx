import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from "../components/navbar";
import {useState} from "react";
import HomeTab from "../components/homeTab";
import PLCTab from "../components/plcTab";

const Home: NextPage = () => {
    const [activeTab, setActiveTab] = useState(0)
    const [activeRun, setActiveRun] = useState(true)

    return (
        <div>
            <Head>
                <title>Virtual Laboratory</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

           <Navbar activateTab={setActiveTab}  activeTab={activeTab}/>
            <div className={'my-2 mx-4'}>
                {activeTab ==- 0 ? <HomeTab activeRun={activeRun}/> : <PLCTab activateRun={setActiveRun}  activeRun={activeRun}/>}
            </div>
        </div>
    )
}

export default Home
