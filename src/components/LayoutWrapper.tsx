import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Header from "./NavBar/Header";
import Footer from "./Footer/footer";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <motion.div className="max-w-3xl min-h-screen px-5 mx-auto ">
      <Header />
      <AnimatePresence initial={false} exitBeforeEnter>
        <motion.div
          key={router.asPath}
          initial={{
            opacity: 0,
            y: 50,
          }}
          layout
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
        >
          <motion.main>{children}</motion.main>
          <Footer />
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
