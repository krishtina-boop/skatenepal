import ContactForm from "@/components/contact-us/contact-form";
import ContactInfo from "@/components/contact-us/contact-info";
// import HeroSection from '@/components/shared/hero-section';
// import { FadeUp } from "@/components/shared/scroll-animation";
import NavSection from "@/components/homepage/nav-section";

export default function Contact() {
  return (
    <>
      <NavSection />
      <div className="peer/newsletter bg-white py-20 xl:py-24">
        <div className="container m-auto">
          <div className="mb-8 grid grid-cols-12 rounded-xl lg:mb-24 lg:bg-white lg:shadow-card">
            <div className="order-2 col-span-full lg:order-1 lg:col-span-5">
              <ContactInfo />
            </div>
            <div className="order-1 col-span-full lg:order-2 lg:col-span-7">
              <ContactForm />
            </div>
          </div>
          <div>
            {/* <Image
              src={currentAddress}
              alt="current address"
              className="w-full object-contain md:object-cover"
            /> */}

            <div className="">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d441.6211852793075!2d85.24438769487564!3d27.687338085470095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb234dd08516d7%3A0x66a07db312408631!2sSano%20Mandir%20Gurjudhara!5e0!3m2!1sen!2snp!4v1744714956742!5m2!1sen!2snp"
                width="100%"
                height="480"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-80 rounded-xl md:h-[480px]"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
