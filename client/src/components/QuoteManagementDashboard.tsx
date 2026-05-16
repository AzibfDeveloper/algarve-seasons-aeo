import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { Mail, Phone, MapPin, FileText, Calendar, AlertCircle } from "lucide-react";

export default function QuoteManagementDashboard() {
  const [selectedStatus, setSelectedStatus] = useState<string | undefined>(undefined);
  const [selectedQuote, setSelectedQuote] = useState<any>(null);
  const [updateStatus, setUpdateStatus] = useState<string>("");
  const [updateNotes, setUpdateNotes] = useState<string>("");
  const [isUpdating, setIsUpdating] = useState(false);

  const { data: quotesData, isLoading, refetch } = trpc.quotes.list.useQuery({
    status: selectedStatus as any,
    limit: 50,
    offset: 0,
  });

  const updateMutation = trpc.quotes.updateStatus.useMutation();

  const handleSelectQuote = (quote: any) => {
    setSelectedQuote(quote);
    setUpdateStatus(quote.status);
    setUpdateNotes(quote.notes || "");
  };

  const handleUpdateStatus = async () => {
    if (!selectedQuote) return;

    setIsUpdating(true);
    try {
      await updateMutation.mutateAsync({
        id: selectedQuote.id,
        status: updateStatus as any,
        notes: updateNotes,
      });

      toast.success("Quote request updated successfully");
      setSelectedQuote(null);
      refetch();
    } catch (error) {
      console.error("Update failed:", error);
      toast.error("Failed to update quote request");
    } finally {
      setIsUpdating(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new":
        return "bg-blue-100 text-blue-800";
      case "contacted":
        return "bg-yellow-100 text-yellow-800";
      case "quoted":
        return "bg-green-100 text-green-800";
      case "closed":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getServiceTypeLabel = (serviceType: string) => {
    switch (serviceType) {
      case "air-conditioning":
        return "Air Conditioning";
      case "solar":
        return "Solar Energy";
      case "heat-pump":
        return "Heat Pump";
      case "multiple":
        return "Multiple Services";
      default:
        return serviceType;
    }
  };

  const getPropertyTypeLabel = (propertyType: string) => {
    return propertyType.charAt(0).toUpperCase() + propertyType.slice(1);
  };

  if (isLoading) {
    return (
      <Card>
        <CardContent className="pt-12 pb-12 text-center">
          <p className="text-gray-600">Loading quote requests...</p>
        </CardContent>
      </Card>
    );
  }

  const quotes = quotesData?.quotes || [];
  const total = quotesData?.total || 0;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Quote Management</h1>
        <p className="text-gray-600 mt-2">Manage customer quote requests and track their status</p>
      </div>

      {/* Filter */}
      <Card>
        <CardHeader>
          <CardTitle>Filter Requests</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <Select value={selectedStatus || ""} onValueChange={(value) => setSelectedStatus(value || undefined)}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="All Statuses" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Statuses</SelectItem>
                <SelectItem value="new">New</SelectItem>
                <SelectItem value="contacted">Contacted</SelectItem>
                <SelectItem value="quoted">Quoted</SelectItem>
                <SelectItem value="closed">Closed</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" onClick={() => refetch()}>
              Refresh
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Quote Requests List */}
      <Card>
        <CardHeader>
          <CardTitle>Quote Requests ({total})</CardTitle>
          <CardDescription>
            {selectedStatus ? `Showing ${quotes.length} ${selectedStatus} requests` : `Showing ${quotes.length} of ${total} requests`}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {quotes.length === 0 ? (
            <div className="text-center py-12">
              <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">No quote requests found</p>
            </div>
          ) : (
            <div className="space-y-4">
              {quotes.map((quote: any) => (
                <div
                  key={quote.id}
                  className="border rounded-lg p-4 hover:bg-gray-50 transition cursor-pointer"
                  onClick={() => handleSelectQuote(quote)}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-semibold text-lg">{quote.customerName}</h3>
                      <p className="text-sm text-gray-600">{getServiceTypeLabel(quote.serviceType)}</p>
                    </div>
                    <Badge className={getStatusColor(quote.status)}>
                      {quote.status.charAt(0).toUpperCase() + quote.status.slice(1)}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Mail className="w-4 h-4" />
                      {quote.customerEmail}
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Phone className="w-4 h-4" />
                      {quote.customerPhone}
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      {quote.location}
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-4 h-4" />
                      {new Date(quote.createdAt).toLocaleDateString()}
                    </div>
                  </div>

                  {quote.description && (
                    <div className="mt-3 p-2 bg-gray-50 rounded text-sm text-gray-700">
                      <p className="line-clamp-2">{quote.description}</p>
                    </div>
                  )}

                  <div className="mt-3 text-xs text-gray-500">
                    Click to view details and update status
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Detail Dialog */}
      <Dialog open={!!selectedQuote} onOpenChange={(open) => !open && setSelectedQuote(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Quote Request Details</DialogTitle>
            <DialogDescription>
              View and update the status of this quote request
            </DialogDescription>
          </DialogHeader>

          {selectedQuote && (
            <div className="space-y-6">
              {/* Customer Information */}
              <div>
                <h3 className="font-semibold mb-3">Customer Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Name</p>
                    <p className="font-medium">{selectedQuote.customerName}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Email</p>
                    <p className="font-medium">{selectedQuote.customerEmail}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Phone</p>
                    <p className="font-medium">{selectedQuote.customerPhone}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Submitted</p>
                    <p className="font-medium">{new Date(selectedQuote.createdAt).toLocaleString()}</p>
                  </div>
                </div>
              </div>

              {/* Property Information */}
              <div>
                <h3 className="font-semibold mb-3">Property Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Property Type</p>
                    <p className="font-medium">{getPropertyTypeLabel(selectedQuote.propertyType)}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Location</p>
                    <p className="font-medium">{selectedQuote.location}</p>
                  </div>
                  {selectedQuote.propertySize && (
                    <div>
                      <p className="text-gray-600">Property Size</p>
                      <p className="font-medium">{selectedQuote.propertySize} m²</p>
                    </div>
                  )}
                  <div>
                    <p className="text-gray-600">Service Type</p>
                    <p className="font-medium">{getServiceTypeLabel(selectedQuote.serviceType)}</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              {selectedQuote.description && (
                <div>
                  <h3 className="font-semibold mb-3">Customer Description</h3>
                  <p className="text-sm text-gray-700 p-3 bg-gray-50 rounded">
                    {selectedQuote.description}
                  </p>
                </div>
              )}

              {/* Status Update */}
              <div className="space-y-4 border-t pt-4">
                <h3 className="font-semibold">Update Status</h3>
                
                <div>
                  <label className="text-sm font-medium">Status</label>
                  <Select value={updateStatus} onValueChange={setUpdateStatus}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new">New</SelectItem>
                      <SelectItem value="contacted">Contacted</SelectItem>
                      <SelectItem value="quoted">Quoted</SelectItem>
                      <SelectItem value="closed">Closed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium">Internal Notes</label>
                  <Textarea
                    value={updateNotes}
                    onChange={(e) => setUpdateNotes(e.target.value)}
                    placeholder="Add notes about this quote request..."
                    rows={4}
                  />
                </div>

                <div className="flex gap-3 justify-end">
                  <Button variant="outline" onClick={() => setSelectedQuote(null)}>
                    Cancel
                  </Button>
                  <Button
                    onClick={handleUpdateStatus}
                    disabled={isUpdating}
                    className="bg-orange-500 hover:bg-orange-600"
                  >
                    {isUpdating ? "Updating..." : "Update Status"}
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
