import { userApi } from "@/shared/api";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Google: NextPage = () => {
  const [error, setError] = useState("");
  const router = useRouter();
  const { query } = router; // query.access_token

  useEffect(() => {
    const signIn = async () => {
      if (query.access_token) {
        try {
          const user = await userApi.loginViaSocialMedia(
            query.access_token as string | undefined,
            "google"
          );
        } catch (error) {
          if (error instanceof Error) setError(error.message);
        }
      }
    };

    signIn();
  }, [query]);

  return <p>Logging in with Google...</p>;
};

export default Google;
