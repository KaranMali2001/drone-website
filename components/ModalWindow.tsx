"use client";

function ModalWindow({
  children,
  setIsOpen,
}: {
  children: React.ReactNode;
  setIsOpen: (arg0: boolean) => void;
}) {
  return (
    <div className=" overflow-hidden h-[100dvh] w-[100dvw]">
      <div
        onClick={() => {
          setIsOpen(false);
        }}
        className=" fixed top-0 overflow-hidden h-[100dvh] w-[100dvw] backdrop-blur-sm bg-gray-500/30"
      ></div>
      <div className="fixed top-[50%] z-[999] left-[50%] translate-x-[-50%] translate-y-[-50%] m-auto">
        {children}
      </div>
    </div>
  );
}

export default ModalWindow;
