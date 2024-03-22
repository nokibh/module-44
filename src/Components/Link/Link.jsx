import PropTypes from 'prop-types';
const Link = ({ route }) => {
  return (
    <li className="mr-10 hover:bg-green-500">
      <a href={route.name}>{route.name}</a>
    </li>
  );
};
Link.propTypes = {
  route: PropTypes.object,
};
export default Link;
