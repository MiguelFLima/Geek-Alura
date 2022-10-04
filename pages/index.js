import Head from 'next/head';
import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';
import Footer from '../components/Footer/Footer';
import Dono from '../components/Dono/Dono';
import SessaoSW from '../components/sessaoSW/SessaoSW';
import SessaoConsoles from '../components/sessaoConsoles/SessaoConsoles';
import SessaoDiversos from '../components/sessaoDiversos/Diversos';


export default function Home() {
  return (
    <div>
      <Head>
        <title>E - Geek | Store</title>
      </Head>

      <Header isInTheLoginPage={false} />
      <Banner />

      <SessaoSW />
      <SessaoConsoles />
      <SessaoDiversos />

      <Footer />

      <Dono />
    </div>
  )
}
