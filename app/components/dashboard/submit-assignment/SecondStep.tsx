import { Upload, ChevronDown } from "lucide-react";
import { useState, ChangeEvent } from "react";
import Select from "../../ui/Select";

type FormData = {
    title: string;
    description: string;
    file: File | null;
    department: string;
    proofreading: string;
    plagiarism: string;
    executiveSummary: string;
    presentationSlides: string;
    courseSubject: string;
    writingStyle: string;
    pageCount: string;
    deliveryUrgency: string;
    coverPageStyle: string;
};

export default function SecondStep() {
    const [formData, setFormData] = useState<FormData>({
        title: '',
        description: '',
        file: null,
        proofreading: '',
        executiveSummary: '',
        department: '',
        plagiarism: '',
        courseSubject: '',
        writingStyle: '',
        presentationSlides:'',
        pageCount: '',
        deliveryUrgency: '',
        coverPageStyle: ''
    });

    const [dragActive, setDragActive] = useState(false);

    // Cover page options with placeholder images
    const coverPageOptions = [
        { id: 'modern', name: 'Modern', image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=600&fit=crop&crop=center' },
        { id: 'academic', name: 'Academic', image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop&crop=center' },
        { id: 'business', name: 'Business', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=600&fit=crop&crop=center' },
        { id: 'creative', name: 'Creative', image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=600&fit=crop&crop=center' },
        { id: 'minimal', name: 'Minimal', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=600&fit=crop&crop=center' },
        { id: 'scientific', name: 'Scientific', image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=600&fit=crop&crop=center' }
    ];

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
                    <Select
                        id="plagiarism"
                        label="Plagiarism Report"
                        value=""
                        onChange={(value) => handleInputChange('plagiarism', value)}
                        options={[
                            { label: "Yes", value: "yes" },
                            { label: "No", value: "no" },
                        ]}
                        placeholder="Do you want a plagiarism check?"
                    />
                    <Select
                        id="proofreading"
                        label="Proofreading"
                        value=""
                        onChange={(value) => handleInputChange('proofreading', value)}
                        options={[
                            { label: "Yes", value: "yes" },
                            { label: "No", value: "no" },
                        ]}
                        placeholder="Do you want your work proofread?"
                    />
                    <Select
                        id="executive-summary"
                        label="Executive Summary"
                        value=""
                        onChange={(value) => handleInputChange('executiveSummary', value)}
                        options={[
                            { label: "Yes", value: "yes" },
                            { label: "No", value: "no" },
                        ]}
                        placeholder="Do you want an executive summary of your work"
                    />
                    <Select
                        id="slides"
                        label="Presentation Slides"
                        value=""
                        onChange={(value) => handleInputChange('presentationSlides', value)}
                        options={[
                            { label: "Yes", value: "yes" },
                            { label: "No", value: "no" },
                        ]}
                        placeholder="Do you want an executive summary of your work"
                    />

                    {/* Cover Page Options */}
                    <div>
                        <label htmlFor="coverPage" className="block text-xs font-semibold text-black mb-2">
                            Cover Page Options
                        </label>
                        <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-10 gap-4">
                            {coverPageOptions.map((option, idx) => (
                                <div
                                    key={idx}
                                    className={`relative w-full h-36 md:h-40 rounded-md border-2 cursor-pointer transition-all duration-200 overflow-hidden ${formData.coverPageStyle === option.id
                                        ? 'border-black shadow-lg'
                                        : 'border-gray-300 hover:border-gray-400 hover:shadow-md'
                                        }`}
                                    onClick={() => handleInputChange('coverPageStyle', option.id)}
                                >
                                    <div
                                        className="w-full h-full bg-cover bg-center"
                                        style={{ backgroundImage: `url(${option.image})` }}
                                    >
                                        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-end">
                                            <div className="p-2 w-full">
                                                <p className="text-white text-xs font-medium truncate">
                                                    {option.name}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {formData.coverPageStyle === option.id && (
                                        <div className="absolute top-2 right-2 w-4 h-4 bg-black rounded-full flex items-center justify-center">
                                            <div className="w-2 h-2 bg-white rounded-full"></div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}