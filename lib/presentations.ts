export interface Presentation {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  thumbnail?: string;
}

export const presentations: Presentation[] = [
  {
    slug: 'manual-to-velocity-the-spec-driven-way',
    title: 'Manual to Velocity: The Spec-Driven Way',
    description:
      'Learn how to accelerate development velocity using spec-driven development with Orval and OpenAPI.',
    date: '2024',
    tags: ['OpenAPI', 'TypeScript', 'Developer Experience', 'API'],
  },
  // Add more presentations here as you create them
];

export function getPresentation(slug: string): Presentation | undefined {
  return presentations.find((p) => p.slug === slug);
}

export function getAllPresentations(): Presentation[] {
  return presentations;
}
