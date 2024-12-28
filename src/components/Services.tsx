"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
        
      <h1 className=' text-8xl font-bold text-center'>
        PROJECTS
      </h1>
      <Carousel items={cards} />
      
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="/blog.png"
              alt="Macbook mockup from Aceternity UI"
              height="100"
              width="100"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain content-stretch"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "",
    title: "",
    src: "/jobfound.png",
    content: <DummyContent />,
  },
  {
    category: "",
    title: "",
    src: "/vi.png",
    content: <DummyContent />,
  },
  {
    category: "",
    title: "",
    src: "/quick.png",
    content: <DummyContent />,
  },

  {
    category: "",
    title: "",
    src: "/blog.png",
    content: <DummyContent />,
  },
  {
    category: "",
    title: "",
    src: "/quick.png",
    content: <DummyContent />,
  },
  {
    category: "",
    title: "",
    src: "/blog.png",
    content: <DummyContent />,
  },
];
