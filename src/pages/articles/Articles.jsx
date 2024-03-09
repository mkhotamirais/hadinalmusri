import { Outlet } from "react-router-dom";
import { H1 } from "../../components/Tags";

const Articles = () => {
  return (
    <section>
      <H1 className={"mb-4"}>Articles</H1>
      <div>
        <Outlet />
      </div>
    </section>
  );
};

export default Articles;
