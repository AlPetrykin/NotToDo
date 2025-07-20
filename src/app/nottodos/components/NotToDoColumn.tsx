"use client";

import { NotToDo } from "@/types/notToDo";
import NotToDoCard from "./NoToDoCard";

type Props = {
  title: string;
  items: NotToDo[];
  onSelect?: (item: NotToDo) => void;
  selectedId?: string | null;
};

export default function NotToDoColumn({ title, items, onSelect, selectedId }: Props) {
  return (
    <div className="flex flex-col gap-4 p-4 bg-(--primary) rounded-2xl">
      <h2 className="text-xl font-bold text-[#f6f7f9] mb-2">{title}</h2>
      <div className="flex flex-col gap-3">
        {items.map((item) => (
          <NotToDoCard
            key={item.id}
            item={item}
            isSelected={selectedId === item.id}
            onClick={() => onSelect?.(item)}
          />
        ))}
        {items.length === 0 && (
          <p className="text-xl text-center text-[#f6f7f9] italic">Congratulations! This form is empty, you don&apos;t have any {title}, or you still didn&apos;t add some...</p>
        )}
      </div>
    </div>
  );
}