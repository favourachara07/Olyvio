"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { User, Mail, Phone, MapPin, Briefcase, GraduationCap, Upload, X, Check } from "lucide-react";

interface ProfileFormData {
  profilePicture: File | null;
  bio: string;
  phoneNumber: string;
  location: string;
  education: string;
  workExperience: string;
  skills: string;
  interests: string[];
}

interface CompleteProfileProps {
  onComplete: () => void;
}

const CompleteProfile: React.FC<CompleteProfileProps> = ({ onComplete }) => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [formData, setFormData] = useState<ProfileFormData>({
    profilePicture: null,
    bio: "",
    phoneNumber: "",
    location: "",
    education: "",
    workExperience: "",
    skills: "",
    interests: []
  });

  const steps = [
    { id: 1, name: 'Profile Picture & Bio', status: 'current' },
    { id: 2, name: 'Contact & Details', status: 'upcoming' },
  ];

  const interestsList = [
    'Mathematics', 'Computer Science', 'Physics', 'Biology', 'Chemistry',
    'Engineering', 'Business', 'Arts', 'Humanities', 'Social Sciences',
    'Health Sciences', 'Law', 'Education', 'Other'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData(prev => ({
        ...prev,
        profilePicture: file
      }));
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const toggleInterest = (interest: string) => {
    setFormData(prev => {
      const interests = [...prev.interests];
      const index = interests.indexOf(interest);
      
      if (index > -1) {
        interests.splice(index, 1);
      } else {
        interests.push(interest);
      }
      
      return {
        ...prev,
        interests
      };
    });
  };

  const nextStep = () => setCurrentStep(prev => prev + 1);
  const prevStep = () => setCurrentStep(prev => prev - 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (currentStep < steps.length) {
      nextStep();
      return;
    }

    setIsLoading(true);
    
    try {
      // TODO: Replace with actual API call
      const formDataToSend = new FormData();
      if (formData.profilePicture) {
        formDataToSend.append('profilePicture', formData.profilePicture);
      }
      Object.entries(formData).forEach(([key, value]) => {
        if (key !== 'profilePicture') {
          formDataToSend.append(key, value as string);
        }
      });
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Call the onComplete callback after successful profile completion
      onComplete();
    } catch (error) {
      console.error('Profile update failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <div className="mx-auto h-32 w-32 relative">
                <div className="h-full w-full rounded-full bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center overflow-hidden">
                  {previewImage ? (
                    <img
                      src={previewImage}
                      alt="Profile preview"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="text-center">
                      <User className="h-12 w-12 text-gray-400 mx-auto" />
                      <span className="text-xs text-gray-500">Add photo</span>
                    </div>
                  )}
                </div>
                <label
                  htmlFor="profile-picture"
                  className="absolute -bottom-2 -right-2 bg-white p-2 rounded-full shadow-md cursor-pointer hover:bg-gray-50"
                >
                  <Upload className="h-5 w-5 text-indigo-600" />
                  <input
                    id="profile-picture"
                    name="profilePicture"
                    type="file"
                    accept="image/*"
                    className="sr-only"
                    onChange={handleImageChange}
                  />
                </label>
                {previewImage && (
                  <button
                    type="button"
                    onClick={() => {
                      setPreviewImage(null);
                      setFormData(prev => ({ ...prev, profilePicture: null }));
                    }}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">
                Bio
              </label>
              <textarea
                id="bio"
                name="bio"
                rows={4}
                value={formData.bio}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Tell us about yourself..."
              />
              <p className="mt-1 text-xs text-gray-500">
                A brief introduction about yourself (max 500 characters)
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Areas of Interest (Select at least one)
              </label>
              <div className="flex flex-wrap gap-2">
                {interestsList.map((interest) => (
                  <button
                    key={interest}
                    type="button"
                    onClick={() => toggleInterest(interest)}
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      formData.interests.includes(interest)
                        ? 'bg-indigo-100 text-indigo-800 border border-indigo-200'
                        : 'bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    {interest}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Phone className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="tel"
                  name="phoneNumber"
                  id="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MapPin className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="location"
                  id="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder="City, Country"
                />
              </div>
            </div>

            <div>
              <label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-1">
                Education
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <GraduationCap className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="education"
                  id="education"
                  value={formData.education}
                  onChange={handleChange}
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder="Degree, Institution, Year"
                />
              </div>
            </div>

            <div>
              <label htmlFor="workExperience" className="block text-sm font-medium text-gray-700 mb-1">
                Work Experience
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Briefcase className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="workExperience"
                  id="workExperience"
                  value={formData.workExperience}
                  onChange={handleChange}
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder="Current/Most recent position"
                />
              </div>
            </div>

            <div>
              <label htmlFor="skills" className="block text-sm font-medium text-gray-700 mb-1">
                Skills
              </label>
              <input
                type="text"
                name="skills"
                id="skills"
                value={formData.skills}
                onChange={handleChange}
                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="List your key skills separated by commas"
              />
              <p className="mt-1 text-xs text-gray-500">
                Example: Research, Data Analysis, Academic Writing, MATLAB, Python
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Complete Your Profile</h2>
        <p className="mt-2 text-sm text-gray-600">
          {currentStep === 1 
            ? "Help us get to know you better" 
            : "A few more details to personalize your experience"}
        </p>
      </div>

      <div className="mb-8">
        <nav aria-label="Progress">
          <ol role="list" className="flex items-center">
            {steps.map((step, stepIdx) => (
              <li 
                key={step.name} 
                className={`${stepIdx !== steps.length - 1 ? 'w-full' : ''} relative`}
              >
                <div className="flex items-center">
                  <div
                    className={`flex items-center justify-center w-8 h-8 rounded-full ${
                      step.id < currentStep
                        ? 'bg-indigo-600'
                        : step.id === currentStep
                        ? 'border-2 border-indigo-600 bg-white'
                        : 'border-2 border-gray-300 bg-white'
                    }`}
                  >
                    {step.id < currentStep ? (
                      <Check className="w-5 h-5 text-white" />
                    ) : step.id === currentStep ? (
                      <span className="h-2.5 w-2.5 rounded-full bg-indigo-600"></span>
                    ) : (
                      <span className="h-2.5 w-2.5 rounded-full bg-gray-300"></span>
                    )}
                  </div>
                  {stepIdx !== steps.length - 1 && (
                    <div className="flex-1 h-0.5 mx-2 bg-gray-200">
                      <div 
                        className={`h-full ${step.id <= currentStep ? 'bg-indigo-600' : 'bg-gray-200'}`}
                        style={{ width: step.id <= currentStep ? '100%' : '0%' }}
                      ></div>
                    </div>
                  )}
                </div>
                <div className="mt-2 text-center">
                  <span 
                    className={`text-xs font-medium ${
                      step.id <= currentStep ? 'text-indigo-600' : 'text-gray-500'
                    }`}
                  >
                    {step.name}
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </nav>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-8">
          {renderStep()}
        </div>

        <div className="flex justify-between pt-4 border-t border-gray-200">
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={prevStep}
              className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              disabled={isLoading}
            >
              Back
            </button>
          ) : (
            <div></div>
          )}
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
            disabled={isLoading || (currentStep === 1 && formData.interests.length === 0)}
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {currentStep === steps.length ? 'Saving...' : 'Continue'}
              </>
            ) : (
              <>{currentStep === steps.length ? 'Complete Profile' : 'Continue'}</>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CompleteProfile;
