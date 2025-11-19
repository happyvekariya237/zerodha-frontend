import React from "react";
import Hero from "./Hero";
import Leftimg from "./Leftimg";
import Rightimg from "./Rightimg";
import Footer from "../Footer";
import Universe from "./Universe";

export default function ProductPage() {
  return (
    <div>
      <Hero />
      <Leftimg
        imageURL={"/media/images/products-kite.png"}
        title={"Kite"}
        description={
          "Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        }
      />
      <Rightimg imageURL={"/media/images/products-console.png"}
        title={"Console"}
        Description={
          "The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        }/>
      <Leftimg imageURL={"/media/images/products-coin.png"}
        title={"Coin"}
        description={
          "Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        } />
      <Rightimg imageURL={"/media/images/api.svg"}
        title={"Kite connect API"}
        Description={
          "Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        }/>
      <Leftimg imageURL={"/media/images/mobile.png"}
        title={"Varsity Mobile"}
        description={
          "An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.."
        }/>
        <Universe/>
    </div>
  );
}
