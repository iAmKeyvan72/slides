import { notFound } from 'next/navigation';
import { getPresentation, getAllPresentations } from '@/lib/presentations';
import { PresentationRedirect } from '@/components/presentation-redirect';

export async function generateStaticParams() {
  const presentations = getAllPresentations();
  return presentations.map((presentation) => ({
    slug: presentation.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const presentation = getPresentation(params.slug);

  if (!presentation) {
    return {
      title: 'Presentation Not Found',
    };
  }

  return {
    title: `${presentation.title} - Slides by Keyvan Mahmoudi`,
    description: presentation.description,
  };
}

export default function PresentationPage({
  params,
}: {
  params: { slug: string };
}) {
  const presentation = getPresentation(params.slug);

  if (!presentation) {
    notFound();
  }

  return <PresentationRedirect slug={presentation.slug} />;
}
