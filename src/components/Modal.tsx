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
        <div className="modal fixed  inset-0 w-full h-full  z-50 bg-black/50 flex items-center justify-center" id="modal">
            <div className="w-[60vw] h-[85vh] bg-white rounded-xl z-50 p-3" id="modal-content">
                <div className="w-full h-12 p-2">
                    <span id="closer" className="w-4 ml-[95%] h-4 bg-gradient-to-r from-purple-700 to-purple-900 hover:bg-gradient-to-bl px-3 py-2  cursor-pointer rounded-full"
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
