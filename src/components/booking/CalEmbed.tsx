"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function CalEmbed() {
  const calLink = process.env.NEXT_PUBLIC_CAL_LINK || "your-cal-username/massage";

  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "light",
        styles: {
          branding: { brandColor: "#8C9A84" },
        },
        hideEventTypeDetails: false,
      });
    })();
  }, []);

  return (
    <div className="min-h-[600px] overflow-hidden rounded-3xl border border-border bg-card">
      <Cal
        calLink={calLink}
        style={{ width: "100%", height: "100%", overflow: "scroll", minHeight: "600px" }}
        config={{ layout: "month_view" }}
      />
    </div>
  );
}
