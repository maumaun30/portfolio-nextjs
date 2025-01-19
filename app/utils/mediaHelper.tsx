export interface MediaResponse {
  error?: string; // Handle error messages if returned by the API
  path?: string;
}

export const getMedia = async (
  mediaId: string
): Promise<MediaResponse | null> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/media/${mediaId}`
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch media with ID ${mediaId}: ${response.statusText}`
      );
    }

    const data: MediaResponse = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching media:", (error as Error).message);
    return null; // Return null or handle errors as needed
  }
};
