import PropTypes from "prop-types";

const Skill = ({ icon, name }) => {
  return (
    <div className=" flex items-center gap-2 text-sm md:text-base font-medium px-2 py-2">
      {icon}
      <span>{name}</span>
    </div>
  );
};

export default Skill;

Skill.propTypes = {
  icon: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
};
