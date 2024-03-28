import { B } from "@/components/common/elements";
import { Line, Timeline } from "@/components/common/timeline";
import Title from "@/components/common/title";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Education | Muhammad Ramdan",
  description: "My formal & non-formal education background.",
};

export default function Education() {
  return (
    <article>
      <p className="mb-8 p text-justify xl:text-left">
        Majoring in Electrical Engineering, I have a strong foundation in
        mathematics, physics, and telecommunication. I have also learned
        programming languages such as C, C++, and Python. I am also familiar
        with software such as MATLAB, AutoCAD, and Proteus.
      </p>
      <Title className="text-secondary">Formal Education_</Title>
      <Timeline>
        <Line disableStart logo="/upi.svg">
          <time className="font-mono italic text-secondary">2019-2024</time>
          <h4 className="text-lg text-secondary">
            <B>Universitas Pendidikan Indonesia</B>
          </h4>
          <span className="text-sm">
            Bachelor of Electrical Engineering (S.T.)
          </span>

          <p className="mt-2 p">
            GPA: 3.51/4.00. Active in activities and societies such as UKM
            Perisai Diri UPI, IEEE Student Branch UPI
          </p>
        </Line>
        <Line logo="/smart.png">
          <time className="font-mono italic text-secondary">2017-2019</time>
          <h4 className="text-lg text-secondary">
            <B>SMA SMART Ekselensia Indonesia</B>
          </h4>
          <span className="text-sm">Science Study</span>

          <p className="mt-2">
            Gained the best national exam score in the school, perfect score in
            Mathematics. Active in Perisai Diri and Ansamble Music Club.
            Acceleration program for 2 years.
          </p>
        </Line>
        <Line logo="/smart.png">
          <time className="font-mono italic text-secondary">2014-2017</time>
          <h4 className="text-lg text-secondary">
            <B>SMP SMART Ekselensia Indonesia</B>
          </h4>

          <p className="mt-2">Active in Tahfidz Qur'an</p>
        </Line>
        <Line disableEnd logo="/kemdikbud.png">
          <time className="font-mono italic text-secondary">2008-2014</time>
          <h4 className="text-lg text-secondary">
            <B>SDN Sindagjaya 01</B>
          </h4>
        </Line>
      </Timeline>
    </article>
  );
}
