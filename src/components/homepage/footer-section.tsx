export default function FooterSection() {
  return (
    <div className="bg-secondary-200  p-24">
      <div className="container ml-auto mr-auto">
        <div className=" grid gap-4 lg:grid-cols-4">
          <div className="flex flex-col items-center justify-center">
            <div>
              <svg
                className="mb-[43px]"
                width="96"
                height="96"
                viewBox="0 0 96 96"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M64.68 40.24H31.32C26.6 40.24 24.96 37.08 27.72 33.24L44.4 9.88003C46.36 7.08003 49.64 7.08003 51.6 9.88003L68.28 33.24C71.04 37.08 69.4 40.24 64.68 40.24Z"
                  fill="white"
                />
                <path
                  d="M70.36 72H25.64C19.32 72 17.16 67.8 20.88 62.68L36.84 40.24H59.16L75.12 62.68C78.84 67.8 76.68 72 70.36 72Z"
                  fill="white"
                />
                <path
                  d="M51 72V88C51 89.64 49.64 91 48 91C46.36 91 45 89.64 45 88V72H51Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="text-gray-200 text-text-sm">
              © 2025 RollOn, Inc. <br />  All rights reserved.
            </div>
          </div>

          <div className=" flex flex-col items-center text-text-sm justify-center text-gray-200">
            <ul className="space-y-6 ">
              <li>Company</li>
              <li>About Us</li>
              <li>Our Team</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>

          <div className=" flex flex-col items-center text-text-sm justify-center text-gray-200">
            <ul className="space-y-6">
              <li>Explore</li>
              <li>Skates</li>
              <li>Accessories</li>
              <li>Apparel</li>
              <li>Blog</li>
            </ul>
          </div>

          <div className=" flex flex-col items-center text-text-sm justify-center text-gray-200">
            <ul className="space-y-6">
              <li>Support</li>
              <li>FAQ</li>
              <li>Returns</li>
              <li>Shipping</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
