import Image from "next/image";

export default function CollectionSection() {
  return (
    <div className="bg-body p-20" id="shop">
      <div className="container ml-auto mr-auto ">
        <div className="text-center">
          <p className="text-gray-300 text-text-sm mb-[20px]">
            Why Choose Inline Skates?
          </p>
          <h1 className="italic mb-12 text-gray-500 text-header-sm">
            Our Skate Collection
          </h1>
        </div>
        <div className=" grid gap-4 grid-cols-3 lg:grid-cols-5">
          <div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/assets/roselle-skates1.avif"
                alt="roselle-skates1"
                className="w-full h-full"
                width={270}
                height={360}
              />
            </div>
          </div>
          <div className="rounded-lg overflow-hidden">
            <Image
              src="/assets/roselle-skates2.avif"
              alt="roselle-skates2"
              className="w-full h-full"
              width={270}
              height={360}
            />
          </div>
          <div className="rounded-lg overflow-hidden">
            <Image
              src="/assets/roselle-skates3.avif"
              alt="roselle-skates3"
              className="w-full h-full"
              width={270}
              height={360}
            />
          </div>

          <div className="rounded-lg overflow-hidden">
            <Image
              src="/assets/roselle-skates4.avif"
              alt="roselle-skates4"
              className="w-full h-full"
              width={270}
              height={360}
            />
          </div>

          <div className="rounded-lg overflow-hidden">
            <Image
              src="/assets/roselle-skates5.avif"
              alt="roselle-skates5"
              className="w-full h-full"
              width={270}
              height={360}
            />
          </div>

          <div className="rounded-lg overflow-hidden">
            <Image
              src="/assets/roselle-skates6.jpg"
              alt="roselle-skates6"
              className="w-full h-full"
              width={270}
              height={360}
            />
          </div>
          <div className="rounded-lg overflow-hidden">
            <Image
              src="/assets/roselle-skates7.png"
              alt="roselle-skates7"
              className="w-full h-full"
              width={270}
              height={360}
            />
          </div>

          <div className="rounded-lg overflow-hidden">
            <Image
              src="/assets/helmet1.avif"
              alt="helmet1"
              className="w-full h-full"
              width={270}
              height={360}
            />
          </div>
          <div className="rounded-lg overflow-hidden">
            <Image
              src="/assets/helmet2.avif"
              alt="helmet2"
              className="w-full h-full"
              width={270}
              height={360}
            />
          </div>
          <div className="rounded-lg overflow-hidden">
            <Image
              src="/assets/helmet3.avif"
              alt="helmet3"
              className="w-full h-full"
              width={270}
              height={360}
            />
          </div>
          <div className="rounded-lg overflow-hidden">
            <Image
              src="/assets/helmet4.avif"
              alt="helmet4"
              className="w-full h-full"
              width={270}
              height={360}
            />
          </div>
          <div className="rounded-lg overflow-hidden">
            <Image
              src="/assets/helmet5.avif"
              alt="helmet5"
              className="w-full h-full"
              width={270}
              height={360}
            />
          </div>
          <div className="rounded-lg overflow-hidden">
            <Image
              src="/assets/ruishijie-skates1.avif"
              alt="ruishijie-skates1"
              className="w-full h-full"
              width={270}
              height={360}
            />
          </div>
          <div className="rounded-lg overflow-hidden">
            <Image
              src="/assets/ruishijie-skates2.avif"
              alt="ruishijie-skates2"
              className="w-full h-full"
              width={270}
              height={360}
            />
          </div>
          <div className="rounded-lg overflow-hidden">
            <Image
              src="/assets/ruishijie-skates3.avif"
              alt="ruishijie-skates3"
              className="w-full h-full"
              width={270}
              height={360}
            />
          </div>
          <div className="rounded-lg overflow-hidden">
            <Image
              src="/assets/ruishijie-skates4.avif"
              alt="ruishijie-skates4"
              className="w-full h-full"
              width={270}
              height={360}
            />
          </div>
          <div className="rounded-lg overflow-hidden">
            <Image
              src="/assets/ruishijie-skates5.avif"
              alt="ruishijie-skates5"
              className="w-full h-full"
              width={270}
              height={360}
            />
          </div>
          <div className="rounded-lg overflow-hidden">
            <Image
              src="/assets/ruishijie-skates6.avif"
              alt="ruishijie-skates6"
              className="w-full h-full"
              width={270}
              height={360}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
