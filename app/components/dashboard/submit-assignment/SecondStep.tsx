import { Upload, ChevronDown } from "lucide-react";
import { ChangeEvent, DragEvent } from "react";
import { Select } from "../../ui/Select";

// Define the form data type for the second step
type SecondStepFormData = {
    title: string;
    description: string;
    file: File | null;
    department: string;
    proofreading: boolean;
    plagiarism: boolean;
    executiveSummary: boolean;
    presentationSlides: boolean;
    courseSubject: string;
    writingStyle: string;
    pageCount: string;
    deliveryUrgency: string;
    coverPageStyle: string;
    [key: string]: any; // For any additional fields
};

type SecondStepProps = {
    formData: SecondStepFormData;
    onInputChange: <K extends keyof SecondStepFormData>(field: K, value: SecondStepFormData[K]) => void;
    onFileUpload: (e: ChangeEvent<HTMLInputElement>) => void;
    onDrag: (e: DragEvent<HTMLDivElement>) => void;
    onDrop: (e: DragEvent<HTMLDivElement>) => void;
    dragActive: boolean;
    errors: Record<string, string>;
};

export default function SecondStep({
    formData,
    onInputChange,
    onFileUpload,
    onDrag,
    onDrop,
    dragActive,
    errors
}: SecondStepProps) {

    // Cover page options with placeholder images
    const coverPageOptions = [
        { id: 'modern', name: 'Modern', image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=600&fit=crop&crop=center' },
        { id: 'academic', name: 'Academic', image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop&crop=center' },
        { id: 'business', name: 'Business', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=600&fit=crop&crop=center' },
        { id: 'creative', name: 'Creative', image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=600&fit=crop&crop=center' },
        { id: 'minimal', name: 'Minimal', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=600&fit=crop&crop=center' },
        { id: 'scientific', name: 'Scientific', image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=600&fit=crop&crop=center' }
    ];

    const handleInputChange = <K extends keyof SecondStepFormData>(field: K, value: SecondStepFormData[K]) => {
        onInputChange(field, value);
    };

    const handleCheckboxChange = (field: string, checked: boolean) => {
        onInputChange(field, checked);
    };

    // Helper function to safely handle checkbox values
    const getCheckboxValue = (value: any): boolean => {
        return value === true || value === 'true' || value === 'yes';
    };

    const handleDrag = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            onDrag(e);
        } else if (e.type === "dragleave") {
            // No need to set dragActive here as it's managed by the parent
        }
    };

    const handleDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        onDrop(e);
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        onFileUpload(e);
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
                        value={formData.plagiarism ? 'yes' : 'no'}
                        onChange={(value) => handleInputChange('plagiarism', value === 'yes')}
                        options={[
                            { label: "Yes", value: "yes" },
                            { label: "No", value: "no" },
                        ]}
                        placeholder="Do you want a plagiarism check?"
                    />
                    <Select
                        id="proofreading"
                        label="Proofreading"
                        value={formData.proofreading ? 'yes' : 'no'}
                        onChange={(value) => handleCheckboxChange('proofreading', value === 'yes')}
                        options={[
                            { label: "Yes", value: "yes" },
                            { label: "No", value: "no" },
                        ]}
                        placeholder="Do you want your work proofread?"
                    />
                    <Select
                        id="executive-summary"
                        label="Executive Summary"
                        value={formData.executiveSummary ? 'yes' : 'no'}
                        onChange={(value) => handleInputChange('executiveSummary', value === 'yes')}
                        options={[
                            { label: "Yes", value: "yes" },
                            { label: "No", value: "no" },
                        ]}
                        placeholder="Do you want an executive summary of your work"
                    />
                    <Select
                        id="slides"
                        label="Presentation Slides"
                        value={formData.presentationSlides ? 'yes' : 'no'}
                        onChange={(value) => handleInputChange('presentationSlides', value === 'yes')}
                        options={[
                            { label: "Yes", value: "yes" },
                            { label: "No", value: "no" },
                        ]}
                        placeholder="Do you want presentation slides for your work"
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