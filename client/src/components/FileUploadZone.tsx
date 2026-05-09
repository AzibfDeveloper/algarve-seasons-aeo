import { useRef, useState } from "react";
import { Upload, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

interface FileUploadZoneProps {
  category?: string;
  onUploadSuccess?: (fileId: number, url: string) => void;
  accept?: string;
}

export default function FileUploadZone({
  category = "general",
  onUploadSuccess,
  accept = "*",
}: FileUploadZoneProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const uploadMutation = trpc.files.upload.useMutation({
    onSuccess: (data) => {
      toast.success("File uploaded successfully!");
      setSelectedFile(null);
      setIsUploading(false);
      onUploadSuccess?.(data.fileId, data.url);
    },
    onError: (error) => {
      toast.error(error.message || "Upload failed");
      setIsUploading(false);
    },
  });

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      setSelectedFile(files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      toast.error("Please select a file");
      return;
    }

    // Validate file size (50MB max)
    const MAX_SIZE = 50 * 1024 * 1024;
    if (selectedFile.size > MAX_SIZE) {
      toast.error("File size exceeds 50MB limit");
      return;
    }

    setIsUploading(true);

    try {
      const buffer = await selectedFile.arrayBuffer();
      uploadMutation.mutate({
        fileName: selectedFile.name,
        fileData: Buffer.from(buffer),
        mimeType: selectedFile.type,
        category,
      });
    } catch (error) {
      toast.error("Failed to read file");
      setIsUploading(false);
    }
  };

  return (
    <div className="w-full">
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
          isDragging
            ? "border-primary bg-primary/5"
            : "border-border hover:border-primary/50"
        }`}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept={accept}
          onChange={handleFileSelect}
          className="hidden"
        />

        {selectedFile ? (
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-2">
              <Upload className="w-6 h-6 text-primary" />
              <span className="font-medium">{selectedFile.name}</span>
              <button
                onClick={() => setSelectedFile(null)}
                disabled={isUploading}
                className="ml-2"
              >
                <X className="w-4 h-4 text-muted-foreground hover:text-foreground" />
              </button>
            </div>
            <div className="text-sm text-muted-foreground">
              {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
            </div>
            <div className="flex gap-2 justify-center">
              <Button
                onClick={handleUpload}
                disabled={isUploading}
                className="bg-primary hover:bg-primary/90"
              >
                {isUploading ? "Uploading..." : "Upload"}
              </Button>
              <Button
                onClick={() => {
                  setSelectedFile(null);
                  fileInputRef.current?.click();
                }}
                disabled={isUploading}
                variant="outline"
              >
                Choose Different File
              </Button>
            </div>
          </div>
        ) : (
          <div
            onClick={() => fileInputRef.current?.click()}
            className="cursor-pointer space-y-2"
          >
            <Upload className="w-8 h-8 mx-auto text-muted-foreground" />
            <div className="font-medium">
              Drag and drop your file here, or click to select
            </div>
            <div className="text-sm text-muted-foreground">
              Maximum file size: 50MB
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
