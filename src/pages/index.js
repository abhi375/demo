import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { Helmet } from "react-helmet";
import { CallIcon, ChatIcon, STCIcon } from "../components/icons";

// markup
const IndexPage = () => {
  return (
    <>
      <main className="min-h-screen flex flex-col items-center justify-between">
        <nav className="w-full  p-8 flex items-center justify-center">
          <a
            className="flex"
            href="https://www.stc.com.sa/wps/wcm/connect/english/business/wholesales/wholeSale"
          >
            <STCIcon />
          </a>
        </nav>

        <section className="p-8">
          <div className="max-w-[480px] mx-auto text-center space-y-5">
            <h1 className="font-futura text-5xl font-bold tracking-tighter">
              We're here to help
            </h1>
            <p className="text-[22px] font-light max-w-[56ch] mx-auto text-black/60 leading-normal">
              You can talk to our support Advisor by selecting your preferred
              channel.
            </p>

            <div className="inline-flex items-center space-x-6">
              <button className="w-20 h-20 rounded-full relative bg-white border-2 border-black/10  flex items-center justify-center flex-col space-y-3 text-[#480887] hover:bg-[#480887] hover:text-white transition-all duration-300">
                <div>
                  <ChatIcon />
                </div>
              </button>

              <button className="w-20 h-20 rounded-full relative bg-white border-2 border-black/10  flex items-center justify-center flex-col space-y-3 text-[#480887] hover:bg-[#480887] hover:text-white transition-all duration-300">
                <div>
                  <CallIcon />
                </div>
              </button>
            </div>
          </div>
        </section>

        <footer className="p-8 bg-white text-black/40 text-sm">
          <p>
            Copyright © {new Date().getFullYear()} stc. All rights reserved.
          </p>
        </footer>
      </main>
    </>
  );
};

export default IndexPage;
