import Image from "next/image";
import banner from "@/public/background.jpeg";
import Navigation from "@/components/Navigation";
import Typography from "@/components/ui/typography";
import Card from "@/components/ui/Card";

export default function Home() {
  return (
    <main className="flex justify-center items-center min-h-screen p-8">
      <div className="relative flex container w-full min-h-[800px] xl:max-h-[1000px] bg-zinc-100 p-4 rounded-3xl overflow-hidden">
        {/* <div className="absolute top-0 left-0 right-0 h-[20%] ">
          <Image
            src={banner}
            alt="Banner image"
            fill
            objectFit="cover"
            objectPosition="top"
          />
        </div> */}
        <Navigation />
        <div className="flex-[3] pt-28 px-20">
          <div className="mb-8">
            <Typography variant="h3">Dashboard</Typography>
          </div>
          <div className="grid grid-rows-1 grid-cols-1 lg:grid-cols-2 gap-20 flex-[4]">
            <div>
              <Card />
            </div>
            <div>02</div>
          </div>
        </div>
      </div>
    </main>
  );
}
