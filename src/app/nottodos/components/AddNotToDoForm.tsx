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
            className="bg-white border p-4 rounded-3xl shadow-md mb-6 flex flex-col gap-3 max-w-2xl w-full"
        >
            <div className="flex flex-row justify-between">
                <h2 className="text-lg font-bold text-(--foreground)">Add New NotToDo</h2>
                <label onClick={onClose} className="cursor-pointer text-sm text-red-600">Close ❌</label>
            </div>

            <div className="relative">
                <input value={title}
                    onChange={(e) => setTitle(e.target.value)} type="text" id="input_title" className="shadow-2xs block px-2.5 pb-2.5 pt-4 w-full text-sm text-(--text) bg-transparent rounded-md border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-(--accent) peer" placeholder=" " />
                <label htmlFor="input_title" className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-(--accent) peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">What you want to stop doing...</label>
            </div>

            <div className="relative">
                <textarea
                    id="input_desc"
                    placeholder=""
                    className="shadow-2xs block px-2.5 pb-2.5 pt-4 w-full text-sm text-(--text) bg-transparent rounded-md border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-(--accent) peer"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                />
                <label htmlFor="input_desc" className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-(--accent) peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Why are you stopping this?</label>
            </div>

            <div className="flex gap-3">
                <div className="relative w-full">
                    <select
                        id="select_status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value as NotToDoStatus)}
                        className="peer block w-full appearance-none bg-transparent border border-gray-300 px-2.5 pt-4 pb-2.5 text-sm text-(--text) rounded-md focus:outline-none focus:ring-0 focus:border-(--accent)"
                    >
                        <option value="" disabled hidden></option> {/* Пустая опция для placeholder */}
                        <option value="to_avoid">To Avoid</option>
                        <option value="avoided">Avoided</option>
                        <option value="broken">Broken</option>
                    </select>

                    <label
                        htmlFor="select_status"
                        className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 
    peer-focus:px-2 peer-focus:text-(--accent) 
    peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 
    peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 
    rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                    >
                        Status
                    </label>
                </div>

                <div className="relative w-full">
                    <input value={tag}
                        onChange={(e) => setTag(e.target.value)} type="text" id="input_tag" className="shadow-2xs block px-2.5 pb-2.5 pt-4 w-full text-sm text-(--text) bg-transparent rounded-md border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-(--accent) peer" placeholder=" " />
                    <label htmlFor="input_tag" className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-(--accent) peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Tag (optional)</label>
                </div>
            </div>

            <button
                type="submit"
                className="w-fit h-fit shadow-lg text-white bg-(--primary) cursor-pointer hover:scale-[1.1] hover:bg-(--text) transition duration-200 py-3 px-6 font-bold rounded-md"
            >
                Create
            </button>
        </form>
    );
}