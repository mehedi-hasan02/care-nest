"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const BookSeviceButton = ({ serviceId }) => {
  const path = usePathname();
  const route = useRouter();
  const session = useSession();
  const isLogin = session.status == "authenticated";

  console.log(serviceId)

  const handelBooking = () => {
    if (isLogin) {
      route.push(`/booking/${serviceId}`);
    } 
    else {
    //   route.push(
    //     `/login?callbackUrl=${path}`,
    //   );
    }
  };

  return (
    <button
      onClick={handelBooking}
      className="btn bg-white text-primary hover:bg-white/90 border-none shrink-0"
    >
      Book This Service
    </button>
  );
};

export default BookSeviceButton;
