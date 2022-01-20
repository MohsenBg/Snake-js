import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import useSWR from "swr";
import Game from "../components/game/main/game";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Game />
      </div>
    </div>
  );
};

export default Home;
