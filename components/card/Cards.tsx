import React from "react";
import Card from "./Card";


export default function Cards() {
  return (
    <div>
      <div className=" grid grid-cols-3 gap-3">
        <Card number={120} text="Total Patients" intent="patients"></Card>
        <Card number={150} text="Total Appointments" intent="appointments"></Card>
        <Card number={200} text="Total Cosnsultation" intent="consultations"></Card>
      </div>
    </div>
  );
}
