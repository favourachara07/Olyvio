import { Check, Clock, TrendingUp } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { FaStar, FaStarHalf } from "react-icons/fa6";
import { Select } from "../../ui/Select";

export type TaskAssigner = {
    id: string;
    name: string;
    department: string;
    price: number;
    deliveryTime: string;
    rating: number;
    image: string;
};

type FilterOption = "all" | "Computer Science" | "Mathematics" | "Physics" | "Engineering" | "Business" | "Social Sciences";

type ThirdStepProps = {
    onSelectAssigner: (assigner: TaskAssigner) => void;
    selectedAssignerId: string | null;
};

export default function ThirdStep({ onSelectAssigner, selectedAssignerId }: ThirdStepProps) {
    const [filter, setFilter] = useState<FilterOption>("all");
    
    const handleSelectAssigner = (assigner: TaskAssigner) => {
        onSelectAssigner(assigner);
    };

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
            rating: 4.2,
            image: "/george.jpeg",
        },
        {
            id: "3",
            name: "Jane Smith",
            department: "Physics",
            price: 3000,
            deliveryTime: "1 day",
            rating: 4.8,
            image: "/george.jpeg",
        },
        {
            id: "4",
            name: "Alex Johnson",
            department: "Engineering",
            price: 2800,
            deliveryTime: "2 days",
            rating: 4.7,
            image: "/george.jpeg",
        },
        {
            id: "5",
            name: "Sarah Williams",
            department: "Business",
            price: 3200,
            deliveryTime: "4 days",
            rating: 4.9,
            image: "/george.jpeg",
        },
        {
            id: "6",
            name: "Michael Brown",
            department: "Social Sciences",
            price: 2300,
            deliveryTime: "3 days",
            rating: 4.4,
            image: "/george.jpeg",
        },
        {
            id: "7",
            name: "Emily Davis",
            department: "Computer Science",
            price: 2600,
            deliveryTime: "2 days",
            rating: 4.6,
            image: "/george.jpeg",
        },
        {
            id: "8",
            name: "David Wilson",
            department: "Mathematics",
            price: 2900,
            deliveryTime: "5 days",
            rating: 4.3,
            image: "/george.jpeg",
        },
    ];

    const filteredAssigners = filter === "all"
        ? taskAssigners
        : taskAssigners.filter((assigner) => assigner.department === filter);

    return (
        <div className="w-full mx-auto">
            <div className="bg-white">
                <div className="space-y-8">
                    {/* Enhanced Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-gray-100">
                        <div>
                            <h1 className="text-gray-900 font-bold text-xl mb-1">Choose your TaskAssigner</h1>
                            <p className="text-gray-500 text-sm">Select an expert that matches your requirements</p>
                        </div>
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
                                    { label: "Engineering", value: "Engineering" },
                                    { label: "Business", value: "Business" },
                                    { label: "Social Sciences", value: "Social Sciences" },
                                ]}
                                placeholder="Filter by Department"
                                className="w-52 text-xs"
                            />
                        </div>
                    </div>

                    {/* Enhanced TaskAssigner Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
                        {filteredAssigners.map((assigner) => (
                            <div
                                key={assigner.id}
                                onClick={() => handleSelectAssigner(assigner)}
                                className={`group relative w-full rounded-2xl border-2 flex flex-col p-5 cursor-pointer transition-all duration-300 ease-out
                                    ${selectedAssignerId === assigner.id
                                        ? 'border-gray-900 bg-gray-50 shadow-xl scale-[1.02]'
                                        : 'border-gray-200 hover:border-gray-400 hover:shadow-lg hover:scale-[1.01] bg-white'}`}
                            >
                                {/* Enhanced Selection Indicator */}
                                <div className={`absolute top-4 right-4 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                                    selectedAssignerId === assigner.id 
                                        ? 'bg-gray-900 text-white scale-100' 
                                        : 'border-2 border-gray-300 scale-90 group-hover:scale-100 group-hover:border-gray-400'
                                }`}>
                                    {selectedAssignerId === assigner.id && (
                                        <Check className="h-4 w-4 animate-in zoom-in duration-200" />
                                    )}
                                </div>

                                {/* Enhanced Profile Image with Gradient Border */}
                                <div className="flex justify-center mb-4">
                                    <div className={`relative p-1 rounded-full transition-all duration-300 ${
                                        selectedAssignerId === assigner.id 
                                            ? 'bg-gradient-to-br from-gray-700 via-gray-900 to-black' 
                                            : 'bg-gradient-to-br from-gray-200 to-gray-300 group-hover:from-gray-300 group-hover:to-gray-400'
                                    }`}>
                                        <div className="relative h-24 w-24 rounded-full overflow-hidden bg-white">
                                            <Image
                                                src={assigner.image}
                                                alt={assigner.name}
                                                fill
                                                className="object-cover"
                                                sizes="96px"
                                            />
                                            {/* Enhanced Online Status */}
                                            <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-3 border-white shadow-lg">
                                                <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Enhanced Assigner Info */}
                                <div className="w-full text-center space-y-3">
                                    <div>
                                        <h3 className="text-base font-bold text-gray-900 truncate mb-1.5">{assigner.name}</h3>
                                        <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-800 border border-gray-200">
                                            {assigner.department}
                                        </div>
                                    </div>
                                    
                                    {/* Enhanced Rating */}
                                    <div className="flex items-center justify-center space-x-1 py-2">
                                        <div className="flex space-x-0.5">
                                            {Array(5).fill(0).map((_, i) => {
                                                if (i < Math.floor(assigner.rating)) {
                                                    return <FaStar key={i} className="h-4 w-4 text-yellow-400 drop-shadow-sm" />;
                                                } else if (i === Math.floor(assigner.rating) && assigner.rating % 1 !== 0) {
                                                    return <FaStarHalf key={i} className="h-4 w-4 text-yellow-400 drop-shadow-sm" />;
                                                } else {
                                                    return <FaStar key={i} className="h-4 w-4 text-gray-200" />;
                                                }
                                            })}
                                        </div>
                                        <span className="ml-1.5 text-sm font-bold text-gray-900">
                                            {assigner.rating.toFixed(1)}
                                        </span>
                                    </div>
                                    
                                    {/* Enhanced Divider */}
                                    <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
                                    
                                    {/* Enhanced Price & Delivery Section */}
                                    <div className="flex items-stretch justify-between bg-gray-50 rounded-xl p-3 border border-gray-100">
                                        <div className="flex-1 text-left">
                                            <p className="text-xs font-medium text-gray-500 mb-1">Price</p>
                                            <p className="text-lg font-bold text-gray-900">₦{assigner.price.toLocaleString()}</p>
                                        </div>
                                        <div className="w-px bg-gray-200 mx-2"></div>
                                        <div className="flex-1 text-right">
                                            <p className="text-xs font-medium text-gray-500 mb-1">Delivery</p>
                                            <div className="flex items-center justify-end text-sm font-semibold text-gray-700">
                                                <Clock className="h-4 w-4 mr-1.5 text-gray-400" />
                                                {assigner.deliveryTime}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Top Rated Badge (conditional) */}
                                    {assigner.rating >= 4.7 && (
                                        <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-yellow-50 text-yellow-700 border border-yellow-200">
                                            <TrendingUp className="h-3 w-3 mr-1" />
                                            Top Rated
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Results Count */}
                    {filteredAssigners.length > 0 ? (
                        <p className="text-center text-sm text-gray-500 pt-4">
                            Showing {filteredAssigners.length} {filteredAssigners.length === 1 ? 'expert' : 'experts'}
                            {filter !== "all" && ` in ${filter}`}
                        </p>
                    ) : (
                        <div className="text-center py-12">
                            <p className="text-gray-500 text-lg font-medium">No experts found in this department</p>
                            <p className="text-gray-400 text-sm mt-2">Try selecting a different filter</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}