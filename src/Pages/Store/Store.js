import React from "react";
import "./Store.css";

const Store = () => {
  return (
    <>
      <div className="header">
        <h5 className="best">
          Best Selling
          <span className="star">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="15"
              viewBox="0 0 44 45"
              fill="none"
            >
              <g clip-path="url(#clip0_43_445)">
                <path
                  d="M21.9915 32.2892L33.0408 39.1687L30.1086 26.2028L39.8707 17.4789L27.0155 16.3539L21.9915 4.12573L16.9674 16.3539L4.1123 17.4789L13.8743 26.2028L10.9422 39.1687L21.9915 32.2892Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_43_445">
                  <rect
                    width="42.91"
                    height="44.2648"
                    fill="white"
                    transform="translate(0.536133 0.437012)"
                  />
                </clipPath>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="15"
              viewBox="0 0 43 45"
              fill="none"
            >
              <g clip-path="url(#clip0_43_433)">
                <path
                  d="M21.4551 32.2892L32.5045 39.1687L29.5723 26.2028L39.3343 17.4789L26.4792 16.3539L21.4551 4.12573L16.4311 16.3539L3.57593 17.4789L13.338 26.2028L10.4058 39.1687L21.4551 32.2892Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_43_433">
                  <rect
                    width="42.9101"
                    height="44.2648"
                    fill="white"
                    transform="translate(0 0.437012)"
                  />
                </clipPath>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="15"
              viewBox="0 0 43 45"
              fill="none"
            >
              <g clip-path="url(#clip0_43_433)">
                <path
                  d="M21.4551 32.2892L32.5045 39.1687L29.5723 26.2028L39.3343 17.4789L26.4792 16.3539L21.4551 4.12573L16.4311 16.3539L3.57593 17.4789L13.338 26.2028L10.4058 39.1687L21.4551 32.2892Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_43_433">
                  <rect
                    width="42.9101"
                    height="44.2648"
                    fill="white"
                    transform="translate(0 0.437012)"
                  />
                </clipPath>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="15"
              viewBox="0 0 43 45"
              fill="none"
            >
              <g clip-path="url(#clip0_43_433)">
                <path
                  d="M21.4551 32.2892L32.5045 39.1687L29.5723 26.2028L39.3343 17.4789L26.4792 16.3539L21.4551 4.12573L16.4311 16.3539L3.57593 17.4789L13.338 26.2028L10.4058 39.1687L21.4551 32.2892Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_43_433">
                  <rect
                    width="42.9101"
                    height="44.2648"
                    fill="white"
                    transform="translate(0 0.437012)"
                  />
                </clipPath>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="16"
              viewBox="0 0 47 48"
              fill="none"
            >
              <g clip-path="url(#clip0_43_449)">
                <path
                  d="M42.6157 18.6659L28.9221 17.4478L23.5704 4.44189L18.2187 17.4675L4.52515 18.6659L14.9239 27.9587L11.8004 41.7702L23.5704 34.442L35.3404 41.7702L32.236 27.9587L42.6157 18.6659ZM23.5704 30.7681V12.4969L26.8271 20.4341L35.169 21.1807L28.8459 26.8389L30.7505 35.2475L23.5704 30.7681Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_43_449">
                  <rect
                    width="45.7086"
                    height="47.1515"
                    fill="white"
                    transform="translate(0.715088 0.512451)"
                  />
                </clipPath>
              </defs>
            </svg>
          </span>
          <div className="filter">
            <button className="filter-btn">
              <span className="ftr-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 90 30"
                  fill="none"
                >
                  <g clip-path="url(#clip0_43_429)">
                    <path
                      d="M26.7831 48.2097H37.4964V42.8531H26.7831V48.2097ZM8.03491 16.0699V21.4266H56.2446V16.0699H8.03491ZM16.0699 34.8182H48.2096V29.4615H16.0699V34.8182Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_43_429">
                      <rect width="60." height="60" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              Filter
            </button>
          </div>
        </h5>
      </div>

      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className=" cards flex justify-between flex-wrap -m-4">
      <div className=" clc-card  lg:w-1/5 md:w-2/5 p-4 w-">
        <a className=" mn-img rounded-2xl block relative h-48  overflow-hidden">
          <img alt="" class="object-cover object-center w-full h-full block" src="https://img.freepik.com/free-photo/young-woman-beautiful-red-dress_1303-17506.jpg?size=626&ext=jpg&ga=GA1.1.2019463417.1683196046&semt=sph"/>
        </a>
       
      </div>
      <div className=" clc-card lg:w-1/5 md:w-2/5 p-4 w-">
        <a className=" mn-img1 block rounded-2xl relative h-48  overflow-hidden">
          <img alt="" class="object-cover object-center w-full h-full block" src="https://img.freepik.com/free-photo/woman-wearing-high-heels-stocking_23-2150261096.jpg?size=626&ext=jpg&ga=GA1.1.2019463417.1683196046&semt=sph"/>
        </a>
       
      </div>
      <div className=" clc-card lg:w-1/5 md:w-2/5 p-4 w-">
        <a className=" mn-img2 block rounded-2xl relative h-48  overflow-hidden">
          <img alt="" class="object-cover object-center w-full h-full block" src="https://img.freepik.com/free-photo/woman-posing-arid-environment-while-wearing-native-african-clothing_23-2150609677.jpg?size=626&ext=jpg&ga=GA1.1.2019463417.1683196046&semt=sph"/>
        </a>
       
      </div>
      <div className=" clc-card lg:w-1/5 md:w-2/5 ms-1 p-4 w-">
        <a className=" mn-img3 block rounded-2xl  relative h-48  overflow-hidden">
          <img alt="" class="object-cover object-center w-full h-full block" src="https://img.freepik.com/premium-photo/fashion-portrait-female-with-crossed-arms-studio-with-stylish-trendy-classy-outfit-smile-happy-young-indian-woman-model-with-style-confidence-isolated-by-gray-background_590464-163835.jpg?size=626&ext=jpg&ga=GA1.1.2019463417.1683196046&semt=sph"/>
        </a>
        
      </div>
      
    </div>
  </div>
</section>
      <div className="offers">
        <h3 className="title">OFFERS</h3>
      </div>
      <div className="ofr-card">
      <section className="text-gray-600 ms-10 body-font">
        <div className="container px-7 py-24 mx- flex flex-wrap">
          <div className="offr-crd lg:w-5/6 mx-auto">
            <div className="ofr flex flex-wrap w-full  py-32 px-10 relative mb-4">
               <img alt="gallery" class="w-full object-cover h-full rounded-2xl object-center block opacity-55 absolute inset-0" src="https://thumbs.dreamstime.com/b/collage-cheerful-jumping-multinational-people-air-color-background-panorama-excited-174200583.jpg?w=1200"></img>
              <div className="text-center relative z-10 w-full">
                <h2 className=" off-text text-2xl text-white  font-normal title-font mb-2">
                  40% OFF
                  
                </h2>
                <p className="leading-relaxed">
                 
                </p>
                <a className="mt-3 text-indigo-500 inline-flex items-center">
                  
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
      <div className="smcards">
        <div className="smcard">
          <div className="cpn-card">
            <img className="cpn-img" src="" alt="" />COUPON 1</div>
          <div className="cpn-card">
            <img src="" alt="" />COUPON 2</div>
          
        </div>
        <div className="by-card">BUY 1 GET 1
          <img src="" alt="" />
        </div>

      </div>



      <div className="collections">
        <h2 className="clction-title">COLLECTIONS</h2>
      </div>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className=" clc-cards flex justify-between flex-wrap -m-4">
      <div className=" clc-card lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className=" clc-img block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://s3-alpha-sig.figma.com/img/0385/ff38/86f40fefbfdd918125dfd63be7b305f7?Expires=1693785600&Signature=M71hxcHLy-Ofk59vQHs9yVG~AIji8OGsQMUxjVnDnYuIYXfd5DtfEQL-0ZgjqU1BpFh1myFS-MJtSFwT-pLUSvvSOb0CIueNUK09lGQkdZpJDRtPptBNvanpuA~-aNl5izcB45vtyeIFEk9KILHkWazr0KtpY1vjZ9PuHDMYsrEf2XREq-aTI4iwoU67gYPuaCCVTH4pwNXJghjr9ZEBnIPCIAkL2JCYD7wAz5ggmEb~CnuJAQK8fLp4oI2L6idc3ZKcyGVmFszmD06IyKGW2WlwRPXWS8lpSKfsDr8pmUZNS79etawD40zLdMjUmuocZNF6r~KLqCw-NxCA1-HVng__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"/>
        </a>
       
      </div>
      <div className=" clc-card lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className=" clc-imgblock relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://s3-alpha-sig.figma.com/img/30ab/8b97/7b56a02ecd60bd937501bf588a3c51c0?Expires=1693785600&Signature=Sd8dnC-9~UWuImtmDqAeilrIW2ZeoKbpjMOBxv7jXL1~FSGcD1tlA~OroW02YVdqD0qYeG0BM1wSHCx1kCL6~CRg7H7xc341AwZX2jW1osD1TOUYefbn6qUfJPfZ-QBiNXwgse8p1nzwcMRzQBLns-zwP3Sd82uVRgyi~7qfBQZY-Aw8HU89IYS-ZeJHxzg~Ibsdh1qeR9t2qCZ0Ercbxx1wf2jjPUhjiT4Lr6yF5nRb2x2fiZIM3ZNg3tSAVfPQGdC6k50pXaI5XxZRtjxj73cXZlYHQPq8gWMwQKbwEajDqllPvnfn~GgXuSGNQU9hdi9iOQ0YB-uOHUGLMW5dxw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"/>
        </a>
       
      </div>
      <div className=" clc-card lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className=" clc-img block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://s3-alpha-sig.figma.com/img/510b/aa24/728f4dc369084097b32f13f3ab54344f?Expires=1693785600&Signature=i2KCnk~eAuHQ~~9M6Xa~et8n0V93c3jCGqxhvK0vD6OY5M9-xW4scDu0r7fffcdcxVUcSXG4brVObRjdUZPeR08XvF0YjtS5Emd8wxuXlTEzHWBYIk1aHLDhieSUEctvrJ03o6jnucoqtEWLNn8EP8xbCxYDdUOR9U70Rps1O0rYucrXjmmU~yAqXbTyoOQXxvp1M6P6EVFWlwIDvjZh~4EMpZZgWQSq0KuNrkVP3eh3CKG8gQ-not5l0P-FsUhhokOiNOjm90HMNwK1AKSiptu7usqhGBbTqwDZS7UpqvSlX52l2QBdvjex-qzVu25lla4X40lAg0raHuhTKuXYzg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"/>
        </a>
       
      </div>
      <div className=" clc-card lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className=" clc-img block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://s3-alpha-sig.figma.com/img/ad98/5c64/34895e2d2bd8884b267c2e2e02171e5e?Expires=1693785600&Signature=OgFQrEd2rnxqj1FI6-xLiSYpEezl0dx~htwlpGpI5t00kWP7dG2LtKbxsYYJySSn6xWfIH1drBdemzlJ04S2b9CHzY1bT9w9MHB0VWI1jZ-sb~Umc3U2lvSf1qKVXOlbNlugVMvVVxSjJxz42CafGX5TvPwX5pZV2CIXsouqJhW4LPFrbOGKDiyJwTBcSttv-QRXnFnjUZyUXaGLcr91Rh2ken7q342wiqjx~7VDyjYUxIta8RnN46qlMcC8R0dY-4mqG5RMMBJz4SLWqeBGwJ1ddgvqZTCkjk1~1EFE1UHDBSzIuifKAtgTLdqeobG7td-hDkaXpUq6wMYRaaXdkA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"/>
        </a>
        
      </div>
      <div className=" clc-card lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="clc-img block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://s3-alpha-sig.figma.com/img/0385/ff38/86f40fefbfdd918125dfd63be7b305f7?Expires=1693785600&Signature=M71hxcHLy-Ofk59vQHs9yVG~AIji8OGsQMUxjVnDnYuIYXfd5DtfEQL-0ZgjqU1BpFh1myFS-MJtSFwT-pLUSvvSOb0CIueNUK09lGQkdZpJDRtPptBNvanpuA~-aNl5izcB45vtyeIFEk9KILHkWazr0KtpY1vjZ9PuHDMYsrEf2XREq-aTI4iwoU67gYPuaCCVTH4pwNXJghjr9ZEBnIPCIAkL2JCYD7wAz5ggmEb~CnuJAQK8fLp4oI2L6idc3ZKcyGVmFszmD06IyKGW2WlwRPXWS8lpSKfsDr8pmUZNS79etawD40zLdMjUmuocZNF6r~KLqCw-NxCA1-HVng__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"/>
        </a>
       
      </div>
      <div className="clc-card lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="clc-img block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://s3-alpha-sig.figma.com/img/30ab/8b97/7b56a02ecd60bd937501bf588a3c51c0?Expires=1693785600&Signature=Sd8dnC-9~UWuImtmDqAeilrIW2ZeoKbpjMOBxv7jXL1~FSGcD1tlA~OroW02YVdqD0qYeG0BM1wSHCx1kCL6~CRg7H7xc341AwZX2jW1osD1TOUYefbn6qUfJPfZ-QBiNXwgse8p1nzwcMRzQBLns-zwP3Sd82uVRgyi~7qfBQZY-Aw8HU89IYS-ZeJHxzg~Ibsdh1qeR9t2qCZ0Ercbxx1wf2jjPUhjiT4Lr6yF5nRb2x2fiZIM3ZNg3tSAVfPQGdC6k50pXaI5XxZRtjxj73cXZlYHQPq8gWMwQKbwEajDqllPvnfn~GgXuSGNQU9hdi9iOQ0YB-uOHUGLMW5dxw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"/>
        </a>
        
      </div>
      <div className="clc-card lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="clc-img block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://s3-alpha-sig.figma.com/img/510b/aa24/728f4dc369084097b32f13f3ab54344f?Expires=1693785600&Signature=i2KCnk~eAuHQ~~9M6Xa~et8n0V93c3jCGqxhvK0vD6OY5M9-xW4scDu0r7fffcdcxVUcSXG4brVObRjdUZPeR08XvF0YjtS5Emd8wxuXlTEzHWBYIk1aHLDhieSUEctvrJ03o6jnucoqtEWLNn8EP8xbCxYDdUOR9U70Rps1O0rYucrXjmmU~yAqXbTyoOQXxvp1M6P6EVFWlwIDvjZh~4EMpZZgWQSq0KuNrkVP3eh3CKG8gQ-not5l0P-FsUhhokOiNOjm90HMNwK1AKSiptu7usqhGBbTqwDZS7UpqvSlX52l2QBdvjex-qzVu25lla4X40lAg0raHuhTKuXYzg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"/>
        </a>
       
      </div>
      <div className="clc-card lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="clc-img block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://s3-alpha-sig.figma.com/img/ad98/5c64/34895e2d2bd8884b267c2e2e02171e5e?Expires=1693785600&Signature=OgFQrEd2rnxqj1FI6-xLiSYpEezl0dx~htwlpGpI5t00kWP7dG2LtKbxsYYJySSn6xWfIH1drBdemzlJ04S2b9CHzY1bT9w9MHB0VWI1jZ-sb~Umc3U2lvSf1qKVXOlbNlugVMvVVxSjJxz42CafGX5TvPwX5pZV2CIXsouqJhW4LPFrbOGKDiyJwTBcSttv-QRXnFnjUZyUXaGLcr91Rh2ken7q342wiqjx~7VDyjYUxIta8RnN46qlMcC8R0dY-4mqG5RMMBJz4SLWqeBGwJ1ddgvqZTCkjk1~1EFE1UHDBSzIuifKAtgTLdqeobG7td-hDkaXpUq6wMYRaaXdkA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"/>
        </a>
       
      </div>
    </div>
  </div>
</section>

      
    </>
  );
};

export default Store;
