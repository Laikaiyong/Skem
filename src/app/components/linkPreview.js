'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { encode } from "qss";

function LinkPreview({ url }) {
  const [data, setData] = useState(null);

  async function getResponse() {
    try {
      const params = encode({
        url,
        screenshot: true,
        meta: false,
        embed: "screenshot.url",
        colorScheme: "dark",
        "viewport.isMobile": true,
        "viewport.deviceScaleFactor": 1,
        "viewport.width": 500 * 3,
        "viewport.height": 900,
      });
      
      setData(`https://api.microlink.io/?${params}`);

    } catch (error) {
      console.error("Error fetching link preview:", error);
      return <p>Failed to fetch link preview.</p>;
    }
  }

  useEffect(() => {
    getResponse();
  }, [])
  

    return (
      <Link
        href={url}
        target="_blank"
        className="text-black cursor-pointer flex items-center bg-[#f3f3f3] gap-3 text-left border-white border-[2px]"
        style={{ textDecoration: "none" }}
      >
          <img
            src={data}
            alt="Link Preview"
            className="object-cover h-full m-0"
          />
      </Link>
    );
}

export default LinkPreview;