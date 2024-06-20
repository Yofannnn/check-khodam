"use client";

import { useState } from "react";
import { Vortex } from "../../components/ui/vortex";
import { PlaceholdersAndVanishInput } from "../../components/ui/placeholders-and-vanish-input";
import ModalComponent from "../../components/ui/modal";
import { placeholders } from "../../public/placeholdersInput";
import { isiKhodam } from "../../public/khodam";

export default function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [hasilKhodam, setHasilKhodam] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    let randomMath = Math.floor(Math.random() * 40);
    e.preventDefault();
    if (!inputValue) return;
    setHasilKhodam(isiKhodam[randomMath]);
    setModalIsOpen(true);
  };

  return (
    <>
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-screen h-screen"
      >
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
        />
        <ModalComponent
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
          hasilKhodam={hasilKhodam}
        />
        <a
          href="https://github.com/Yofannnn/check-khodam"
          target="_blank"
          className="fixed bottom-4 right-5"
        >
          ©yofan
        </a>
      </Vortex>
    </>
  );
}
