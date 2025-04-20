// import { getGeneralContent } from "@/lib/data";
import { CONTACT_DETAILS as data } from "@/lib/constants";

import icons from "@/components/icons/icons";

export default async function ContactInfo() {
  //   const data = (await getGeneralContent()).data.contactUs;
  // console.log('DATA CONTACT INFO', data);

  return (
    <aside className="h-full max-w-full rounded-xl bg-nav-gradient px-4 py-8 text-white md:order-1 lg:rounded-l-xl lg:rounded-r-none lg:px-10.5 lg:py-19">
      <div className="mb-9">
        <h2 className="text-center text-header6 font-bold leading-11 lg:text-left lg:text-4xl">
          Our contact details
        </h2>
        {/* <h3 className="text-center text-xs lg:text-left lg:text-lg">{data.content}</h3> */}
      </div>
      <div className="grid w-[335px] gap-8">
        <div className="flex gap-6">
          <span>{icons.location}</span>
          <div className="space-y-1">
            <h6 className="text-header4-sm font-semibold lg:text-header4-lg lg:font-bold">
              Address
            </h6>
            <p className="text-paragraph-sm lg:text-paragraph-lg">
              {data.address}
            </p>
          </div>
        </div>
        <div className="flex gap-6">
          <span>{icons.phone}</span>
          <div className="space-y-1">
            <h6 className="text-header4-sm font-semibold lg:text-header4-lg lg:font-bold">
              Phone Number
            </h6>
            <p className="text-paragraph-sm lg:text-paragraph-lg">
              {data.phone}
            </p>
          </div>
        </div>
        <div className="flex gap-6">
          <span>{icons.mail}</span>
          <div className="space-y-1">
            <h6 className="text-header4-sm font-semibold lg:text-header4-lg lg:font-bold">
              Email
            </h6>
            <p className="text-paragraph-sm lg:text-paragraph-lg">
              {data.email}
            </p>
          </div>
        </div>
        <div className="flex gap-6">
          <span>{icons.office}</span>
          <div className="space-y-1">
            <h6 className="text-header4-sm font-semibold lg:text-header4-lg lg:font-bold">
              Head Office
            </h6>
            <p className="text-paragraph-sm lg:text-paragraph-lg">
              {data.headOffice}
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
