"use client"
import { useEffect } from "react"

export default function Modal({ children, trigger }: { children: React.ReactNode; trigger: string }) {
    useEffect(() => {
        const triggerElement = document.querySelector(trigger) as HTMLElement | null;
        const modal = document.querySelector('.modal') as HTMLElement | null;

        if (modal && triggerElement) {

            const handleClick = () => {
                modal.classList.remove('hidden');
            };

            triggerElement.addEventListener("click", handleClick);

            return () => {
                triggerElement.removeEventListener("click", handleClick);
            };
        }
    }, [trigger]);

    return (
        <div className="modal fixed hidden  inset-0 w-full h-full  z-50 bg-black/50 flex items-center justify-center" id="modal">
            <div className="w-[60vw] h-[90vh] max-h-[95vh] bg-white rounded-xl z-50 px-3 py-1" id="modal-content">
                <div className="w-full h-12 p-3">
                    <span id="closer" className="w-4 mt-5 ml-[95%] h-4 bg-gradient-to-r from-purple-700 to-purple-900 text-white hover:bg-gradient-to-bl px-3 py-2  cursor-pointer rounded-full"
                        onClick={() => {
                            const modal = document.querySelector('.modal');
                            if (modal) modal.classList.toggle('hidden');
                        }}>
                        &times;
                    </span>
                </div>
                {children}
            </div>
        </div>
    )
}
