import { ArrowRight } from '@components/icons'
import { Container } from '@components/ui'
import Link from 'next/link'
import React, { FC } from 'react'
import s from './Hero.module.css'
interface HeroProps {
  className?: string
  headline: string
  description: string
}

const Hero: FC<HeroProps> = ({ headline, description }) => {
  return (
    <div className="bg-accent-9 border-b border-t border-accent-2">
      <div className="relative overflow-hidden bg-accent-1">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 bg-accent-1 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
            <svg
              className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-accent-1 lg:block"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <div className="relative px-4 pt-6 sm:px-6 lg:px-8"></div>

            <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 ">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl font-extrabold tracking-tight text-accent-8 sm:mt-5 sm:text-6xl lg:mt-6 xl:text-7xl">
                  <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent text0">
                    Infinite-ish
                  </span>{' '}
                  <span className="block xl:inline">
                    world of possibilities await
                  </span>
                </h1>

                <p className="my-8 text-base sm:text-xl lg:text-lg xl:text-xl">
                  {description}
                </p>

                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="#"
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-accent-1 hover:bg-blue-700 md:py-3 md:px-8 md:text-lg"
                    >
                      Shop All
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="#"
                      className="border-1 flex w-full items-center justify-center rounded-md border border-zinc-500 bg-zinc-700 px-8 py-3 text-base font-medium text-accent-1 hover:bg-zinc-600 md:py-3 md:px-8 md:text-lg"
                    >
                      Request a custom job
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
            src="https://res.cloudinary.com/dqeszrzmc/image/upload/v1666406351/dreamwalker-studios/new-data-services-h0HE-fhx2wg-unsplash_tkpcob.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
