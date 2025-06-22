import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import companies from "../data/companies.json";
import faqs from "../data/faq.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { CardDescription } from "@/components/ui/card";
const LandingPage = () => {
  return (
    <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">
            <section className="text-center ">
      <h1 className="flex flex-col items-center justify-center 
  bg-gradient-to-br from-gray-500 via-gray-200 to-white 
  text-transparent bg-clip-text 
  text-4xl font-extrabold sm:text-6xl lg:text-8xl tracking-tighter py-4">
  Embrace Your Very Own Culture,
  <span className="flex items-center gap-2 sm:gap-6">
    Discover The Real "You".{" "}
    <img src="/MCU.png" alt="MCU!" className="h-14 sm:h-24 lg:h-32" />
  </span>
</h1>
<p className="text-gray-300 sm:mt-4 text-xs sm:text-xl">Explore our offerings — enhance your skills, enjoy the journey, and find where you belong.</p>

      </section>
      <div className="flex gap-6 justify-center">
        <Link to={"/jobs"}>
          <Button variant="blue" size="xl">
            Explore Events
          </Button>
        </Link>
        <Link to={"/post-job"}>
          <Button variant="destructive" size="xl">
          Add an Event  
          </Button>
        </Link>
      </div>
      
      <Carousel plugins={[Autoplay({ delay: 1500, stopOnInteraction: true })]} className="w-full py-10">


      <CarouselContent className="flex justify-center gap-5 sm:gap-20 items-center"> 
        {
          companies.map(({name, id, path})=>
          {
            return (
              <CarouselItem key={id} className="basis-1/3 lg:basis-1/6"><img src={path} alt={name} className="h-90  object=contain"/></CarouselItem>
            );
          })
        }
      </CarouselContent>
      
    </Carousel>
      <img src="/socities1.png"  alt="MCU! className="w-full" />

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white shadow-lg hover:shadow-xl transition-shadow duration-300">
  <CardHeader>
    <CardTitle>
    <h1 className="text-4xl font-bold">For the rookies</h1>

      </CardTitle>
    <CardDescription>(specifically the freshers and the sophomores)</CardDescription>
  </CardHeader>
  <CardContent>
  <p className="text-white text-base leading-relaxed font-medium">
  This platform serves as the central hub for all announcements related to events and recruitment opportunities hosted by campus societies. Regular check-ins are recommended to stay informed and involved.
</p>


    
  </CardContent>
  
</Card>
<Card className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 text-white shadow-lg hover:shadow-xl transition-shadow duration-300">
  <CardHeader>
    <CardTitle>
    <h1 className="text-4xl font-bold">For the Co-ords</h1>
      </CardTitle>
    <CardDescription>(This includes everyone involved in leading and managing their respective societies and clubs.)</CardDescription>
    
  </CardHeader>
  <CardContent>
  <p className="text-white text-base leading-relaxed font-medium">
  You are hereby requested to publish all information regarding your events on this page well in advance. The responsibilities entrusted to you must be carried out with diligence and timeliness.
</p>

  </CardContent>
  
</Card>

      </section>
      <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-center text-transparent bg-clip-text bg-gradient-to-br from-teal-400 via-purple-400 to-pink-500 mb-8">
  Frequently Asked Questions
</h2>

      <Accordion type="multiple" className="w-full px-8 mx-auto rounded-2xl border border-gray-700 shadow-lg bg-zinc-900">
  {faqs.map((faq, index) => (
    <AccordionItem
      key={index}
      value={`item-${index + 1}`}
      className="border-b border-gray-700"
    >
      <AccordionTrigger className="text-left text-lg sm:text-xl font-semibold px-4 py-3 hover:text-white transition-all duration-300">
        <div className="flex items-center gap-3">
          <span className="text-teal-400">Q{index + 1}.</span> {faq.question}
        </div>
      </AccordionTrigger>
      <AccordionContent className="px-6 py-4 text-sm sm:text-base text-gray-300 leading-relaxed bg-zinc-800 rounded-b-xl">
        {faq.answer}
      </AccordionContent>
    </AccordionItem>
  ))}
</Accordion>

    </main>
  );
};

export default LandingPage;
