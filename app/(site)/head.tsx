'use client'

import {GoogleAnalytics} from "nextjs-google-analytics";

export default function Head() {
  return (
    <>
     <GoogleAnalytics trackPageViews />
    </>
  );
}
