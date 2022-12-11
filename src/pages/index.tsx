import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

  return (
    <main className="flex h-screen items-center justify-center text-slate-100">
      <section className="flex max-w-2xl items-center justify-between rounded border p-8">
        <div className="flex flex-col items-center gap-4">
          <div className="h-16 w-16 bg-red-700" />
          <p>First Anime</p>
          <button className="rounded bg-slate-900 p-4">Its Better</button>
        </div>
        <div className="m-8">VS</div>
        <div className="flex flex-col items-center gap-4">
          <div className="h-16 w-16 bg-blue-700" />
          <p>Second Anime</p>
          <button className="rounded bg-slate-900 p-4">Its Better</button>
        </div>
      </section>
    </main>
  );
};

export default Home;
