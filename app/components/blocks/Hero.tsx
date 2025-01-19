"use client";

import { useEffect, useState } from "react";
import { getMedia } from "../../utils/mediaHelper";
import { generateDynamicStyles } from "../../utils/styleHelper";

interface HeroProps {
  blockData: {
    [key: string]: any;
  };
}

const Hero = ({ blockData }: HeroProps) => {
  const [backgroundImage, setBackgroundImage] = useState<string | undefined>(
    blockData.background_image
  );

  useEffect(() => {
    const fetchMedia = async () => {
      if (blockData.background_image) {
        try {
          const media = await getMedia(blockData.background_image); // Fetch the media
          if (media?.path) {
            setBackgroundImage(media.path); // Update the state with the retrieved path
          } else {
            console.error(
              `Failed to load media for ID: ${blockData.background_image}`
            );
          }
        } catch (error) {
          console.error("Error fetching media:", error);
        }
      }
    };

    fetchMedia();
  }, [blockData.background_image]);

  const styles = generateDynamicStyles({
    ...blockData,
    background_image: backgroundImage, // Override with dynamically loaded image
  });

  return (
    <section
      id={blockData.custom_id}
      className={`relative bg-cover bg-center ${blockData.css_classes || ""}`}
      style={styles}
    >
      <div
        className={`${blockData.container_size} h-screen flex items-center justify-center flex-col`}
      >
        {blockData.heading && (
          <h1
            className="text-8xl font-light text-white-800"
            dangerouslySetInnerHTML={{ __html: blockData.heading }}
          />
        )}

        {blockData.content && (
          <div
            className="mt-4 font-normal text-white-600 text-2xl"
            dangerouslySetInnerHTML={{ __html: blockData.content }}
          />
        )}
      </div>
    </section>
  );
};

export default Hero;
