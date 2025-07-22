"use client";

import { NotToDo } from "@/types/notToDo";

type Props = {
    item: NotToDo;
    isSelected?: boolean;
    onClick?: () => void;
};

export default function NotToDoCard({ item, isSelected, onClick }: Props) {
    return (
        <div
            onClick={onClick}
            className={`cursor-pointer rounded-xl p-4 shadow-xl transition hover:scale-[1.02] hover:bg-[#ffffff] duration-300 hover:shadow-md ${isSelected ? "border-(--accent) bg-(--primary)" : " bg-(--background)"}`}
        >
            <h3 className="text-lg font-semibold text-(--foreground) select-none">{item.title}</h3>
            {item.reason && (
                <p className="text-sm text-(--text) mt-1 select-none">{item.reason}</p>
            )}
            {item.tag && (
                <span className="mt-2 inline-block text-center text-xs px-2 py-1 bg-(--text) text-(--background) rounded select-none">
                    {item.tag}
                </span>
            )}
        </div>
    );
}