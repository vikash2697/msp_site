
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { supabase } from '@/integrations/supabase/client';
import { Loader2, LogOut, ChevronDown, ChevronUp, Eye } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import { Tables } from '@/integrations/supabase/types';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import MobileRequestCard from './AdminMobile';
import { useMediaQuery } from '@/hooks/use-mobile';

type HireRequest = Tables<'hire_requests'>;

const Admin = () => {
  const [requests, setRequests] = useState<HireRequest[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [selectedRequest, setSelectedRequest] = useState<HireRequest | null>(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [session, setSession] = useState<any>(null);
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    // Check if user is authenticated
    const checkAuth = async () => {
      const { data } = await supabase.auth.getSession();
      
      if (!data.session) {
        navigate('/auth');
        return;
      }
      
      setSession(data.session);
      fetchRequests();
    };

    // Setup auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
        if (!session) {
          navigate('/auth');
        }
      }
    );

    checkAuth();

    return () => {
      subscription.unsubscribe();
    };
  }, [navigate]);

  const fetchRequests = async () => {
    setIsLoading(true);
    try {
      // Fetch data from hire_requests table
      const { data, error } = await supabase
        .from('hire_requests')
        .select('*')
        .order('created_at', { ascending: sortOrder === 'asc' });

      if (error) throw error;
      
      setRequests(data || []);
    } catch (error: any) {
      toast({
        title: "Error fetching requests",
        description: error.message || "Failed to load hire requests",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const toggleSortOrder = () => {
    const newOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newOrder);
    // Re-fetch with new sort order
    setIsLoading(true);
    supabase
      .from('hire_requests')
      .select('*')
      .order('created_at', { ascending: newOrder === 'asc' })
      .then(({ data, error }) => {
        setIsLoading(false);
        if (error) {
          toast({
            title: "Error fetching requests",
            description: error.message,
            variant: "destructive"
          });
          return;
        }
        setRequests(data || []);
      });
  };

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      toast({
        title: "Logged Out",
        description: "You have been successfully logged out."
      });
      navigate('/auth');
    } catch (error: any) {
      toast({
        title: "Logout Failed",
        description: error.message || "Something went wrong",
        variant: "destructive"
      });
    }
  };

  const handleViewRequest = (request: HireRequest) => {
    setSelectedRequest(request);
    setIsViewModalOpen(true);
  };

  const formatDate = (dateString: string) => {
    return format(new Date(dateString), 'MMM dd, yyyy HH:mm');
  };

  return (
    <div className="min-h-screen bg-msp-white">
      <header className="bg-msp-dark-brown text-white py-4 px-6 flex justify-between items-center shadow-md">
        <h1 className="text-xl font-semibold">Admin Dashboard</h1>
        <div className="flex items-center">
          {session?.user?.email && (
            <span className="mr-4 hidden md:inline-block">{session.user.email}</span>
          )}
          <Button 
            variant="outline" 
            className="text-white border-white hover:bg-white/10"
            onClick={handleLogout}
          >
            <LogOut className="h-4 w-4 mr-2" />
            <span>Logout</span>
          </Button>
        </div>
      </header>

      <main className="container max-w-7xl mx-auto py-8 px-4 md:px-6">
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Hire Requests</CardTitle>
              <Button
                variant="outline"
                className="flex items-center"
                onClick={toggleSortOrder}
              >
                <span className="mr-2">Sort by Date</span>
                {sortOrder === 'asc' ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="flex justify-center items-center h-64">
                <Loader2 className="h-8 w-8 animate-spin text-msp-dark-brown" />
              </div>
            ) : requests.length > 0 ? (
              <>
                {isMobile ? (
                  // Mobile view
                  <div>
                    {requests.map((request) => (
                      <MobileRequestCard 
                        key={request.id} 
                        request={request} 
                        onView={handleViewRequest} 
                      />
                    ))}
                  </div>
                ) : (
                  // Desktop view
                  <div className="rounded-md border overflow-x-auto">
                    <Table>
                      <TableCaption>List of all hire requests submitted through the website.</TableCaption>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Email</TableHead>
                          <TableHead>Subject/Company</TableHead>
                          <TableHead>Message</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {requests.map((request) => (
                          <TableRow key={request.id}>
                            <TableCell className="font-medium">{request.full_name}</TableCell>
                            <TableCell>{request.email}</TableCell>
                            <TableCell>{request.company || '-'}</TableCell>
                            <TableCell>
                              <div className="max-w-xs overflow-hidden text-ellipsis whitespace-nowrap">
                                {request.description}
                              </div>
                            </TableCell>
                            <TableCell>{formatDate(request.created_at)}</TableCell>
                            <TableCell className="text-right">
                              <Button 
                                size="sm" 
                                variant="outline"
                                className="text-msp-dark-brown"
                                onClick={() => handleViewRequest(request)}
                              >
                                <Eye className="h-4 w-4 mr-1" />
                                <span>View</span>
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500">No requests found.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </main>

      {/* View Request Dialog */}
      <Dialog open={isViewModalOpen} onOpenChange={setIsViewModalOpen}>
        <DialogContent className="max-w-xl">
          <DialogHeader>
            <DialogTitle>Request Details</DialogTitle>
            <DialogDescription>
              Submitted on {selectedRequest && formatDate(selectedRequest.created_at)}
            </DialogDescription>
          </DialogHeader>
          {selectedRequest && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Name</h3>
                  <p className="mt-1">{selectedRequest.full_name}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Email</h3>
                  <p className="mt-1">{selectedRequest.email}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Subject/Company</h3>
                  <p className="mt-1">{selectedRequest.company || '-'}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Budget</h3>
                  <p className="mt-1">{selectedRequest.budget || 'Not specified'}</p>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Message</h3>
                <p className="mt-1 whitespace-pre-wrap">{selectedRequest.description}</p>
              </div>
            </div>
          )}
          <div className="flex justify-end">
            <DialogClose asChild>
              <Button variant="outline">Close</Button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Admin;
