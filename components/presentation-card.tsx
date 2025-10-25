'use client';

import { Calendar, Presentation } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import type { Presentation as PresentationType } from '@/lib/presentations';

interface PresentationCardProps {
  presentation: PresentationType;
}

export function PresentationCard({ presentation }: PresentationCardProps) {
  return (
    <Link href={`/${presentation.slug}`}>
      <Card className="h-full overflow-hidden transition-all hover:shadow-lg hover:scale-[1.02] p-0">
        {/* Presentation Icon Header */}
        <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-950 dark:to-red-950 flex items-center justify-center">
          <Presentation
            className="w-24 h-24 text-orange-600 dark:text-orange-400"
            strokeWidth={1.5}
          />
        </div>

        <CardHeader>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <Calendar className="w-4 h-4" />
            <time>{presentation.date}</time>
          </div>
          <CardTitle className="line-clamp-2 hover:text-primary transition-colors">
            {presentation.title}
          </CardTitle>
          <CardDescription className="line-clamp-3">
            {presentation.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="pb-6">
          <div className="flex flex-wrap gap-2">
            {presentation.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
