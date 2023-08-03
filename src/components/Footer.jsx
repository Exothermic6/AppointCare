import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

export default function Footer() {
  return (
    <div className=" bg-[#D5FFFF] text-xl">
      <div className="mx-auto container flex justify-around items-center gap-3 pb-4">
        <div>
          <p className="text-center pt-2">AppointCare</p>
          <p className="text-center py-2">
            P.O.Box: 76393 - 00508 <br />
            Nairobi, Kenya
          </p>
          <p className="text-center">TEL: +254769661795</p>
        </div>
        <div className="flex flex-col gap-3 mt-3">
          <div className="flex gap-3">
            <BsInstagram size={30} />
            <p>@_appointcare</p>
          </div>
          <div className="flex gap-3">
            <BsFacebook size={30} />
            <p>Appointcare</p>
          </div>
          <div className="flex gap-3">
            <BsTwitter size={30} />
            <p>@appointcare</p>
          </div>
        </div>
      </div>
    </div>
  );
}
