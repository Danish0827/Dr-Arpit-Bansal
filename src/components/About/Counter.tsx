"use client";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface CountUpProps {
  end: number;
}

const CountUp: React.FC<CountUpProps> = ({ end }) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const duration = 2000; // Total duration of the counting animation in milliseconds
    const frameDuration = 1000 / 60; // Approximately 60 frames per second
    const totalFrames = Math.round(duration / frameDuration);
    const increment = end / totalFrames;

    let currentFrame = 0;

    const timer = setInterval(() => {
      currentFrame++;
      setCount((prevCount) => prevCount + increment);

      if (currentFrame === totalFrames) {
        clearInterval(timer);
        setCount(end); // Ensure it ends exactly at 'end'
      }
    }, frameDuration);

    return () => clearInterval(timer);
  }, [end]);

  return <span>{Math.round(count)}</span>;
};

const Counter: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="px-5 bg-white py-10 md:p-8 lg:px-16 lg:py-12">
      {/* <div className="space-y-2">
        <h2 className="text-center text-2xl lg:text-4xl text-primary">
          Trusted by Thousands
        </h2>
        <p className="text-sm text-center">
          Acharya Shiv has been a trusted name in the yoga community for over a
          decade.
        </p>
      </div> */}
      <section>
        <div className="">
          <div className="flex flex-col gap-5 lg:gap-14 md:flex-row lg:justify-between">
            <div className="w-full lg:w-1/3">
              <div className="font-manrope font-bold text-3xl lg:text-4xl text-primary mb-2 text-center">
                {inView && <CountUp end={5000} />}+
              </div>
              <p className="lg:text-lg text-dark text-center">Happy patients</p>
            </div>
            <div className="w-full lg:w-1/3">
              <div className="font-manrope font-bold text-3xl lg:text-4xl text-primary mb-2 text-center">
                {inView && <CountUp end={4} />}+
              </div>
              <p className="lg:text-lg text-dark text-center">
                Hospital Affiliations
              </p>
            </div>
            <div className="w-full lg:w-1/3">
              <div className="font-manrope font-bold text-3xl lg:text-4xl text-primary mb-2 text-center">
                {inView && <CountUp end={15} />}+
              </div>
              <p className="lg:text-lg text-dark text-center">
                Years of Experience
              </p>
            </div>
            <div className="w-full lg:w-1/3">
              <div className="font-manrope font-bold text-3xl lg:text-4xl text-primary mb-2 text-center">
                {inView && <CountUp end={20} />}+
              </div>
              <p className="lg:text-lg text-dark text-center">
                Publications and Research Done
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Counter;
