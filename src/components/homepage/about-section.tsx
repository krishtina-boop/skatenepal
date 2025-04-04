import Image from "next/image";

export default function AboutSection() {
  return (
    <div className="bg-body mt-[34px] p-24">
      <div className="container ml-auto mr-auto ">
        <div className="flex items-center justify-center">
          <h1 className="italic  mb-[51px] text-4xl font-bold">
            About Inline Skates
          </h1>
        </div>
        <div className=" grid gap-4 lg:grid-cols-3">
          <div>
            <div className="">
              <Image
                src="/assets/image1.png"
                alt="shoe"
                width={389}
                height={346}
              />
            </div>
          </div>
          <div className="">
            <Image
              src="/assets/image2.png"
              alt="shoe"
              width={389}
              height={346}
            />
          </div>
          <div className="">
            <Image
              src="/assets/image3.png"
              alt="shoe"
              width={389}
              height={346}
            />
          </div>
        </div>

      </div>
    </div>
  );
}
