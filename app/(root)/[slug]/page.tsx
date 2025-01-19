"use client";

import { useEffect, useState } from "react";
import BlockRenderer from "../../components/blocks/BlockRenderer";
import Loading from "../../components/Loading";

interface Block {
  type: string;
  data: Record<string, any>;
}

interface PageData {
  id: number;
  title: string;
  slug: string;
  layout: string;
  blocks: Block[];
}

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

const Page = ({ params }: PageProps) => {
  const [slug, setSlug] = useState<string | null>(null);

  useEffect(() => {
    const fetchParams = async () => {
      const resolvedParams = await params;
      setSlug(resolvedParams.slug);
    };

    fetchParams();
  }, [params]);

  const [pageData, setPageData] = useState<PageData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (slug) {
      const fetchPageData = async () => {
        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/page/${slug}`
          );
          if (!response.ok) {
            throw new Error("Failed to fetch page data");
            // set redirect to 404 page
            // window.location.href = "/404";
          }
          const data = await response.json();
          setPageData(data.page);
        } catch (err) {
          setError(
            err instanceof Error ? err.message : "An unknown error occurred"
          );
        } finally {
          setLoading(false);
        }
      };

      fetchPageData();
    }
  }, [slug]);

  if (loading) return <Loading />;
  if (error) return <div>Error: {error}</div>;
  if (!pageData) return <div>No page data found.</div>;

  return (
    <>
      <main className="content">
        {pageData.blocks.map((block, index) => (
          <BlockRenderer key={index} block={block} />
        ))}
      </main>
    </>
  );
};

export default Page;
