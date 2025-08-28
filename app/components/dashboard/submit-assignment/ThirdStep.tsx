import { Upload, ChevronDown, LucideAArrowDown, LucideArrowDown, LucideChevronDown } from "lucide-react";
import Image from "next/image";
import { useState, ChangeEvent } from "react";
import { FaStar, FaStarHalf } from "react-icons/fa6";

type FormData = {
    title: string;
    description: string;
    file: File | null;
    department: string;
    courseSubject: string;
    writingStyle: string;
    pageCount: string;
    deliveryUrgency: string;
};

export default function ThirdStep() {
    const [formData, setFormData] = useState<FormData>({
        title: '',
        description: '',
        file: null,
        department: '',
        courseSubject: '',
        writingStyle: '',
        pageCount: '',
        deliveryUrgency: ''
    });

    const [dragActive, setDragActive] = useState(false);

    const handleInputChange = (field: keyof FormData, value: string | File | null) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleInputChange('file', e.dataTransfer.files[0]);
        }
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            handleInputChange('file', e.target.files[0]);
        }
    };

    return (
        <div className="w-full mx-auto">
            <div className="bg-white">
                <div className="space-y-6">
                    <div className="flex items-center justify-between">
                        <h1 className="text-black font-semibold text-xs">Choose your TaskAssigner</h1>
                        <div className="flex gap-2 items-center justify-center border border-gray-300 rounded-md px-4 py-2">
                            <h1 className="text-black text-xs">Find Your TaskAssginer</h1>
                            <LucideChevronDown className="text-black size-4" />
                        </div>
                    </div>
                    <div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 2xl:grid-cols-6 gap-4">
                            {Array(6).fill(0).map((_idx, idx) => (
                                <div key={idx} className="w-full h-64 rounded-md border border-gray-300 flex flex-col items-center justify-center">
                                    <div className="border border-gray-300 rounded-md size-16 2xl:size-20">
                                        <Image src="/george.jpeg" alt="task-assigner" className="w-full h-full rounded-md object-cover" width={100} height={100} />
                                    </div>
                                    <h1 className="text-sm text-black font-semibold mt-4">Fabunmi George</h1>
                                    <h1 className="text-sm text-black">Computer Science</h1>
                                    <h1 className="text-sm text-black font-semibold my-1">N 2000</h1>
                                    <h1 className="text-sm text-black mb-1">2 days</h1>
                                    <div className="flex gap-1">
                                        {Array(4).fill(0).map((_idx, index) => (
                                            <FaStar key={index} className="text-yellow-500 size-4" />
                                        ))}
                                        <FaStarHalf className="text-yellow-500 size-4" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}