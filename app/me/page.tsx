"use client";

import { useSession } from "next-auth/react";
import { Fragment } from "react";

export default function MePage() {
  const { data } = useSession();

  return (
    <Fragment>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Fragment>
  );
}
