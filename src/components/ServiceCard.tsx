import Link from "next/link";
import Image from "next/image";

type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
  external?: boolean;
  image?: string;
};

export default function ServiceCard({ title, description, href, external, image }: ServiceCardProps) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex flex-col overflow-hidden rounded-lg border border-gray-200 hover:border-gray-400 hover:shadow-sm transition-all"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="mb-2 font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </Link>
  );
}
