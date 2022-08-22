import React from "react";
import Head from 'next/head';
import Script from 'next/script';
import { LocalesData } from "../../components/Languages";
import Sidebar from "../../components/Sidebar";
//import Menu from "./components/Menu";
import Home from "../../scenes/Home";

export async function getStaticPaths() {
  const paths = [];
  for (const locale of ['en', 'fr']) {
      paths.push({params: {locale}})
  }

  return {paths, fallback: false};
}

export async function getStaticProps({params: {locale}}) {
  return LocalesData[locale]().then((translations)=>{
    return {
      props: {translations : translations.default, locale, locales: Object.keys(LocalesData)}
    };
  });
  
}

export default function Index({translations, locale, locales}) {
  return (
    <main className="main">
        <Head>
            <title>Soilhat MOHAMED - {translations["resume"]}</title>
            {
              locales.map((other_locale)=>{
                if (other_locale !== locale){
                  return <link rel="alternate" key={locale} hrefLang={other_locale} href={"/"+other_locale} />
                }
                return <link key={locale}/>
              })
            }
        </Head>
        <Script src="https://kit.fontawesome.com/bbc78d32c1.js"></Script>
      <div className="container gutter-top">
        <div className="row">
            {/*<FlagSelection/>*/}
          <aside className="col-12 col-md-12 col-xl-3">
            <Sidebar lang={translations}/>
          </aside>
          <div className="col-12 col-md-12 col-xl-9">
            <div className="box shadow pb-0">
            <Home lang={translations}/>
              {/*<Menu/>
              <Routes>
                <Route path="/"element={<Home />}/>
              </Routes>*/}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}