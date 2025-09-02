import { Upload, ChevronDown } from "lucide-react";
import { useState, useRef, ChangeEvent } from "react";
import Input from "@/app/components/ui/Input";
import Select from "../../ui/Select";

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
                    <Input
                        label="Assignment Title"
                        id="title"
                        type="text"
                        placeholder="Enter your assignment title"
                        value={formData.title}
                        onChange={(e) => handleInputChange('title', e.target.value)}
                    />

                    {/* Assignment Description */}
                    <Input
                        label="Assignment Description"
                        id="description"
                        textarea
                        rows={6}
                        placeholder="Enter your assignment description"
                        value={formData.description}
                        onChange={(e) => handleInputChange('description', e.target.value)}
                    />

                    {/* File Upload */}
                    <div>
                        <label className="block text-xs font-semibold text-black mb-2">
                            File Upload
                        </label>
                        <div
                            className={`relative border-2 border-dashed rounded-md p-8 text-center transition-colors ${dragActive
                                ? 'border-black bg-gray-50'
                                : 'border-[#D9D9D9] hover:border-gray-400'
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
                            <Upload className="mx-auto size-6 md:size-8 text-[#6C6C6C] mb-3" />
                            <p className="text-sm text-[#6C6C6C]">
                                {formData.file ? formData.file.name : 'Upload your assignment document'}
                            </p>
                        </div>
                    </div>

                    {/* Department */}
                    <Select
                        id="department"
                        label="Department"
                        value=""
                        onChange={(value) => handleInputChange('department', value)}
                        options={[
                            { label: "Computer Science", value: "computer_science" },
                            { label: "Mathematics", value: "mathematics" },
                            { label: "Physics", value: "physics" },
                            { label: "Chemistry", value: "chemistry" },
                            { label: "Biology", value: "biology" },
                            { label: "Economics", value: "economics" },
                            { label: "Business", value: "business" },
                            { label: "Engineering", value: "engineering" },
                            { label: "Medicine", value: "medicine" },
                            { label: "Law", value: "law" },
                            { label: "Arts", value: "arts" },
                            { label: "History", value: "history" },
                            { label: "Psychology", value: "psychology" },
                            { label: "Sociology", value: "sociology" },
                            { label: "Political Science", value: "political_science" },
                        ]}
                        placeholder="Select Department"
                    />

                    {/* Course/Subject */}
                    <Select
                        id="courseSubject"
                        label="Course / Subject"
                        value=""
                        onChange={(value) => handleInputChange('courseSubject', value)}
                        options={[
                            { label: "Computer Science", value: "computer_science" },
                            { label: "Mathematics", value: "mathematics" },
                            { label: "Physics", value: "physics" },
                            { label: "Chemistry", value: "chemistry" },
                            { label: "Biology", value: "biology" },
                            { label: "Economics", value: "economics" },
                            { label: "Business", value: "business" },
                            { label: "Engineering", value: "engineering" },
                            { label: "Medicine", value: "medicine" },
                            { label: "Law", value: "law" },
                            { label: "Arts", value: "arts" },
                            { label: "History", value: "history" },
                            { label: "Psychology", value: "psychology" },
                            { label: "Sociology", value: "sociology" },
                            { label: "Political Science", value: "political_science" },
                        ]}
                        placeholder="Select your course or subject"
                    />

                    {/* Bottom Row - Three Select Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {/* Writing Style */}
                        <Select
                            id="writingStyle"
                            label="Writing Style"
                            value=""
                            onChange={(value) => handleInputChange('writingStyle', value)}
                            options={[
                                { label: "APA", value: "apa" },
                                { label: "MLA", value: "mla" },
                                { label: "Chicago", value: "chicago" },
                                { label: "Harvard", value: "harvard" },
                            ]}
                            placeholder="Select your course or subject"
                        />

                        {/* Page Count */}
                        <Select
                            id="pageCount"
                            label="Page Count"
                            value=""
                            onChange={(value) => handleInputChange('pageCount', value)}
                            options={[
                                { label: "1-5 pages", value: "1-5" },
                                { label: "6-10 pages", value: "6-10" },
                                { label: "11-20 pages", value: "11-20" },
                                { label: "20+ pages", value: "20+" },
                            ]}
                            placeholder="Select your course or subject"
                        />

                        {/* Delivery Urgency */}
                        <Select
                            id="deliveryUrgency"
                            label="Delivery Urgency"
                            value=""
                            onChange={(value) => handleInputChange('deliveryUrgency', value)}
                            options={[
                                { label: "24 hours", value: "24-hours" },
                                { label: "48 hours", value: "48-hours" },
                                { label: "1 week", value: "1-week" },
                                { label: "2 weeks", value: "2-weeks" },
                            ]}
                            placeholder="Select your course or subject"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}