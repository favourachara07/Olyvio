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

export default function FirstStep() {
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

    const handleNext = () => {
        // Handle form submission logic here
        console.log('Form data:', formData);
    };

    return (
        <div className="w-full mx-auto">
            <div className="bg-white">
                <div className="space-y-6">
                    {/* Assignment Title */}
                    <div>
                        <label htmlFor="title" className="block text-xs font-semibold text-black mb-2">
                            Assignment Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            placeholder="Enter your assignment title"
                            value={formData.title}
                            onChange={(e) => handleInputChange('title', e.target.value)}
                            className="w-full px-3 py-3 border border-gray-300 rounded-md text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                        />
                    </div>

                    {/* Assignment Description */}
                    <div>
                        <label htmlFor="description" className="block text-xs font-semibold text-black mb-2">
                            Assignment Description
                        </label>
                        <textarea
                            id="description"
                            rows={6}
                            placeholder="Enter your assignment description"
                            value={formData.description}
                            onChange={(e) => handleInputChange('description', e.target.value)}
                            className="w-full px-3 py-3 border border-gray-300 rounded-md text-sm placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                        />
                    </div>

                    {/* File Upload */}
                    <div>
                        <label className="block text-xs font-semibold text-black mb-2">
                            File Upload
                        </label>
                        <div
                            className={`relative border-2 border-dashed rounded-md p-8 text-center transition-colors ${dragActive
                                ? 'border-black bg-gray-50'
                                : 'border-gray-300 hover:border-gray-400'
                                }`}
                            onDragEnter={handleDrag}
                            onDragLeave={handleDrag}
                            onDragOver={handleDrag}
                            onDrop={handleDrop}
                        >
                            <input
                                type="file"
                                onChange={handleFileChange}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                accept=".pdf,.doc,.docx,.txt"
                            />
                            <Upload className="mx-auto h-8 w-8 text-gray-400 mb-3" />
                            <p className="text-sm text-gray-400">
                                {formData.file ? formData.file.name : 'Upload your assignment document'}
                            </p>
                        </div>
                    </div>

                    {/* Department */}
                    <div>
                        <label htmlFor="department" className="block text-xs font-semibold text-black mb-2">
                            Department
                        </label>
                        <div className="relative">
                            <select
                                id="department"
                                value={formData.department}
                                onChange={(e) => handleInputChange('department', e.target.value)}
                                className="w-full px-3 py-3 border border-gray-300 rounded-md text-sm text-gray-400 bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent pr-10"
                            >
                                <option value="">Select your department</option>
                                <option value="computer-science">Computer Science</option>
                                <option value="engineering">Engineering</option>
                                <option value="business">Business</option>
                                <option value="arts">Arts</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                        </div>
                    </div>

                    {/* Course/Subject */}
                    <div>
                        <label htmlFor="courseSubject" className="block text-xs font-semibold text-black mb-2">
                            Course / Subject
                        </label>
                        <div className="relative">
                            <select
                                id="courseSubject"
                                value={formData.courseSubject}
                                onChange={(e) => handleInputChange('courseSubject', e.target.value)}
                                className="w-full px-3 py-3 border border-gray-300 rounded-md text-sm text-gray-400 bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent pr-10"
                            >
                                <option value="">Select your course or subject</option>
                                <option value="mathematics">Mathematics</option>
                                <option value="physics">Physics</option>
                                <option value="chemistry">Chemistry</option>
                                <option value="biology">Biology</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                        </div>
                    </div>

                    {/* Bottom Row - Three Select Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {/* Writing Style */}
                        <div>
                            <label htmlFor="writingStyle" className="block text-xs font-semibold text-black mb-2">
                                Writing Style
                            </label>
                            <div className="relative">
                                <select
                                    id="writingStyle"
                                    value={formData.writingStyle}
                                    onChange={(e) => handleInputChange('writingStyle', e.target.value)}
                                    className="w-full px-3 py-3 border border-gray-300 rounded-md text-sm text-gray-400 bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent pr-10"
                                >
                                    <option value="">Select your writing style</option>
                                    <option value="apa">APA</option>
                                    <option value="mla">MLA</option>
                                    <option value="chicago">Chicago</option>
                                    <option value="harvard">Harvard</option>
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                            </div>
                        </div>

                        {/* Page Count */}
                        <div>
                            <label htmlFor="pageCount" className="block text-xs font-semibold text-black mb-2">
                                Page Count
                            </label>
                            <div className="relative">
                                <select
                                    id="pageCount"
                                    value={formData.pageCount}
                                    onChange={(e) => handleInputChange('pageCount', e.target.value)}
                                    className="w-full px-3 py-3 border border-gray-300 rounded-md text-sm text-gray-400 bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent pr-10"
                                >
                                    <option value="">Select your page count</option>
                                    <option value="1-5">1-5 pages</option>
                                    <option value="6-10">6-10 pages</option>
                                    <option value="11-20">11-20 pages</option>
                                    <option value="20+">20+ pages</option>
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                            </div>
                        </div>

                        {/* Delivery Urgency */}
                        <div className="sm:col-span-2 lg:col-span-1">
                            <label htmlFor="deliveryUrgency" className="block text-xs font-semibold text-black mb-2">
                                Delivery Urgency
                            </label>
                            <div className="relative">
                                <select
                                    id="deliveryUrgency"
                                    value={formData.deliveryUrgency}
                                    onChange={(e) => handleInputChange('deliveryUrgency', e.target.value)}
                                    className="w-full px-3 py-3 border border-gray-300 rounded-md text-sm text-gray-400 bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent pr-10"
                                >
                                    <option value="">Select your delivery urgency</option>
                                    <option value="24-hours">24 hours</option>
                                    <option value="48-hours">48 hours</option>
                                    <option value="1-week">1 week</option>
                                    <option value="2-weeks">2 weeks</option>
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}