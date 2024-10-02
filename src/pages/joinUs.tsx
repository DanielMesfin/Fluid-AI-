"use client";

import { Input } from "@/components/ui/input";
import { useState } from "react";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'


export default function JoinUs() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  return (
    <div
      className="min-h-screen flex items-center text-white justify-start bg-cover bg-center bg-no-repeat"

    >
      <div className="w-full max-w-md p-6  ">
        <h1 className="text-5xl font-bold text-white mb-8 leading-tight">
          Join the Fluid AI Waitlist Today!
        </h1>
        <form className="space-y-6">
          <div>
            <Input
              type="text"

              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-transparent   border-b  border-slate-300/30 px-3 text-white placeholder-white/50 focus:ring-0"
            />
          </div>
          <div>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent border-b border-slate-300/30  px-3 text-white placeholder-white/50 focus:ring-0"
            />
          </div>
          <PhoneInput
            searchClass="bg-black"
            country={'us'}
            buttonStyle={{
              background: "transparent",

              fontSize: "16px",
              color: "#fff",

            }}
            dropdownStyle={{
              zIndex: "1000",
              background: "transparent",
              border: "none",
              borderBottom: "1px solid #fff",
              padding: "0",
              fontSize: "16px",

            }}
            inputStyle={
              {
                background: "transparent",
                border: "none",
                borderBottom: "1px solid #fff",

                padding: "0",
                fontSize: "16px",

              }
            }
            containerClass="bg-transparent border-b "
            buttonClass="bg-transparent"
          />



          <button
            type="submit"
            className="bg-white -z-0 text-black px-4 py-3 rounded-lg shadow-lg shadow-black/30 backdrop-blur-md"
          >
            Join Waitlist
          </button>
        </form>
      </div>
    </div>
  );
}
