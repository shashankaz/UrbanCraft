import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import projects from "../data/projects.json";
import { ThreeDots } from "react-loader-spinner";

const ProjectDetail = () => {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const projectData = projects.find((proj) => proj.slug === slug);
    if (projectData) {
      setProject(projectData);
    }
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [slug]);

  if (loading) {
    return (
      <div className="md:px-[80px] px-[20px] py-[50px] h-[60vh] flex items-center justify-center">
        <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="#333"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="md:px-[80px] px-[20px] py-[50px]">
      <div className="md:text-5xl text-4xl mb-[50px]">
        <h1 className="font-semibold">{project.title}</h1>
      </div>
      <hr />
      <div className="my-[50px] flex flex-col gap-8">
        <div>
          {loading ? (
            <ProjectPhotoSkeleton />
          ) : (
            <ProjectPhoto src={project.image} alt={project.title} />
          )}
        </div>
        <div>
          <p className="text-lg">{project.long_description}</p>
        </div>
      </div>
    </div>
  );
};

const ProjectPhoto = ({ src, alt }) => {
  return (
    <div className="h-[400px] w-full md:w-[600px] bg-[#c4c4c4]">
      <img className="w-full h-full object-cover" src={src} alt={alt} />
    </div>
  );
};

const ProjectPhotoSkeleton = () => {
  return (
    <div className="h-[400px] w-full md:w-[600px] bg-[#c4c4c4] animate-pulse"></div>
  );
};

export default ProjectDetail;
