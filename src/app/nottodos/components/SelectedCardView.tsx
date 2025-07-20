"use client";

import { NotToDo, NotToDoStatus } from "@/types/notToDo";
import { useUpdateTaskMutation, useDeleteTaskMutation } from "@/redux/api/nottodoApi";

type Props = {
    card: NotToDo;
    onClose: () => void;
};

export default function SelectedCardView({ card, onClose }: Props) {

    const [updateTask] = useUpdateTaskMutation();
    const [deleteTask] = useDeleteTaskMutation();

    const handleStatusChange = async (status: NotToDoStatus) => {
        try {
            await updateTask({ id: card.id, status }).unwrap();
            onClose();
        } catch (err) {
            console.error("Failed to update status:", err);
        }
    };

    const handleDelete = async () => {
        try {
            await deleteTask(card.id).unwrap();
            onClose(); 
        } catch (err) {
            console.error("Failed to delete task:", err);
        }
    };

    return (
        <div className="p-6 rounded-xl bg-white shadow-md border border-gray-200 w-full max-w-2xl mx-auto">
            <div className="flex flex-row justify-between">
                <h2 className="text-2xl font-bold text-[#323a45] mb-2">{card.title}</h2>
                <label onClick={onClose} className="cursor-pointer text-sm text-red-600">Close ❌</label>
            </div>
            <p className="text-md text-[#3f6184] mb-4 italic">{card.reason || "No reason provided"}</p>

            <div className="flex items-center gap-2 mb-4">
                <span className={`text-sm text-[#3f6184] px-3 py-1 rounded-full border capitalize 
                    ${card.status === "to_avoid"
                        ? "bg-green-100  border-green-300"
                        : card.status === "avoided"
                            ? "bg-yellow-100  border-yellow-300 "
                            : "bg-red-100  border-red-300"
                    }`}>
                    {card.status.replace("_", " ")}
                </span>
                {card.tag && (
                    <span className="text-xs px-2 py-1 rounded bg-[#e0f7f5] text-[#26867c]">
                        {card.tag}
                    </span>
                )}
            </div>

            <div className="flex gap-3 mb-6 text-center items-center">
                <label className="text-sm text-gray-600">Move to:</label>
                <select
                    className={`rounded-md border px-3 py-1 text-sm focus:outline-none focus:ring-2 
                        ${card.status === "to_avoid"
                            ? "bg-green-100 text-green-800 border-green-300 focus:ring-green-400"
                            : card.status === "avoided"
                                ? "bg-yellow-100 text-yellow-800 border-yellow-300 focus:ring-yellow-400"
                                : "bg-red-100 text-red-800 border-red-300 focus:ring-red-400"
                        } `}
                    value={card.status}
                    onChange={(e) => handleStatusChange(e.target.value as NotToDoStatus)}>
                    <option value="to_avoid">To Avoid</option>
                    <option value="avoided">Avoided</option>
                    <option value="broken">Broken</option>
                </select>

                <button
                    onClick={handleDelete}
                    className="cursor-pointer ml-auto text-sm text-red-600 hover:underline">
                    🗑 Remove
                </button>
            </div>

            <div className="text-sm text-gray-500 space-y-1">
                <p>Created: {new Date(card.createdAt).toLocaleDateString()}</p>
                {card.updatedAt && (
                    <p>Last update: {new Date(card.updatedAt).toLocaleDateString()}</p>
                )}
                {card.streak && (
                    <p>Streak: 🔥 {card.streak} days</p>
                )}
            </div>
        </div>
    );
}
