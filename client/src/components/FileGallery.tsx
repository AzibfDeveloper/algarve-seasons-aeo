import { Download, Trash2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { useEffect, useState } from "react";

interface FileGalleryProps {
  category?: string;
  limit?: number;
}

export default function FileGallery({
  category,
  limit = 20,
}: FileGalleryProps) {
  const [offset, setOffset] = useState(0);

  const { data, isLoading, refetch } = trpc.files.list.useQuery({
    category,
    limit,
    offset,
  });

  const deleteMutation = trpc.files.delete.useMutation({
    onSuccess: () => {
      toast.success("File deleted successfully");
      refetch();
    },
    onError: (error) => {
      toast.error(error.message || "Delete failed");
    },
  });

  const handleDownloadUrl = async (fileId: number) => {
    try {
      const response = await fetch("/api/trpc/files.getDownloadUrl?input=" + JSON.stringify({ fileId }));
      const data = await response.json();
      if (data.result?.data?.url) {
        window.open(data.result.data.url, "_blank");
      }
    } catch (error) {
      toast.error("Download failed");
    }
  };

  const handleDelete = (fileId: number) => {
    if (confirm("Are you sure you want to delete this file?")) {
      deleteMutation.mutate({ fileId });
    }
  };

  const handleDownload = (fileId: number) => {
    handleDownloadUrl(fileId);
  };

  const formatFileSize = (bytes: number | null) => {
    if (!bytes) return "Unknown";
    const kb = bytes / 1024;
    if (kb < 1024) return `${kb.toFixed(2)} KB`;
    const mb = kb / 1024;
    return `${mb.toFixed(2)} MB`;
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <Loader2 className="w-6 h-6 animate-spin text-primary" />
      </div>
    );
  }

  if (!data || data.files.length === 0) {
    return (
      <div className="text-center p-8 text-muted-foreground">
        <p>No files uploaded yet</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="grid gap-4">
        {data.files.map((file) => (
          <Card key={file.id} className="p-4">
            <div className="flex items-center justify-between gap-4">
              <div className="flex-1 min-w-0">
                <h3 className="font-medium truncate">{file.fileName}</h3>
                <div className="flex gap-4 text-sm text-muted-foreground mt-1">
                  <span>{formatFileSize(file.fileSize)}</span>
                  <span>{formatDate(file.createdAt)}</span>
                  {file.category && (
                    <span className="px-2 py-1 bg-secondary/10 text-secondary rounded text-xs font-medium">
                      {file.category}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleDownload(file.id)}
                >
                  <Download className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => handleDelete(file.id)}
                  disabled={deleteMutation.isPending}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      {data.total > limit && (
        <div className="flex justify-between items-center mt-6">
          <Button
            variant="outline"
            onClick={() => setOffset(Math.max(0, offset - limit))}
            disabled={offset === 0}
          >
            Previous
          </Button>
          <span className="text-sm text-muted-foreground">
            Showing {offset + 1} to {Math.min(offset + limit, data.total)} of{" "}
            {data.total} files
          </span>
          <Button
            variant="outline"
            onClick={() => setOffset(offset + limit)}
            disabled={offset + limit >= data.total}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
}
