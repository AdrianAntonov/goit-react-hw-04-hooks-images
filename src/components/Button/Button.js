import PropTypes from 'prop-types';

function Button({ data }) {
  return (
    <button className="Button" onClick={data}>
      Load More
    </button>
  );
}

Button.propTypes = {
  data: PropTypes.func.isRequired,
};

export default Button;
