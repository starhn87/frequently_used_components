import React, { useState } from "react";
import AutoComplete from "../component/AutoComplete";
import Wrapper from "../component/common/Wrapper";
import PropType from "prop-types";

function AutoCompleteDemo({ options }) {
  const [suggestions, setSuggestions] = useState([]);
  const [value, setValue] = useState("");

  const onChange = (event) => {
    const {
      target: { value },
    } = event;

    const newList = options.filter((word) =>
      word.label.toLowerCase().includes(value.toLowerCase())
    );

    setSuggestions(newList);
    setValue(value);
  };

  const onResetValue = () => {
    setValue("");
    setSuggestions([]);
  };

  const onSuggestionClick = (word) => {
    setValue(word);
    setSuggestions([]);
  };

  const onOutOfSuggestionsClick = (event, ref) => {
    if (event.target === ref) {
      return;
    }

    setSuggestions([]);
  };

  return (
    <Wrapper title={"AutoComplete"}>
      <AutoComplete
        value={value}
        onChange={onChange}
        suggestions={suggestions}
        onSuggestionClick={onSuggestionClick}
        onResetValue={onResetValue}
        onOutOfSuggestionsClick={onOutOfSuggestionsClick}
      />
    </Wrapper>
  );
}

AutoCompleteDemo.propTypes = {
  options: PropType.arrayOf(
    PropType.shape({
      label: PropType.string,
      year: PropType.number,
    })
  ).isRequired,
};

export default AutoCompleteDemo;
