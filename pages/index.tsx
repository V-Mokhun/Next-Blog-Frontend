import type { NextPage } from "next";
import { Button } from "src/shared/ui";

const Home: NextPage = () => {
  return (
    <div className="white mx-4 my-3">
      <Button color="primary" variant="outline">
        Write on Medium
      </Button>
    </div>
  );
};

export default Home;
