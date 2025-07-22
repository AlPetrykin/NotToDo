import { useAddTaskMutation } from "@/redux/api/nottodoApi";
import { NotToDoStatus } from "@/types/notToDo";
import { useState } from "react";

type Props = {
    onCreate: () => void;
    onClose: () => void;
};

export default function AddNotToDoForm({ onCreate, onClose }: Props) {
    const [title, setTitle] = useState("");
    const [reason, setReason] = useState("");
    const [status, setStatus] = useState<NotToDoStatus>("to_avoid");
    const [tag, setTag] = useState("");

    const [addTask] = useAddTaskMutation();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!title.trim()) return;

        const newTaskData = {
            title,
            reason,
            status,
            tag,
        };

        try {
            await addTask(newTaskData).unwrap();

            onCreate();

            setTitle("");
            setReason("");
            setStatus("to_avoid");
            setTag("");
        } catch (err) {
            console.error("RTK error creating task:", err);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white border p-4 rounded-xl shadow-md mb-6 flex flex-col gap-3 max-w-2xl w-full"
        >
            <div className="flex flex-row justify-between">
                <h2 className="text-lg font-bold text-(--foreground)">Add New NotToDo</h2>
                <label onClick={onClose} className="cursor-pointer text-sm text-red-600">Close ❌</label>
            </div>

            <input
                type="text"
                placeholder="What you want to stop doing..."
                className="border px-3 py-2 rounded w-full"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />

            <textarea
                placeholder="Why are you stopping this?"
                className="border px-3 py-2 rounded w-full"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
            />

            <div className="flex gap-3">
                <select
                    className="border px-2 py-1 rounded"
                    value={status}
                    onChange={(e) => setStatus(e.target.value as NotToDoStatus)}
                >
                    <option value="to_avoid">To Avoid</option>
                    <option value="avoided">Avoided</option>
                    <option value="broken">Broken</option>
                </select>

                <input
                    type="text"
                    placeholder="Tag (optional)"
                    className="border px-3 py-2 rounded w-full"
                    value={tag}
                    onChange={(e) => setTag(e.target.value)}
                />
            </div>

            <button
                type="submit"
                className="w-fit h-fit shadow-lg text-white bg-(--primary) cursor-pointer hover:scale-[1.1] hover:bg-(--text) transition duration-200 py-3 px-6 font-bold rounded-2xl"
            >
                Create
            </button>
        </form>
    );
}