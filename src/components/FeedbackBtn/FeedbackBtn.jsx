import PropTypes from 'prop-types';
// import { Option, OptionList } from './FeedbackOptions.styled';

function FeedbackBtn({ options }) {
  return (
    <ul>
      {Object.keys(options).map(key => {
        return (
          <li key={key}>
            <button type="button">{options[key]}</button>
          </li>
        );
      })}
    </ul>
  );
}

FeedbackBtn.propTypes = {
  options: PropTypes.object.isRequired,
};
export { FeedbackBtn };
