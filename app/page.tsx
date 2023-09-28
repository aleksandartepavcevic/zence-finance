import Image from "next/image";
import banner from "@/public/background.jpeg";
import Navigation from "@/components/Navigation";
import Typography from "@/components/ui/typography";
import PaymentCard from "@/components/PaymentCard";
import InternetPaymentLimit from "@/components/InternetPaymentLimit";
import Report from "@/components/Report";
import LatestSpendings from "@/components/LatestSpendings";

export default function Home() {
  return (
    <>
      <div className="mb-8">
        <Typography variant="h3">Dashboard</Typography>
      </div>
      <div className="grid grid-rows-1 grid-cols-1 lg:grid-cols-2 gap-20 flex-[4]">
        <div className="flex flex-col gap-6">
          <PaymentCard />
          <InternetPaymentLimit />
          <div className="flex gap-4">
            <Report label="Income" />
            <Report label="Spendings" />
          </div>
          <LatestSpendings />
        </div>
        <div>02</div>
      </div>
    </>
  );
}
