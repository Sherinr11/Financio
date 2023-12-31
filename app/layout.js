"use client";

import "./globals.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Nav from "@/components/Navigation";

import FinanceContextProvider from "@/lib/store/finance-context";
import AuthContextProvider from "@/lib/store/auth-context";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <head><title>Finance Tracker</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon"  href="https://imgs.search.brave.com/IvljbhglypRZzhqOH9Nmc8UzyUmcrm7uY3Ho0j_WMiw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMz/NzA1MjE5MS92ZWN0/b3IvZG9sbGFyLWxv/Z28tZGVzaWduLWZp/bmFuY2UtbG9nby1k/ZXNpZ24tbW9uZXkt/c3ltYm9sLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1CSFRO/U0NQTDdSWkFPV1pv/cy1BcWRyTWJ0Y0xq/SUtlakZDXzVndFRj/R1lvPQ" /></head>
      <body className=" bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900">
        <AuthContextProvider>
          <FinanceContextProvider>
            <ToastContainer />
            <Nav />
            {children}
          </FinanceContextProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
