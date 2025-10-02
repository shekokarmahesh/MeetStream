import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Calendar, Clock, Users, FileText } from 'lucide-react';

interface EventCardProps {
  event: {
    title: string;
    start: string;
    end: string;
    duration: string;
    attendees: string[];
    description?: string;
  };
}

export function EventCard({ event }: EventCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const isUpcoming = new Date(event.start) > new Date();

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm border-0 hover:scale-[1.02]">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg leading-tight pr-4">{event.title}</CardTitle>
          <Badge 
            variant={isUpcoming ? "default" : "secondary"} 
            className="text-xs shrink-0"
          >
            {isUpcoming ? "Upcoming" : "Past"}
          </Badge>
        </div>
        <CardDescription className="flex items-center space-x-2 text-sm">
          <Calendar className="h-4 w-4" />
          <span>{formatDate(event.start)}</span>
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{event.duration}</span>
          </div>
          
          {event.attendees.length > 0 && (
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Users className="h-4 w-4" />
              <span>{event.attendees.length} attendees</span>
            </div>
          )}
        </div>
        
        {event.description && (
          <>
            <Separator />
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm font-medium">
                <FileText className="h-4 w-4" />
                <span>Description</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {event.description}
              </p>
            </div>
          </>
        )}
        
        <div className="flex items-center justify-between pt-2 text-xs text-muted-foreground">
          <span>
            {formatTime(event.start)} - {formatTime(event.end)}
          </span>
          <div className="flex items-center space-x-1">
            <div className={`w-2 h-2 rounded-full ${isUpcoming ? 'bg-green-500' : 'bg-gray-400'}`} />
            <span>{isUpcoming ? 'Active' : 'Completed'}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}



