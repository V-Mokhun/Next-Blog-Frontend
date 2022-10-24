import { Header } from "@/components/header";
import { Button, Icon, Text, Title } from "@/shared/ui";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="">
      <Header />
      <Button color="primary" variant="transparent">
        Write on Medium
      </Button>
      <Title size="base" as="h3" className="text-3xl mb-5">
        Title
      </Title>
      <Text color="secondary" weight="medium" size="medium">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque porro
        optio nam odio eius omnis modi veritatis reprehenderit iste impedit
        officiis asperiores adipisci harum cum obcaecati dolorum quod, aperiam
        exercitationem autem inventore atque pariatur accusantium quae. Quidem
        corporis atque deserunt?
      </Text>
      <Icon name="close" className="fill-white" />
    </div>
  );
};

export default Home;
