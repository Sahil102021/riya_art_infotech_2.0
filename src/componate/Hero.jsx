import React from 'react'
import { Hero12 } from '../assets/images'
import Button from './ul/button'

const Hero = () => {
  return (
    <div>
       <div className="w-full">
          	<div className="w-full flex flex-col justify-center p-0 sm:p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          		<div className="flex items-center justify-center p-0 sm:p-6 sm:mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          			<img src={Hero12} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
          		</div>
          		<div className="flex flex-col justify-center sm:p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          			<h1 className="font-size-4xl font-bold leading-none sm:text-6xl font-secondary">New Web And App 
          				<span className="dark:text-violet-600"> Develom mate </span> Next Genration
          			</h1>
          			<p className="mt-6 mb-8 text-lg sm:mb-12 font-primary">Dictum aliquam porta in condimentum ac integer
          				<br  className="hidden md:inline lg:hidden font-primary" />turpis pulvinar, est scelerisque ligula sem
          			</p>
          			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
						<Button variant={"simple-blue"} name={"Suspendisse"} link={"/"} />
						<Button variant={"simple-border"} name={"Malesuada"} link={"/"} />
          				
          			</div>
          		</div>
          	</div>
          </div>
    </div>
  )
}

export default Hero
