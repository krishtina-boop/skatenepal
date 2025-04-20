// import Image from "next/image";

export default function AboutSection() {
  return (
    <div className="bg-body p-20" id="about">
      <div className="container ml-auto mr-auto ">
        <div className="text-center">
          <h1 className="italic mb-12 text-gray-500 text-header-sm">
            About Inline Skates
          </h1>
        </div>
        <div className=" grid gap-4 lg:grid-cols-3">
          <div>
            <div>
              <h2 className="text-gray-500">
                This is about inline skate section
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
