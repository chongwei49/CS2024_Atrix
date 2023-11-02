import React from 'react';

export default function NewsPage() {
  return (
    <div>
      <section className="text-gray-600 body-font relative">
        <div className="container px-12 py-12 mx-auto">
          <div className="flex flex-col text-center w-full mb-4">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-10 text-gray-900">Latest News For Our Products</h1>
          </div>
          <div className="-my-8 divide-y-2 divide-gray-100">
            {newsData.map((newsItem, index) => (
              <div className="py-8 flex flex-wrap md:flex-nowrap" key={index}>
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span className="font-semibold title-font text-gray-700">{newsItem.category}</span>
                  <span className="mt-1 text-gray-500 text-sm">{newsItem.date}</span>
                </div>
                <div className="md:flex-grow">
                  <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{newsItem.title}</h2>
                  <p className="leading-relaxed">{newsItem.description}</p>
                  <a className="text-cyan-600 inline-flex items-center mt-4" href={newsItem.link} rel="noopener noreferrer">Learn More
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const newsData = [
    {
      category: "Technology",
      date: "12 Jun 2023",
      title: "Introducing Our Latest Laptop Model",
      description: "We are thrilled to introduce our latest laptop model, a true masterpiece of technology. This cutting-edge laptop boasts top-notch performance, stunning visuals, and advanced features that will transform the way you work and play. Experience innovation like never before with our new laptop model. Discover more about it by clicking the link below.",
      link: "#",
    },
    {
      category: "Innovation",
      date: "15 Jul 2023",
      title: "Atrix Innovation Awarded Top Honors",
      description: "We are proud to announce that Atrix's commitment to innovation has been recognized with top industry honors and awards. Our dedication to pushing the boundaries of technology and delivering groundbreaking solutions has earned us the highest accolades. Join us in celebrating this achievement and learn more about the innovative strides we are making in the tech world by clicking the link below.",
      link: "#",
    },
    {
      category: "Product Launch",
      date: "20 Aug 2023",
      title: "Unveiling Our New Product Lineup",
      description: "We're thrilled to announce the most anticipated event of the year! Atrix is gearing up to unveil our new product lineup, and it's a game-changer. Get ready for an exciting array of cutting-edge products meticulously designed to elevate your tech experience to a whole new level. From powerful laptops that redefine performance to innovative accessories that make your daily life easier, our new lineup has something for everyone. Stay tuned for the big reveal and be among the first to experience the future of technology. Join us on this journey to discover what's next in the world of innovation.",
      link: "#",
    },
    {
      category: "Tech Trends",
      date: "5 Sep 2023",
      title: "Exploring the Future of AI in Laptops",
      description: "The future of laptops is here, and it's powered by artificial intelligence. In this insightful article, we delve into the world of AI in laptops, exploring how this technology is revolutionizing the way we interact with our devices. Learn about the exciting possibilities AI offers and how Atrix is at the forefront of this technological revolution. Dive into the AI-powered future by clicking the link below.",
      link: "#",
    },
    {
      category: "Community",
      date: "18 Sep 2023",
      title: "Atrix Community Spotlight: Tech Enthusiast of the Month",
      description: "At Atrix, we believe in celebrating our vibrant tech community. In this special feature, we shine the spotlight on one of our extraordinary community members, a true tech enthusiast whose passion for innovation inspires us all. Join us in recognizing their contributions to the world of technology. Discover their journey by clicking the link below.",
      link: "#",
    },
  ];
  