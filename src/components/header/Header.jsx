import React from "react";
import Nav from "./Nav";

const Header = () => {
  return (
    <div className="flex flex-col bg-slate-50">
      <div className="flex flex-col pb-20 w-full bg-white max-md:max-w-full">
        <div className="flex overflow-hidden relative flex-col items-center pt-5 pl-20 w-full min-h-[483px] max-md:pl-5 max-md:max-w-full">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1325615ee7dd60d53abce777147fb1a53be7cc4da74e14ceef82ce8b42061fc8?apiKey=c99fc9926eb64a38b9282bc6d1dcfb9b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1325615ee7dd60d53abce777147fb1a53be7cc4da74e14ceef82ce8b42061fc8?apiKey=c99fc9926eb64a38b9282bc6d1dcfb9b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1325615ee7dd60d53abce777147fb1a53be7cc4da74e14ceef82ce8b42061fc8?apiKey=c99fc9926eb64a38b9282bc6d1dcfb9b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1325615ee7dd60d53abce777147fb1a53be7cc4da74e14ceef82ce8b42061fc8?apiKey=c99fc9926eb64a38b9282bc6d1dcfb9b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1325615ee7dd60d53abce777147fb1a53be7cc4da74e14ceef82ce8b42061fc8?apiKey=c99fc9926eb64a38b9282bc6d1dcfb9b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1325615ee7dd60d53abce777147fb1a53be7cc4da74e14ceef82ce8b42061fc8?apiKey=c99fc9926eb64a38b9282bc6d1dcfb9b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1325615ee7dd60d53abce777147fb1a53be7cc4da74e14ceef82ce8b42061fc8?apiKey=c99fc9926eb64a38b9282bc6d1dcfb9b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1325615ee7dd60d53abce777147fb1a53be7cc4da74e14ceef82ce8b42061fc8?apiKey=c99fc9926eb64a38b9282bc6d1dcfb9b&"
            className="object-cover absolute inset-0 size-full"
            alt="lac"
          />
          <div className="flex relative gap-5 justify-between items-start w-full font-medium text-white max-w-[1213px] max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
            <Nav />
            <div className="flex gap-2.5 items-center">
              <div className="grow self-stretch my-auto text-sm leading-6">
                Contact sales
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5948419154868ffda52eb149fb5754efd6968168a376278e1b104c880d8f889?apiKey=c99fc9926eb64a38b9282bc6d1dcfb9b&"
                className="shrink-0 self-stretch my-auto w-2.5 aspect-square"
                alt="key"
              />
              <div className="flex gap-2.5 self-stretch px-3.5 py-2.5 text-base leading-6 rounded-2xl bg-white bg-opacity-20">
                <div>Sign in </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b387724d78259ac1bcd69ff9c0b6a8e6f90a4009bb3d3164bd9de95270213dc0?apiKey=c99fc9926eb64a38b9282bc6d1dcfb9b&"
                  className="shrink-0 my-auto w-2.5 aspect-square"
                  alt="h"
                />
              </div>
            </div>
          </div>
          <div className="relative z-10 px-px mt-9 mb-0 w-full max-w-[1213px] max-md:mb-2.5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="relative mt-24 text-8xl font-medium tracking-tighter leading-[98px] text-neutral-700 max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-10">
                  Financial
                  <br />
                  infrastructure
                  <br />
                  for the internet
                </div>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f1ba5fe26393ee55d7cd172769e7d9f97862dc6bdd8278ba2efc093c34ac3a07?apiKey=c99fc9926eb64a38b9282bc6d1dcfb9b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1ba5fe26393ee55d7cd172769e7d9f97862dc6bdd8278ba2efc093c34ac3a07?apiKey=c99fc9926eb64a38b9282bc6d1dcfb9b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1ba5fe26393ee55d7cd172769e7d9f97862dc6bdd8278ba2efc093c34ac3a07?apiKey=c99fc9926eb64a38b9282bc6d1dcfb9b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1ba5fe26393ee55d7cd172769e7d9f97862dc6bdd8278ba2efc093c34ac3a07?apiKey=c99fc9926eb64a38b9282bc6d1dcfb9b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1ba5fe26393ee55d7cd172769e7d9f97862dc6bdd8278ba2efc093c34ac3a07?apiKey=c99fc9926eb64a38b9282bc6d1dcfb9b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1ba5fe26393ee55d7cd172769e7d9f97862dc6bdd8278ba2efc093c34ac3a07?apiKey=c99fc9926eb64a38b9282bc6d1dcfb9b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1ba5fe26393ee55d7cd172769e7d9f97862dc6bdd8278ba2efc093c34ac3a07?apiKey=c99fc9926eb64a38b9282bc6d1dcfb9b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1ba5fe26393ee55d7cd172769e7d9f97862dc6bdd8278ba2efc093c34ac3a07?apiKey=c99fc9926eb64a38b9282bc6d1dcfb9b&"
                  className="grow w-full aspect-[0.83] max-md:mt-5 max-md:max-w-full"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-3.5 mb-20 ml-40 max-w-full tracking-wide w-[446px] max-md:mb-10">
          <div className="text-lg font-light leading-7 text-slate-600 max-md:max-w-full">
            Millions of companies of all sizes use Stripe online and in
            <br />
            person to accept payments, send payouts, automate
            <br />
            financial processes, and ultimately grow revenue.
          </div>
          <div className="flex gap-2.5 items-center self-start mt-9 text-sm font-medium leading-6">
            <div className="flex gap-2.5 self-stretch px-3.5 py-3 text-white rounded-2xl bg-sky-950">
              <div>Start now </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d4ffbfcfa4aa5f23110d6577d0fb66b1517a41d8c10865be8adbf7b0bb24e2d?apiKey=c99fc9926eb64a38b9282bc6d1dcfb9b&"
                className="shrink-0 self-start w-2.5 aspect-square"
                alt=""
              />
            </div>
            <div className="self-stretch my-auto text-sky-950">
              Contact sales
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d47ff3a575e911bf1e3606f088d325eac1ff77418c507740dc38573e47a35dbd?apiKey=c99fc9926eb64a38b9282bc6d1dcfb9b&"
              className="shrink-0 self-stretch my-auto w-2.5 aspect-square"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="w-full bg-white min-h-[41px] max-md:max-w-full" />
    </div>
  );
};

export default Header;
