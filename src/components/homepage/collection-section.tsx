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
        <div className=" grid gap-4 grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="">
              <Image
                src="/assets/collection-image.png"
                alt="shoe"
                width={389}
                height={516}
              />
            </div>
          </div>
          <div className="">
            <Image
              src="/assets/collection-image.png"
              alt="shoe"
              width={389}
              height={516}
            />
          </div>
          <div className="">
            <Image
              src="/assets/collection-image.png"
              alt="shoe"
              width={389}
              height={516}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
