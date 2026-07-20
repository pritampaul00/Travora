"use client";

import { useRef, useState } from "react";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import { Trip } from "@/types";
import { buildReportText } from "@/utils/buildReportText";

import Report from "./Report";
import ReportHeader from "./ReportHeader";
import ReportBody from "./ReportBody";
import ReportContent from "./ReportContent";
import TripSummary from "./TripSummary";
import FlightRecommendation from "./FlightRecommendation";
import HotelRecommendation from "./HotelRecommendation";
import DailyItinerary from "./DailyItinerary";
import BudgetBreakdown from "./BudgetBreakdown";
import FinalRecommendations from "./FinalRecommendations";

interface Props {
  trip: Trip;
}

export default function ReportViewer({
  trip,
}: Props) {
  const [copyLabel, setCopyLabel] =
    useState("Copy");

  const [downloading, setDownloading] =
    useState(false);

  const reportRef =
    useRef<HTMLDivElement>(null);

  async function handleCopy() {
    await navigator.clipboard.writeText(
      buildReportText(trip),
    );

    setCopyLabel("Copied!");

    setTimeout(() => {
      setCopyLabel("Copy");
    }, 2000);
  }

  async function handleDownload() {
    if (!reportRef.current) return;

    try {
      setDownloading(true);

      const canvas = await html2canvas(
        reportRef.current,
        {
          scale: 2,
          useCORS: true,
          backgroundColor: "#ffffff",
        },
      );

      const imgData =
        canvas.toDataURL("image/png");

      const pdf = new jsPDF(
        "p",
        "mm",
        "a4",
      );

      const pageWidth = 210;
      const pageHeight = 297;

      const imgWidth = pageWidth;

      const imgHeight =
        (canvas.height * imgWidth) /
        canvas.width;

      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(
        imgData,
        "PNG",
        0,
        position,
        imgWidth,
        imgHeight,
      );

      heightLeft -= pageHeight;

      while (heightLeft > 0) {
        position =
          heightLeft - imgHeight;

        pdf.addPage();

        pdf.addImage(
          imgData,
          "PNG",
          0,
          position,
          imgWidth,
          imgHeight,
        );

        heightLeft -= pageHeight;
      }

      pdf.save("TripMate-Itinerary.pdf");
    } finally {
      setDownloading(false);
    }
  }

 return (
  <div
    ref={reportRef}
    className="report-container"
  >
    <Report>
      <ReportHeader
        onCopy={handleCopy}
        onDownload={handleDownload}
        copyLabel={copyLabel}
        downloading={downloading}
      />

      <ReportBody>
        <ReportContent>
          <TripSummary
            summary={trip.summary}
            budgetBreakdown={trip.budgetBreakdown}
          />

          <FlightRecommendation
            flight={trip.recommendedFlight}
            reason={trip.flightRecommendationReason}
            tips={trip.flightBookingTips}
          />

          <HotelRecommendation
            hotel={trip.recommendedHotel}
            reason={trip.hotelRecommendationReason}
            tips={trip.hotelBookingTips}
          />

          <DailyItinerary
            dailyPlans={trip.dailyPlans}
          />

          <BudgetBreakdown
            budget={trip.budgetBreakdown}
          />

          <FinalRecommendations
            tips={trip.travelTips}
          />
        </ReportContent>
      </ReportBody>
    </Report>
  </div>
);
}