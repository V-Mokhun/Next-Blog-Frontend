import { Button, Title } from "@/shared/ui";
import { Text } from "@/shared/ui/text";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="white mx-4 my-3">
      <Button color="primary" variant="transparent">
        Write on Medium
      </Button>
      <Title size="large" as="h3" className="text-3xl">
        Title
      </Title>
      <Text color="secondary" weight="medium" size="medium">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque porro
        optio nam odio eius omnis modi veritatis reprehenderit iste impedit
        officiis asperiores adipisci harum cum obcaecati dolorum quod, aperiam
        exercitationem autem inventore atque pariatur accusantium quae. Quidem
        corporis atque deserunt?
      </Text>
    </div>
  );
};

export default Home;
