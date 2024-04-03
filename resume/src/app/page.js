import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BookMarked } from "lucide-react"
import jslogo from '@/assets/js.png'
import gologo from '@/assets/go.png'
import jvlogo from '@/assets/java.png'
import nextjslogo from '@/assets/next-js-logo.png'
import postgre from '@/assets/postgre.png'
import mongo from '@/assets/mongodb-logo.png'
import mysql from '@/assets/mysql-logo.svg'
import redis from '@/assets/redis.png'
import express from '@/assets/express.png'
import springboot from '@/assets/spring-boot-logo.png'
import git from '@/assets/git.png'
import github from '@/assets/github.png'
import mq from '@/assets/rabbitmq.png'
import docker from '@/assets/docker.png'
import aws from '@/assets/aws.png'

import { Button } from "@/components/ui/button"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-16 bg-slate-800">
      <div className=" flex-col justify-around items-center">
      <section className="flex w-full justify-between">
        <h3 className="text-white scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
          Indrafrds <br /> <span className="text-xl lg:text-2xl font-normal">Software Engineer</span> 
        </h3>
        {/* <Image src={owl} width={150}/> */}
        {/* <Avatar>
          <AvatarImage src={owl} alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar> */}
      </section>
      <section className="flex w-full justify-between mt-8">
        <p className="text-white scroll-m-20 text-lg font-normal tracking-tight lg:text-lg">
          A highly enthusiastic tech savvy who writes some codes to craft some magic.
        </p>
      </section>

    <div className="flex justify-start mt-8">
      <Link className="w-full lg:w-52" href={'https://drive.google.com/file/d/1Ka2EnX4GKVn2MOETUrWXl4lQxSMjseir/view?usp=sharing'} target="_blank">
      <Button className="bg-white text-slate-800 w-full lg:w-52">
      <BookMarked className="mr-2 h-4 w-4 text-slate-800" /> Resume
    </Button>
      </Link>

    </div>
      </div>
      

    <section className="flex w-full justify-between mt-24 flex-col min-h-[35vh] lg:min-h-[40vh]">
        <h3 className="text-white scroll-m-20 text-2xl tracking-tight lg:text-3xl font-bold">
          Projects 
        </h3>

        <Accordion type="single" collapsible className="w-full mt-4 text-white">
      <AccordionItem value="item-1" className="border-none">
        <AccordionTrigger className="text-left">Finsoft - Loan Origination System</AccordionTrigger>
        <AccordionContent>
          <p className="font-bold">Description:</p>
          <p className="">A Comprehensive multi-finance dashboard used by underwriting team for managing financing transactions.</p>
          <p className="font-bold mt-4">Role:</p>
          <p className="">Backend Engineer.</p>
          <p className="font-bold mt-4">Tech Stacks:</p>
          <p className="">Typescript, Express.js PostgreSQL, Mongodb, RabbitMq, Redis, Rest API.</p>
          <p className="font-bold mt-4">Url:</p>
          <a href="https://finsoft.id" target="_blank" className="underline">Link</a>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="border-none">
        <AccordionTrigger className="text-left">Flexy - Distribution Management System</AccordionTrigger>
        <AccordionContent>
          <p className="font-bold">Description:</p>
          <p className="">Distribution Management System (DMS) is a Dashboard who used by admin team for managing supply-chain process, such as inventory and stock management, warehouse management, etc.</p>
          <p className="font-bold mt-4">Role:</p>
          <p className="">Lead Backend Engineer.</p>
          <p className="font-bold mt-4">Tech Stacks:</p>
          <p className="">Typescript, Express.js PostgreSQL, Mongodb, RabbitMq, Redis, Rest API.</p>
          <p className="font-bold mt-4">Url:</p>
          <a href="https://flexy.id" target="_blank" className="underline">Link</a>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className="border-none">
        <AccordionTrigger className="text-left">Elog - Delivery and Rent Vehicle Management App</AccordionTrigger>
        <AccordionContent>
        <p className="font-bold">Description:</p>
          <p className="">Provides delivery and rent vehicle services for end-user.</p>
          <p className="font-bold mt-4">Role:</p>
          <p className="">Software Developer.</p>
          <p className="font-bold mt-4">Tech Stacks:</p>
          <p className="">Typescript, Nest.js, MySQL, Next.js, React, Redux, Redis, Rest API.</p>
          <p className="font-bold mt-4">Url:</p>
          <a href="https://dev-customer.elog.co.id/kirim-barang" target="_blank" className="underline">Link</a>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4" className="border-none">
        <AccordionTrigger className="text-left">Toys Stock Management System</AccordionTrigger>
        <AccordionContent>
        <p className="font-bold">Description:</p>
          <p className="">Simple Toys Stock Management Service</p>
          <p className="font-bold mt-4">Role:</p>
          <p className="">Developer.</p>
          <p className="font-bold mt-4">Tech Stacks:</p>
          <p className="">Java, Springboot, Spring Data JPA, Rest API.</p>
          <p className="font-bold mt-4">Url:</p>
          {/* <p  className="underline">Link</p> */}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5" className="border-none">
        <AccordionTrigger className="text-left">TryClothes - Marketplace for Lending and Renting Clothes</AccordionTrigger>
        <AccordionContent>
        <p className="font-bold">Description:</p>
          <p className="">A web-based Marketplace providing services for lending and renting clothes.</p>
          <p className="font-bold mt-4">Role:</p>
          <p className="">Full-Stack Developer.</p>
          <p className="font-bold mt-4">Tech Stacks:</p>
          <p className="">Javascript, Express.js, PostgreSQL, React.js,  Redux, Rest API.</p> 
          <p className="font-bold mt-4">Url:</p>
          <a href="https://try-clothes.web.app/login" target="_blank" className="underline">Link</a>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6" className="border-none">
        <AccordionTrigger className="text-left">Maipren - Social Media App</AccordionTrigger>
        <AccordionContent>
        <p className="font-bold">Description:</p>
          <p className="">Social Media app for gathering friends, and connecting people.</p>
          <p className="font-bold mt-4">Role:</p>
          <p className="">Full-Stack Developer.</p>
          <p className="font-bold mt-4">Tech Stacks:</p>
          <p className="">Javascript, Express.js, PostgreSQL, Vue.js, Vuex, Rest API.</p> 
          <p className="font-bold mt-4">Url:</p>
          <a href="https://maipren.web.app/" target="_blank" className="underline">Link</a>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
      </section>


      <section className="flex w-full justify-between mt-24 flex-col text-white min-h-[35vh] lg:min-h-[40vh]">
        <h3 className="scroll-m-20 text-2xl tracking-tight lg:text-3xl font-bold">
          Technical Skills 
        </h3>
        <div class="grid lg:grid-cols-2 gap-4 mt-4">
          <Card className="bg-slate-800 text-white border-none">
          <CardHeader>
            <CardTitle className="text-xl">Programming Languages</CardTitle>
          </CardHeader>
          <div class="lg:flex justify-around text-center">
            <div className="lg:mt-0 mt-4 text-center flex flex-col justify-center items-center">
              <Image width={50} src={jslogo}/>
              <CardDescription>Javascript</CardDescription>
            </div>
            <div className="lg:mt-0 mt-4 text-center flex flex-col justify-center items-center">
            <Image width={50} src={gologo}/>
            <CardDescription>Golang</CardDescription>
            </div>
            <div className="lg:mt-0 mt-4 text-center flex flex-col justify-center items-center">
            <Image width={50} src={jvlogo}/>
            <CardDescription>Java</CardDescription>
            </div>
          </div>
          <CardFooter>
          </CardFooter>
        </Card>
        <Card className="bg-slate-800 text-white border-none">
          <CardHeader>
            <CardTitle className="text-xl">Databases</CardTitle>
          </CardHeader>
          <div class="lg:flex justify-around text-center">
            <div className="lg:mt-0 mt-4 text-center flex flex-col justify-center items-center">
              <Image width={50} src={postgre}/>
              <CardDescription>PostgreSQL</CardDescription>
            </div>
            <div className="lg:mt-0 mt-4 text-center flex flex-col justify-center items-center">
            <Image width={50} src={mongo}/>
            <CardDescription>MongoDB</CardDescription>
            </div>
            <div className="lg:mt-0 mt-4 text-center flex flex-col justify-center items-center">
            <Image width={50} src={mysql}/>
            <CardDescription>MySQL</CardDescription>
            </div>
            <div className="lg:mt-0 mt-4 text-center flex flex-col justify-center items-center">
            <Image width={80} src={redis}/>
            <CardDescription>Redis</CardDescription>
            </div>
          </div>
        </Card>
        <Card className="bg-slate-800 text-white border-none">
          <CardHeader>
            <CardTitle className="text-xl">Frameworks</CardTitle>
          </CardHeader>
          <div class="lg:flex justify-around text-center">
            <div className="lg:mt-0 mt-4 text-center flex flex-col justify-center items-center">
              <Image width={80} src={nextjslogo}/>
              <CardDescription>Next js</CardDescription>
            </div>
            <div className="lg:mt-0 mt-4 text-center flex flex-col justify-center items-center">
            <Image width={50} src={express}/>
            <CardDescription>Express js</CardDescription>
            </div>
            <div className="lg:mt-0 mt-4 text-center flex flex-col justify-center items-center">
            <Image width={80} src={springboot}/>
            <CardDescription>Springboot</CardDescription>
            </div>
          </div>

        </Card>
        <Card className="bg-slate-800 text-white border-none">
          <CardHeader>
            <CardTitle className="text-xl">Dev Tools</CardTitle>
          </CardHeader>
          <div class="lg:flex justify-around text-center">
            <div className="lg:mt-0 mt-4 text-center flex flex-col justify-center items-center">
              <Image width={50} src={git}/>
              <CardDescription>Git</CardDescription>
            </div>
            <div className="lg:mt-0 mt-4 flex flex-col justify-center items-center">
            <Image width={50} src={github}/>
            <CardDescription>Github</CardDescription>
            </div>
            <div className="lg:mt-0 mt-4 flex flex-col justify-center items-center">
            <Image width={80} src={mq}/>
            <CardDescription>RabbitMq</CardDescription>

            </div>
            <div className="lg:mt-0 mt-4 flex flex-col justify-center items-center">
            <Image width={80} src={docker}/>
            <CardDescription>Docker</CardDescription>
            </div>
          </div>

        </Card>
        </div>
      </section>
  
    </main>
  );
}
