import { Upload, ChevronDown } from "lucide-react";
import { useState, ChangeEvent } from "react";

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

export default function SecondStep() {
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
                    <div>
                        <label htmlFor="department" className="block text-xs font-semibold text-black mb-2">
                            Plagiarism Report
                        </label>
                        <div className="relative">
                            <select
                                id="department"
                                value={formData.department}
                                onChange={(e) => handleInputChange('department', e.target.value)}
                                className="w-full px-3 py-3 border border-gray-300 rounded-md text-sm text-gray-400 bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent pr-10"
                            >
                                <option value="">Do you want a plagiarism check?</option>
                                <option value="computer-science">Yes</option>
                                <option value="engineering">No</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="department" className="block text-xs font-semibold text-black mb-2">
                            Proofreading
                        </label>
                        <div className="relative">
                            <select
                                id="department"
                                value={formData.department}
                                onChange={(e) => handleInputChange('department', e.target.value)}
                                className="w-full px-3 py-3 border border-gray-300 rounded-md text-sm text-gray-400 bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent pr-10"
                            >
                                <option value="">Do you want your work proofread?</option>
                                <option value="computer-science">Yes</option>
                                <option value="engineering">No</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="department" className="block text-xs font-semibold text-black mb-2">
                            Executive Summary
                        </label>
                        <div className="relative">
                            <select
                                id="department"
                                value={formData.department}
                                onChange={(e) => handleInputChange('department', e.target.value)}
                                className="w-full px-3 py-3 border border-gray-300 rounded-md text-sm text-gray-400 bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent pr-10"
                            >
                                <option value="">Do you want an executive summary of your work</option>
                                <option value="computer-science">Yes</option>
                                <option value="engineering">No</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="department" className="block text-xs font-semibold text-black mb-2">
                            Presentation Slides
                        </label>
                        <div className="relative">
                            <select
                                id="department"
                                value={formData.department}
                                onChange={(e) => handleInputChange('department', e.target.value)}
                                className="w-full px-3 py-3 border border-gray-300 rounded-md text-sm text-gray-400 bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent pr-10"
                            >
                                <option value="">Do you need presentation slides</option>
                                <option value="computer-science">Yes</option>
                                <option value="engineering">No</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                        </div>
                    </div>

                    {/* Bottom Row - Three Select Fields */}
                    <div>
                        <label htmlFor="department" className="block text-xs font-semibold text-black mb-2">
                            Cover Page Options
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-10 gap-4">
                            {Array(6).fill(0).map((_idx, idx) => (
                                <div key={idx} className="w-full h-40 rounded-md border border-gray-300"></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}