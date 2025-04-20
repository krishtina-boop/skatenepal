"use client";

import Link from "next/link";
import { useRef } from "react";
import { useFormStatus } from "react-dom";

// import { useToast } from "@/hooks/use-toast";
// import { contactUs } from "@/lib/actions";
import { cn } from "@/lib/utils";

import Checkbox from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  const ref = useRef<HTMLFormElement>(null);
  //   const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
    const formData = new FormData(e.target as HTMLFormElement);

    const fullName = formData.get("fullName");
    const email = formData.get("email") as string | null;
    const phone = formData.get("phone");
    const message = formData.get("message");
    console.log(fullName, email, phone, message);

    fetch("/api/emails", {
      method: "POST",
      body: JSON.stringify({ fullName, email, phone, message }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        console.log("SUCCESS", data);
        // return toast({
        //   title: "Success",
        //   description: "Message sent successfully",
        //   variant: "default",
        // });
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      ref={ref}
      className="w-full pb-14 md:order-2 lg:px-12 lg:pt-9"
      //   action={handleSubmit}
    >
      <div className="mb-3 grid grid-cols-1 gap-3 lg:gap-8">
        <div className="space-y-1.5">
          <label
            htmlFor="fullName"
            className="text-xs font-semibold text-gray-500 lg:text-sm"
          >
            Full Name <span className="text-red-500">*</span>
          </label>
          <Input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Enter your first name"
            required
          />
        </div>
        <div className="space-y-1.5">
          <label
            htmlFor="email"
            className="text-xs font-semibold text-gray-500 lg:text-sm"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="space-y-1.5">
          <label
            htmlFor="phone"
            className="text-xs font-semibold text-gray-500 lg:text-sm"
          >
            Phone Number
          </label>
          <Input
            type="text"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            inputMode="numeric"
          />
        </div>
        <div className="space-y-1.5">
          <label
            htmlFor="message"
            className="text-xs font-semibold text-gray-500 lg:text-sm"
          >
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            className="w-full resize-none rounded-md border border-gray-100 bg-white px-3.5 py-2.5 pl-3.5 pt-2.5 outline-none placeholder:text-gray-200 focus:border-secondary"
            id="message"
            name="message"
            placeholder="Leave us a message"
            rows={4}
            required
          />
        </div>
      </div>
      <div className="mb-6">
        <label className="mb-3 flex items-center text-xs font-medium text-gray-500 lg:text-sm">
          {/* <input type="checkbox" id="terms" className="accent-checkbox mr-2 text-white" /> */}
          <Checkbox id="terms" ringStyle={cn(`mr-2`)} name="terms" />I agree to
          the&nbsp;
          <Link className="text-pink-600" href="/terms-and-conditions">
            terms and conditions
          </Link>
        </label>
        <label className="flex items-center text-xs font-medium text-gray-500 lg:text-sm">
          <Checkbox id="policy" ringStyle={cn(`mr-2`)} name="policy" />I agree
          to the{" "}
          <Link href="/privacy-policy" className="text-pink-600">
            &nbsp;privacy policy
          </Link>
        </label>
      </div>

      <SubmitButton />
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      variant="new"
      className="*:z-10 xl:w-auto"
      type="submit"
      disabled={pending}
    >
      <span>{pending ? "Submitting..." : "Send Message"}</span>
    </Button>
  );
}
