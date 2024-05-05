import { Outlet } from "react-router-dom";
import { H1, Section } from "../../components/Tags";

const Articles = () => {
  return (
    <Section>
      <H1 className={"mb-4"}>Articles</H1>
      <div>
        <Outlet />
      </div>
    </Section>
  );
};

export default Articles;
