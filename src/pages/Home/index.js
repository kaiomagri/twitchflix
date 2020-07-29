import React from 'react';

import Menu from '../../components/Menu';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

function Home() {
  return (
    <>
      <Menu/>
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
      />
      {dadosIniciais.categorias.map(item => (
          <Carousel
          key={item.titulo} 
          ignoreFirstVideo
          category={item}
        />
      ))}
      <Footer/>
    </>
  );
}

export default Home;
