import Head from "next/head";
import Image from "next/image";
import Layout from "../layouts";
import Default from "../layouts/default";
import TopSections from "../sections/home/TopSections";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div className="">
            <Layout.Default>
                <TopSections />
            </Layout.Default>
        </div>
    );
}
