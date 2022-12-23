import Head from 'next/head';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { useStateContext } from '../contexts/StateContext';

export default function Home() {
  const {darkMode, isSidebarOpen} = useStateContext();
  console.log(darkMode, isSidebarOpen)
  return (
    <div>
      <Head>
        <title>Next App</title>
        <meta name="description" content="NextJs App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${darkMode && 'dark bg-gray-800'} w-full h-screen`}>
          <Header />
         {isSidebarOpen &&  <Sidebar />}
      </div>
    </div>
  )
}
