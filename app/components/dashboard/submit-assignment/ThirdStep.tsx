import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { FaStar, FaStarHalf } from "react-icons/fa6";
import Select from "../../ui/Select";

type TaskAssigner = {
    id: string;
    name: string;
    department: string;
    price: number;
    deliveryTime: string;
    rating: number;
    image: string;
};

type FilterOption = "all" | "Computer Science" | "Mathematics" | "Physics";

export default function ThirdStep() {
    const [filter, setFilter] = useState<FilterOption>("all");
    const [selectedAssigner, setSelectedAssigner] = useState<string | null>(null);

    const taskAssigners: TaskAssigner[] = [
        {
            id: "1",
            name: "Fabunmi George",
            department: "Computer Science",
            price: 2000,
            deliveryTime: "2 days",
            rating: 4.5,
            image: "/george.jpeg",
        },
        {
            id: "2",
            name: "John Doe",
            department: "Mathematics",
            price: 2500,
            deliveryTime: "3 days",
            rating: 4,
            image: "/george.jpeg",
        },
        {
            id: "3",
            name: "Jane Smith",
            department: "Physics",
            price: 3000,
            deliveryTime: "1 day",
            rating: 5,
            image: "/george.jpeg",
        },
    ];

    // Filter assigners by department
    const filteredAssigners = filter === "all"
        ? taskAssigners
        : taskAssigners.filter((assigner) => assigner.department === filter);

    return (
        <div className="w-full mx-auto">
            <div className="bg-white">
                <div className="space-y-6">
                    {/* Header with filter */}
                    <div className="flex items-center justify-between">
                        <h1 className="text-black font-semibold text-xs">Choose your TaskAssigner</h1>
                        <div className="max-w-fit">
                            <Select
                                id="department-filter"
                                label=""
                                value={filter}
                                onChange={(value) => setFilter(value as FilterOption)}
                                options={[
                                    { label: "All Departments", value: "all" },
                                    { label: "Computer Science", value: "Computer Science" },
                                    { label: "Mathematics", value: "Mathematics" },
                                    { label: "Physics", value: "Physics" },
                                ]}
                                placeholder="Filter by Department"
                                className="w-48 text-xs"
                            />
                        </div>
                    </div>

                    {/* TaskAssigner Cards */}
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 2xl:grid-cols-6 gap-4">
                        {filteredAssigners.map((assigner) => (
                            <div
                                key={assigner.id}
                                onClick={() => setSelectedAssigner(assigner.id)}
                                className={`w-full h-64 md:h-64 rounded-md border flex flex-col items-center justify-center cursor-pointer transition-all duration-200 
                                    ${selectedAssigner === assigner.id
                                        ? "border-blue-500 bg-blue-50"
                                        : "border-gray-300 hover:border-blue-300"}`}
                            >
                                <div className="border border-gray-300 rounded-md size-20 md:size-16 2xl:size-20">
                                    <Image
                                        src={assigner.image}
                                        alt="task-assigner"
                                        className="w-full h-full rounded-md object-cover"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <h1 className="text-sm text-black font-semibold mt-4">{assigner.name}</h1>
                                <h1 className="text-sm text-black">{assigner.department}</h1>
                                <h1 className="text-sm text-black font-semibold my-1">N {assigner.price}</h1>
                                <h1 className="text-sm text-black mb-1">{assigner.deliveryTime}</h1>
                                <div className="flex gap-1">
                                    {Array(Math.floor(assigner.rating))
                                        .fill(0)
                                        .map((_idx, index) => (
                                            <FaStar key={index} className="text-yellow-500 size-4" />
                                        ))}
                                    {assigner.rating % 1 !== 0 && <FaStarHalf className="text-yellow-500 size-4" />}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
