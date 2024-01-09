import CourseTitle from "../components/studentDashboard/CourseTitle";
import Resource from "../components/studentDashboard/Resource";
import { useEffect, useState } from "react";
import { GET_ENROLLD_MODULE_API_REQUEST } from "../apiRequest/API";
import { useParams } from "react-router-dom";

const ModuleExplorePage = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      let result = await GET_ENROLLD_MODULE_API_REQUEST(id);
      setData(result[0]?.course);
    })();
  }, []);

  return (
    <div className="bg-[#f5f1eb] md:p-10 p-5 h-screen">
      <CourseTitle
          title={data.map((item)=>item.title)}
          image={data.map((item)=>item.thumbnail.map((url)=>url.url))}
      />
      <Resource />
    </div>
  );
};

export default ModuleExplorePage;
