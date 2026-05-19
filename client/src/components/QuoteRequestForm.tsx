import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { trpc } from "@/lib/trpc";
import { Upload, X, CheckCircle } from "lucide-react";

export default function QuoteRequestForm() {
  const [formData, setFormData] = useState({
    customerName: "",
    customerEmail: "",
    customerPhone: "",
    serviceType: "air-conditioning" as const,
    propertyType: "villa" as const,
    propertySize: "",
    location: "",
    description: "",
  });

  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const submitMutation = trpc.quotes.submit.useMutation();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value as any }));
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file");
      return;
    }

    // Validate file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      toast.error("File size must be less than 10MB");
      return;
    }

    setUploadedFile(file);
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreviewUrl(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveFile = () => {
    setUploadedFile(null);
    setPreviewUrl("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.customerName || !formData.customerEmail || !formData.customerPhone || !formData.location) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      // Submit the quote request
      const result = await submitMutation.mutateAsync({
        ...formData,
        photoFileKey: undefined,
        photoUrl: undefined,
      });

      if (result.success) {
        setIsSuccess(true);
        toast.success("Quote request submitted successfully! We'll contact you soon.");
        
        // Reset form after 2 seconds
        setTimeout(() => {
          setFormData({
            customerName: "",
            customerEmail: "",
            customerPhone: "",
            serviceType: "air-conditioning",
            propertyType: "villa",
            propertySize: "",
            location: "",
            description: "",
          });
          setUploadedFile(null);
          setPreviewUrl("");
          setIsSuccess(false);
        }, 2000);
      }
    } catch (error) {
      console.error("Quote submission failed:", error);
      toast.error("Failed to submit quote request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardContent className="pt-12 pb-12 text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Quote Request Submitted!</h3>
          <p className="text-gray-600">
            Thank you for your interest. Our team will review your request and contact you shortly.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Request a Quote</CardTitle>
        <CardDescription>
          Tell us about your property and the services you're interested in. Upload photos to help us provide accurate estimates.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Customer Information */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Your Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="customerName">Full Name *</Label>
                <Input
                  id="customerName"
                  name="customerName"
                  value={formData.customerName}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="customerEmail">Email *</Label>
                <Input
                  id="customerEmail"
                  name="customerEmail"
                  type="email"
                  value={formData.customerEmail}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="customerPhone">Phone Number *</Label>
              <Input
                id="customerPhone"
                name="customerPhone"
                type="tel"
                value={formData.customerPhone}
                onChange={handleInputChange}
                placeholder="+351 912 345 678"
                required
              />
            </div>
          </div>

          {/* Property Information */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Property Details</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="propertyType">Property Type *</Label>
                <Select value={formData.propertyType} onValueChange={(value) => handleSelectChange("propertyType", value)}>
                  <SelectTrigger id="propertyType">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="villa">Villa</SelectItem>
                    <SelectItem value="apartment">Apartment</SelectItem>
                    <SelectItem value="house">House</SelectItem>
                    <SelectItem value="commercial">Commercial</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="propertySize">Property Size (m²)</Label>
                <Input
                  id="propertySize"
                  name="propertySize"
                  type="number"
                  value={formData.propertySize}
                  onChange={handleInputChange}
                  placeholder="e.g., 150"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location *</Label>
              <Input
                id="location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                placeholder="e.g., Albufeira, Algarve"
                required
              />
            </div>
          </div>

          {/* Service Information */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Services Needed</h3>
            
            <div className="space-y-2">
              <Label htmlFor="serviceType">Service Type *</Label>
              <Select value={formData.serviceType} onValueChange={(value) => handleSelectChange("serviceType", value)}>
                <SelectTrigger id="serviceType">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="air-conditioning">Air Conditioning</SelectItem>
                  <SelectItem value="solar">Solar Energy</SelectItem>
                  <SelectItem value="heat-pump">Heat Pump</SelectItem>
                  <SelectItem value="multiple">Multiple Services</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Additional Details</Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Tell us more about your needs, current system, or any specific requirements..."
                rows={4}
              />
            </div>
          </div>

          {/* File Upload */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Property Photos</h3>
            
            {!uploadedFile ? (
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition">
                <label htmlFor="photoUpload" className="cursor-pointer">
                  <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                  <p className="text-sm font-medium text-gray-700">Click to upload or drag and drop</p>
                  <p className="text-xs text-gray-500 mt-1">PNG, JPG, GIF up to 10MB</p>
                  <input
                    id="photoUpload"
                    type="file"
                    accept="image/*"
                    onChange={handleFileSelect}
                    className="hidden"
                  />
                </label>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="relative w-full h-48 bg-gray-100 rounded-lg overflow-hidden">
                  <img src={previewUrl} alt="Preview" loading="lazy" className="w-full h-full object-cover" />
                  <button
                    type="button"
                    onClick={handleRemoveFile}
                    className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-sm text-gray-600">{uploadedFile.name}</p>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Quote Request"}
          </Button>

          <p className="text-xs text-gray-500 text-center">
            We'll review your request and contact you within 24 hours.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
