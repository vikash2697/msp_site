
import { useState } from 'react';
import { format } from 'date-fns';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { Tables } from '@/integrations/supabase/types';
import { Card, CardContent } from '@/components/ui/card';

type HireRequest = Tables<'hire_requests'>;

interface MobileRequestCardProps {
  request: HireRequest;
  onView: (request: HireRequest) => void;
}

const MobileRequestCard = ({ request, onView }: MobileRequestCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const formatDate = (dateString: string) => {
    return format(new Date(dateString), 'MMM dd, yyyy HH:mm');
  };

  return (
    <Card className="mb-4">
      <CardContent className="pt-4">
        <div 
          className="flex items-center justify-between cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div>
            <h3 className="font-medium">{request.full_name}</h3>
            <p className="text-sm text-gray-500">{formatDate(request.created_at)}</p>
          </div>
          <ChevronDown className={`h-5 w-5 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
        </div>
        
        {isExpanded && (
          <div className="mt-4 space-y-2 border-t pt-4">
            <div>
              <span className="text-sm font-medium text-gray-500">Email:</span>
              <p>{request.email}</p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-500">Subject/Company:</span>
              <p>{request.company || '-'}</p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-500">Message:</span>
              <p className="text-sm whitespace-pre-wrap">{request.description}</p>
            </div>
            <button 
              className="w-full mt-3 px-4 py-2 bg-msp-dark-brown text-white rounded-md flex items-center justify-center"
              onClick={() => onView(request)}
            >
              <span>View Details</span>
              <ChevronRight className="ml-1 h-4 w-4" />
            </button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default MobileRequestCard;
