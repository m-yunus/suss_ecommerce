import React from "react";
import "./Products.css";
import Star from "../Products/productsimg/Star.png";
import Starhalf from "../Products/productsimg/Starhalf.png";
import Filter from "../Products/productsimg/Filter.png";
import firstpic from "../Products/productsimg/firstpic.jpg";
import scndpic from "../Products/productsimg/scndpic.jpg";
import trdpic from "../Products/productsimg/trdpic.jpg";
import frthpic from "../Products/productsimg/frthpic.jpg";

const Products = () => {
  return (
    <>
      <div className="products">
        <div className="head-title px-10  ">
          <div className="title">
            <h3 className="bst-title">Best Selling </h3>
            <div className="starimg">
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={Starhalf} alt="" />
            </div>
          </div>
          <div className="filter">
            <img className="filter-icon" src={Filter} alt="" />
            <h2 className="filter-text">Filter</h2>
          </div>
        </div>
        <div className="cards gap-5  px-8">
          <img className="cards-img" src={firstpic} alt="" />
          <img className="cards-img" src={scndpic} alt="" />
          <img className="cards-img" src={trdpic} alt="" />
          <img className="cards-img" src={frthpic} alt="" />
        </div>
        <div className="offers-section px-8">
          <div>
            <h1 className="ofr-title">OFFERS</h1>
          </div>
          <div className="image-container">
            <img
              className="ofr-img"
              src="https://thumbs.dreamstime.com/b/collage-cheerful-jumping-multinational-people-air-color-background-panorama-excited-174200583.jpg?w=1200"
              alt=""
            />
            <h3 className="ofr-text">40% OFF</h3>
          </div>
        </div>
        <div className="buy-section px-8">
          <div className="cpns mx-auto">
            <div className="cpn">
              COUPON 1
              <img src="" alt="" />
            </div>
            <div className="cpn ">
              COUPON 2
              <img src="" alt="" />
            </div>
          </div>
          <div className="buy mx-auto">
            <img
              className="buy-img"
              src="https://img.freepik.com/free-photo/pretty-young-stylish-sexy-woman-pink-luxury-dress-summer-fashion-trend-chic-style-sunglasses-blue-studio-background-shopping-holding-paper-bags-talking-mobile-phone-shopaholic_285396-2957.jpg?size=626&ext=jpg&ga=GA1.1.2019463417.1683196046&semt=sph"
              alt=""
            />
            <h2 className="buy-text">BUY 1 GET 1</h2>
          </div>
        </div>
        <div className="collections-cards  px-10">
          <div className="clc-title">
            <h2 className="clc-text">COLLECTIONS</h2>
          </div>
          <div className="clc-card gap-1 mx-auto">
            <img src="https://s3-alpha-sig.figma.com/img/0385/ff38/86f40fefbfdd918125dfd63be7b305f7?Expires=1693785600&Signature=M71hxcHLy-Ofk59vQHs9yVG~AIji8OGsQMUxjVnDnYuIYXfd5DtfEQL-0ZgjqU1BpFh1myFS-MJtSFwT-pLUSvvSOb0CIueNUK09lGQkdZpJDRtPptBNvanpuA~-aNl5izcB45vtyeIFEk9KILHkWazr0KtpY1vjZ9PuHDMYsrEf2XREq-aTI4iwoU67gYPuaCCVTH4pwNXJghjr9ZEBnIPCIAkL2JCYD7wAz5ggmEb~CnuJAQK8fLp4oI2L6idc3ZKcyGVmFszmD06IyKGW2WlwRPXWS8lpSKfsDr8pmUZNS79etawD40zLdMjUmuocZNF6r~KLqCw-NxCA1-HVng__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" className="clc-img" />
            <img src="https://s3-alpha-sig.figma.com/img/30ab/8b97/7b56a02ecd60bd937501bf588a3c51c0?Expires=1693785600&Signature=Sd8dnC-9~UWuImtmDqAeilrIW2ZeoKbpjMOBxv7jXL1~FSGcD1tlA~OroW02YVdqD0qYeG0BM1wSHCx1kCL6~CRg7H7xc341AwZX2jW1osD1TOUYefbn6qUfJPfZ-QBiNXwgse8p1nzwcMRzQBLns-zwP3Sd82uVRgyi~7qfBQZY-Aw8HU89IYS-ZeJHxzg~Ibsdh1qeR9t2qCZ0Ercbxx1wf2jjPUhjiT4Lr6yF5nRb2x2fiZIM3ZNg3tSAVfPQGdC6k50pXaI5XxZRtjxj73cXZlYHQPq8gWMwQKbwEajDqllPvnfn~GgXuSGNQU9hdi9iOQ0YB-uOHUGLMW5dxw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" className="clc-img" />
            <img src="https://s3-alpha-sig.figma.com/img/510b/aa24/728f4dc369084097b32f13f3ab54344f?Expires=1693785600&Signature=i2KCnk~eAuHQ~~9M6Xa~et8n0V93c3jCGqxhvK0vD6OY5M9-xW4scDu0r7fffcdcxVUcSXG4brVObRjdUZPeR08XvF0YjtS5Emd8wxuXlTEzHWBYIk1aHLDhieSUEctvrJ03o6jnucoqtEWLNn8EP8xbCxYDdUOR9U70Rps1O0rYucrXjmmU~yAqXbTyoOQXxvp1M6P6EVFWlwIDvjZh~4EMpZZgWQSq0KuNrkVP3eh3CKG8gQ-not5l0P-FsUhhokOiNOjm90HMNwK1AKSiptu7usqhGBbTqwDZS7UpqvSlX52l2QBdvjex-qzVu25lla4X40lAg0raHuhTKuXYzg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" className="clc-img" />
            <img src="https://s3-alpha-sig.figma.com/img/ad98/5c64/34895e2d2bd8884b267c2e2e02171e5e?Expires=1693785600&Signature=OgFQrEd2rnxqj1FI6-xLiSYpEezl0dx~htwlpGpI5t00kWP7dG2LtKbxsYYJySSn6xWfIH1drBdemzlJ04S2b9CHzY1bT9w9MHB0VWI1jZ-sb~Umc3U2lvSf1qKVXOlbNlugVMvVVxSjJxz42CafGX5TvPwX5pZV2CIXsouqJhW4LPFrbOGKDiyJwTBcSttv-QRXnFnjUZyUXaGLcr91Rh2ken7q342wiqjx~7VDyjYUxIta8RnN46qlMcC8R0dY-4mqG5RMMBJz4SLWqeBGwJ1ddgvqZTCkjk1~1EFE1UHDBSzIuifKAtgTLdqeobG7td-hDkaXpUq6wMYRaaXdkA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" className="clc-img" />
            <img src="https://s3-alpha-sig.figma.com/img/0385/ff38/86f40fefbfdd918125dfd63be7b305f7?Expires=1693785600&Signature=M71hxcHLy-Ofk59vQHs9yVG~AIji8OGsQMUxjVnDnYuIYXfd5DtfEQL-0ZgjqU1BpFh1myFS-MJtSFwT-pLUSvvSOb0CIueNUK09lGQkdZpJDRtPptBNvanpuA~-aNl5izcB45vtyeIFEk9KILHkWazr0KtpY1vjZ9PuHDMYsrEf2XREq-aTI4iwoU67gYPuaCCVTH4pwNXJghjr9ZEBnIPCIAkL2JCYD7wAz5ggmEb~CnuJAQK8fLp4oI2L6idc3ZKcyGVmFszmD06IyKGW2WlwRPXWS8lpSKfsDr8pmUZNS79etawD40zLdMjUmuocZNF6r~KLqCw-NxCA1-HVng__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" className="clc-img" />
            <img src="https://s3-alpha-sig.figma.com/img/30ab/8b97/7b56a02ecd60bd937501bf588a3c51c0?Expires=1693785600&Signature=Sd8dnC-9~UWuImtmDqAeilrIW2ZeoKbpjMOBxv7jXL1~FSGcD1tlA~OroW02YVdqD0qYeG0BM1wSHCx1kCL6~CRg7H7xc341AwZX2jW1osD1TOUYefbn6qUfJPfZ-QBiNXwgse8p1nzwcMRzQBLns-zwP3Sd82uVRgyi~7qfBQZY-Aw8HU89IYS-ZeJHxzg~Ibsdh1qeR9t2qCZ0Ercbxx1wf2jjPUhjiT4Lr6yF5nRb2x2fiZIM3ZNg3tSAVfPQGdC6k50pXaI5XxZRtjxj73cXZlYHQPq8gWMwQKbwEajDqllPvnfn~GgXuSGNQU9hdi9iOQ0YB-uOHUGLMW5dxw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" className="clc-img" />
            <img src="https://s3-alpha-sig.figma.com/img/510b/aa24/728f4dc369084097b32f13f3ab54344f?Expires=1693785600&Signature=i2KCnk~eAuHQ~~9M6Xa~et8n0V93c3jCGqxhvK0vD6OY5M9-xW4scDu0r7fffcdcxVUcSXG4brVObRjdUZPeR08XvF0YjtS5Emd8wxuXlTEzHWBYIk1aHLDhieSUEctvrJ03o6jnucoqtEWLNn8EP8xbCxYDdUOR9U70Rps1O0rYucrXjmmU~yAqXbTyoOQXxvp1M6P6EVFWlwIDvjZh~4EMpZZgWQSq0KuNrkVP3eh3CKG8gQ-not5l0P-FsUhhokOiNOjm90HMNwK1AKSiptu7usqhGBbTqwDZS7UpqvSlX52l2QBdvjex-qzVu25lla4X40lAg0raHuhTKuXYzg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" className="clc-img" />
            <img src="https://s3-alpha-sig.figma.com/img/ad98/5c64/34895e2d2bd8884b267c2e2e02171e5e?Expires=1693785600&Signature=OgFQrEd2rnxqj1FI6-xLiSYpEezl0dx~htwlpGpI5t00kWP7dG2LtKbxsYYJySSn6xWfIH1drBdemzlJ04S2b9CHzY1bT9w9MHB0VWI1jZ-sb~Umc3U2lvSf1qKVXOlbNlugVMvVVxSjJxz42CafGX5TvPwX5pZV2CIXsouqJhW4LPFrbOGKDiyJwTBcSttv-QRXnFnjUZyUXaGLcr91Rh2ken7q342wiqjx~7VDyjYUxIta8RnN46qlMcC8R0dY-4mqG5RMMBJz4SLWqeBGwJ1ddgvqZTCkjk1~1EFE1UHDBSzIuifKAtgTLdqeobG7td-hDkaXpUq6wMYRaaXdkA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" className="clc-img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;