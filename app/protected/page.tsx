"use client";

import { useState, useEffect, Fragment } from "react";
import { useSession } from "next-auth/react";
import AccessDenied from "@/components/access-denied";

export default function ProtectedPage() {
  const { data: session } = useSession();
  const [content, setContent] = useState();

  // Fetch content from protected route
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/examples/protected");
      const json = await res.json();
      if (json.content) {
        setContent(json.content);
      }
    };
    fetchData();
  }, [session]);

  // If no session exists, display access denied message
  if (!session) {
    return <AccessDenied />;
  }

  // If session exists, display content
  return (
    <Fragment>
      <h1>Protected Page</h1>
      <p>
        This is protected content. You can access this content because you are
      </p>
    </Fragment>
  );
}
