import { PROJECTS } from "../content/projects";

const Projects = () => {
  return (
    <div className="bg-black min-h-screen w-full custom-padding text-white">
      <h1 className="text-4xl md:text-6xl font-medium text-gray-300">
        Projects
      </h1>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl className="grid max-w-xl grid-cols-1 gap-x-12 gap-y-20 lg:max-w-none lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <div key={project.name} className="flex flex-col">
              <dt>
                <img
                  src={project.image}
                  className="w-auto h-auto rounded-3xl border-b-8 border-gray-300 border-r-rose-500 border-b-red-500"
                  alt=""
                />
                <div className="mt-12 text-xl font-semibold leading-7">
                  {project.name}
                </div>
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-xl leading-7 text-gray-400">
                <p>{project.description}</p>
                <p className="mt-2">
                  <a
                    href={project.link}
                    className="text-lg font-semibold leading-6 text-gray-300"
                  >
                    {project.linkText} <span aria-hidden="true">→</span>
                  </a>
                </p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default Projects;
