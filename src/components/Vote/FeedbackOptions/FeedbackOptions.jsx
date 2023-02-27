import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, leaveVote }) => {
  return (
    <>
      {options.map(option => (
        <button key={option} onClick={() => leaveVote(option)}>
          {option}
        </button>
      ))}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  leaveVote: PropTypes.func.isRequired,
};

export default FeedbackOptions;
