"use client";

import { useRouter } from "next/navigation";


export default function ServiceSelectorAiForm() {
  const router = useRouter();



  return (
    <>

    {/* smntara gini dlu,, nnti kubuat section reservasinya */}
      <button onClick={() => router.push("/flow")}>
        Rekomendasi AI
      </button></>
  );
}