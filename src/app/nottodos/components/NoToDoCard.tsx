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
            className={`cursor-pointer rounded-xl p-4 shadow-xl transition hover:scale-[1.02] hover:bg-[#ffffff] duration-300 hover:shadow-md ${isSelected ? "border-[#40e0d0] bg-[#6cc2d2]" : " bg-[#f6f7f9]"}`}
        >
            <h3 className="text-lg font-semibold text-[#323a45] select-none">{item.title}</h3>
            {item.reason && (
                <p className="text-sm text-[#3f6184] mt-1 select-none">{item.reason}</p>
            )}
            {item.tag && (
                <span className="mt-2 inline-block text-center text-xs px-2 py-1 bg-(--text) text-[#f6f7f9] rounded select-none">
                    {item.tag}
                </span>
            )}
        </div>
    );
}