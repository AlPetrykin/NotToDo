"use client";

import NotToDoColumn from "./NotToDoColumn";
import { useState } from "react";
import SelectedCardView from "./SelectedCardView";
import AddNotToDoForm from "./AddNotToDoForm";
import { useGetTasksQuery } from "@/redux/api/nottodoApi";
import { NotToDo } from "@/types/notToDo";


export default function Home() {
    const { data: tasks = [] } = useGetTasksQuery();
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [sortBy, setSortBy] = useState<string>("date_down");
    const [isAddFunc, setAddFunc] = useState<boolean>(false);
    const [selectedCard, setSelectedCard] = useState<NotToDo | null>(null);
    const toAvoid = tasks.filter(todo => todo.status === "to_avoid");
    const avoided = tasks.filter(todo => todo.status === "avoided");
    const broken = tasks.filter(todo => todo.status === "broken");

    const handleSelect = (item: NotToDo) => {
        if (selectedId === item.id) {
            setSelectedId(null);
            setSelectedCard(null);
        } else {
            setSelectedId(item.id);
            setSelectedCard(item);
            setAddFunc(false)
        }
    };

    const handleAddNew = () => {
        setAddFunc(true);
        setSelectedId(null);
        setSelectedCard(null);
    }

    const closeMenu = () => {
        setAddFunc(false);
        setSelectedId(null);
        setSelectedCard(null);
    }

    const sortTasks = (tasks: NotToDo[]) => {
        return [...tasks].sort((a, b) => {
            switch (sortBy) {
                case "date_down":
                    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
                case "date_up":
                    return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
                case "fromAToZ":
                    return a.title.localeCompare(b.title);
                case "fromZToA":
                    return b.title.localeCompare(a.title);
                default:
                    return 0;
            }
        });
    };

    return (
        <div className="flex flex-col gap-8 pt-30">
            <div className="flex md:flex-row flex-col justify-between text-center items-center px-6">
                <div className=" relative">
                    <select
                        id="select_status"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="shadow-2xs peer block appearance-none bg-(--background) border border-gray-300 px-8 pt-4 pb-2.5 text-sm text-(--text) rounded-md focus:outline-none focus:ring-0 focus:border-(--accent)"
                    >
                        <option value="date_down">Date ↓</option>
                        <option value="date_up">Date ↑</option>
                        <option value="fromAToZ">A-Z ↓</option>
                        <option value="fromZToA">Z-A ↑</option>
                    </select>

                    <label
                        htmlFor="select_status"
                        className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-2 origin-[0] bg-(--background) px-4 
                peer-focus:px-2 peer-focus:text-(--accent) 
                peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 
                peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 
                rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                    >
                        Filter by
                    </label>
                </div>
                <button onClick={() => handleAddNew()} className="w-fit h-fit shadow-lg text-(--background) bg-(--accent) cursor-pointer hover:scale-[1.1] hover:bg-(--primary) transition duration-200 py-3 px-6 font-bold rounded-md">
                    + Add New Card
                </button>
            </div>


            <div className="h-[100vh] flex flex-row  transition duration-1000">
                <div className={`grid grid-cols-3 gap-6  overflow-y-auto  h-full duration-500 transition-[width] animation-duration-1000 ${selectedCard || isAddFunc ? "md:w-[66%] md:p-4 w-0 p-0" : "w-full p-4"}`}>
                    <NotToDoColumn title="To Avoid" items={sortTasks(toAvoid)}
                        onSelect={(item) => handleSelect(item)}
                        selectedId={selectedId} />
                    <NotToDoColumn title="Avoided" items={sortTasks(avoided)}
                        onSelect={(item) => handleSelect(item)}
                        selectedId={selectedId} />
                    <NotToDoColumn title="Broken" items={sortTasks(broken)}
                        onSelect={(item) => handleSelect(item)}
                        selectedId={selectedId} />
                </div>

                <div className={`flex flex-col overflow-y-auto md:border-l transition-[width, padding] duration-500 ${selectedCard && !isAddFunc ? "md:w-[33%] w-full opacity-100 p-6" : "w-0 opacity-0 p-0"}`}>
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-bold">Selected NotToDo</h2>

                    </div>
                    {selectedCard ? (
                        <SelectedCardView card={selectedCard} onClose={() => {
                            closeMenu();
                        }} />
                    ) : (
                        <p className="text-gray-500 italic">Select a card to view details</p>
                    )}
                </div>
                <div className={`flex flex-col overflow-y-auto md:border-l transition-[width, padding] duration-500 ${isAddFunc && !selectedCard ? "md:w-[33%] w-full opacity-100 p-6" : "w-0 opacity-0 p-0"}`}>
                    <AddNotToDoForm
                        onCreate={() => {
                            setAddFunc(false);
                        }} onClose={() => {
                            closeMenu();
                        }} />
                </div>
            </div>
        </div>

    );
}


